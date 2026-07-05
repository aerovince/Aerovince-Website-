// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function AnnouncementBar() {
//     const items = [...Array(10)].map((_, i) => (
//         <div key={i} className="flex items-center px-8 gap-4 shrink-0">
//             <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
//                 {/* 🔥 Startup Building Plans starting at ₹15,000/month */}
//             </span>
//             <span className="text-white/40">|</span>
//             <span className="flex items-center gap-2 font-medium text-sm">
//                 <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
//                 Limited-time offers available
//             </span>
//             <Link
//                 href="/contact"
//                 className="group flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm"
//             >
//                 Get Started <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
//             </Link>
//             <span className="text-white/40">|</span>
//         </div>
//     ));

//     return (
//         <div className="relative bg-gradient-to-r from-[#0287E7] via-[#006bb3] to-[#0287E7] text-white overflow-hidden h-10 flex items-center z-50">
//             {/* Gradient Overlay for smooth edges */}
//             <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0287E7] to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0287E7] to-transparent z-10 pointer-events-none" />

//             <style jsx>{`
//                 @keyframes marquee-infinite {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-50%);
//                     }
//                 }
//                 .animate-marquee-infinite {
//                     animation: marquee-infinite 120s linear infinite;
//                 }
//                 .animate-marquee-infinite:hover {
//                     animation-play-state: paused;
//                 }
//             `}</style>

//             <div className="flex w-max animate-marquee-infinite whitespace-nowrap">
//                 {/* First Copy */}
//                 <div className="flex items-center shrink-0">
//                     {items}
//                 </div>
//                 {/* Second Copy (Identical) */}
//                 <div className="flex items-center shrink-0">
//                     {items}
//                 </div>
//             </div>
//         </div>
//     );
// }
























// "use client";

// import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import {
//   ArrowRight,
//   X,
//   Zap,
//   TrendingUp,
//   Video,
//   Globe,
//   Megaphone,
//   Bot,
//   Camera,
//   Code2,
//   Sparkles,
// } from "lucide-react";

// // ─── Announcement segments ────────────────────────────────────────────────────
// // Each segment = one "slide" in the scrolling ticker.
// // `keyword` gets the colored pill treatment; `pre` and `post` are plain text.
// // `cta` is the button label. `color` maps to a tailwind gradient pair.

// interface Segment {
//   icon: React.ReactNode;
//   pre: string;
//   keyword: string;
//   post: string;
//   keywordColor: string; // tailwind bg gradient classes
//   textColor: string;    // tailwind text color
//   borderColor: string;  // tailwind border color
//   cta: string;
// }

