



// // Aerovince\app\(main)\blog\page.tsx
// "use client";
// export const dynamic = "force-dynamic";

// import React, { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Clock, User, ChevronRight, BookOpen, X, TrendingUp } from "lucide-react";

// const ACCENT = { from: "#2563eb", mid: "#3b82f6", to: "#06b6d4" };

// const CATEGORIES = [
//   "All", "Leadership", "Career Growth", "Productivity",
//   "Mindset", "Technology", "Business", "Wellness", "Finance",
// ];

// const CAT_COLORS: Record<string, { bg: string; text: string; border: string; glow: string }> = {
//   Leadership:      { bg: "#6366F112", text: "#6366F1", border: "#6366F130", glow: "#6366F120" },
//   "Career Growth": { bg: "#10B98112", text: "#10B981", border: "#10B98130", glow: "#10B98120" },
//   Productivity:    { bg: "#F59E0B12", text: "#F59E0B", border: "#F59E0B30", glow: "#F59E0B20" },
//   Mindset:         { bg: "#EC489912", text: "#EC4899", border: "#EC489930", glow: "#EC489920" },
//   Technology:      { bg: "#3B82F612", text: "#3B82F6", border: "#3B82F630", glow: "#3B82F620" },
//   Business:        { bg: "#8B5CF612", text: "#8B5CF6", border: "#8B5CF630", glow: "#8B5CF620" },
//   Wellness:        { bg: "#14B8A612", text: "#14B8A6", border: "#14B8A630", glow: "#14B8A620" },
//   Finance:         { bg: "#F9731612", text: "#F97316", border: "#F9731630", glow: "#F9731620" },
// };

// type Blog = {
//   id: string;
//   slug: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   author: string;
//   readTime: string;
//   image: string;
//   date: string;
//   status: string;
// };

// function CategoryBadge({ category, size = "sm" }: { category: string; size?: "sm" | "md" }) {
//   const col = CAT_COLORS[category] ?? { bg: "#64748B12", text: "#64748B", border: "#64748B30", glow: "#64748B20" };
//   return (
//     <span
//       className={`inline-flex items-center rounded-lg font-black uppercase tracking-widest border ${
//         size === "md" ? "px-3 py-1.5 text-[11px]" : "px-2.5 py-1 text-[10px]"
//       }`}
//       style={{ background: col.bg, color: col.text, borderColor: col.border }}
//     >
//       {category}
//     </span>
//   );
// }

// // ── Animated Blog Card ──────────────────────────────────────────────────────
// function BlogCard({ blog, index }: { blog: Blog; index: number }) {
//   const [imgErr, setImgErr] = useState(false);
//   const [hovered, setHovered] = useState(false);
//   const col = CAT_COLORS[blog.category] ?? { glow: "#2563eb20" };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       style={{ perspective: 1000 }}
//     >
//       <Link href={`/blog/${blog.slug}`} className="block h-full">
//         <motion.div
//           animate={{
//             y: hovered ? -8 : 0,
//             boxShadow: hovered
//               ? `0 24px 60px -10px ${col.glow}, 0 8px 20px rgba(0,0,0,0.08)`
//               : "0 2px 8px rgba(0,0,0,0.04)",
//           }}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//           className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 h-full"
//           style={{ borderColor: hovered ? (CAT_COLORS[blog.category]?.border ?? "#e2e8f0") : "#f1f5f9" }}
//         >
//           {/* Image */}
//           <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 flex-shrink-0">
//             {blog.image && !imgErr ? (
//               <motion.img
//                 src={blog.image}
//                 alt={blog.title}
//                 animate={{ scale: hovered ? 1.07 : 1 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="w-full h-full object-cover"
//                 onError={() => setImgErr(true)}
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center">
//                 <BookOpen size={40} className="text-gray-200" />
//               </div>
//             )}

//             {/* Overlay */}
//             <motion.div
//               animate={{ opacity: hovered ? 1 : 0 }}
//               className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
//             />

//             {/* Category */}
//             <div className="absolute top-4 left-4">
//               <CategoryBadge category={blog.category} />
//             </div>

