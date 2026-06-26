






// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number;
//   tagline: string;
//   heading: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
// };

// // ─── Color Schemes ────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
// };

// // ─── Founder Data ─────────────────────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Kautilya Kalyan",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.jpeg",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kautilya Kalyan",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.jpeg",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
// ];

// // ─── Per-slide unique text ────────────────────────────────────────────────────
// const slideTextData: {
//   tagline: string; heading: string; highlight: string;
//   subtitle: string; description: string; ctaPrimary: string; ctaSecondary: string;
// }[] = [
//     {
//       tagline: "MEET THE VISIONARY",
//       heading: "Dominate the",
//       highlight: "Digital Frontier",
//       subtitle: "Where vision meets velocity",
//       description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//       ctaPrimary: "Launch Vision",
//       ctaSecondary: "Explore Strategy",
//     },
//     {
//       tagline: "BLUE OCEAN STRATEGY",
//       heading: "Build a",
//       highlight: "Legacy Brand",
//       subtitle: "Data-driven storytelling at scale",
//       description: "From strategy to execution — we architect brands that don't just compete, they redefine the market entirely.",
//       ctaPrimary: "Start Building",
//       ctaSecondary: "View Our Work",
//     },
//     {
//       tagline: "FOUNDER'S JOURNEY",
//       heading: "Scale Beyond",
//       highlight: "Your Limits",
//       subtitle: "Proven systems for 10× growth",
//       description: "150+ brands scaled. 98% success rate. We don't follow trends — we create them with precision and purpose.",
//       ctaPrimary: "Let's Scale",
//       ctaSecondary: "See Results",
//     },
//     {
//       tagline: "MEET THE DISRUPTOR",
//       heading: "Break the",
//       highlight: "Status Quo",
//       subtitle: "Bold moves create bold empires",
//       description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//       ctaPrimary: "Start Rebellion",
//       ctaSecondary: "Read Manifesto",
//     },
//     {
//       tagline: "REBEL ECONOMICS",
//       heading: "Disrupt or",
//       highlight: "Be Disrupted",
//       subtitle: "No middle ground. Only momentum.",
//       description: "200+ campaigns. 15× average ROI. We engineer market disruptions that competitors scramble to understand.",
//       ctaPrimary: "Disrupt Now",
//       ctaSecondary: "Our Strategy",
//     },
//     {
//       tagline: "AWARD-WINNING IMPACT",
//       heading: "Win the",
//       highlight: "Market Game",
//       subtitle: "45+ industry awards and counting",
//       description: "Recognition follows results. From global campaigns to hyper-local execution — we turn bold ideas into market domination.",
//       ctaPrimary: "Claim Victory",
//       ctaSecondary: "View Awards",
//     },
//   ];

// const allSlides: Slide[] = founderData.flatMap((f, fi) =>
//   (["image", "video", "video2"] as MediaType[]).map((mediaType, mi) => {
//     const si = fi * 3 + mi;
//     return { founderId: f.id, mediaType, founderIndex: fi, ...slideTextData[si] };
//   })
// );
// const TOTAL = allSlides.length;
// const IMAGE_HOLD_MS = 2500;

// // ─── OPTIMIZATION 1: VideoProgress — DOM-only updates, zero React state ───────
// const VideoProgress = React.memo(({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) => {
//   const barRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => {
//       if (barRef.current && v.duration) {
//         barRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
//       }
//     };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);

//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div ref={barRef} className="h-full bg-white/85" style={{ width: "0%" }} />
//     </div>
//   );
// });
// VideoProgress.displayName = "VideoProgress";

// // ─── LiveBadge ────────────────────────────────────────────────────────────────
// const LiveBadge = React.memo(({ label }: { label: string }) => (
//   <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </div>
// ));
// LiveBadge.displayName = "LiveBadge";

// // ─── OPTIMIZATION 2: Particles — memoized, stable deterministic values, CSS animation ─
// // FIX (react-hooks/purity + react-hooks/set-state-in-effect): Math.random()
// // can't be called during the render phase (impure), and calling setState
// // synchronously inside a useEffect body causes an avoidable cascading render.
// // Instead we use a deterministic seeded pseudo-random generator and compute
// // the particle positions once at module scope. This is pure (no render-time
// // randomness), requires no effect/setState round-trip, and produces the same
// // output on the server and the client, so there's no hydration mismatch either.
// interface ParticleItem {
//   left: string;
//   top: string;
//   delay: string;
//   duration: string;
// }

