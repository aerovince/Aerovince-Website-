




// app/api/enquiries/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

// ─── Firebase Admin ───────────────────────────────────────────────────────────
function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n",
        ),
      }),
    });
  }
  return getFirestore(getApp());
}

// ─── Types ────────────────────────────────────────────────────────────────────
export type EnquiryStatus = "New" | "Replied" | "Archived";
export type ContactStatus =
  | "Not Contacted"
  | "Enquired"
  | "Pending"
  | "Follow-up"
  | "Closed";

export interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  source: string;
  status: EnquiryStatus;
  contactStatus: ContactStatus;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

// ─── Helper: serialize Firestore doc ─────────────────────────────────────────
interface RawComment {
  id?: string;
  text?: string;
  author?: string;
  createdAt?: Timestamp | string;
}

function serializeDoc(
  id: string,
  data: FirebaseFirestore.DocumentData,
): Enquiry {
  return {
    id,
    name: data.name ?? "",
    phone: data.phone ?? "",
    email: data.email ?? "",
    service: data.service ?? "Not specified",
    message: data.message ?? "",
    source: data.source ?? "Contact Form",
    status: data.status ?? "New",
    contactStatus: data.contactStatus ?? "Not Contacted",
    comments: (data.comments ?? []).map((c: RawComment) => ({
      id: c.id ?? "",
      text: c.text ?? "",
      author: c.author ?? "Admin",
      createdAt:
        c.createdAt instanceof Timestamp
          ? c.createdAt.toDate().toISOString()
          : (c.createdAt ?? new Date().toISOString()),
    })),
    createdAt:
      data.createdAt instanceof Timestamp
        ? data.createdAt.toDate().toISOString()
        : (data.createdAt ?? new Date().toISOString()),
    updatedAt:
      data.updatedAt instanceof Timestamp
        ? data.updatedAt.toDate().toISOString()
        : (data.updatedAt ?? new Date().toISOString()),
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// GET /api/enquiries
// ═════════════════════════════════════════════════════════════════════════════
export async function GET(req: NextRequest) {
  try {
    const db = getAdminDb();
    const params = req.nextUrl.searchParams;

    const statusFilter = params.get("status");
    const contactStatusFilter = params.get("contactStatus");
    const limitParam = Number(params.get("limit") ?? 50);

    let query: FirebaseFirestore.Query = db
      .collection("enquiries")
      .orderBy("createdAt", "desc")
      .limit(limitParam);

    if (statusFilter && statusFilter !== "All") {
      query = query.where("status", "==", statusFilter);
    }
    if (contactStatusFilter && contactStatusFilter !== "All") {
      query = query.where("contactStatus", "==", contactStatusFilter);
    }

    const snap = await query.get();
    const enquiries = snap.docs.map((d) => serializeDoc(d.id, d.data()));

    return NextResponse.json({ success: true, enquiries }, { status: 200 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    console.error("[GET /api/enquiries]", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// POST /api/enquiries
// ═════════════════════════════════════════════════════════════════════════════
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      service,
      message,
      source = "Contact Form",
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "name, phone and email are required." },
        { status: 400 },
      );
    }

    const now = new Date().toISOString();
    const enquiry = {
      name,
      phone,
      email,
      service: service || "Not specified",
      message: message || "",
      source,
      status: "New" as EnquiryStatus,
      contactStatus: "Not Contacted" as ContactStatus,
      comments: [],
      createdAt: now,
      updatedAt: now,
    };

    const db = getAdminDb();
    const docRef = await db.collection("enquiries").add(enquiry);

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    console.error("[POST /api/enquiries]", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