// const SEGMENTS: Segment[] = [
//   {
//     icon: <Zap size={13} className="shrink-0" />,
//     pre: "🚀 Launch your brand with a",
//     keyword: "Free Strategy Session",
//     post: "— no commitment, just results.",
//     keywordColor: "from-violet-500 to-blue-500",
//     textColor: "text-violet-700",
//     borderColor: "border-violet-200",
//     cta: "Book Now",
//   },
//   {
//     icon: <Video size={13} className="shrink-0" />,
//     pre: "🎥 Professional",
//     keyword: "Video Production",
//     post: "packages — reels, brand films & drone shoots.",
//     keywordColor: "from-pink-500 to-rose-400",
//     textColor: "text-pink-700",
//     borderColor: "border-pink-200",
//     cta: "Get a Quote",
//   },
//   {
//     icon: <TrendingUp size={13} className="shrink-0" />,
//     pre: "📈 Performance Marketing that delivers",
//     keyword: "4.8× ROI",
//     post: "— Google, Meta & YouTube Ads.",
//     keywordColor: "from-amber-500 to-orange-400",
//     textColor: "text-amber-700",
//     borderColor: "border-amber-200",
//     cta: "Run Ads",
//   },
//   {
//     icon: <Globe size={13} className="shrink-0" />,
//     pre: "🌐 Custom websites &",
//     keyword: "SEO that ranks",
//     post: "— built in Next.js, launched in days.",
//     keywordColor: "from-cyan-500 to-blue-400",
//     textColor: "text-cyan-700",
//     borderColor: "border-cyan-200",
//     cta: "Start Project",
//   },
//   {
//     icon: <Megaphone size={13} className="shrink-0" />,
//     pre: "📣 Social Media Management &",
//     keyword: "Content Creation",
//     post: "— grow to 10K followers or we work free.*",
//     keywordColor: "from-blue-500 to-violet-500",
//     textColor: "text-blue-700",
//     borderColor: "border-blue-200",
//     cta: "Grow Now",
//   },
//   {
//     icon: <Bot size={13} className="shrink-0" />,
//     pre: "🤖 Automate your business with",
//     keyword: "AI & WhatsApp Bots",
//     post: "— CRM, lead nurturing & more.",
//     keywordColor: "from-emerald-500 to-teal-400",
//     textColor: "text-emerald-700",
//     borderColor: "border-emerald-200",
//     cta: "Automate",
//   },
//   {
//     icon: <Camera size={13} className="shrink-0" />,
//     pre: "📸 Studio-quality",
//     keyword: "Product Photography",
//     post: "— for e-commerce, Amazon & D2C brands.",
//     keywordColor: "from-rose-500 to-pink-400",
//     textColor: "text-rose-700",
//     borderColor: "border-rose-200",
//     cta: "Book Shoot",
//   },
//   {
//     icon: <Code2 size={13} className="shrink-0" />,
//     pre: "📱 Android & iOS apps from",
//     keyword: "MVP to Launch",
//     post: "— React Native, Flutter & custom builds.",
//     keywordColor: "from-violet-600 to-purple-400",
//     textColor: "text-violet-700",
//     borderColor: "border-violet-200",
//     cta: "Build App",
//   },
//   {
//     icon: <Sparkles size={13} className="shrink-0" />,
//     pre: "✨",
//     keyword: "Limited Discount",
//     post: "on starter brand packages this month — claim yours.",
//     keywordColor: "from-amber-400 to-yellow-300",
//     textColor: "text-amber-800",
//     borderColor: "border-amber-300",
//     cta: "Claim Offer",
//   },
// ];

// // Duplicate for seamless infinite loop
// const TICKER_ITEMS = [...SEGMENTS, ...SEGMENTS];

// // ─── Keyword pill ─────────────────────────────────────────────────────────────
// function KeywordPill({ segment }: { segment: Segment }) {
//   return (
//     <span
//       className={`
//         inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-black
//         border ${segment.borderColor} ${segment.textColor}
//         bg-white/70 backdrop-blur-sm mx-1.5
//       `}
//       style={{ letterSpacing: "0.01em" }}
//     >
//       <span
//         className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${segment.keywordColor} shrink-0`}
//       />
//       {segment.keyword}
//     </span>
//   );
// }

// // ─── CTA Button ───────────────────────────────────────────────────────────────
// function CtaButton({ label }: { label: string }) {
//   return (
//     <Link
//       href="/contact"
//       className="
//         group inline-flex items-center gap-1 ml-3 shrink-0
//         bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600
//         text-white text-[11px] font-bold
//         px-3 py-1 rounded-full
//         transition-all duration-200
//         shadow-sm hover:shadow-blue-500/20 hover:shadow-md
//       "
//       onClick={e => e.stopPropagation()}
//     >
//       {label}
//       <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
//     </Link>
//   );
// }

// // ─── Divider ──────────────────────────────────────────────────────────────────
// function Divider() {
//   return (
//     <span className="mx-5 shrink-0 flex items-center">
//       <span className="w-1 h-1 rounded-full bg-blue-200" />
//       <span className="w-1 h-1 rounded-full bg-violet-200 mx-0.5" />
//       <span className="w-1 h-1 rounded-full bg-cyan-200" />
//     </span>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────
// export default function AnnouncementBar() {
//   const [dismissed, setDismissed] = useState(false);
//   const [paused, setPaused] = useState(false);
//   const trackRef = useRef<HTMLDivElement>(null);

//   if (dismissed) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: "auto", opacity: 1 }}
//         exit={{ height: 0, opacity: 0 }}
//         transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
//         className="relative z-50 overflow-hidden"
//       >
//         {/* Bar background — matches hero: white base, blue-50 wash, blue-100 border */}
//         <div
//           className="relative flex items-center h-10 overflow-hidden"
//           style={{
//             background:
//               "linear-gradient(90deg, #f0f7ff 0%, #f8f4ff 35%, #f0fbff 65%, #f0f7ff 100%)",
//             borderBottom: "1px solid #dbeafe",
//           }}
//         >
//           {/* Left shimmer mask */}
//           <div
//             className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(90deg, #f0f7ff 0%, transparent 100%)",
//             }}
//           />
//           {/* Right shimmer mask */}
//           <div
//             className="absolute right-8 top-0 bottom-0 w-16 z-10 pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(270deg, #f0f7ff 0%, transparent 100%)",
//             }}
//           />

