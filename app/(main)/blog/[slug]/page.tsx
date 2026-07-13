


// app\(main)\blog\[slug]\page.tsx


import { notFound } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { Clock, User, Calendar, ArrowLeft, ChevronRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

interface BlogPost {
  id: string; slug: string; title: string; status?: string;
  excerpt?: string; content?: string; image?: string;
  category?: string; author?: string;
  date?: string | number | Date; readTime?: string;
}

const CAT_STYLES: Record<string, { bg: string; text: string; border: string; dot: string; glow: string }> = {
  Leadership:      { bg: "rgba(124,58,237,.14)", text: "#a78bfa", border: "rgba(124,58,237,.3)", dot: "#7c3aed", glow: "rgba(124,58,237,.25)" },
  "Career Growth": { bg: "rgba(16,185,129,.12)", text: "#6ee7b7", border: "rgba(16,185,129,.28)", dot: "#10b981", glow: "rgba(16,185,129,.2)" },
  Productivity:    { bg: "rgba(245,158,11,.12)",  text: "#fbbf24", border: "rgba(245,158,11,.28)", dot: "#f59e0b", glow: "rgba(245,158,11,.2)" },
  Mindset:         { bg: "rgba(236,72,153,.12)",  text: "#f9a8d4", border: "rgba(236,72,153,.28)", dot: "#ec4899", glow: "rgba(236,72,153,.2)" },
  Technology:      { bg: "rgba(6,182,212,.12)",   text: "#67e8f9", border: "rgba(6,182,212,.28)", dot: "#06b6d4",  glow: "rgba(6,182,212,.2)" },
  Business:        { bg: "rgba(167,139,250,.12)", text: "#c4b5fd", border: "rgba(167,139,250,.28)", dot: "#8b5cf6", glow: "rgba(139,92,246,.2)" },
  Wellness:        { bg: "rgba(20,184,166,.12)",  text: "#5eead4", border: "rgba(20,184,166,.28)", dot: "#14b8a6", glow: "rgba(20,184,166,.2)" },
  Finance:         { bg: "rgba(251,146,60,.12)",  text: "#fdba74", border: "rgba(251,146,60,.28)", dot: "#f97316", glow: "rgba(249,115,22,.2)" },
};
const FALLBACK_CAT = { bg: "rgba(148,163,184,.1)", text: "#94a3b8", border: "rgba(148,163,184,.25)", dot: "#64748b", glow: "rgba(100,116,139,.15)" };

function formatDate(d?: string | number | Date | null) {
  if (!d) return null;
  try { return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); }
  catch { return String(d); }
}

async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as BlogPost;
  } catch { return null; }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Article Not Found" };
  return {
    title: blog.title,
    description: blog.excerpt || "Read this article.",
    openGraph: { title: blog.title, description: blog.excerpt || "", images: blog.image ? [{ url: blog.image }] : [] },
  };
}

export async function generateStaticParams() {
  try {
    const snap = await getDocs(collection(db, "blogs"));
    return snap.docs
      .filter(d => d.data().status?.toLowerCase() === "published" && d.data().slug)
      .map(d => ({ slug: d.data().slug as string }));
  } catch { return []; }
}

