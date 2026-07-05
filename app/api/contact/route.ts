














// // app/api/contact/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
// import nodemailer from "nodemailer";

// function getAdminDb() {
//   if (!getApps().length) {
//     initializeApp({
//       credential: cert({
//         projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       }),
//     });
//   }
//   return getFirestore(getApp());
// }

// // ✅ Gmail transporter
// function getTransporter() {
//   return nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_APP_PASSWORD,
//     },
//   });
// }

// const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL ?? "aerovincetechnologies@gmail.com";
// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917489951514";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, phone, email, company, services, message } = body;

//     if (!name || !phone || !email) {
//       return NextResponse.json(
//         { success: false, error: "Name, phone and email are required." },
//         { status: 400 }
//       );
//     }

//     const enquiry = {
//       name,
//       phone,
//       email,
//       company: company || "",
//       services: services || "Not specified",
//       message: message || "",
//       createdAt: new Date().toISOString(),
//       status: "new",
//     };

//     const db = getAdminDb();
//     const docRef = await db.collection("enquiries").add(enquiry);

//     const transporter = getTransporter();

//     // ── Admin email ──────────────────────────────────────────────────────────
//     await transporter.sendMail({
//       from: `"Aerovince Website" <${process.env.GMAIL_USER}>`,
//       to: RECEIVER_EMAIL,
//       subject: `New Enquiry from ${name} — ${enquiry.services}`,
//       html: `
//         <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
//           <div style="background:#111;padding:24px 32px;">
//             <h2 style="color:#fff;margin:0;">New Enquiry — MarkTale World</h2>
//           </div>
//           <div style="padding:32px;background:#fafafa;">
//             <table style="width:100%;border-collapse:collapse;">
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;width:140px;">Name</td><td style="padding:10px 0;color:#111;">${name}</td></tr>
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Phone</td><td style="padding:10px 0;color:#111;">${phone}</td></tr>
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Email</td><td style="padding:10px 0;color:#111;"><a href="mailto:${email}" style="color:#e31e24;">${email}</a></td></tr>
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Company</td><td style="padding:10px 0;color:#111;">${company || "—"}</td></tr>
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Services</td><td style="padding:10px 0;color:#111;">${enquiry.services}</td></tr>
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;vertical-align:top;">Message</td><td style="padding:10px 0;color:#111;">${message || "—"}</td></tr>
//               <tr><td style="padding:10px 0;font-weight:bold;color:#555;">Firestore ID</td><td style="padding:10px 0;color:#999;font-size:12px;">${docRef.id}</td></tr>
//             </table>
//           </div>
//           <div style="padding:16px 32px;background:#111;text-align:center;">
//             <p style="color:#666;font-size:12px;margin:0;">Automated notification from MarkTale World website.</p>
//           </div>
//         </div>
//       `,
//     });

