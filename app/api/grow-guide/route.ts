

// app/api/grow-guide/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

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

function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL ?? "team@aerovince.com";
const PDF_PATH = path.join(process.cwd(), "public", "guides", "The Business Growth Blueprint - Aerovince.pdf");
const PDF_FILENAME = "The Business Growth Blueprint - Aerovince.pdf";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }

    // ✅ Respond immediately — PDF downloads on frontend instantly
    // Firestore + emails run silently in the background
    (async () => {
      try {
        if (!fs.existsSync(PDF_PATH)) {
          console.error("[grow-guide] PDF not found at:", PDF_PATH);
          return;
        }

        const pdfBuffer = fs.readFileSync(PDF_PATH);
        const db = getAdminDb();
        const transporter = getTransporter();

        await Promise.all([
          // 1. Save to Firestore
          db.collection("guide-downloads").add({
            email,
            source: "grow-page",
            createdAt: new Date().toISOString(),
          }),

          // 2. Notify you (no attachment needed on your end)
          transporter.sendMail({
            from: `"Aerovince Website" <${process.env.GMAIL_USER}>`,
            to: RECEIVER_EMAIL,
            subject: `New Guide Download — ${email}`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
                <div style="background:#111;padding:24px 32px;">
                  <h2 style="color:#fff;margin:0;">New Guide Download — Aerovince</h2>
                </div>
                <div style="padding:32px;background:#fafafa;">
                  <p style="color:#333;font-size:16px;">Someone just downloaded the Growth Blueprint.</p>
                  <p style="color:#555;"><strong>Email:</strong> ${email}</p>
                  <p style="color:#555;"><strong>Source:</strong> /grow page</p>
                </div>
              </div>
            `,
          }),

          // 3. Send PDF to the user
          transporter.sendMail({
            from: `"Aerovince" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Your Business Growth Blueprint is here 🚀",
            html: `
              <div style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
                  <tr>
                    <td align="center">
                      <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
                        <tr>
                          <td style="background:#111827;padding:32px;text-align:center;">
                            <h1 style="margin:0;color:#ffffff;font-size:28px;">Aerovince</h1>
                            <p style="margin:10px 0 0;color:#d1d5db;font-size:14px;">Your Growth Blueprint is attached below 👇</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:40px;">
                            <h2 style="margin-top:0;color:#111827;">Here's your free guide!</h2>
                            <p style="font-size:16px;line-height:1.8;color:#4b5563;">
                              Thanks for downloading the <strong>Business Growth Blueprint</strong>.
                              You'll find it attached to this email as a PDF.
                            </p>
                            <p style="font-size:16px;line-height:1.8;color:#4b5563;">
                              Inside, you'll find battle-tested frameworks for validating your MVP,
                              lowering CAC, and scaling to your first 10,000 users.
                            </p>
                            <p style="font-size:15px;color:#4b5563;line-height:1.8;margin-top:24px;">
                              Want us to build a custom growth strategy for your startup? Book a free 30-min call — no strings attached.
                            </p>
                            <div style="text-align:center;margin:35px 0;">
                              <a href="https://aerovince.com/contact"
                                style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600;">
                                Book Free Strategy Call →
                              </a>
                            </div>
                            <p style="margin-top:30px;color:#111827;">
                              Best Regards,<br/>
                              <strong>Team Aerovince</strong>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="background:#f9fafb;padding:24px;text-align:center;border-top:1px solid #e5e7eb;">
                            <p style="margin:0;color:#9ca3af;font-size:12px;">Aerovince</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            `,
            attachments: [
              {
                filename: PDF_FILENAME,
                content: pdfBuffer,
                contentType: "application/pdf",
              },
            ],
          }),
        ]);
      } catch (err) {
        console.error("[grow-guide background]", err);
      }
    })();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("[/api/grow-guide] Error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