// const PARTICLE_COUNT = 10;

// function seededRandom(seed: number): number {
//   const x = Math.sin(seed) * 43758.5453123;
//   return x - Math.floor(x);
// }

// const PARTICLES: ParticleItem[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
//   left: `${(seededRandom(i * 12.9898) * 100).toFixed(2)}%`,
//   top: `${(seededRandom(i * 78.233 + 1) * 100).toFixed(2)}%`,
//   delay: `${(seededRandom(i * 37.719 + 2) * 7).toFixed(2)}s`,
//   duration: `${(3.5 + seededRandom(i * 93.989 + 3) * 2.5).toFixed(2)}s`,
// }));

// const Particles = React.memo(({ color }: { color: string }) => {
//   return (
//     <>
//       <style>{`
//         @keyframes particle-float {
//           0%   { transform: translateY(0)   scale(0); opacity: 0; }
//           20%  { opacity: 0.55; }
//           80%  { opacity: 0.55; }
//           100% { transform: translateY(-140px) scale(1.6); opacity: 0; }
//         }
//         .particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;
//           animation: particle-float var(--dur) var(--delay) infinite ease-in-out;
//         }
//       `}</style>
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {PARTICLES.map((p, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               background: color,
//               left: p.left,
//               top: p.top,
//               "--delay": p.delay,
//               "--dur": p.duration,
//             } as React.CSSProperties}
//           />
//         ))}
//       </div>
//     </>
//   );
// });
// Particles.displayName = "Particles";

// // ─── OPTIMIZATION 3: SlideCard — memoized, CSS hover transitions ──────────────
// const SlideCard = React.memo(({
//   slideIdx,
//   domPosition,
//   centerIdx,
//   onMediaEnd,
// }: {
//   slideIdx: number;
//   domPosition: number;
//   centerIdx: number;
//   onMediaEnd: () => void;
// }) => {
//   const isCenter = domPosition === 1;
//   const slide = allSlides[slideIdx];
//   const founder = founderData[slide.founderIndex];
//   const s = founder.colorScheme;

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const firedRef = useRef(false);

//   useEffect(() => {
//     if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
//     firedRef.current = false;

//     const v = videoRef.current;
//     if (!isCenter) {
//       if (v) { v.pause(); v.currentTime = 0; }
//       return;
//     }

//     if (slide.mediaType === "image") {
//       timerRef.current = setTimeout(() => {
//         if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//       }, IMAGE_HOLD_MS);
//     } else {
//       if (v) {
//         v.currentTime = 0;
//         const p = v.play();
//         if (p !== undefined) {
//           p.catch(() => {
//             timerRef.current = setTimeout(() => {
//               if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//             }, 5000);
//           });
//         }
//       }
//     }

//     return () => { if (timerRef.current) clearTimeout(timerRef.current); };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [centerIdx, isCenter]);

//   const handleVideoEnd = useCallback(() => {
//     if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc = slide.mediaType === "video2" ? founder.video2 : founder.video;
//   const videoLabel = slide.mediaType === "video2" ? "2 / 2" : "1 / 2";

//   // OPTIMIZATION: CSS transitions for scale/opacity instead of Framer Motion
//   const cardStyle: React.CSSProperties = {
//     zIndex: isCenter ? 20 : 10,
//     transform: isCenter ? "scale(1)" : "scale(0.79)",
//     opacity: isCenter ? 1 : 0.4,
//     transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
//     position: "relative",
//     cursor: "pointer",
//     flexShrink: 0,
//   };

//   return (
//     <div
//       style={cardStyle}
//       className={`slide-card${isCenter ? " slide-card--center" : ""}`}
//     >
//       <style>{`
//         .slide-card:hover { transform: scale(0.82) !important; }
//         .slide-card--center:hover { transform: scale(1.015) !important; }
//         .slide-card-name { transition: transform 0.26s ease; }
//         .slide-card:hover .slide-card-name { transform: translateY(-8px); }
//         .slide-card-label { transition: transform 0.26s ease; }
//         .slide-card:hover .slide-card-label { transform: translateX(4px); }
//         .slide-card-title { transition: opacity 0.26s ease; }
//         .slide-card:hover .slide-card-title { opacity: 1 !important; }
//       `}</style>

//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div className={[
//         "relative rounded-2xl overflow-hidden shadow-2xl",
//         isCenter
//           ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//           : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//       ].join(" ")}>

//         {/* Image */}
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image}
//               alt={founder.name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, 320px"
//               priority={isCenter}
//               // OPTIMIZATION: non-center images lazy loaded
//               loading={isCenter ? "eager" : "lazy"}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   key={`imgbar-${centerIdx}`}
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {/* Video — OPTIMIZATION: preload="metadata", key forces src swap */}
//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               key={`vid-${slideIdx}`}
//               ref={videoRef}
//               src={videoSrc}
//               className="w-full h-full object-cover"
//               muted
//               playsInline
//               // OPTIMIZATION: only center card preloads; side cards defer
//               preload={isCenter ? "auto" : "metadata"}
//               onEnded={handleVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         {/* Name overlay — CSS transitions replace Framer Motion */}
//         <div className="slide-card-name absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20">
//           <div className="slide-card-label flex items-center gap-1.5 mb-0.5">
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </div>
//           <h3 className="slide-card-label text-xs sm:text-sm md:text-base font-bold leading-tight">
//             {founder.name}
//           </h3>
//           <p className="slide-card-title text-[9px] sm:text-[10px] text-white/60 mt-0.5" style={{ opacity: 0.55 }}>
//             {founder.title}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// });
// SlideCard.displayName = "SlideCard";

// // ─── OPTIMIZATION 4: Memoized left-panel subcomponents ───────────────────────
// const HeroStats = React.memo(({ stats, gradFrom, gradTo }: {
//   stats: FounderData["stats"];
//   gradFrom: string;
//   gradTo: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23 }}
//     className="flex gap-6 sm:gap-10 pt-1"
//   >
//     {stats.map((stat, i) => (
//       // OPTIMIZATION: whileHover replaced with CSS
//       <div key={i} className="hero-stat" style={{ cursor: "default" }}>
//         <style>{`.hero-stat { transition: transform .18s ease; } .hero-stat:hover { transform: translateY(-4px); }`}</style>
//         <p className="text-2xl sm:text-3xl font-black" style={{
//           background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}>
//           {stat.value}
//         </p>
//         <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
//       </div>
//     ))}
//   </motion.div>
// ));
// HeroStats.displayName = "HeroStats";

// const HeroCTAs = React.memo(({ ctaPrimary, ctaSecondary, gradFrom, gradTo }: {
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradTo: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27 }}
//     className="flex flex-wrap gap-3 pt-1"
//   >
//     {/* OPTIMIZATION: whileHover/whileTap replaced with CSS */}
//     <style>{`
//       .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
//       .cta-primary:hover { transform: scale(1.03); }
//       .cta-primary:active { transform: scale(0.97); }
//       .cta-secondary { transition: transform .15s ease, box-shadow .15s ease; }
//       .cta-secondary:hover { transform: scale(1.03); }
//       .cta-secondary:active { transform: scale(0.97); }
//     `}</style>
//     <Link
//       href="/contact"
//       className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg"
//       style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
//     >
//       {ctaPrimary}
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//       </svg>
//     </Link>
//     <Link
//       href="/work"
//       className="cta-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md"
//     >
//       {ctaSecondary}
//     </Link>
//   </motion.div>
// ));
// HeroCTAs.displayName = "HeroCTAs";