//     // ── Customer confirmation email ───────────────────────────────────────────
//     await transporter.sendMail({
//       from: `"Aerovince World" <${process.env.GMAIL_USER}>`,
//       to: email,
//       subject: "Thank you for contacting MarkTale World",
//       html: `
//         <div style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
//           <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
//             <tr>
//               <td align="center">
//                 <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
//                   <tr>
//                     <td style="background:#111827;padding:32px;text-align:center;">
//                       <h1 style="margin:0;color:#ffffff;font-size:28px;">MarkTale World</h1>
//                       <p style="margin:10px 0 0;color:#d1d5db;font-size:14px;">Digital Marketing • Branding • Website Development</p>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style="padding:40px;">
//                       <h2 style="margin-top:0;color:#111827;">Hi ${name},</h2>
//                       <p style="font-size:16px;line-height:1.8;color:#4b5563;">
//                         Thank you for reaching out to <strong>MarkTale World</strong>.
//                         We have successfully received your enquiry and our team is reviewing the details.
//                       </p>
//                       <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:20px;margin:25px 0;">
//                         <h3 style="margin-top:0;color:#111827;">Your Enquiry Details</h3>
//                         <p style="margin:8px 0;color:#374151;"><strong>Name:</strong> ${name}</p>
//                         <p style="margin:8px 0;color:#374151;"><strong>Email:</strong> ${email}</p>
//                         <p style="margin:8px 0;color:#374151;"><strong>Phone:</strong> ${phone}</p>
//                         ${company ? `<p style="margin:8px 0;color:#374151;"><strong>Company:</strong> ${company}</p>` : ""}
//                         <p style="margin:8px 0;color:#374151;"><strong>Services:</strong> ${enquiry.services}</p>
//                         ${message ? `<p style="margin:8px 0;color:#374151;"><strong>Message:</strong><br/>${message}</p>` : ""}
//                       </div>
//                       <p style="font-size:16px;line-height:1.8;color:#4b5563;">
//                         One of our specialists will contact you within <strong>24 business hours</strong>.
//                       </p>
//                       <div style="text-align:center;margin:35px 0;">
//                         <a href="https://wa.me/${WHATSAPP_NUMBER}"
//                           style="display:inline-block;background:#111827;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600;">
//                           Chat on WhatsApp
//                         </a>
//                       </div>
//                       <p style="font-size:15px;color:#4b5563;line-height:1.8;">
//                         We appreciate the opportunity to work with you and help grow your business.
//                       </p>
//                       <p style="margin-top:30px;color:#111827;">
//                         Best Regards,<br/>
//                         <strong>Team MarkTale World</strong>
//                       </p>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style="background:#f9fafb;padding:24px;text-align:center;border-top:1px solid #e5e7eb;">
//                       <p style="margin:0;color:#6b7280;font-size:13px;">MarkTale World</p>
//                       <p style="margin:8px 0 0;color:#9ca3af;font-size:12px;">This is an automated acknowledgement email.</p>
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
//   } catch (err: unknown) {
//     console.error("[/api/contact] Error:", err);
//     const message = err instanceof Error ? err.message : "Internal server error";
//     return NextResponse.json(
//       { success: false, error: message },
//       { status: 500 }
//     );
//   }
// }





















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

function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

const RECEIVER_EMAIL  = process.env.CONTACT_RECEIVER_EMAIL  ?? "aerovincetechnologies@gmail.com";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917489951514";

// ── Beautiful admin notification email ──────────────────────────────────────

