// lib/servicesData.ts

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSection {
  type: "default" | "highlight" | "grid" | "process";
  subtitle?: string;
  title?: string;
  content: string;
  list?: string[];
  accent?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  iconName: string; // ← string key, not LucideIcon
  accent: string;
  sections: ServiceSection[];
  faqs?: ServiceFAQ[];
}

const SERVICES_DATA: ServiceData[] = [
  {
    slug: "seo",
    title: "SEO",
    tagline: "Rank where buyers are searching.",
    heroDescription:
      "Technical fixes, content strategy, and link building that compounds month over month. We don't chase algorithms — we build authority that lasts.",
    iconName: "Search",
    accent: "from-blue-500 to-cyan-400",
    sections: [
      {
        type: "default",
        subtitle: "What We Do",
        title: "SEO that actually moves revenue",
        content:
          "Most SEO agencies obsess over rankings. We obsess over what rankings produce — qualified traffic that converts. Our approach combines deep technical audits, strategic content creation, and authoritative link building into one compounding growth engine.",
        list: [
          "Full technical site audits & fixes",
          "Keyword strategy tied to buyer intent",
          "Content briefs & long-form creation",
          "High-authority link acquisition",
          "Core Web Vitals & page speed optimization",
          "Monthly performance reporting",
        ],
        accent: "from-blue-500 to-cyan-400",
      },
      {
        type: "highlight",
        subtitle: "Our Edge",
        title: "We write for humans. We optimize for engines.",
        content:
          "The brands that win in search are the ones that answer questions better than anyone else. We build content ecosystems that establish topical authority — not just individual pages chasing individual keywords.",
        accent: "from-blue-500 to-cyan-400",
      },
      {
        type: "grid",
        subtitle: "Deliverables",
        title: "What you get every month",
        content:
          "A full SEO retainer includes everything needed to grow your organic presence consistently.",
        list: [
          "Technical audit & ongoing fixes",
          "Content calendar & production",
          "Link building outreach",
          "Rank tracking & analytics",
          "Competitor gap analysis",
          "Quarterly strategy reviews",
        ],
        accent: "from-blue-500 to-cyan-400",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients start seeing measurable movement in 3–4 months. Significant ranking gains and traffic growth typically appear by month 6. SEO is a compounding investment — the longer you run it, the higher the return.",
      },
      {
        question: "Do you handle both on-page and off-page SEO?",
        answer:
          "Yes — our retainers cover technical on-page fixes, content creation, and off-page link acquisition. Everything under one roof means no coordination gaps.",
      },
      {
        question: "Will you write the content or just the briefs?",
        answer:
          "We handle end-to-end content production: keyword research, briefs, writing, editing, and publishing. You can be as involved or hands-off as you like.",
      },
      {
        question: "How do you report on progress?",
        answer:
          "You get a live dashboard plus a monthly written report covering rankings, traffic, conversions, and next-month priorities. No fluff — just numbers and actions.",
      },
    ],
  },
  {
    slug: "paid-ads",
    title: "Paid Ads",
    tagline: "Revenue per click — not just clicks.",
    heroDescription:
      "Google, Meta, and LinkedIn campaigns built around what actually matters: cost per acquisition, return on ad spend, and revenue growth — not vanity metrics.",
    iconName: "Megaphone",
    accent: "from-amber-500 to-orange-400",
    sections: [
      {
        type: "default",
        subtitle: "What We Do",
        title: "Paid media that pays for itself",
        content:
          "We build and manage full-funnel paid campaigns across Google Search, Meta (Facebook & Instagram), and LinkedIn. Every decision — audience, creative, bid strategy, landing page — is optimized for your cost per acquisition, not just impressions.",
        list: [
          "Google Search & Performance Max",
          "Meta (Facebook & Instagram) campaigns",
          "LinkedIn B2B lead generation",
          "Retargeting & audience nurturing",
          "Landing page CRO",
          "Weekly performance optimization",
        ],
        accent: "from-amber-500 to-orange-400",
      },
      {
        type: "highlight",
        subtitle: "Our Approach",
        title: "We follow the money, not the metrics.",
        content:
          "Clicks and impressions are easy to inflate. We tie every campaign to downstream revenue — tracking leads through to closed deals wherever possible, so you know exactly what your ad spend is producing.",
        accent: "from-amber-500 to-orange-400",
      },
      {
        type: "grid",
        subtitle: "What's Included",
        title: "Full campaign management",
        content:
          "From creative to conversion, we handle the full paid media workflow.",
        list: [
          "Account setup & pixel configuration",
          "Audience research & segmentation",
          "Ad creative & copywriting",
          "A/B testing framework",
          "Bid strategy & budget allocation",
          "Weekly reporting & calls",
        ],
        accent: "from-amber-500 to-orange-400",
      },
    ],
    faqs: [
      {
        question: "What ad platforms do you manage?",
        answer:
          "Google (Search, Display, YouTube, Performance Max), Meta (Facebook & Instagram), and LinkedIn. We recommend the right mix based on your audience and goals.",
      },
      {
        question: "What's the minimum ad budget you work with?",
        answer:
          "We typically work with clients spending ₹50,000/month or more in media budget. Below that, the margin for optimization is too thin to drive meaningful results.",
      },
      {
        question: "Do you create the ad creatives?",
        answer:
          "Yes — copywriting and static creative are included. For video ads, we can work with your footage or refer you to our video production team.",
      },
      {
        question: "How quickly can campaigns go live?",
        answer:
          "Typically 7–10 business days from kickoff: account audit, strategy, creative production, then launch. We don't rush the setup — getting the foundation right saves money later.",
      },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "Identity that earns instant trust.",
    heroDescription:
      "Positioning, visual identity, and messaging that make your business recognizable, credible, and easy to choose — even before a conversation happens.",
    iconName: "Palette",
    accent: "from-violet-500 to-purple-400",
    sections: [
      {
        type: "default",
        subtitle: "What We Do",
        title: "Brand strategy + visual identity",
        content:
          "We build brands from the inside out — starting with positioning and messaging, then translating that into a visual identity that works across every touchpoint. The result is a brand that feels coherent and premium, whether someone finds you on Google, Instagram, or a referral.",
        list: [
          "Brand positioning & differentiation",
          "Messaging architecture & tone of voice",
          "Logo & visual identity system",
          "Color palette, typography & brand guidelines",
          "Business cards, decks & collateral",
          "Brand application across digital assets",
        ],
        accent: "from-violet-500 to-purple-400",
      },
      {
        type: "highlight",
        subtitle: "Why It Matters",
        title: "Brand is what people say when you're not in the room.",
        content:
          "A strong brand doesn't just look good — it makes every other marketing channel work harder. It's why some businesses get referrals effortlessly while others struggle to be remembered. We design for both.",
        accent: "from-violet-500 to-purple-400",
      },
      {
        type: "grid",
        subtitle: "Deliverables",
        title: "Everything in the brand package",
        content:
          "A complete brand identity system, ready to deploy across all channels.",
        list: [
          "Brand strategy document",
          "Logo suite (primary, secondary, icon)",
          "Full brand guidelines PDF",
          "Social media kit",
          "Pitch deck template",
          "Email signature & letterhead",
        ],
        accent: "from-violet-500 to-purple-400",
      },
    ],
    faqs: [
      {
        question: "Do you work with early-stage startups?",
        answer:
          "Yes — in fact, getting branding right early saves you from expensive repositioning later. We have packages suited to pre-revenue startups and growing businesses alike.",
      },
      {
        question: "Can you rebrand an existing business?",
        answer:
          "Absolutely. Rebrands are a significant part of our work. We audit your current brand, identify what's working and what isn't, and build a new identity that retains equity where possible.",
      },
      {
        question: "How long does a branding project take?",
        answer:
          "A full brand identity project runs 4–6 weeks from kickoff to final delivery, including two rounds of revisions.",
      },
      {
        question: "What files will I receive?",
        answer:
          "All logos in SVG, PNG, and PDF formats. Brand guidelines as a PDF. All source files (Figma) handed over at project close.",
      },
    ],
  },
  {
    slug: "websites",
    title: "Websites",
    tagline: "Built to convert, not just impress.",
    heroDescription:
      "Fast, conversion-focused websites that turn visitors into booked calls, leads, and sales — designed and developed from scratch with performance baked in.",
    iconName: "Globe",
    accent: "from-emerald-500 to-teal-400",
    sections: [
      {
        type: "default",
        subtitle: "What We Do",
        title: "Websites that work as hard as you do",
        content:
          "We design and build marketing websites, landing pages, and web apps in Next.js — optimized for speed, SEO, and conversion. Every page is built with a clear goal: get the visitor to take the next step.",
        list: [
          "Marketing websites & landing pages",
          "Next.js / React development",
          "Mobile-first responsive design",
          "Core Web Vitals optimization",
          "CMS integration (Sanity, Contentful)",
          "Analytics & conversion tracking setup",
        ],
        accent: "from-emerald-500 to-teal-400",
      },
      {
        type: "highlight",
        subtitle: "Our Stack",
        title: "Fast by default. Not an afterthought.",
        content:
          "We build on Next.js with Tailwind CSS — a stack that gives you near-perfect Lighthouse scores out of the box. Slow websites lose leads. Ours don't.",
        accent: "from-emerald-500 to-teal-400",
      },
      {
        type: "grid",
        subtitle: "Deliverables",
        title: "What the project includes",
        content:
          "A complete website build, handed over with everything you need to own it.",
        list: [
          "UX wireframes & design mockups",
          "Fully coded, production-ready site",
          "CMS setup & content entry",
          "SEO foundation (meta, schema, sitemap)",
          "Hosting setup & deployment",
          "30-day post-launch support",
        ],
        accent: "from-emerald-500 to-teal-400",
      },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "A standard marketing website takes 3–5 weeks. More complex builds (e-commerce, web apps, custom CMS) run 6–10 weeks depending on scope.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer:
          "Yes — we integrate a headless CMS so you can update text, images, and blog posts without touching code. We provide a short walkthrough video on handover.",
      },
      {
        question: "Do you do design or just development?",
        answer:
          "Both. We handle the full project: strategy, UX wireframes, visual design, and development. One team, one handover.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We audit your current site for conversion issues and performance gaps, then redesign and rebuild it from scratch — preserving SEO equity where possible.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Your pipeline, running itself.",
    heroDescription:
      "Lead nurturing, follow-ups, reporting, and internal workflows that run automatically — so your team focuses on closing, not chasing.",
    iconName: "Bot",
    accent: "from-cyan-500 to-blue-400",
    sections: [
      {
        type: "default",
        subtitle: "What We Do",
        title: "Automate the work that shouldn't need a human",
        content:
          "We identify the repetitive, high-volume tasks in your sales and marketing workflow — lead follow-up, data entry, reporting, qualification — and automate them using AI tools and workflow platforms like Make, n8n, and custom GPT integrations.",
        list: [
          "Lead nurturing & follow-up sequences",
          "CRM data enrichment & hygiene",
          "AI-powered lead qualification",
          "Automated reporting dashboards",
          "Internal workflow automation (Make / n8n)",
          "Custom GPT integrations",
        ],
        accent: "from-cyan-500 to-blue-400",
      },
      {
        type: "highlight",
        subtitle: "The Result",
        title: "Nothing falls through the cracks.",
        content:
          "The average sales team follows up with a lead 1.3 times. Automated sequences follow up 7+ times across multiple channels — without anyone having to remember to do it. That's revenue that was already yours.",
        accent: "from-cyan-500 to-blue-400",
      },
      {
        type: "grid",
        subtitle: "Common Use Cases",
        title: "What we automate most often",
        content:
          "Every business is different, but these are the automations that move the needle fastest.",
        list: [
          "Inbound lead → CRM → follow-up email",
          "Form fill → WhatsApp notification",
          "Weekly sales report generation",
          "Lead scoring & routing",
          "Review request sequences",
          "Invoice & onboarding workflows",
        ],
        accent: "from-cyan-500 to-blue-400",
      },
    ],
    faqs: [
      {
        question: "What tools do you use for automation?",
        answer:
          "Make (formerly Integromat), n8n, Zapier, and custom API integrations. We also build GPT-powered tools for content generation, lead qualification, and internal knowledge bases.",
      },
      {
        question: "Do I need a CRM already?",
        answer:
          "No — we can help you select and set up the right CRM as part of the project. We work with HubSpot, Pipedrive, Zoho, and others.",
      },
      {
        question: "How do you identify what to automate?",
        answer:
          "We start with a process audit — mapping your current workflow and identifying the highest-value bottlenecks. You'll get a prioritized automation roadmap before we build anything.",
      },
      {
        question: "What if something breaks after you hand it over?",
        answer:
          "All automations come with 60 days of monitoring and support. After that, we offer retainer maintenance packages or can train your team to manage them internally.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    tagline: "Content your audience actually wants.",
    heroDescription:
      "Strategy, content creation, and community management across the platforms your buyers spend time on — built to grow reach, trust, and inbound leads.",
    iconName: "Share2",
    accent: "from-pink-500 to-rose-400",
    sections: [
      {
        type: "default",
        subtitle: "What We Do",
        title: "Social media that builds pipeline",
        content:
          "We manage your brand's presence on Instagram, LinkedIn, and X — handling everything from strategy and content creation to scheduling and community engagement. Every post is designed with a business goal in mind, not just to fill a calendar.",
        list: [
          "Platform strategy & content calendar",
          "Graphic design & copywriting",
          "Short-form video (Reels / Shorts)",
          "Scheduling & publishing",
          "Community management & DM handling",
          "Monthly analytics & growth reporting",
        ],
        accent: "from-pink-500 to-rose-400",
      },
      {
        type: "highlight",
        subtitle: "Our Philosophy",
        title: "Consistency beats virality.",
        content:
          "Going viral once doesn't build a business. Showing up consistently with content that's genuinely useful or interesting does. We build editorial systems that make consistency easy — and occasionally produce content that takes off.",
        accent: "from-pink-500 to-rose-400",
      },
      {
        type: "grid",
        subtitle: "What's Included",
        title: "Full-service social management",
        content:
          "Everything your brand needs to maintain a strong, active presence.",
        list: [
          "Monthly content strategy session",
          "16–20 posts per month",
          "Custom graphics & captions",
          "4–8 Reels per month",
          "Story content & highlights",
          "Engagement & growth reporting",
        ],
        accent: "from-pink-500 to-rose-400",
      },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Instagram, LinkedIn, and X (Twitter) are our primary platforms. We also support YouTube Shorts and Facebook depending on your audience.",
      },
      {
        question: "Do you create the content or do we?",
        answer:
          "We handle end-to-end content creation: strategy, design, copywriting, and scheduling. You review and approve before anything goes live.",
      },
      {
        question: "How many posts per month do we get?",
        answer:
          "Standard retainers include 16–20 feed posts plus Stories. We can scale up or down based on your goals and budget.",
      },
      {
        question: "Will you respond to comments and DMs?",
        answer:
          "Yes — community management is included. We handle comments and flag DMs that require a commercial response from your team.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}

export { SERVICES_DATA as services };
export default SERVICES_DATA;