// // ─── OPTIMIZATION 5: HeroBackground — separate memoized component ─────────────
// // Isolates background re-renders from text/carousel updates
// const HeroBackground = React.memo(({ founderIndex, gradFrom, gradTo }: {
//   founderIndex: number;
//   gradFrom: string;
//   gradTo: string;
// }) => (
//   <>
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={`bg-${founderIndex}`}
//         className="absolute inset-0 pointer-events-none"
//         style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${gradFrom}0a, transparent 70%)` }}
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//         transition={{ duration: 0.9 }}
//       />
//     </AnimatePresence>

//     {/* OPTIMIZATION: blur reduced from 90px/100px → 40px, static gradient blobs */}
//     <div
//       className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full pointer-events-none"
//       style={{
//         background: `radial-gradient(circle, ${gradFrom}13, transparent)`,
//         filter: "blur(40px)",
//       }}
//     />
//     <div
//       className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full pointer-events-none"
//       style={{
//         background: `radial-gradient(circle, ${gradTo}10, transparent)`,
//         filter: "blur(40px)",
//       }}
//     />
//   </>
// ));
// HeroBackground.displayName = "HeroBackground";

// // ─── Main ─────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   // OPTIMIZATION: removed mounted useState — use CSS to handle SSR flash instead
//   const [centerIdx, setCenterIdx] = useState(0);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo(0, 0);
//     }
//   }, []);