//             {/* Read pill appears on hover */}
//             <motion.div
//               animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
//               transition={{ duration: 0.2 }}
//               className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[11px] font-black uppercase tracking-widest"
//               style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
//             >
//               Read <ChevronRight size={11} />
//             </motion.div>
//           </div>

//           {/* Content */}
//           <div className="flex flex-col flex-1 p-6">
//             <h2 className="font-black text-gray-900 text-[15px] leading-snug mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
//               {blog.title}
//             </h2>
//             {blog.excerpt && (
//               <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 flex-1 mb-4">
//                 {blog.excerpt}
//               </p>
//             )}
//             <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto flex-wrap">
//               {blog.author && (
//                 <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                   <User size={10} /> {blog.author}
//                 </span>
//               )}
//               {blog.readTime && (
//                 <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                   <Clock size={10} /> {blog.readTime}
//                 </span>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// }

// // ── Featured Hero Card ──────────────────────────────────────────────────────
// function FeaturedCard({ blog }: { blog: Blog }) {
//   const [imgErr, setImgErr] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       <Link href={`/blog/${blog.slug}`} className="block">
//         <motion.div
//           animate={{
//             boxShadow: hovered
//               ? "0 32px 80px -12px rgba(37,99,235,0.18), 0 8px 24px rgba(0,0,0,0.06)"
//               : "0 4px 16px rgba(0,0,0,0.06)",
//           }}
//           transition={{ duration: 0.4 }}
//           className="group relative flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100"
//           style={{ minHeight: 420 }}
//         >
//           {/* Image side */}
//           <div className="relative lg:w-[52%] h-72 lg:h-auto overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex-shrink-0">
//             {blog.image && !imgErr ? (
//               <motion.img
//                 src={blog.image}
//                 alt={blog.title}
//                 animate={{ scale: hovered ? 1.06 : 1 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="w-full h-full object-cover"
//                 onError={() => setImgErr(true)}
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center">
//                 <BookOpen size={64} className="text-blue-100" />
//               </div>
//             )}
//             <motion.div
//               animate={{ opacity: hovered ? 1 : 0.4 }}
//               className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block"
//             />
//           </div>

//           {/* Content side */}
//           <div className="flex flex-col justify-center flex-1 p-8 lg:p-14">
//             <div className="flex items-center gap-3 mb-6">
//               <span
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
//                 style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
//               >
//                 <TrendingUp size={10} /> Featured
//               </span>
//               <CategoryBadge category={blog.category} size="md" />
//             </div>

//             <h2 className="text-2xl lg:text-4xl font-black text-gray-900 leading-[1.1] mb-5 group-hover:text-blue-600 transition-colors duration-300">
//               {blog.title}
//             </h2>

//             {blog.excerpt && (
//               <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg line-clamp-3">
//                 {blog.excerpt}
//               </p>
//             )}

//             <div className="flex items-center gap-6 flex-wrap">
//               {blog.author && (
//                 <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
//                   <User size={12} /> {blog.author}
//                 </span>
//               )}
//               {blog.readTime && (
//                 <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
//                   <Clock size={12} /> {blog.readTime}
//                 </span>
//               )}
//               <motion.span
//                 animate={{
//                   opacity: hovered ? 1 : 0,
//                   x: hovered ? 0 : -8,
//                 }}
//                 transition={{ duration: 0.25 }}
//                 className="ml-auto flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black text-white"
//                 style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
//               >
//                 Read Article <ChevronRight size={14} />
//               </motion.span>
//             </div>
//           </div>
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// }

// // ── Skeleton ────────────────────────────────────────────────────────────────
// function SkeletonCard({ delay = 0 }: { delay?: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay }}
//       className="rounded-3xl overflow-hidden border border-gray-100 bg-white"
//     >
//       <div className="h-56 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse" />
//       <div className="p-6 space-y-3">
//         <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
//         <div className="h-5 bg-gray-100 rounded-full animate-pulse" />
//         <div className="h-5 w-3/4 bg-gray-100 rounded-full animate-pulse" />
//         <div className="h-3 bg-gray-100 rounded-full animate-pulse" />
//         <div className="h-3 w-4/5 bg-gray-100 rounded-full animate-pulse" />
//       </div>
//     </motion.div>
//   );
// }

