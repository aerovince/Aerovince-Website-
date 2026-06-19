// // app/api/applications/[id]/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";

// function getAdminDb() {
//   if (!getApps().length) {
//     initializeApp({
//       credential: cert({
//         projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
//           /\\n/g,
//           "\n",
//         ),
//       }),
//     });
//   }
//   return getFirestore(getApp());
// }

// 16  export async function PATCH(
// 17    req: NextRequest,
// 18    { params }: { params: Promise<{ id: string }> },
// ) {
//   try {
//     const body = await req.json();
//     const db = getAdminDb();
//     await db
//       .collection("applications")
//       .doc(params.id)
//       .update({
//         ...body,
//         updatedAt: new Date().toISOString(),
//       });
//     return NextResponse.json({ success: true });
//   } catch (err: unknown) {
//     const message =
//       err instanceof Error ? err.message : "Internal server error";
//     return NextResponse.json(
//       { success: false, error: message },
//       { status: 500 },
//     );
//   }
// }

// app/api/applications/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const body = await req.json();

    const { id } = await params; // ✅ IMPORTANT FIX

    const db = getAdminDb();
    await db
      .collection("applications")
      .doc(id)
      .update({
        ...body,
        updatedAt: new Date().toISOString(),
      });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