//           {/* Subtle animated top accent line */}
//           <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
//             <motion.div
//               className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
//               animate={{ x: ["-100%", "300%"] }}
//               transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
//             />
//           </div>

//           {/* ── Scrolling ticker ── */}
//           <style jsx>{`
//             @keyframes ticker {
//               0%   { transform: translateX(0); }
//               100% { transform: translateX(-50%); }
//             }
//             .ticker-track {
//               animation: ticker 80s linear infinite;
//               will-change: transform;
//             }
//             .ticker-track.paused {
//               animation-play-state: paused;
//             }
//           `}</style>

//           <div
//             ref={trackRef}
//             className={`ticker-track flex items-center w-max ${paused ? "paused" : ""}`}
//             onMouseEnter={() => setPaused(true)}
//             onMouseLeave={() => setPaused(false)}
//           >
//             {TICKER_ITEMS.map((seg, i) => (
//               <span key={i} className="inline-flex items-center shrink-0">
//                 {/* Segment */}
//                 <span className="inline-flex items-center text-[12px] font-medium text-gray-600 whitespace-nowrap">
//                   <span className="mr-1.5 text-gray-400">{seg.icon}</span>
//                   <span>{seg.pre}</span>
//                   <KeywordPill segment={seg} />
//                   <span>{seg.post}</span>
//                   <CtaButton label={seg.cta} />
//                 </span>

//                 {/* Divider between segments */}
//                 <Divider />
//               </span>
//             ))}
//           </div>

//           {/* Dismiss button */}
//           <button
//             onClick={() => setDismissed(true)}
//             aria-label="Dismiss announcement"
//             className="
//               absolute right-2 top-1/2 -translate-y-1/2 z-20
//               w-6 h-6 rounded-full
//               flex items-center justify-center
//               text-gray-400 hover:text-gray-600
//               hover:bg-blue-100/60
//               transition-colors duration-150
//               shrink-0
//             "
//           >
//             <X size={12} />
//           </button>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }











"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, X, Zap, TrendingUp, Video, Globe,
  Megaphone, Bot, Camera, Code2, Sparkles,
} from "lucide-react";

interface Segment {
  icon: React.ReactNode;
  pre: string;
  keyword: string;
  post: string;
  keywordColor: string;
  textColor: string;
  borderColor: string;
  cta: string;
}

const SEGMENTS: Segment[] = [
  { icon: <Zap size={13} className="shrink-0" />, pre: "🚀 Launch your brand with a", keyword: "Free Strategy Session", post: "— no commitment, just results.", keywordColor: "from-violet-500 to-blue-500", textColor: "text-violet-700", borderColor: "border-violet-200", cta: "Book Now" },
  { icon: <Video size={13} className="shrink-0" />, pre: "🎥 Professional", keyword: "Video Production", post: "packages — reels, brand films & drone shoots.", keywordColor: "from-pink-500 to-rose-400", textColor: "text-pink-700", borderColor: "border-pink-200", cta: "Get a Quote" },
  { icon: <TrendingUp size={13} className="shrink-0" />, pre: "📈 Performance Marketing that delivers", keyword: "4.8× ROI", post: "— Google, Meta & YouTube Ads.", keywordColor: "from-amber-500 to-orange-400", textColor: "text-amber-700", borderColor: "border-amber-200", cta: "Run Ads" },
  { icon: <Globe size={13} className="shrink-0" />, pre: "🌐 Custom websites &", keyword: "SEO that ranks", post: "— built in Next.js, launched in days.", keywordColor: "from-cyan-500 to-blue-400", textColor: "text-cyan-700", borderColor: "border-cyan-200", cta: "Start Project" },
  { icon: <Megaphone size={13} className="shrink-0" />, pre: "📣 Social Media Management &", keyword: "Content Creation", post: "— grow to 10K followers or we work free.*", keywordColor: "from-blue-500 to-violet-500", textColor: "text-blue-700", borderColor: "border-blue-200", cta: "Grow Now" },
  { icon: <Bot size={13} className="shrink-0" />, pre: "🤖 Automate your business with", keyword: "AI & WhatsApp Bots", post: "— CRM, lead nurturing & more.", keywordColor: "from-emerald-500 to-teal-400", textColor: "text-emerald-700", borderColor: "border-emerald-200", cta: "Automate" },
  { icon: <Camera size={13} className="shrink-0" />, pre: "📸 Studio-quality", keyword: "Product Photography", post: "— for e-commerce, Amazon & D2C brands.", keywordColor: "from-rose-500 to-pink-400", textColor: "text-rose-700", borderColor: "border-rose-200", cta: "Book Shoot" },
  { icon: <Code2 size={13} className="shrink-0" />, pre: "📱 Android & iOS apps from", keyword: "MVP to Launch", post: "— React Native, Flutter & custom builds.", keywordColor: "from-violet-600 to-purple-400", textColor: "text-violet-700", borderColor: "border-violet-200", cta: "Build App" },
  { icon: <Sparkles size={13} className="shrink-0" />, pre: "✨", keyword: "Limited Discount", post: "on starter brand packages this month — claim yours.", keywordColor: "from-amber-400 to-yellow-300", textColor: "text-amber-800", borderColor: "border-amber-300", cta: "Claim Offer" },
];