function CategoryBadge({ category }: { category: string }) {
  const col = CAT_STYLES[category] ?? FALLBACK_CAT;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border"
      style={{ background: col.bg, color: col.text, borderColor: col.border }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.dot }} />
      {category}
    </span>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();
  if (blog.status?.toLowerCase() !== "published") notFound();

  const formattedDate = formatDate(blog.date);
  const col = blog.category ? (CAT_STYLES[blog.category] ?? FALLBACK_CAT) : FALLBACK_CAT;

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg,#0a0e1a 0%,#0f1221 50%,#080c16 100%)" }}
    >
      {/* Accent line */}
      <div
        className="fixed top-0 left-0 h-[3px] w-full z-50"
        style={{ background: `linear-gradient(90deg,#7c3aed,${col.dot},#06b6d4,transparent)` }}
      />

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle,${col.glow},transparent 70%)` }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(6,182,212,.07),transparent 70%)" }} />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

        {/* Breadcrumb */}
        <nav className="pb-10" aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors"
            style={{ color: "#334155" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a78bfa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            All Articles
          </Link>
        </nav>

        {/* Hero */}
        <header className="max-w-4xl mb-14">
          {blog.category && <div className="mb-5"><CategoryBadge category={blog.category} /></div>}

          <div className="flex flex-wrap items-center gap-5 mb-7">
            {blog.author && (
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[12px] font-black flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,#7c3aed,${col.dot})` }}
                >
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-semibold" style={{ color: "#94a3b8" }}>{blog.author}</span>
              </div>
            )}
            {formattedDate && (
              <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#475569" }}>
                <Calendar size={14} style={{ color: "#334155" }} /> {formattedDate}
              </span>
            )}
            {blog.readTime && (
              <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#475569" }}>
                <Clock size={14} style={{ color: "#334155" }} /> {blog.readTime}
              </span>
            )}
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] mb-7"
            style={{ color: "#f1f5f9", letterSpacing: "-0.03em" }}
          >
            {blog.title}
          </h1>

          {blog.excerpt && (
            <div className="flex gap-4 mb-10 max-w-2xl">
              <div
                className="w-[3px] rounded-full flex-shrink-0"
                style={{ background: `linear-gradient(180deg,#7c3aed,${col.dot})` }}
              />
              <p className="text-lg leading-relaxed font-medium" style={{ color: "#475569" }}>
                {blog.excerpt}
              </p>
            </div>
          )}
        </header>

        {/* Hero image */}
        {blog.image && (
          <div
            className="mb-16 rounded-2xl overflow-hidden w-full flex items-center justify-center border"
            style={{ background: "#0f1221", borderColor: "rgba(255,255,255,.07)" }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              loading="eager"
              decoding="async"
              className="w-full h-auto max-h-[600px] object-contain"
            />
          </div>
        )}

        {/* Body + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Article */}
          <article className="lg:col-span-8 w-full min-w-0 overflow-hidden break-words">
            {blog.content ? (
              <div
                className="
                  prose prose-lg max-w-none prose-invert
                  prose-headings:font-black prose-headings:tracking-tight
                  prose-headings:text-slate-100
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-slate-400 prose-p:leading-loose prose-p:mb-6
                  prose-a:font-semibold prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-200 prose-strong:font-bold
                  prose-li:text-slate-400 prose-li:leading-relaxed
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-blockquote:not-italic prose-blockquote:font-semibold prose-blockquote:text-slate-300
                  prose-blockquote:border-l-[3px] prose-blockquote:border-violet-500
                  prose-blockquote:bg-violet-500/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                  prose-img:rounded-xl prose-hr:border-slate-800 prose-hr:my-12
                "
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <p className="italic text-base" style={{ color: "#334155" }}>No content available.</p>
            )}

            {/* Footer CTAs */}
            <div className="mt-16 pt-10 border-t flex flex-col sm:flex-row gap-4" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all border"
                style={{ background: "rgba(255,255,255,.04)", borderColor: "rgba(255,255,255,.08)", color: "#94a3b8" }}
              >
                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                Browse All Articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", boxShadow: "0 4px 20px rgba(124,58,237,.3)" }}
              >
                Work With Us <ChevronRight size={15} />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 w-full">
            <div
              className="sticky top-32 flex flex-col gap-5 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4"
              style={{ scrollbarWidth: "none" }}
            >

              {/* Author card */}
              {blog.author && (
                <div
                  className="rounded-2xl p-6 border"
                  style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.07)" }}
                >
                  <p className="text-[10px] font-black uppercase tracking-widest mb-5" style={{ color: "#334155" }}>Written by</p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-base font-black flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,#7c3aed,${col.dot})` }}
                    >
                      {blog.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-base font-black" style={{ color: "#f1f5f9" }}>{blog.author}</p>
                      <p className="text-xs font-medium mt-0.5" style={{ color: "#334155" }}>Author</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Meta card */}
              <div
                className="rounded-2xl p-6 border space-y-5"
                style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.07)" }}
              >
                <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#334155" }}>Article details</p>

                {formattedDate && (
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                      style={{ background: "rgba(255,255,255,.04)", borderColor: "rgba(255,255,255,.06)" }}
                    >
                      <Calendar size={15} style={{ color: "#475569" }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#334155" }}>Published</p>
                      <p className="text-sm font-bold" style={{ color: "#94a3b8" }}>{formattedDate}</p>
                    </div>
                  </div>
                )}

                {blog.readTime && (
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                      style={{ background: "rgba(255,255,255,.04)", borderColor: "rgba(255,255,255,.06)" }}
                    >
                      <Clock size={15} style={{ color: "#475569" }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#334155" }}>Read time</p>
                      <p className="text-sm font-bold" style={{ color: "#94a3b8" }}>{blog.readTime}</p>
                    </div>
                  </div>
                )}

                {blog.category && (
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                      style={{ background: "rgba(255,255,255,.04)", borderColor: "rgba(255,255,255,.06)" }}
                    >
                      <User size={15} style={{ color: "#475569" }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#334155" }}>Category</p>
                      <CategoryBadge category={blog.category} />
                    </div>
                  </div>
                )}
              </div>

              {/* CTA card */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden border"
                style={{
                  background:   "linear-gradient(135deg,#1e1b4b,#0c2040)",
                  borderColor:  "rgba(124,58,237,.25)",
                  boxShadow:    "0 4px 30px rgba(124,58,237,.15)",
                }}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle,rgba(124,58,237,.3),transparent 70%)" }} />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: "rgba(167,139,250,.6)" }}>Get started</p>
                  <h3 className="text-lg font-black mb-3 leading-snug" style={{ color: "#f1f5f9" }}>Ready to grow your brand?</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }}>
                    Let&apos;s build your marketing engine and scale what matters.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                      color:      "#fff",
                      boxShadow:  "0 4px 16px rgba(124,58,237,.4)",
                    }}
                  >
                    Get in touch <ChevronRight size={13} strokeWidth={3} />
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}