// // ── Floating dots ────────────────────────────────────────────────────────────
// function FloatingDots() {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
//       {Array.from({ length: 6 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full"
//           style={{
//             width: 4 + i * 2,
//             height: 4 + i * 2,
//             background: i % 2 === 0 ? ACCENT.from : ACCENT.to,
//             opacity: 0.2,
//             left: `${8 + i * 15}%`,
//           }}
//           initial={{ y: "110vh" }}
//           animate={{ y: "-10vh" }}
//           transition={{
//             duration: 10 + i * 2,
//             repeat: Infinity,
//             delay: i * 1.5,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // ── Main Page ────────────────────────────────────────────────────────────────
// export default function BlogsPage() {
//   const [blogs, setBlogs]                   = useState<Blog[]>([]);
//   const [loading, setLoading]               = useState(true);
//   const [search, setSearch]                 = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [page, setPage]                     = useState(1);
//   const [totalPages, setTotalPages]         = useState(1);
//   const [total, setTotal]                   = useState(0);
//   const LIMIT = 9;

//   const fetchBlogs = useCallback(async (p = 1, cat = activeCategory) => {
//     try {
//       setLoading(true);
//       const qs = new URLSearchParams({ status: "Published", limit: String(LIMIT), page: String(p) });
//       if (cat !== "All") qs.set("category", cat);
//       const res  = await fetch(`/api/blogs?${qs}`);
//       const data = await res.json();
//       setBlogs(data.blogs || []);
//       setTotal(data.total || 0);
//       setTotalPages(data.totalPages || 1);
//       setPage(p);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [activeCategory]);

//   useEffect(() => { fetchBlogs(1); }, [fetchBlogs]);

//   const handleCategory = (cat: string) => { setActiveCategory(cat); fetchBlogs(1, cat); };

//   const filtered = search
//     ? blogs.filter(b =>
//         b.title.toLowerCase().includes(search.toLowerCase()) ||
//         (b.excerpt ?? "").toLowerCase().includes(search.toLowerCase())
//       )
//     : blogs;

//   const featured = !search ? filtered[0]       : undefined;
//   const rest     = !search ? filtered.slice(1)  : filtered;

//   return (
//     <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
//       <FloatingDots />

//       {/* bg blobs */}
//       <div className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle at 20% 20%, #2563eb08, transparent 60%)", zIndex: 0 }} />
//       <div className="fixed bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle at 80% 80%, #06b6d408, transparent 60%)", zIndex: 0 }} />

//       {/* ── IMPORTANT: pt-28 pushes content below navbar ── */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-16"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.1 }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-extrabold tracking-widest border mb-6"
//             style={{
//               background:  "linear-gradient(135deg, #2563eb12, #06b6d412)",
//               borderColor: "#2563eb2e",
//               color:        "#2563eb",
//             }}
//           >
//             <BookOpen size={13} /> INSIGHTS & ARTICLES
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-gray-900 mb-5"
//           >
//             Ideas That{" "}
//             <span style={{
//               background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}>
//               Move Markets
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//           >
//             Perspectives on leadership, growth, and the future of work from the frontlines.
//           </motion.p>
//         </motion.div>

