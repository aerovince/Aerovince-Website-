







// lib/userService.ts

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db } from './firebase';

export type UserRole = 'user' | 'admin';

export interface UserDocument {
  uid:          string;
  email:        string | null;
  displayName:  string | null;
  photoURL:     string | null;
  role:         UserRole;
  createdAt:    Timestamp;
  lastLoginAt:  Timestamp;
  updatedAt:    Timestamp;
  phone?:       string | null;
  bio?:         string | null;
  loginCount:   number;
  provider:     string;
}

export async function syncUserDocument(firebaseUser: User): Promise<UserDocument> {
  const ref = doc(db, 'users', firebaseUser.uid);

  let snap;
  try {
    snap = await getDoc(ref);
  } catch (err) {
    console.error('[syncUserDocument] getDoc failed:', err);
    throw err;
  }

  const provider = firebaseUser.providerData[0]?.providerId ?? 'unknown';

  if (!snap.exists()) {
    const newDoc: UserDocument = {
      uid:         firebaseUser.uid,
      email:       firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL:    firebaseUser.photoURL,
      role:        'user',
      createdAt:   serverTimestamp() as Timestamp,
      lastLoginAt: serverTimestamp() as Timestamp,
      updatedAt:   serverTimestamp() as Timestamp,
      loginCount:  1,
      provider,
      phone:       null,
      bio:         null,
    };

    try {
      await setDoc(ref, newDoc);
      console.log('[syncUserDocument] Created new user doc for', firebaseUser.uid);
    } catch (err) {
      console.error('[syncUserDocument] setDoc (create) failed:', err);
      throw err;
    }

    return newDoc;
  }

  try {
    await updateDoc(ref, {
      lastLoginAt: serverTimestamp(),
      updatedAt:   serverTimestamp(),
      loginCount:  (snap.data().loginCount ?? 0) + 1,
      displayName: firebaseUser.displayName,
      photoURL:    firebaseUser.photoURL,
      email:       firebaseUser.email,
      provider,
    });
    console.log('[syncUserDocument] Updated existing user doc for', firebaseUser.uid);
  } catch (err) {
    console.error('[syncUserDocument] updateDoc failed:', err);
    throw err;
  }

  return snap.data() as UserDocument;
}

export async function getUserDocument(uid: string): Promise<UserDocument | null> {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? (snap.data() as UserDocument) : null;
}