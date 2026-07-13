


import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Blog {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
  readTime?: string;
  published: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

const COLLECTION = 'blogs';

export async function getAllBlogs(): Promise<Blog[]> {
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Blog));
}
export async function togglePublish(id: string, published: boolean): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    published,
    updatedAt: Timestamp.now(),
  });
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  const all = await getAllBlogs();
  return all.find((b) => b.slug === slug);
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  const snap = await getDoc(doc(db, COLLECTION, id));
  if (!snap.exists()) return undefined;
  return { id: snap.id, ...snap.data() } as Blog;
}

export async function createBlog(data: Omit<Blog, 'id'>): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  return ref.id;
}

export async function updateBlog(id: string, data: Partial<Blog>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function deleteBlog(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export function getAllSlugs(): string[] {
  // Static fallback — for SSG use getAllBlogs() instead
  return [];
}