//         {/* Search & Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.35 }}
//           className="flex flex-col lg:flex-row gap-4 mb-12"
//         >
//           {/* Search */}
//           <div className="relative lg:w-80 flex-shrink-0">
//             <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
//             <input
//               type="text"
//               placeholder="Search articles..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="w-full h-12 pl-11 pr-10 rounded-2xl bg-white border border-gray-200 text-gray-700 text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
//             />
//             <AnimatePresence>
//               {search && (
//                 <motion.button
//                   initial={{ opacity: 0, scale: 0.6 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.6 }}
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
//                 >
//                   <X size={14} />
//                 </motion.button>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Category pills */}
//           <div className="flex gap-2 overflow-x-auto pb-1 flex-nowrap flex-1">
//             {CATEGORIES.map(cat => {
//               const isActive = activeCategory === cat;
//               return (
//                 <motion.button
//                   key={cat}
//                   onClick={() => handleCategory(cat)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.96 }}
//                   className="flex-shrink-0 h-12 px-5 rounded-2xl text-[11px] font-black uppercase tracking-widest border transition-all duration-200"
//                   style={isActive
//                     ? { background: "linear-gradient(135deg, #2563eb, #06b6d4)", color: "#fff", borderColor: "transparent", boxShadow: "0 4px 16px #2563eb30" }
//                     : { background: "#fff", color: "#94a3b8", borderColor: "#e2e8f0" }
//                   }
//                 >
//                   {cat}
//                 </motion.button>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Content */}
//         {loading ? (
//           <div className="space-y-10">
//             <div className="h-80 bg-white rounded-3xl animate-pulse border border-gray-100" />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} delay={i * 0.05} />)}
//             </div>
//           </div>
//         ) : filtered.length === 0 ? (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
//             <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 border"
//               style={{ background: "linear-gradient(135deg, #2563eb10, #06b6d410)", borderColor: "#2563eb20" }}>
//               <BookOpen size={32} className="text-blue-300" />
//             </div>
//             <p className="text-gray-400 text-base mb-4">
//               {search ? `No articles matching "${search}"` : "No articles published yet."}
//             </p>
//             {search && (
//               <button onClick={() => setSearch("")}
//                 className="text-sm font-bold text-blue-500 hover:text-blue-600 underline underline-offset-4">
//                 Clear search
//               </button>
//             )}
//           </motion.div>
//         ) : (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${activeCategory}-${page}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="space-y-10"
//             >
//               {/* Featured */}
//               {featured && page === 1 && <FeaturedCard blog={featured} />}

//               {/* Cards grid */}
//               {rest.length > 0 && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {rest.map((blog, i) => <BlogCard key={blog.id} blog={blog} index={i} />)}
//                 </div>
//               )}

//               {/* Pagination */}
//               {totalPages > 1 && !search && (
//                 <motion.div
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
//                   className="flex items-center justify-center gap-4 pt-10"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
//                     onClick={() => fetchBlogs(page - 1)} disabled={page <= 1}
//                     className="px-7 py-3 rounded-2xl bg-white border border-gray-200 text-xs text-gray-500 hover:border-gray-300 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed font-bold uppercase tracking-widest shadow-sm transition-all"
//                   >
//                     ← Previous
//                   </motion.button>
//                   <span className="text-[11px] text-gray-300 font-black uppercase tracking-widest px-4">
//                     {page} / {totalPages}
//                   </span>
//                   <motion.button
//                     whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
//                     onClick={() => fetchBlogs(page + 1)} disabled={page >= totalPages}
//                     className="px-7 py-3 rounded-2xl text-xs text-white font-bold uppercase tracking-widest shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-md transition-all"
//                     style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
//                   >
//                     Next →
//                   </motion.button>
//                 </motion.div>
//               )}

//               <p className="text-center text-[10px] text-gray-300 font-bold uppercase tracking-widest pt-2">
//                 Showing {filtered.length} of {total} articles
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// }
















"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Clock, User, ChevronRight, BookOpen, X, Sparkles,
  TrendingUp, ArrowRight,
} from "lucide-react";

// ── Theme ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All", "Leadership", "Career Growth", "Productivity",
  "Mindset", "Technology", "Business", "Wellness", "Finance",
];

const CAT_STYLES: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  Leadership:      { bg: "rgba(124,58,237,.14)", text: "#a78bfa", border: "rgba(124,58,237,.3)", glow: "rgba(124,58,237,.18)" },
  "Career Growth": { bg: "rgba(16,185,129,.12)", text: "#6ee7b7", border: "rgba(16,185,129,.28)", glow: "rgba(16,185,129,.15)" },
  Productivity:    { bg: "rgba(245,158,11,.12)",  text: "#fbbf24", border: "rgba(245,158,11,.28)", glow: "rgba(245,158,11,.15)" },
  Mindset:         { bg: "rgba(236,72,153,.12)",  text: "#f9a8d4", border: "rgba(236,72,153,.28)", glow: "rgba(236,72,153,.15)" },
  Technology:      { bg: "rgba(6,182,212,.12)",   text: "#67e8f9", border: "rgba(6,182,212,.28)",  glow: "rgba(6,182,212,.15)" },
  Business:        { bg: "rgba(167,139,250,.12)", text: "#c4b5fd", border: "rgba(167,139,250,.28)", glow: "rgba(167,139,250,.15)" },
  Wellness:        { bg: "rgba(20,184,166,.12)",  text: "#5eead4", border: "rgba(20,184,166,.28)", glow: "rgba(20,184,166,.15)" },
  Finance:         { bg: "rgba(251,146,60,.12)",  text: "#fdba74", border: "rgba(251,146,60,.28)", glow: "rgba(251,146,60,.15)" },
};