//   const currentSlide = allSlides[centerIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s = currentFounder.colorScheme;

//   const goNext = useCallback(() => setCenterIdx((p) => (p + 1) % TOTAL), []);
//   const goPrev = useCallback(() => setCenterIdx((p) => (p - 1 + TOTAL) % TOTAL), []);
//   const goToFounder = useCallback((fi: number) => setCenterIdx(fi * 3), []);

//   const handleMediaEnd = useCallback(() => {
//     setCenterIdx((p) => (p + 1) % TOTAL);
//   }, []);

//   const leftIdx = (centerIdx - 1 + TOTAL) % TOTAL;
//   const rightIdx = (centerIdx + 1) % TOTAL;

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       {/* OPTIMIZATION: Memoized background — only re-renders on founder change */}
//       <HeroBackground
//         founderIndex={currentSlide.founderIndex}
//         gradFrom={s.gradFrom}
//         gradTo={s.gradTo}
//       />

//       {/* OPTIMIZATION: Memoized particles with stable random values */}
//       <Particles color={s.gradFrom} />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* ── LEFT: text ── */}
//             {/* OPTIMIZATION: only the changing content inside AnimatePresence
//                 The outer wrapper stays mounted; only inner text transitions */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${centerIdx}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.38, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`,
//                     borderColor: `${s.gradFrom}2e`,
//                     color: s.gradFrom,
//                   }}
//                 >
//                   {currentSlide.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{currentSlide.heading}</span>
//                   <br />
//                   <span style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}>
//                     {currentSlide.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {currentSlide.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.19 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {currentSlide.description}
//                 </motion.p>

//                 {/* Stats — memoized */}
//                 <HeroStats
//                   stats={currentFounder.stats}
//                   gradFrom={s.gradFrom}
//                   gradTo={s.gradTo}
//                 />

//                 {/* CTAs — memoized */}
//                 <HeroCTAs
//                   ctaPrimary={currentSlide.ctaPrimary}
//                   ctaSecondary={currentSlide.ctaSecondary}
//                   gradFrom={s.gradFrom}
//                   gradTo={s.gradTo}
//                 />

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       {/* FIX (react/no-unescaped-entities): replaced literal "
//                           characters with &ldquo; / &rdquo; HTML entities */}
//                       <p className="text-gray-500 text-xs italic leading-relaxed">&ldquo;{currentFounder.quote}&rdquo;</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* ── RIGHT: carousel ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {([leftIdx, centerIdx, rightIdx] as const).map((slideIdx, domPos) => (
//                   <SlideCard
//                     key={domPos}
//                     slideIdx={slideIdx}
//                     domPosition={domPos}
//                     centerIdx={centerIdx}
//                     onMediaEnd={handleMediaEnd}
//                   />
//                 ))}
//               </div>

//               {/* Nav */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={goPrev}
//                   aria-label="Previous slide"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <div className="flex gap-2 items-center">
//                   {founderData.map((founder, i) => {
//                     const isActive = currentSlide.founderIndex === i;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => goToFounder(i)}
//                         aria-label={founder.name}
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width: isActive ? 24 : 8,
//                           height: 8,
//                           background: isActive ? founder.colorScheme.gradFrom : "#d1d5db",
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={goNext}
//                   aria-label="Next slide"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Slide-within-founder indicators */}
//               <div className="flex items-center justify-center gap-3 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => {
//                   const activeSlotWithinFounder = centerIdx % 3;
//                   const isActiveSlot = activeSlotWithinFounder === i;
//                   return (
//                     <button
//                       key={i}
//                       onClick={() => setCenterIdx(currentSlide.founderIndex * 3 + i)}
//                       className="flex items-center gap-1.5"
//                     >
//                       <div
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width: isActiveSlot ? 16 : 8,
//                           height: 8,
//                           background: isActiveSlot ? s.gradFrom : "#d1d5db",
//                         }}
//                       />
//                       <span
//                         className="text-[10px] transition-colors duration-200"
//                         style={{ color: isActiveSlot ? s.gradFrom : "#9ca3af" }}
//                       >
//                         {label}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








































