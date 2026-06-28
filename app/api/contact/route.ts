














// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import nodemailer from "nodemailer";

function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return getFirestore(getApp());
}

// ✅ Gmail transporter
function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL ?? "aerovincetechnologies@gmail.com";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917489951514";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, services, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone and email are required." },
        { status: 400 }
      );
    }

    const enquiry = {
      name,
      phone,
      email,
      company: company || "",
      services: services || "Not specified",
      message: message || "",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    const db = getAdminDb();
    const docRef = await db.collection("enquiries").add(enquiry);

    const transporter = getTransporter();

    // ── Admin email ──────────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Aerovince Website" <${process.env.GMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      subject: `New Enquiry from ${name} — ${enquiry.services}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
          <div style="background:#111;padding:24px 32px;">
            <h2 style="color:#fff;margin:0;">New Enquiry — MarkTale World</h2>
          </div>
          <div style="padding:32px;background:#fafafa;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;width:140px;">Name</td><td style="padding:10px 0;color:#111;">${name}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Phone</td><td style="padding:10px 0;color:#111;">${phone}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Email</td><td style="padding:10px 0;color:#111;"><a href="mailto:${email}" style="color:#e31e24;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Company</td><td style="padding:10px 0;color:#111;">${company || "—"}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Services</td><td style="padding:10px 0;color:#111;">${enquiry.services}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;vertical-align:top;">Message</td><td style="padding:10px 0;color:#111;">${message || "—"}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Firestore ID</td><td style="padding:10px 0;color:#999;font-size:12px;">${docRef.id}</td></tr>
            </table>
          </div>
          <div style="padding:16px 32px;background:#111;text-align:center;">
            <p style="color:#666;font-size:12px;margin:0;">Automated notification from MarkTale World website.</p>
          </div>
        </div>
      `,
    });

    // ── Customer confirmation email ───────────────────────────────────────────
    await transporter.sendMail({
      from: `"Aerovince World" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting MarkTale World",
      html: `
        <div style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr>
              <td align="center">
                <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
                  <tr>
                    <td style="background:#111827;padding:32px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:28px;">MarkTale World</h1>
                      <p style="margin:10px 0 0;color:#d1d5db;font-size:14px;">Digital Marketing • Branding • Website Development</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:40px;">
                      <h2 style="margin-top:0;color:#111827;">Hi ${name},</h2>
                      <p style="font-size:16px;line-height:1.8;color:#4b5563;">
                        Thank you for reaching out to <strong>MarkTale World</strong>.
                        We have successfully received your enquiry and our team is reviewing the details.
                      </p>
                      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:20px;margin:25px 0;">
                        <h3 style="margin-top:0;color:#111827;">Your Enquiry Details</h3>
                        <p style="margin:8px 0;color:#374151;"><strong>Name:</strong> ${name}</p>
                        <p style="margin:8px 0;color:#374151;"><strong>Email:</strong> ${email}</p>
                        <p style="margin:8px 0;color:#374151;"><strong>Phone:</strong> ${phone}</p>
                        ${company ? `<p style="margin:8px 0;color:#374151;"><strong>Company:</strong> ${company}</p>` : ""}
                        <p style="margin:8px 0;color:#374151;"><strong>Services:</strong> ${enquiry.services}</p>
                        ${message ? `<p style="margin:8px 0;color:#374151;"><strong>Message:</strong><br/>${message}</p>` : ""}
                      </div>
                      <p style="font-size:16px;line-height:1.8;color:#4b5563;">
                        One of our specialists will contact you within <strong>24 business hours</strong>.
                      </p>
                      <div style="text-align:center;margin:35px 0;">
                        <a href="https://wa.me/${WHATSAPP_NUMBER}"
                          style="display:inline-block;background:#111827;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600;">
                          Chat on WhatsApp
                        </a>
                      </div>
                      <p style="font-size:15px;color:#4b5563;line-height:1.8;">
                        We appreciate the opportunity to work with you and help grow your business.
                      </p>
                      <p style="margin-top:30px;color:#111827;">
                        Best Regards,<br/>
                        <strong>Team MarkTale World</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#f9fafb;padding:24px;text-align:center;border-top:1px solid #e5e7eb;">
                      <p style="margin:0;color:#6b7280;font-size:13px;">MarkTale World</p>
                      <p style="margin:8px 0 0;color:#9ca3af;font-size:12px;">This is an automated acknowledgement email.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (err: unknown) {
    console.error("[/api/contact] Error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}