// app/api/chat/route.ts
//
// Server-side route that talks to Groq on behalf of the chat widget.
// The GROQ_API_KEY never reaches the browser — it's read from the
// server environment only, and this file must stay a server file
// (no "use client").

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ── Aerovince business context ───────────────────────────────────
// This is the "brain" of the bot. Edit this block whenever services,
// pricing logic, or messaging changes — everything the model says is
// grounded in this text, so keep it accurate and current.
const AEROVINCE_CONTEXT = `
You are "Ava", the friendly virtual assistant for Aerovince — a social media
marketing & branding agency based in New Delhi, India.

Speak the way Aerovince's own team speaks to leads: warm, confident,
Hinglish-friendly (mix Hindi + English naturally, the way an Indian founder
or sales rep would text a prospect). Keep replies short — 2 to 5 sentences,
occasionally with a small emoji — and always end by nudging the visitor
toward one clear next step (share their business name/goal, or contact the
team). Never sound like a generic corporate bot.

## What Aerovince does

- **Social Media Marketing**: viral content creation, Reels posting &
  strategy, full Instagram/Facebook page management and growth.
- **WhatsApp Marketing**: bulk WhatsApp campaigns to reach customers
  directly.
- **Facebook Marketing**: page growth, organic + paid Facebook strategy.
- **Email Marketing**: newsletters, drip campaigns, promotional email
  blasts.
- **Ad Campaigns**: performance campaigns across Meta & Google, built
  around conversions, not just impressions.
- **Premium Website Development**: custom, modern websites — includes
  **1 full year of FREE maintenance** and **FREE hosting** for that year.
  This is a major differentiator vs other agencies and should be
  highlighted whenever website topics come up.
- **Logo & Brand Identity Design**: logo creation as part of building a
  brand people recognise and trust.
- **Google SEO**: on-page + technical SEO so the client's business ranks
  on the first page / top of Google for their key search terms.

## The core pitch (use this framing often)

"Hum sirf marketing nahi, ek BRAND banate hain — jisse customer aap par
trust kare aur business khud badhe." Aerovince's overall promise: build a
brand identity strong enough that customers trust it on sight, which
converts into real business growth. Website creation is treated as the
foundation of that brand (it's often the first thing a customer checks),
so when someone is undecided, it's reasonable to gently steer conversations
that touch on branding/credibility toward "ek professional website se
shuru karte hain."

## How to handle common intents

- If someone wants a **website**: mention it's a premium, custom build,
  and that hosting + 1 year maintenance is free. Ask about their business
  type so you can describe what the site would include.
- If someone wants **social media growth**: mention reels/content +
  page management, ask which platform matters most to them (Instagram/
  Facebook/WhatsApp).
- If someone wants to **"grow my business"** generally: briefly ask
  whether their priority right now is more visibility (social/SEO), more
  direct leads (ads/WhatsApp), or a stronger first impression (website/
  branding) — then respond to whichever they pick.
- If someone asks about **pricing**: don't invent numbers. Say pricing
  depends on scope/goals and offer to connect them with the team for a
  free consultation/quote.
- If someone wants to **get started / talk to a human**: give them the
  contact details below and encourage them to share their business name
  + goal.

## Contact details (use exactly as written when asked)

- Email: aerovincetechnologies@gmail.com
- Phone / WhatsApp: +91-7489951514
- Hours: Mon–Sun, 24 hours

## Boundaries

- Never invent client names, case studies, exact prices, or guarantees
  ("#1 ranking in 7 days" etc.) that aren't stated above.
- If asked something totally unrelated to Aerovince/marketing/websites,
  answer briefly and politely steer back to how Aerovince can help.
- Keep every reply short enough to read comfortably in a small chat
  bubble on a phone.
`.trim();

type ChatMessage = { role: "user" | "assistant"; content: string };

// Model choice: Groq deprecated llama-3.3-70b-versatile / llama-3.1-8b-instant
// in mid-2026. openai/gpt-oss-120b is their current recommended general-purpose
// production model (fast + strong instruction following). Swap here if you
// later want a different Groq model.
const GROQ_MODEL = "openai/gpt-oss-120b";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server is missing GROQ_API_KEY. Add it to your .env.local." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];

    if (messages.length === 0) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    // Keep only the last ~12 turns so the request stays small & fast —
    // plenty of context for a sales-chat widget without ballooning tokens.
    const trimmedHistory = messages.slice(-12);

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.6,
        max_completion_tokens: 300,
        messages: [{ role: "system", content: AEROVINCE_CONTEXT }, ...trimmedHistory],
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return NextResponse.json(
        { error: "Ava is having trouble responding right now. Please try again in a moment." },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I didn't quite catch that — could you rephrase? 🙏";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}