"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X, Zap, TrendingUp, Users, BarChart3, Globe, Star } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const ANIMATED_WORDS = [
  { text: "Grow", gradient: "from-blue-500 to-cyan-400" },
  { text: "Scale", gradient: "from-violet-500 to-purple-400" },
  { text: "Convert", gradient: "from-cyan-500 to-blue-400" },
  { text: "Dominate", gradient: "from-rose-500 to-orange-400" },
  { text: "Launch", gradient: "from-emerald-500 to-teal-400" },
  { text: "Automate", gradient: "from-amber-500 to-yellow-400" },
];

const STATS: StatItem[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "M+", label: "Revenue Generated", prefix: "$" },
  { value: 40, suffix: "+", label: "Businesses Scaled" },
];

const CLIENT_LOGOS = [
  "TechVault", "NovaBrand", "PulseMedia", "ZenithCo", "CoreScale",
  "BrightPath", "OmniLaunch", "StrideCo", "FlowBase", "PeakForge",
];

const DASHBOARD_METRICS: DashboardMetric[] = [
  { label: "Organic Traffic", value: "48.2K", change: "+34.7%", positive: true, icon: <Globe size={14} /> },
  { label: "Leads Generated", value: "1,847", change: "+22.1%", positive: true, icon: <Users size={14} /> },
  { label: "Revenue Growth", value: "$94.3K", change: "+41.2%", positive: true, icon: <TrendingUp size={14} /> },
  { label: "Conversion Rate", value: "7.4%", change: "+2.3%", positive: true, icon: <Zap size={14} /> },
];

