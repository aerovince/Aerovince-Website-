


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   motion,
//   AnimatePresence,
//   useInView,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Send,
//   CheckCircle,
//   TrendingUp,
//   Star,
//   Zap,
//   BarChart3,
//   Globe,
//   Users,
//   Heart,
//   ExternalLink,
//   Sparkles,
// } from "lucide-react";

// // ─── Services (inline — swap with your real import if available) ──────────────

// const SERVICES = [
//   { slug: "android-ios-development", title: "Android & iOS Development" },
//   { slug: "web-development", title: "Web Development Services" },
//   { slug: "market-research", title: "Market Research" },
//   { slug: "marketing-plan", title: "Marketing Plan Development" },
//   { slug: "performance-marketing", title: "Performance Marketing" },
//   { slug: "seo-analytics", title: "SEO & Analytics" },
//   { slug: "lead-generation", title: "Lead Generation" },
// ];

// // ─── Animated Counter ────────────────────────────────────────────────────────

// function useAnimatedCounter(target: number, duration = 1600, start = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let t0: number | null = null;
//     let raf = 0;
//     const tick = (ts: number) => {
//       if (!t0) t0 = ts;
//       const p = Math.min((ts - t0) / duration, 1);
//       setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
//       if (p < 1) raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [target, duration, start]);
//   return count;
// }

// // ─── Stat Card (dark version) ────────────────────────────────────────────────

// function StatCard({
//   value, suffix, prefix = "", label, color, Icon, delay, start,
// }: {
//   value: number; suffix: string; prefix?: string; label: string;
//   color: string; Icon: React.ElementType; delay: number; start: boolean;
// }) {
//   const count = useAnimatedCounter(value, 1600, start);
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
//       whileHover={{ y: -4, scale: 1.02 }}
//       className="relative group flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-default transition-all duration-300 hover:bg-white/8 hover:border-white/20"
//     >
//       {/* Glow on hover */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
//         style={{ background: `radial-gradient(circle at 50% 0%, ${color}22, transparent 70%)` }}
//       />
//       <div
//         className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shrink-0"
//         style={{ background: `${color}1a` }}
//       >
//         <Icon size={18} style={{ color }} />
//       </div>
//       <span className="text-2xl font-extrabold text-white tabular-nums">
//         {prefix}{count}{suffix}
//       </span>
//       <span className="text-xs text-white/50 mt-1 font-medium">{label}</span>
//     </motion.div>
//   );
// }

// // ─── Magnetic Social Button ──────────────────────────────────────────────────

// function MagneticSocial({
//   href, label, Icon, hoverBg, iconColor,
// }: {
//   href: string; label: string; Icon: React.ElementType;
//   hoverBg: string; iconColor: string;
// }) {
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const sx = useSpring(mx, { stiffness: 300, damping: 20 });
//   const sy = useSpring(my, { stiffness: 300, damping: 20 });

//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       onMouseMove={(e) => {
//         const r = e.currentTarget.getBoundingClientRect();
//         mx.set((e.clientX - r.left - r.width / 2) * 0.3);
//         my.set((e.clientY - r.top - r.height / 2) * 0.3);
//       }}
//       onMouseLeave={() => { mx.set(0); my.set(0); }}
//       style={{ x: sx, y: sy }}
//       whileHover={{ scale: 1.14 }}
//       whileTap={{ scale: 0.94 }}
//       className="relative w-10 h-10 rounded-xl flex items-center justify-center group overflow-hidden border border-white/10 bg-white/5 transition-colors duration-300 hover:border-white/20"
//     >
//       <span
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
//         style={{ background: hoverBg }}
//       />
//       <Icon size={16} className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300" />
//     </motion.a>
//   );
// }

// // ─── Mini Live Dashboard ─────────────────────────────────────────────────────

// const METRICS = [
//   { label: "ROI Delivered", value: "4.8x", change: "+29%", color: "#3b82f6" },
//   { label: "Leads / Month", value: "1.8K", change: "+34%", color: "#8b5cf6" },
//   { label: "Avg. CAC Drop", value: "−38%", change: "saved", color: "#10b981" },
// ];