const FALLBACK_CAT = { bg: "rgba(148,163,184,.1)", text: "#94a3b8", border: "rgba(148,163,184,.25)", glow: "rgba(148,163,184,.1)" };

type Blog = {
  id: string; slug: string; title: string; excerpt: string;
  category: string; author: string; readTime: string;
  image: string; date: string; status: string;
};

// ── Category Badge ───────────────────────────────────────────────────────────

function CategoryBadge({ category, size = "sm" }: { category: string; size?: "sm" | "md" }) {
  const col = CAT_STYLES[category] ?? FALLBACK_CAT;
  return (
    <span
      className={`inline-flex items-center rounded-full font-black uppercase tracking-widest border ${
        size === "md" ? "px-3 py-1.5 text-[11px]" : "px-2.5 py-1 text-[10px]"
      }`}
      style={{ background: col.bg, color: col.text, borderColor: col.border }}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0" style={{ background: col.text }} />
      {category}
    </span>
  );
}

// ── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [imgErr, setImgErr] = useState(false);
  const [hovered, setHovered] = useState(false);
  const col = CAT_STYLES[blog.category] ?? FALLBACK_CAT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={`/blog/${blog.slug}`} className="block h-full">
        <motion.div
          animate={{
            y: hovered ? -7 : 0,
            boxShadow: hovered
              ? `0 24px 60px -10px ${col.glow}, 0 8px 24px rgba(0,0,0,0.25)`
              : "0 2px 12px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex flex-col h-full rounded-2xl overflow-hidden border"
          style={{
            background: "linear-gradient(145deg,#1a1f2e,#151922)",
            borderColor: hovered ? col.border : "rgba(255,255,255,.07)",
          }}
        >
          {/* Image */}
          <div
            className="relative h-52 overflow-hidden flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#1e1b4b,#0c1a2e)" }}
          >
            {blog.image && !imgErr ? (
              <motion.img
                src={blog.image}
                alt={blog.title}
                animate={{ scale: hovered ? 1.07 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover"
                onError={() => setImgErr(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen size={36} style={{ color: "rgba(255,255,255,.08)" }} />
              </div>
            )}

            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            />

            <div className="absolute top-3.5 left-3.5">
              <CategoryBadge category={blog.category} />
            </div>

            <motion.div
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
              style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
            >
              Read <ChevronRight size={10} />
            </motion.div>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5">
            <h2
              className="font-black text-[15px] leading-snug mb-2.5 line-clamp-2 transition-colors duration-200"
              style={{ color: hovered ? "#a78bfa" : "#f1f5f9" }}
            >
              {blog.title}
            </h2>
            {blog.excerpt && (
              <p className="text-[12px] leading-relaxed line-clamp-2 flex-1 mb-4" style={{ color: "#475569" }}>
                {blog.excerpt}
              </p>
            )}
            <div className="flex items-center gap-3 pt-3.5 border-t flex-wrap" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              {blog.author && (
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#475569" }}>
                  <User size={10} /> {blog.author}
                </span>
              )}
              {blog.readTime && (
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#475569" }}>
                  <Clock size={10} /> {blog.readTime}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Featured Card ────────────────────────────────────────────────────────────

function FeaturedCard({ blog }: { blog: Blog }) {
  const [imgErr, setImgErr] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={`/blog/${blog.slug}`} className="block">
        <motion.div
          animate={{
            boxShadow: hovered
              ? "0 32px 80px -12px rgba(124,58,237,0.25), 0 8px 24px rgba(0,0,0,0.3)"
              : "0 4px 20px rgba(0,0,0,0.2)",
          }}
          transition={{ duration: 0.4 }}
          className="group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden border"
          style={{
            background: "linear-gradient(145deg,#1a1f2e,#151922)",
            borderColor: hovered ? "rgba(124,58,237,.4)" : "rgba(255,255,255,.07)",
            minHeight: 380,
          }}
        >
          {/* Image side */}
          <div
            className="relative lg:w-[50%] h-64 lg:h-auto overflow-hidden flex-shrink-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1e1b4b,#0c2a40,#0c1a2e)" }}
          >
            {blog.image && !imgErr ? (
              <motion.img
                src={blog.image}
                alt={blog.title}
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full h-full object-cover"
                onError={() => setImgErr(true)}
              />
            ) : (
              <BookOpen size={56} style={{ color: "rgba(255,255,255,.06)" }} />
            )}
            {/* violet glow overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(124,58,237,.15),transparent 60%)" }} />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center flex-1 p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
              >
                <Sparkles size={10} /> Featured
              </span>
              <CategoryBadge category={blog.category} size="md" />
            </div>

            <h2
              className="text-2xl lg:text-4xl font-black leading-[1.1] mb-5 transition-colors duration-300"
              style={{ color: hovered ? "#a78bfa" : "#f1f5f9", letterSpacing: "-0.02em" }}
            >
              {blog.title}
            </h2>

            {blog.excerpt && (
              <p className="text-sm leading-relaxed mb-8 max-w-lg line-clamp-3" style={{ color: "#475569" }}>
                {blog.excerpt}
              </p>
            )}

            <div className="flex items-center gap-6 flex-wrap">
              {blog.author && (
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#475569" }}>
                  <User size={12} /> {blog.author}
                </span>
              )}
              {blog.readTime && (
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#475569" }}>
                  <Clock size={12} /> {blog.readTime}
                </span>
              )}
              <motion.span
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
                transition={{ duration: 0.25 }}
                className="ml-auto flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
              >
                Read Article <ArrowRight size={14} />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Skeleton ─────────────────────────────────────────────────────────────────

function SkeletonCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="rounded-2xl overflow-hidden border"
      style={{ background: "#1a1f2e", borderColor: "rgba(255,255,255,.06)" }}
    >
      <div className="h-52 animate-pulse" style={{ background: "rgba(255,255,255,.04)" }} />
      <div className="p-5 space-y-3">
        <div className="h-3 w-20 rounded-full animate-pulse" style={{ background: "rgba(255,255,255,.06)" }} />
        <div className="h-5 rounded-full animate-pulse" style={{ background: "rgba(255,255,255,.06)" }} />
        <div className="h-5 w-3/4 rounded-full animate-pulse" style={{ background: "rgba(255,255,255,.06)" }} />
        <div className="h-3 rounded-full animate-pulse" style={{ background: "rgba(255,255,255,.04)" }} />
        <div className="h-3 w-4/5 rounded-full animate-pulse" style={{ background: "rgba(255,255,255,.04)" }} />
      </div>
    </motion.div>
  );
}

// ── Ambient Orbs ─────────────────────────────────────────────────────────────

function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,.08),transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(6,182,212,.07),transparent 70%)" }} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogsPage() {
  const [blogs, setBlogs]                   = useState<Blog[]>([]);
  const [loading, setLoading]               = useState(true);
  const [search, setSearch]                 = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage]                     = useState(1);
  const [totalPages, setTotalPages]         = useState(1);
  const [total, setTotal]                   = useState(0);
  const LIMIT = 9;

  const fetchBlogs = useCallback(async (p = 1, cat = activeCategory) => {
    try {
      setLoading(true);
      const qs = new URLSearchParams({ status: "Published", limit: String(LIMIT), page: String(p) });
      if (cat !== "All") qs.set("category", cat);
      const res  = await fetch(`/api/blogs?${qs}`);
      const data = await res.json();
      setBlogs(data.blogs || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 1);
      setPage(p);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => { fetchBlogs(1); }, [fetchBlogs]);

  const handleCategory = (cat: string) => { setActiveCategory(cat); fetchBlogs(1, cat); };

  const filtered = search
    ? blogs.filter(b =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        (b.excerpt ?? "").toLowerCase().includes(search.toLowerCase())
      )
    : blogs;

  const featured = !search ? filtered[0]      : undefined;
  const rest     = !search ? filtered.slice(1) : filtered;

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0a0e1a 0%,#0f1221 50%,#080c16 100%)" }}
    >
      <AmbientOrbs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black tracking-widest uppercase border mb-6"
            style={{
              background:  "rgba(124,58,237,.12)",
              borderColor: "rgba(124,58,237,.3)",
              color:       "#a78bfa",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Insights &amp; Perspectives
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-5"
            style={{ color: "#f1f5f9", letterSpacing: "-0.03em" }}
          >
            Ideas That{" "}
            <span style={{
              background: "linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Redefine
            </span>{" "}
            Markets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.27 }}
            className="text-[#475569] text-lg max-w-2xl"
          >
            Expert perspectives on growth, leadership, and the future of digital business — from the frontlines.
          </motion.p>
        </motion.div>

        {/* ── Search + Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33 }}
          className="flex flex-col lg:flex-row gap-4 mb-12"
        >
          {/* Search */}
          <div className="relative lg:w-80 flex-shrink-0">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#334155" }} />
            <input
              type="text"
              placeholder="Search articles, topics..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-10 rounded-xl text-sm placeholder:text-[#334155] focus:outline-none transition-all"
              style={{
                background:  "rgba(255,255,255,.05)",
                border:      "1px solid rgba(255,255,255,.1)",
                color:       "#f1f5f9",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,.1)"; }}
              onBlur={e  => { e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.boxShadow = "none"; }}
            />
            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#475569" }}
                >
                  <X size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 flex-nowrap flex-1">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex-shrink-0 h-12 px-5 rounded-xl text-[11px] font-black uppercase tracking-widest border transition-all duration-200"
                  style={isActive
                    ? { background: "linear-gradient(135deg,#7c3aed,#06b6d4)", color: "#fff", borderColor: "transparent", boxShadow: "0 4px 20px rgba(124,58,237,.35)" }
                    : { background: "rgba(255,255,255,.04)", color: "#334155", borderColor: "rgba(255,255,255,.08)" }
                  }
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Content ── */}
        {loading ? (
          <div className="space-y-10">
            <div className="h-80 rounded-3xl animate-pulse border" style={{ background: "rgba(255,255,255,.04)", borderColor: "rgba(255,255,255,.06)" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} delay={i * 0.04} />)}
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 border"
              style={{ background: "rgba(124,58,237,.1)", borderColor: "rgba(124,58,237,.2)" }}
            >
              <BookOpen size={32} style={{ color: "#7c3aed" }} />
            </div>
            <p className="text-base mb-4" style={{ color: "#475569" }}>
              {search ? `No articles matching "${search}"` : "No articles published yet."}
            </p>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm font-bold underline underline-offset-4"
                style={{ color: "#a78bfa" }}
              >
                Clear search
              </button>
            )}
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${page}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="space-y-10"
            >
              {featured && page === 1 && <FeaturedCard blog={featured} />}

              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((blog, i) => <BlogCard key={blog.id} blog={blog} index={i} />)}
                </div>
              )}

              {totalPages > 1 && !search && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
                  className="flex items-center justify-center gap-4 pt-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    onClick={() => fetchBlogs(page - 1)} disabled={page <= 1}
                    className="px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: "rgba(255,255,255,.05)", borderColor: "rgba(255,255,255,.1)", color: "#475569" }}
                  >
                    ← Previous
                  </motion.button>
                  <span className="text-[11px] font-black uppercase tracking-widest px-4" style={{ color: "#334155" }}>
                    {page} / {totalPages}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    onClick={() => fetchBlogs(page + 1)} disabled={page >= totalPages}
                    className="px-7 py-3 rounded-xl text-xs text-white font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", boxShadow: "0 4px 20px rgba(124,58,237,.3)" }}
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}

              <p className="text-center text-[10px] font-bold uppercase tracking-widest pt-2" style={{ color: "#1e293b" }}>
                Showing {filtered.length} of {total} articles
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}