const CHART_POINTS = [18, 32, 28, 45, 38, 55, 48, 67, 58, 72, 65, 88];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedStat({ value, suffix, label, prefix, delay, start }: StatItem & { delay: number; start: boolean }) {
  const count = useAnimatedCounter(value, 1800, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col"
    >
      <span className="text-2xl font-bold text-gray-900 tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

function LogoMarquee() {
  return (
    <div className="relative overflow-hidden mt-10">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4 text-center">
        Trusted by ambitious brands
      </p>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 shrink-0"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
            <span
              key={i}
              className="text-gray-300 font-semibold text-sm tracking-wide hover:text-blue-500 transition-colors duration-300 cursor-default select-none whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function MiniChart() {
  const max = Math.max(...CHART_POINTS);
  const pts = CHART_POINTS.map((v, i) => ({
    x: (i / (CHART_POINTS.length - 1)) * 100,
    y: 100 - (v / max) * 100,
  }));
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
  const fill = `${path} L100 100 L0 100 Z`;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-20">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#chartGrad)" />
      <motion.path
        d={path}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      />
      <motion.circle
        cx={pts[pts.length - 1].x}
        cy={pts[pts.length - 1].y}
        r="3"
        fill="#3b82f6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.3 }}
      />
    </svg>
  );
}

function FloatingDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[540px] mx-auto"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/40 via-violet-200/20 to-cyan-200/30 rounded-3xl blur-3xl" />
      <div className="absolute -inset-2 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-2xl blur-xl" />

      {/* Main glass card */}
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-500/10 overflow-hidden">

        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="text-sm font-semibold text-gray-800">Growth Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Live
          </div>
        </div>

        {/* Chart section */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-end justify-between mb-1">
            <div>
              <p className="text-xs text-gray-400 font-medium">Monthly Revenue</p>
              <motion.p
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                $94,300
              </motion.p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              +41.2% ↑
            </span>
          </div>
          <MiniChart />
          <div className="flex justify-between text-[10px] text-gray-300 font-medium mt-1">
            {["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 px-5 py-4">
          {DASHBOARD_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              className="bg-gray-50/80 rounded-xl p-3 border border-gray-100"
            >
              <div className="flex items-center gap-1.5 text-gray-400 mb-1.5">
                {m.icon}
                <span className="text-[10px] font-medium">{m.label}</span>
              </div>
              <p className="text-base font-bold text-gray-900">{m.value}</p>
              <p className={`text-[10px] font-semibold mt-0.5 ${m.positive ? "text-emerald-600" : "text-red-500"}`}>
                {m.change} this month
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEO progress */}
        <div className="px-5 pb-5">
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl p-3.5 border border-blue-100/60">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <BarChart3 size={12} className="text-blue-500" />
                <span className="text-[11px] font-semibold text-gray-700">SEO Authority Score</span>
              </div>
              <motion.span
                className="text-sm font-bold text-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                87/100
              </motion.span>
            </div>
            <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                initial={{ width: "0%" }}
                animate={{ width: "87%" }}
                transition={{ duration: 1.8, delay: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification pills */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
          <TrendingUp size={10} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-800">+238 leads</p>
          <p className="text-[9px] text-gray-400">this week</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.6, duration: 0.5 }}
        className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
          <Star size={10} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-800">5.0 ⭐ Rating</p>
          <p className="text-[9px] text-gray-400">98% satisfaction</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm shadow-gray-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-black text-sm">A</span>
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">
              Aero<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">vince</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px bg-gradient-to-r from-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#work"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
            >
              View Work
            </a>
            <motion.button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="relative overflow-hidden bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Free Call
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <button className="w-full bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-xl mt-1">
                  Book Free Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Background ───────────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />

      {/* Radial orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-200/30 via-violet-200/20 to-transparent blur-3xl"
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-blue-100/20 to-transparent blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-violet-100/20 to-blue-100/20 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Word cycling
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % ANIMATED_WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  // Stats intersection observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const currentWord = ANIMATED_WORDS[wordIndex];

  // Stagger children container
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      {/* <Navbar /> */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
        aria-label="Hero section"
      >
        <HeroBackground />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ─── LEFT COLUMN ─── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Eyebrow badge */}
              <motion.div variants={childVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Marketing Agency · Results-Driven
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                variants={childVariants}
                className="text-5xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-extrabold text-gray-900 leading-[1.05] tracking-tight"
              >
                We Help Brands{" "}
                <span className="block mt-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${currentWord.gradient}`}
                    >
                      {currentWord.text}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="block mt-1">Faster.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={childVariants}
                className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl"
              >
                From SEO and Performance Ads to AI Automation and Conversion Engineering —
                we build the exact marketing infrastructure your business needs to generate consistent leads
                and compound revenue.
              </motion.p>

              {/* Service pills */}
              <motion.div variants={childVariants} className="flex flex-wrap gap-2 mt-5">
                {["SEO", "Paid Ads", "Branding", "Web Dev", "AI Automation", "Lead Gen"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-gray-500 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 px-3 py-1 rounded-full border border-gray-200/80 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-3 mt-8">
                <motion.a
                  href="#contact"
                  className="relative inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-6 py-3.5 rounded-xl overflow-hidden group shadow-lg shadow-gray-900/20"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Strategy Call
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Work
                  <ArrowRight size={15} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={childVariants} className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-2">
                  {["bg-blue-400", "bg-violet-400", "bg-cyan-400", "bg-emerald-400"].map((color, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    <span className="font-semibold text-gray-700">4.9/5</span> from 150+ clients
                  </p>
                </div>
              </motion.div>

              {/* Stats row */}
              <div ref={statsRef}>
                <motion.div
                  variants={childVariants}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8 pt-8 border-t border-gray-100"
                >
                  {STATS.map((stat, i) => (
                    <AnimatedStat key={stat.label} {...stat} delay={0.6 + i * 0.1} start={statsVisible} />
                  ))}
                </motion.div>
              </div>

              {/* Logo marquee */}
              <motion.div variants={childVariants}>
                <LogoMarquee />
              </motion.div>
            </motion.div>

            {/* ─── RIGHT COLUMN ─── */}
            <div className="hidden lg:flex justify-center items-center">
              <FloatingDashboard />
            </div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400"
          aria-hidden="true"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}