// function MiniDashboard() {
//   const [active, setActive] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setActive((i) => (i + 1) % METRICS.length), 2800);
//     return () => clearInterval(id);
//   }, []);
//   const m = METRICS[active];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//       className="relative rounded-2xl bg-white/5 border border-white/10 p-5 overflow-hidden"
//     >
//       {/* Ambient color blob */}
//       <div
//         className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl transition-all duration-700 pointer-events-none"
//         style={{ background: `${m.color}33` }}
//       />

//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2">
//           <BarChart3 size={14} style={{ color: m.color }} />
//           <span className="text-xs font-semibold text-white/60">Live Results</span>
//         </div>
//         <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full font-medium">
//           <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
//           Live
//         </span>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={active}
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -8 }}
//           transition={{ duration: 0.28 }}
//         >
//           <p className="text-[11px] text-white/40 font-medium mb-0.5">{m.label}</p>
//           <p className="text-3xl font-extrabold text-white">{m.value}</p>
//           <p className="text-xs font-semibold mt-1" style={{ color: m.color }}>
//             {m.change} this month ↑
//           </p>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dot nav */}
//       <div className="flex gap-1.5 mt-4">
//         {METRICS.map((mm, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className="h-1.5 rounded-full transition-all duration-300"
//             style={{
//               width: i === active ? 20 : 6,
//               background: i === active ? m.color : "rgba(255,255,255,0.15)",
//             }}
//           />
//         ))}
//       </div>

//       {/* Bottom row */}
//       <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
//         <div className="flex -space-x-1.5">
//           {["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"].map((c, i) => (
//             <div
//               key={i}
//               className="w-5 h-5 rounded-full border-2 border-[#111827] flex items-center justify-center text-white text-[8px] font-bold"
//               style={{ background: c }}
//             >
//               {String.fromCharCode(65 + i)}
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-0.5">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
//           ))}
//         </div>
//         <span className="text-[10px] text-white/40 font-medium">150+ clients</span>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Newsletter ──────────────────────────────────────────────────────────────

// function NewsletterBox() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     setStatus("loading");
//     setTimeout(() => {
//       setStatus("done");
//       setEmail("");
//       setTimeout(() => setStatus("idle"), 3500);
//     }, 900);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//       className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-5"
//     >
//       {/* Gradient top strip */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

//       <div className="flex items-center gap-2 mb-1">
//         <Sparkles size={13} className="text-blue-400" />
//         <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Newsletter</span>
//       </div>
//       <h4 className="text-sm font-bold text-white mb-1">Growth tips, straight to you</h4>
//       <p className="text-xs text-white/40 mb-4 leading-relaxed">
//         Weekly breakdowns of what's actually working in digital marketing — no fluff.
//       </p>

//       <form onSubmit={handleSubmit} className="flex gap-2">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="your@email.com"
//           className="flex-1 min-w-0 px-3 py-2.5 text-sm bg-white/8 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
//           required
//           disabled={status !== "idle"}
//         />
//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           disabled={status !== "idle"}
//           className="relative overflow-hidden px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold shrink-0 disabled:opacity-50 shadow-lg shadow-blue-500/20 transition-all"
//         >
//           <AnimatePresence mode="wait">
//             {status === "done" ? (
//               <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
//                 <CheckCircle size={16} />
//               </motion.span>
//             ) : (
//               <motion.span key="send">
//                 <Send size={16} />
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       </form>

//       <AnimatePresence>
//         {status === "done" && (
//           <motion.p
//             initial={{ opacity: 0, y: 6 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//             className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1"
//           >
//             <CheckCircle size={11} /> You're in! Welcome to the growth list.
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // ─── Main Footer ─────────────────────────────────────────────────────────────

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const statsRef = useRef<HTMLDivElement>(null);
//   const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

//   const STATS = [
//     { value: 150, suffix: "+", label: "Projects Delivered", color: "#3b82f6", Icon: Zap },
//     { value: 98, suffix: "%", label: "Client Satisfaction", color: "#8b5cf6", Icon: Heart },
//     { value: 12, suffix: "M+", label: "Revenue Generated", color: "#10b981", Icon: TrendingUp, prefix: "$" },
//     { value: 40, suffix: "+", label: "Businesses Scaled", color: "#f59e0b", Icon: Users },
//   ] as const;