function buildAdminEmail(data: {
  name: string; phone: string; email: string; company: string;
  enquiryType: string; services: string; budget: string; message: string;
  docId: string;
}) {
  const servicesArray = data.services
    ? data.services.split(",").map(s => s.trim()).filter(Boolean)
    : [];

  const servicePills = servicesArray.length
    ? servicesArray.map(s =>
        `<span style="display:inline-block;margin:3px;padding:4px 12px;border-radius:20px;background:linear-gradient(135deg,rgba(124,58,237,.15),rgba(59,130,246,.15));color:#6d28d9;font-size:11px;font-weight:700;border:1px solid rgba(124,58,237,.25);">${s}</span>`
      ).join("")
    : `<span style="color:#94a3b8;font-size:12px;">None selected</span>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Enquiry — Aerovince</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0c1a2e 100%);padding:40px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4);border-radius:20px 20px 0 0;padding:40px 40px 36px;text-align:center;">
            <!-- Logo mark -->
            <div style="display:inline-block;width:52px;height:52px;border-radius:14px;background:rgba(255,255,255,.2);line-height:52px;font-size:24px;font-weight:900;color:#fff;margin-bottom:16px;letter-spacing:-1px;">A</div>
            <h1 style="margin:0;color:#fff;font-size:26px;font-weight:900;letter-spacing:-0.5px;">New Lead Incoming! 🚀</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,.75);font-size:14px;font-weight:500;">A potential client just submitted an enquiry via Aerovince website</p>
            <div style="margin-top:20px;display:inline-block;padding:6px 18px;border-radius:40px;background:rgba(255,255,255,.2);color:#fff;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">
              ● LIVE ENQUIRY
            </div>
          </td>
        </tr>

        <!-- Quick stats bar -->
        <tr>
          <td style="background:#1e293b;padding:0 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:18px 0;text-align:center;border-right:1px solid rgba(255,255,255,.08);">
                  <div style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Enquiry Type</div>
                  <div style="font-size:14px;color:#a78bfa;font-weight:800;">${data.enquiryType || "General"}</div>
                </td>
                <td style="padding:18px 0;text-align:center;border-right:1px solid rgba(255,255,255,.08);">
                  <div style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Budget</div>
                  <div style="font-size:14px;color:#34d399;font-weight:800;">${data.budget || "Not specified"}</div>
                </td>
                <td style="padding:18px 0;text-align:center;">
                  <div style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Services</div>
                  <div style="font-size:14px;color:#60a5fa;font-weight:800;">${servicesArray.length || 0} selected</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Contact details -->
        <tr>
          <td style="background:#1e293b;padding:0 40px 32px;">

            <div style="border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;">
              <!-- Section header -->
              <div style="background:linear-gradient(90deg,rgba(124,58,237,.2),rgba(59,130,246,.1));padding:14px 22px;border-bottom:1px solid rgba(255,255,255,.06);">
                <span style="color:#a78bfa;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">👤 Contact Details</span>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                  <td style="padding:14px 22px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;width:130px;">Name</td>
                  <td style="padding:14px 22px;color:#f1f5f9;font-size:14px;font-weight:700;">${data.name}</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.02);">
                  <td style="padding:14px 22px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;">Phone</td>
                  <td style="padding:14px 22px;"><a href="tel:${data.phone}" style="color:#60a5fa;font-size:14px;font-weight:700;text-decoration:none;">${data.phone}</a></td>
                </tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                  <td style="padding:14px 22px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;">Email</td>
                  <td style="padding:14px 22px;"><a href="mailto:${data.email}" style="color:#34d399;font-size:14px;font-weight:700;text-decoration:none;">${data.email}</a></td>
                </tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.02);">
                  <td style="padding:14px 22px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;">Company</td>
                  <td style="padding:14px 22px;color:#f1f5f9;font-size:14px;font-weight:600;">${data.company || "—"}</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                  <td style="padding:14px 22px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;">Budget</td>
                  <td style="padding:14px 22px;color:#fbbf24;font-size:14px;font-weight:700;">${data.budget || "Not specified"}</td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- Services -->
        <tr>
          <td style="background:#1e293b;padding:0 40px 32px;">
            <div style="border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;">
              <div style="background:linear-gradient(90deg,rgba(59,130,246,.2),rgba(6,182,212,.1));padding:14px 22px;border-bottom:1px solid rgba(255,255,255,.06);">
                <span style="color:#60a5fa;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">🛠 Selected Services</span>
              </div>
              <div style="padding:18px 22px;">
                ${servicePills}
              </div>
            </div>
          </td>
        </tr>

        <!-- Message -->
        ${data.message ? `
        <tr>
          <td style="background:#1e293b;padding:0 40px 32px;">
            <div style="border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;">
              <div style="background:linear-gradient(90deg,rgba(16,185,129,.15),rgba(6,182,212,.1));padding:14px 22px;border-bottom:1px solid rgba(255,255,255,.06);">
                <span style="color:#34d399;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">💬 Message</span>
              </div>
              <div style="padding:18px 22px;color:#cbd5e1;font-size:14px;line-height:1.7;">${data.message}</div>
            </div>
          </td>
        </tr>` : ""}

        <!-- Action buttons -->
        <tr>
          <td style="background:#1e293b;padding:0 40px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:8px;" width="50%">
                  <a href="tel:${data.phone}"
                    style="display:block;text-align:center;padding:14px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#3b82f6);color:#fff;font-size:13px;font-weight:800;text-decoration:none;">
                    📞 Call Now
                  </a>
                </td>
                <td style="padding-left:8px;" width="50%">
                  <a href="https://wa.me/${data.phone.replace(/\D/g, '')}"
                    style="display:block;text-align:center;padding:14px;border-radius:12px;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;font-size:13px;font-weight:800;text-decoration:none;">
                    💬 WhatsApp
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0f172a;border-radius:0 0 20px 20px;padding:24px 40px;text-align:center;border-top:1px solid rgba(255,255,255,.06);">
            <p style="margin:0;color:#334155;font-size:11px;">Firestore ID: <span style="color:#475569;font-family:monospace;">${data.docId}</span></p>
            <p style="margin:8px 0 0;color:#1e293b;font-size:11px;">Automated notification · Aerovince</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Beautiful customer confirmation email ─────────────────────────────────────

function buildCustomerEmail(data: {
  name: string; email: string; phone: string; company: string;
  enquiryType: string; services: string; budget: string; message: string;
}) {
  const servicesArray = data.services
    ? data.services.split(",").map(s => s.trim()).filter(Boolean)
    : [];

  const servicePills = servicesArray.length
    ? servicesArray.slice(0, 8).map(s =>
        `<span style="display:inline-block;margin:3px;padding:5px 14px;border-radius:20px;background:linear-gradient(135deg,rgba(124,58,237,.1),rgba(59,130,246,.1));color:#6d28d9;font-size:11px;font-weight:700;border:1px solid rgba(124,58,237,.2);">${s}</span>`
      ).join("") + (servicesArray.length > 8 ? `<span style="display:inline-block;margin:3px;padding:5px 14px;border-radius:20px;background:#f1f5f9;color:#64748b;font-size:11px;font-weight:700;">+${servicesArray.length - 8} more</span>` : "")
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>We Got Your Enquiry — Aerovince</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(180deg,#f0f4ff 0%,#f8fafc 100%);padding:48px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Hero header -->
        <tr>
          <td style="border-radius:24px 24px 0 0;background:linear-gradient(135deg,#7c3aed 0%,#3b82f6 50%,#06b6d4 100%);padding:48px 40px 40px;text-align:center;position:relative;">
            <!-- Logo -->
            <div style="display:inline-flex;align-items:center;justify-content:center;margin-bottom:28px;">
              <div style="width:48px;height:48px;border-radius:14px;background:rgba(255,255,255,.25);display:inline-flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff;margin-right:10px;">A</div>
              <span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px;">Aerovince</span>
            </div>
            <!-- Success icon -->
            <div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.2);margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:36px;line-height:80px;text-align:center;">✅</div>
            <h1 style="margin:0;color:#fff;font-size:30px;font-weight:900;letter-spacing:-0.5px;line-height:1.2;">
              We've Got Your Enquiry, ${data.name.split(" ")[0]}!
            </h1>
            <p style="margin:12px 0 0;color:rgba(255,255,255,.8);font-size:15px;line-height:1.6;max-width:420px;margin-left:auto;margin-right:auto;">
              Our growth team is reviewing your details and will craft a custom strategy within <strong style="color:#fff;">24 hours</strong>.
            </p>
            <!-- Response time badge -->
            <div style="margin-top:24px;display:inline-block;padding:8px 24px;border-radius:40px;background:rgba(255,255,255,.2);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.3);">
              <span style="color:#fff;font-size:12px;font-weight:800;">⏱ Avg. Response: Under 4 hours</span>
            </div>
          </td>
        </tr>

        <!-- What happens next -->
        <tr>
          <td style="background:#fff;padding:36px 40px 28px;">
            <h2 style="margin:0 0 20px;font-size:16px;font-weight:900;color:#0f172a;text-transform:uppercase;letter-spacing:1px;">
              What Happens Next?
            </h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                { step:"01", icon:"📋", title:"We review your enquiry", desc:"Our strategist reads every detail you shared — nothing is generic here.", color:"#7c3aed" },
                { step:"02", icon:"📊", title:"We build your growth plan", desc:"A custom proposal tailored to your goals, budget, and industry.", color:"#3b82f6" },
                { step:"03", icon:"📞", title:"We reach out to you", desc:`Expect a call or email to ${data.email} within 24 business hours.`, color:"#06b6d4" },
                { step:"04", icon:"🚀", title:"We start growing together", desc:"Once aligned, we hit the ground running. Fast onboarding, zero fluff.", color:"#10b981" },
              ].map(item => `
              <tr>
                <td style="padding:0 0 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:52px;vertical-align:top;">
                        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,${item.color}22,${item.color}11);border:1px solid ${item.color}33;text-align:center;line-height:44px;font-size:20px;">${item.icon}</div>
                      </td>
                      <td style="vertical-align:top;padding-left:14px;">
                        <div style="font-size:10px;color:${item.color};font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">Step ${item.step}</div>
                        <div style="font-size:14px;color:#0f172a;font-weight:800;margin-bottom:3px;">${item.title}</div>
                        <div style="font-size:13px;color:#64748b;line-height:1.5;">${item.desc}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`).join("")}
            </table>
          </td>
        </tr>

        <!-- Enquiry summary -->
        <tr>
          <td style="background:#f8fafc;padding:0 40px 28px;">
            <div style="border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
              <div style="background:linear-gradient(90deg,#f0f4ff,#f8faff);padding:14px 20px;border-bottom:1px solid #e2e8f0;">
                <span style="color:#6d28d9;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">📝 Your Enquiry Summary</span>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${data.enquiryType ? `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:12px 20px;color:#94a3b8;font-size:11px;font-weight:700;text-transform:uppercase;width:130px;">Goal</td><td style="padding:12px 20px;color:#1e293b;font-size:13px;font-weight:700;">${data.enquiryType}</td></tr>` : ""}
                ${data.budget ? `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:12px 20px;color:#94a3b8;font-size:11px;font-weight:700;text-transform:uppercase;">Budget</td><td style="padding:12px 20px;color:#059669;font-size:13px;font-weight:700;">${data.budget}</td></tr>` : ""}
                ${data.company ? `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:12px 20px;color:#94a3b8;font-size:11px;font-weight:700;text-transform:uppercase;">Company</td><td style="padding:12px 20px;color:#1e293b;font-size:13px;font-weight:600;">${data.company}</td></tr>` : ""}
                ${servicePills ? `<tr><td style="padding:14px 20px;color:#94a3b8;font-size:11px;font-weight:700;text-transform:uppercase;vertical-align:top;">Services</td><td style="padding:14px 20px;">${servicePills}</td></tr>` : ""}
              </table>
            </div>
          </td>
        </tr>

        <!-- Why Aerovince trust signals -->
        <tr>
          <td style="background:#fff;padding:0 40px 28px;">
            <div style="background:linear-gradient(135deg,#faf5ff,#eff6ff);border:1px solid #e9d5ff;border-radius:16px;padding:24px;">
              <h3 style="margin:0 0 16px;font-size:13px;font-weight:900;color:#6d28d9;text-transform:uppercase;letter-spacing:1px;">Why 150+ brands chose Aerovince</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  { icon:"📈", stat:"4.8x Average ROI", sub:"across all ad campaigns" },
                  { icon:"⚡", stat:"7-day Launch",     sub:"from brief to live campaigns" },
                  { icon:"💰", stat:"Plans from ₹10K",  sub:"no big budgets needed" },
                  { icon:"🌏", stat:"India & Global",   sub:"serving clients across borders" },
                ].map((t, i) => i % 2 === 0 ? `
                <tr>
                  <td style="padding:0 8px 12px 0;vertical-align:top;width:50%;">
                    <div style="display:flex;align-items:flex-start;gap:10px;">
                      <span style="font-size:20px;">${t.icon}</span>
                      <div>
                        <div style="font-size:13px;color:#1e293b;font-weight:800;">${t.stat}</div>
                        <div style="font-size:11px;color:#64748b;">${t.sub}</div>
                      </div>
                    </div>
                  </td>` : `
                  <td style="padding:0 0 12px 8px;vertical-align:top;width:50%;">
                    <div style="display:flex;align-items:flex-start;gap:10px;">
                      <span style="font-size:20px;">${t.icon}</span>
                      <div>
                        <div style="font-size:13px;color:#1e293b;font-weight:800;">${t.stat}</div>
                        <div style="font-size:11px;color:#64748b;">${t.sub}</div>
                      </div>
                    </div>
                  </td>
                </tr>`).join("")}
              </table>
            </div>
          </td>
        </tr>

        <!-- CTA buttons -->
        <tr>
          <td style="background:#fff;padding:0 40px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:8px;" width="50%">
                  <a href="https://wa.me/${WHATSAPP_NUMBER}"
                    style="display:block;text-align:center;padding:15px 20px;border-radius:14px;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;font-size:13px;font-weight:800;text-decoration:none;box-shadow:0 6px 20px rgba(37,211,102,.3);">
                    💬 Chat on WhatsApp
                  </a>
                </td>
                <td style="padding-left:8px;" width="50%">
                  <a href="https://aerovince.com"
                    style="display:block;text-align:center;padding:15px 20px;border-radius:14px;background:linear-gradient(135deg,#7c3aed,#3b82f6);color:#fff;font-size:13px;font-weight:800;text-decoration:none;box-shadow:0 6px 20px rgba(124,58,237,.3);">
                    🌐 Visit Our Website
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f172a,#1e1b4b);border-radius:0 0 24px 24px;padding:32px 40px;text-align:center;">
            <div style="display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
              <div style="width:32px;height:32px;border-radius:9px;background:linear-gradient(135deg,#7c3aed,#06b6d4);display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:#fff;margin-right:8px;line-height:32px;">A</div>
              <span style="font-size:16px;font-weight:900;color:#fff;">Aerovince</span>
            </div>
            <p style="margin:0 0 4px;color:#475569;font-size:12px;">Scheme No. 78, Vijay Nagar, Indore, Madhya Pradesh</p>
            <p style="margin:0 0 16px;color:#334155;font-size:11px;">This is an automated acknowledgement. Please do not reply to this email.</p>
            <div style="border-top:1px solid rgba(255,255,255,.06);padding-top:16px;">
              <span style="color:#1e293b;font-size:11px;">© ${new Date().getFullYear()} Aerovince · All rights reserved</span>
            </div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, services, message, enquiryType, budget } = body;

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
      company:     company     || "",
      enquiryType: enquiryType || "",
      budget:      budget      || "",
      services:    services    || "Not specified",
      message:     message     || "",
      createdAt:   new Date().toISOString(),
      status:      "new",
    };

    // Save to Firestore
    const db     = getAdminDb();
    const docRef = await db.collection("enquiries").add(enquiry);

    const transporter = getTransporter();

    // Fire both emails in parallel — don't await sequentially
    await Promise.all([
      transporter.sendMail({
        from:    `"Aerovince Website" <${process.env.GMAIL_USER}>`,
        to:      RECEIVER_EMAIL,
        subject: `🚀 New Lead: ${name} — ${enquiry.enquiryType || enquiry.services}`,
        html:    buildAdminEmail({ ...enquiry, docId: docRef.id }),
      }),
      transporter.sendMail({
        from:    `"Aerovince" <${process.env.GMAIL_USER}>`,
        to:      email,
        subject: `✅ Got it, ${name.split(" ")[0]}! We'll be in touch within 24 hours`,
        html:    buildCustomerEmail(enquiry),
      }),
    ]);

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (err: unknown) {
    console.error("[/api/contact] Error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}