const TICKER_ITEMS = [...SEGMENTS, ...SEGMENTS];
const SPEED = 0.6; // px per frame

function KeywordPill({ segment }: { segment: Segment }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-black border ${segment.borderColor} ${segment.textColor} bg-white/70 backdrop-blur-sm mx-1.5`}
      style={{ letterSpacing: "0.01em" }}
    >
      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${segment.keywordColor} shrink-0`} />
      {segment.keyword}
    </span>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <Link
      href="/contact"
      className="group inline-flex items-center gap-1 ml-3 shrink-0 bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 text-white text-[11px] font-bold px-3 py-1 rounded-full transition-all duration-200 shadow-sm hover:shadow-blue-500/20 hover:shadow-md"
      onClick={(e) => e.stopPropagation()}
    >
      {label}
      <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
    </Link>
  );
}

function Divider() {
  return (
    <span className="mx-5 shrink-0 flex items-center">
      <span className="w-1 h-1 rounded-full bg-blue-200" />
      <span className="w-1 h-1 rounded-full bg-violet-200 mx-0.5" />
      <span className="w-1 h-1 rounded-full bg-cyan-200" />
    </span>
  );
}

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const pausedRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);               // current pixel offset
  const halfWidthRef = useRef(0);       // half of track width (one copy)
  const x = useMotionValue(0);

  // Measure the track once it's mounted so we know when to loop
  useEffect(() => {
    if (trackRef.current) {
      // The track contains 2 copies; half = one copy
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, [dismissed]); // re-measure if bar re-appears

  useAnimationFrame(() => {
    if (pausedRef.current) return;

    xRef.current -= SPEED;

    // When we've scrolled one full copy, snap back silently
    if (halfWidthRef.current > 0 && Math.abs(xRef.current) >= halfWidthRef.current) {
      xRef.current = 0;
    }

    x.set(xRef.current);
  });

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 overflow-hidden"
      >
        <div
          className="relative flex items-center h-10 overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #f0f7ff 0%, #f8f4ff 35%, #f0fbff 65%, #f0f7ff 100%)",
            borderBottom: "1px solid #dbeafe",
          }}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #f0f7ff 0%, transparent 100%)" }} />
          {/* Right fade */}
          <div className="absolute right-8 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #f0f7ff 0%, transparent 100%)" }} />

          {/* Top accent shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
            />
          </div>

          {/* Ticker — driven by useAnimationFrame, no restart on hover */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center w-max"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {TICKER_ITEMS.map((seg, i) => (
              <span key={i} className="inline-flex items-center shrink-0">
                <span className="inline-flex items-center text-[12px] font-medium text-gray-600 whitespace-nowrap">
                  <span className="mr-1.5 text-gray-400">{seg.icon}</span>
                  <span>{seg.pre}</span>
                  <KeywordPill segment={seg} />
                  <span>{seg.post}</span>
                  <CtaButton label={seg.cta} />
                </span>
                <Divider />
              </span>
            ))}
          </motion.div>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-blue-100/60 transition-colors duration-150 shrink-0"
          >
            <X size={12} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}