//   const socialLinks = [
//     { href: "https://www.facebook.com/aerovince", label: "Facebook", Icon: Facebook, hoverBg: "#1877f2", iconColor: "#1877f2" },
//     { href: "https://x.com/aerovince", label: "Twitter", Icon: Twitter, hoverBg: "#111", iconColor: "#fff" },
//     { href: "https://www.linkedin.com/company/aerovince", label: "LinkedIn", Icon: Linkedin, hoverBg: "#0a66c2", iconColor: "#0a66c2" },
//     { href: "https://www.instagram.com/aerovince", label: "Instagram", Icon: Instagram, hoverBg: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af)", iconColor: "#dd2a7b" },
//   ];

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "#about" },
//     { name: "Our Work", href: "#work" },
//     { name: "Pricing", href: "#pricing" },
//     { name: "Blog", href: "#blog" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <footer className="relative bg-gray-900 overflow-hidden" id="contact">

//       {/* ── Background effects ── */}
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//         {/* Subtle top gradient fade from page into footer */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
//         <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-3xl -translate-x-1/3 -translate-y-1/3" />
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-3xl translate-x-1/4 translate-y-1/4" />
//         {/* Faint grid */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
//             backgroundSize: "48px 48px",
//           }}
//         />
//       </div>

//       {/* ── Top separator line ── */}
//       <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ── CTA Banner ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
//           className="pt-16 pb-14"
//         >
//           <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border border-white/10 px-8 sm:px-12 py-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
//             {/* Inner glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(59,130,246,0.15),transparent)]" />
//             <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl" />
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

//             <div className="relative z-10 text-center lg:text-left max-w-xl">
//               <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                 Taking on new clients — limited spots
//               </span>
//               <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-white leading-tight mb-3">
//                 Ready to turn your brand{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
//                   into revenue?
//                 </span>
//               </h2>
//               <p className="text-white/50 text-sm leading-relaxed">
//                 Book a free 30-minute strategy session. We'll audit your current marketing and
//                 hand you a clear growth roadmap — no strings attached.
//               </p>
//             </div>

//             <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.04, y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-white/10 group whitespace-nowrap"
//               >
//                 Book Free Strategy Call
//                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//               </motion.a>
//               <motion.a
//                 href="#work"
//                 whileHover={{ scale: 1.03, y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors group whitespace-nowrap"
//               >
//                 View Our Work
//                 <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>

//         {/* ── Stats Row ── */}
//         <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//           {STATS.map((s, i) => (
//             <StatCard key={s.label} {...s} delay={i * 0.07} start={statsInView} />
//           ))}
//         </div>

//         {/* ── Main Grid ── */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

//           {/* Brand col — 4 cols */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-4 flex flex-col gap-5"
//           >
//             {/* ── Aerovince Logo (matches Navbar exactly) ── */}
//             <Link href="/" className="inline-flex items-center gap-2.5 group w-fit" aria-label="Aerovince home">
//               <div className="relative">
//                 <Image
//                   src="/logos/Aero logonew.png"
//                   alt="Aerovince"
//                   width={220}
//                   height={40}
//                   className="h-10 w-auto object-contain brightness-0 invert"
//                 />
//               </div>
//             </Link>

//             <p className="text-sm text-white/50 leading-relaxed max-w-xs">
//               A results-driven digital marketing agency helping ambitious brands grow faster through
//               SEO, paid ads, AI automation, and full-stack web development.
//             </p>

//             {/* Social */}
//             <div className="flex gap-2.5">
//               {socialLinks.map((s) => (
//                 <MagneticSocial key={s.label} {...s} />
//               ))}
//             </div>

//             {/* Rating */}
//             <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 w-fit">
//               <div className="flex gap-0.5">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
//                 ))}
//               </div>
//               <div>
//                 <span className="text-xs font-bold text-white">4.9/5</span>
//                 <span className="text-[10px] text-white/40 ml-1.5">from 150+ clients</span>
//               </div>
//             </div>

//             {/* Mini dashboard */}
//             <MiniDashboard />
//           </motion.div>

