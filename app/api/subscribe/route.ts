// import { NextRequest, NextResponse } from "next/server";
// import { adminDb } from "@/lib/firebase";

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const email = (body?.email ?? "").toString().trim().toLowerCase();

//     if (!email || !EMAIL_REGEX.test(email)) {
//       return NextResponse.json(
//         { ok: false, error: "Invalid email address" },
//         { status: 400 }
//       );
//     }

//     const existingSnap = await adminDb
//       .collection("newsletter_subscribers")
//       .where("email", "==", email)
//       .get();

//     if (!existingSnap.empty) {
//       return NextResponse.json({
//         ok: true,
//         duplicate: true,
//       });
//     }

//     await adminDb.collection("newsletter_subscribers").add({
//       email,
//       source: "popup_email",
//       userAgent: req.headers.get("user-agent") ?? "",
//       createdAt: new Date(),
//     });

//     return NextResponse.json({
//       ok: true,
//       duplicate: false,
//     });
//   } catch (error) {
//     console.error("Subscribe API error:", error);

//     return NextResponse.json(
//       {
//         ok: false,
//         error: "Server error",
//       },
//       { status: 500 }
//     );
//   }
// }




















import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ─── Firebase Admin (same pattern as your enquiries route) ───
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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body?.email ?? "").toString().trim().toLowerCase();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const db = getAdminDb();

    const existingSnap = await db
      .collection("newsletter_subscribers")
      .where("email", "==", email)
      .get();

    if (!existingSnap.empty) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    await db.collection("newsletter_subscribers").add({
      email,
      source: "popup_email",
      userAgent: req.headers.get("user-agent") ?? "",
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, duplicate: false });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}