//           {/* Quick Links — 2 cols */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-2"
//           >
//             <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
//               <span className="w-4 h-px bg-gradient-to-r from-blue-500 to-violet-500" />
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((item, i) => (
//                 <motion.li
//                   key={item.name}
//                   initial={{ opacity: 0, x: -8 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
//                 >
//                   <Link
//                     href={item.href}
//                     className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
//                   >
//                     <ArrowRight
//                       size={11}
//                       className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400"
//                     />
//                     {item.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services — 3 cols */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-3"
//           >
//             <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
//               <span className="w-4 h-px bg-gradient-to-r from-violet-500 to-cyan-400" />
//               Services
//             </h4>
//             <ul className="space-y-3">
//               {SERVICES.map((service, i) => (
//                 <motion.li
//                   key={service.slug}
//                   initial={{ opacity: 0, x: -8 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: 0.12 + i * 0.04 }}
//                 >
//                   <Link
//                     href={`/services/${service.slug}`}
//                     className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
//                   >
//                     <ArrowRight
//                       size={11}
//                       className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-violet-400"
//                     />
//                     {service.title}
//                   </Link>
//                 </motion.li>
//               ))}
//               <li>
//                 <Link
//                   href="/services"
//                   className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors group mt-1"
//                 >
//                   All Services
//                   <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Contact + Newsletter — 3 cols */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-3 flex flex-col gap-5"
//           >
//             <div>
//               <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
//                 <span className="w-4 h-px bg-gradient-to-r from-cyan-400 to-blue-500" />
//                 Contact Us
//               </h4>
//               <ul className="space-y-4">
//                 {/* Address */}
//                 <li>
//                   <a
//                     href="https://maps.google.com/?q=Scheme+No+78+Vijay+Nagar+Indore"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex items-start gap-3"
//                   >
//                     <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
//                       <MapPin size={14} className="text-blue-400" />
//                     </div>
//                     <span className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
//                       Scheme No. 78, Vijay Nagar,<br />Indore, Madhya Pradesh
//                     </span>
//                   </a>
//                 </li>
//                 {/* Phone */}
//                 <li>
//                   <a
//                     href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW}`}
//                     className="group flex items-center gap-3"
//                   >
//                     <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors">
//                       <Phone size={14} className="text-violet-400" />
//                     </div>
//                     <span className="text-sm text-white/50 font-medium group-hover:text-white/70 transition-colors">
//                       {process.env.NEXT_PUBLIC_CONTACT_PHONE}
//                     </span>
//                   </a>
//                 </li>
//                 {/* Email */}
//                 <li>
//                   <a
//                     href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
//                     className="group flex items-center gap-3"
//                   >
//                     <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/25 transition-colors">
//                       <Mail size={14} className="text-cyan-400" />
//                     </div>
//                     <span className="text-sm text-white/50 font-medium group-hover:text-white/70 transition-colors">
//                       {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Global badge */}
//             <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 w-fit">
//               <Globe size={13} className="text-blue-400 shrink-0" />
//               <span className="text-xs font-medium text-white/50">Serving clients globally</span>
//             </div>

//             {/* Newsletter */}
//             <NewsletterBox />
//           </motion.div>
//         </div>

//         {/* ── Bottom Bar ── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
//         >
//           <p className="text-xs text-white/30 text-center sm:text-left">
//             © {currentYear}{" "}
//             <span className="text-white/50 font-semibold">Aerovince.</span>{" "}
//             All Rights Reserved.
//           </p>

//           <div className="flex items-center gap-5">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
//               <Link
//                 key={item}
//                 href="#"
//                 className="text-xs text-white/30 hover:text-white/60 transition-colors font-medium"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </motion.div>

//         {/* ── Bottom gradient line ── */}
//         <motion.div
//           initial={{ opacity: 0, scaleX: 0 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//           className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-center mb-0"
//         />
//       </div>
//     </footer>
//   );
// }

























"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
  TrendingUp,
  Star,
  Zap,
  BarChart3,
  Globe,
  Users,
  Heart,
  ExternalLink,
  Sparkles,
} from "lucide-react";

// ─── Services ────────────────────────────────────────────────────────────────

const SERVICES = [
  { slug: "android-ios-development",   title: "Android & iOS Development" },
  { slug: "web-development",           title: "Web Development Services" },
  { slug: "market-research",           title: "Market Research" },
  { slug: "marketing-plan",            title: "Marketing Plan Development" },
  { slug: "performance-marketing",     title: "Performance Marketing" },
  { slug: "seo-analytics",             title: "SEO & Analytics" },
  { slug: "lead-generation",           title: "Lead Generation" },
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    let raf = 0;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

// ─── Stat Card ───────────────────────────────────────────────────────────────

function StatCard({
  value, suffix, prefix = "", label, color, Icon, delay, start,
}: {
  value: number; suffix: string; prefix?: string; label: string;
  color: string; Icon: React.ElementType; delay: number; start: boolean;
}) {
  const count = useAnimatedCounter(value, 1600, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-default transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}22, transparent 70%)` }}
      />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shrink-0"
        style={{ background: `${color}1a` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <span className="text-2xl font-extrabold text-white tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs text-white/50 mt-1 font-medium">{label}</span>
    </motion.div>
  );
}

// ─── Magnetic Social ─────────────────────────────────────────────────────────

function MagneticSocial({
  href, label, Icon, hoverBg,
}: {
  href: string; label: string; Icon: React.ElementType;
  hoverBg: string; iconColor: string;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 20 });
  const sy = useSpring(my, { stiffness: 300, damping: 20 });

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * 0.3);
        my.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.14 }}
      whileTap={{ scale: 0.94 }}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center group overflow-hidden border border-white/10 bg-white/5 transition-colors duration-300 hover:border-white/20"
    >
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{ background: hoverBg }}
      />
      <Icon size={16} className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300" />
    </motion.a>
  );
}

// ─── Mini Live Dashboard ─────────────────────────────────────────────────────

const METRICS = [
  { label: "ROI Delivered",  value: "4.8x",  change: "+29%",  color: "#3b82f6" },
  { label: "Leads / Month",  value: "1.8K",  change: "+34%",  color: "#8b5cf6" },
  { label: "Avg. CAC Drop",  value: "−38%",  change: "saved", color: "#10b981" },
];

function MiniDashboard() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % METRICS.length), 2800);
    return () => clearInterval(id);
  }, []);
  const m = METRICS[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl bg-white/5 border border-white/10 p-5 overflow-hidden"
    >
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl transition-all duration-700 pointer-events-none"
        style={{ background: `${m.color}33` }}
      />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 size={14} style={{ color: m.color }} />
          <span className="text-xs font-semibold text-white/60">Live Results</span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Live
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          <p className="text-[11px] text-white/40 font-medium mb-0.5">{m.label}</p>
          <p className="text-3xl font-extrabold text-white">{m.value}</p>
          <p className="text-xs font-semibold mt-1" style={{ color: m.color }}>
            {m.change} this month ↑
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-1.5 mt-4">
        {METRICS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 20 : 6,
              background: i === active ? m.color : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex -space-x-1.5">
          {["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"].map((c, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-[#111827] flex items-center justify-center text-white text-[8px] font-bold"
              style={{ background: c }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[10px] text-white/40 font-medium">150+ clients</span>
      </div>
    </motion.div>
  );
}

// ─── Newsletter ──────────────────────────────────────────────────────────────

function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-5"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
      <div className="flex items-center gap-2 mb-1">
        <Sparkles size={13} className="text-blue-400" />
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Newsletter</span>
      </div>
      <h4 className="text-sm font-bold text-white mb-1">Growth tips, straight to you</h4>
      <p className="text-xs text-white/40 mb-4 leading-relaxed">
        Weekly breakdowns of what's actually working in digital marketing — no fluff.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 px-3 py-2.5 text-sm bg-white/[0.08] border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
          required
          disabled={status !== "idle"}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status !== "idle"}
          className="relative overflow-hidden px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold shrink-0 disabled:opacity-50 shadow-lg shadow-blue-500/20 transition-all"
        >
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <CheckCircle size={16} />
              </motion.span>
            ) : (
              <motion.span key="send">
                <Send size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
      <AnimatePresence>
        {status === "done" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1"
          >
            <CheckCircle size={11} /> You're in! Welcome to the growth list.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Footer ─────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const STATS = [
    { value: 150, suffix: "+",  label: "Projects Delivered",  color: "#3b82f6", Icon: Zap,        prefix: ""  },
    { value: 98,  suffix: "%",  label: "Client Satisfaction", color: "#8b5cf6", Icon: Heart,      prefix: ""  },
    { value: 12,  suffix: "M+", label: "Revenue Generated",   color: "#10b981", Icon: TrendingUp, prefix: "$" },
    { value: 40,  suffix: "+",  label: "Businesses Scaled",   color: "#f59e0b", Icon: Users,      prefix: ""  },
  ] as const;

  const socialLinks = [
    { href: "https://www.facebook.com/aerovince",          label: "Facebook",  Icon: Facebook,  hoverBg: "#1877f2",                                            iconColor: "#1877f2" },
    { href: "https://x.com/aerovince",                     label: "Twitter",   Icon: Twitter,   hoverBg: "#111",                                               iconColor: "#fff"    },
    { href: "https://www.linkedin.com/company/aerovince",  label: "LinkedIn",  Icon: Linkedin,  hoverBg: "#0a66c2",                                            iconColor: "#0a66c2" },
    { href: "https://www.instagram.com/aerovince",         label: "Instagram", Icon: Instagram, hoverBg: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af)",    iconColor: "#dd2a7b" },
  ];

  const quickLinks = [
    { name: "Home",     href: "/"        },
    { name: "About Us", href: "/about"   },
    { name: "Our Work", href: "#work"    },
    { name: "Pricing",  href: "#pricing" },
    { name: "Blog",     href: "#blog"    },
    { name: "Contact",  href: "#contact" },
  ];

  return (
    <footer className="relative bg-gray-900 overflow-hidden" id="footer">

      {/* ── Background effects ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/[0.08] blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/[0.08] blur-3xl translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ── Top separator line ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="pt-16 pb-14"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border border-white/10 px-8 sm:px-12 py-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(59,130,246,0.15),transparent)]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10 text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Taking on new clients — limited spots
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-white leading-tight mb-3">
                Ready to turn your brand{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  into revenue?
                </span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Book a free 30-minute strategy session. We'll audit your current marketing and
                hand you a clear growth roadmap — no strings attached.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-white/10 group whitespace-nowrap"
              >
                Book Free Strategy Call
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors group whitespace-nowrap"
              >
                View Our Work
                <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ── Stats Row ── */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.07} start={statsInView} />
          ))}
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

          {/* ── Brand col — 4 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-5"
          >
            {/*
              ── LOGO FIX ──────────────────────────────────────────────────────
              The logo PNG has a light/white background and dark-colored text.
              On a dark footer we can't use brightness-0+invert (turns bg black).
              Instead we render it inside a rounded white pill — exactly how
              premium agency footers handle light-background logos on dark surfaces.
              Same dimensions as the navbar logo (h-10 w-auto).
            */}
            <Link href="/" aria-label="Aerovince home" className="w-fit group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-white/[0.06] border border-white/10 group-hover:bg-white/[0.10] group-hover:border-white/20 transition-all duration-300"
              >
                <Image
                  src="/logos/Aero logonew.png"
                  alt="Aerovince"
                  width={160}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A results-driven digital marketing agency helping ambitious brands grow faster through
              SEO, paid ads, AI automation, and full-stack web development.
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <MagneticSocial key={s.label} {...s} />
              ))}
            </div>

            {/* Rating */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 w-fit">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <span className="text-xs font-bold text-white">4.9/5</span>
                <span className="text-[10px] text-white/40 ml-1.5">from 150+ clients</span>
              </div>
            </div>

            {/* Mini dashboard */}
            <MiniDashboard />
          </motion.div>

          {/* ── Quick Links — 2 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-blue-500 to-violet-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400"
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Services — 3 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-violet-500 to-cyan-400" />
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service, i) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.12 + i * 0.04 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-violet-400"
                    />
                    {service.title}
                  </Link>
                </motion.li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors group mt-1"
                >
                  All Services
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* ── Contact + Newsletter — 3 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            <div>
              <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-gradient-to-r from-cyan-400 to-blue-500" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://maps.google.com/?q=Scheme+No+78+Vijay+Nagar+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
                      <MapPin size={14} className="text-blue-400" />
                    </div>
                    <span className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                      Scheme No. 78, Vijay Nagar,<br />Indore, Madhya Pradesh
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW}`}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors">
                      <Phone size={14} className="text-violet-400" />
                    </div>
                    <span className="text-sm text-white/50 font-medium group-hover:text-white/70 transition-colors">
                      {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/25 transition-colors">
                      <Mail size={14} className="text-cyan-400" />
                    </div>
                    <span className="text-sm text-white/50 font-medium group-hover:text-white/70 transition-colors">
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 w-fit">
              <Globe size={13} className="text-blue-400 shrink-0" />
              <span className="text-xs font-medium text-white/50">Serving clients globally</span>
            </div>

            <NewsletterBox />
          </motion.div>
        </div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {currentYear}{" "}
            <span className="text-white/50 font-semibold">Aerovince.</span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom gradient line ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-center"
        />
      </div>
    </footer>
  );
}