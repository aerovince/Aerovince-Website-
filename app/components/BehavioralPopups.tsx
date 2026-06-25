

// // marktaleworld_updated-\app\components\BehavioralPopups.tsx
// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { X, Gift, Sparkles, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function BehavioralPopups() {
//     const [showExitIntent, setShowExitIntent] = useState(false);
//     const [showTimedPopup, setShowTimedPopup] = useState(false);
//     const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
//     const [hasShownTimedPopup, setHasShownTimedPopup] = useState(false);

//     // Tab Title Switcher
//     useEffect(() => {
//         const originalTitle = document.title;
//         const attentionGrabbingTitles = [
//             "Wait! Come back! 😭",
//             "Don't miss this opportunity... 🚀",
//             "One last thing... 👀",
//             "We miss you! ❤️",
//         ];

//         const handleVisibilityChange = () => {
//             if (document.hidden) {
//                 // Randomly select a title
//                 const randomTitle =
//                     attentionGrabbingTitles[
//                     Math.floor(Math.random() * attentionGrabbingTitles.length)
//                     ];
//                 document.title = randomTitle;
//             } else {
//                 document.title = originalTitle;
//             }
//         };

//         document.addEventListener("visibilitychange", handleVisibilityChange);

//         return () => {
//             document.removeEventListener("visibilitychange", handleVisibilityChange);
//             document.title = originalTitle;
//         };
//     }, []);

//     // Exit Intent Detector
//     useEffect(() => {
//         const handleMouseLeave = (e: MouseEvent) => {
//             if (
//                 e.clientY <= 0 &&
//                 !hasShownExitIntent &&
//                 !localStorage.getItem("marktale_exit_popup_seen")
//             ) {
//                 setShowExitIntent(true);
//                 setHasShownExitIntent(true);
//                 localStorage.setItem("marktale_exit_popup_seen", "true");
//             }
//         };

//         document.addEventListener("mouseleave", handleMouseLeave);
//         return () => document.removeEventListener("mouseleave", handleMouseLeave);
//     }, [hasShownExitIntent]);

//     // Timed Popup (triggers after 45 seconds)
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (
//                 !hasShownTimedPopup &&
//                 !showExitIntent &&
//                 !localStorage.getItem("marktale_timed_popup_seen")
//             ) {
//                 setShowTimedPopup(true);
//                 setHasShownTimedPopup(true);
//                 localStorage.setItem("marktale_timed_popup_seen", "true");
//             }
//         }, 45000); // 45 seconds

//         return () => clearTimeout(timer);
//     }, [hasShownTimedPopup, showExitIntent]);

//     const closeExitIntent = useCallback(() => setShowExitIntent(false), []);
//     const closeTimedPopup = useCallback(() => setShowTimedPopup(false), []);

//     return (
//         <AnimatePresence>
//             {/* Exit Intent Popup */}
//             {showExitIntent && (
//                 <PopupModal onClose={closeExitIntent} key="exit-intent">
//                     <div className="text-center">
//                         <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
//                             <span className="text-3xl">🛑</span>
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                             Wait! Before you go...
//                         </h3>
//                         <p className="text-gray-600 mb-6">
//                             You're leaving without seeing our exclusive growth strategy for
//                             startups? Get a <strong>FREE AI Marketing Audit</strong> worth
//                             $500.
//                         </p>
//                         <Link
//                             href="/contact"
//                             onClick={closeExitIntent}
//                             className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2"
//                         >
//                             Claim My Free Audit <ArrowRight className="w-4 h-4" />
//                         </Link>
//                         <button
//                             onClick={closeExitIntent}
//                             className="text-sm text-gray-500 hover:text-gray-700 underline"
//                         >
//                             No thanks, I hate growth
//                         </button>
//                     </div>
//                 </PopupModal>
//             )}

//             {/* Timed Lead Magnet Popup */}
//             {showTimedPopup && (
//                 <PopupModal onClose={closeTimedPopup} key="timed-popup">
//                     <div className="text-center">
//                         <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
//                             <Gift className="w-8 h-8" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                             Enjoying the content?
//                         </h3>
//                         <p className="text-gray-600 mb-6">
//                             Join 1,000+ founders receiving our weekly "AI Marketing
//                             Experiments" newsletter. No fluff, just results.
//                         </p>
//                         <div className="flex flex-col gap-3">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your work email"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
//                             />
//                             <button
//                                 onClick={closeTimedPopup} // In real app, submit form then close
//                                 className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
//                             >
//                                 <Sparkles className="w-4 h-4" /> Join the Club
//                             </button>
//                         </div>
//                         <button
//                             onClick={closeTimedPopup}
//                             className="mt-4 text-sm text-gray-400 hover:text-gray-600"
//                         >
//                             Maybe later
//                         </button>
//                     </div>
//                 </PopupModal>
//             )}
//         </AnimatePresence>
//     );
// }

// function PopupModal({
//     children,
//     onClose,
// }: {
//     children: React.ReactNode;
//     onClose: () => void;
// }) {
//     return (
//         <>
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={onClose}
//                 className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
//             >
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.9, y: 20 }}
//                     onClick={(e) => e.stopPropagation()}
//                     className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative overflow-hidden"
//                 >
//                     <button
//                         onClick={onClose}
//                         className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
//                     >
//                         <X className="w-5 h-5" />
//                     </button>
//                     {children}
//                 </motion.div>
//             </motion.div>
//         </>
//     );
// }




















// "use client";

// import { useEffect, useState, useCallback, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   X,
//   Gift,
//   Sparkles,
//   ArrowRight,
//   TrendingUp,
//   Code2,
//   Smartphone,
//   Target,
//   Users,
//   Camera,
//   Lightbulb,
//   Instagram,
//   ExternalLink,
//   ChevronRight,
// } from "lucide-react";
// import Link from "next/link";

// // ─── Agency showcase modal ────────────────────────────────────────────────────

// const SERVICES = [
//   {
//     icon: Instagram,
//     label: "Social media",
//     desc: "Instagram, YouTube, LinkedIn, X",
//     bg: "bg-blue-50",
//     color: "text-blue-700",
//   },
//   {
//     icon: TrendingUp,
//     label: "Brand growth",
//     desc: "Strategy, identity & positioning",
//     bg: "bg-green-50",
//     color: "text-green-700",
//   },
//   {
//     icon: Target,
//     label: "Performance marketing",
//     desc: "Meta, Google & programmatic ads",
//     bg: "bg-amber-50",
//     color: "text-amber-700",
//   },
//   {
//     icon: Users,
//     label: "Influencer marketing",
//     desc: "50+ micro & macro partnerships",
//     bg: "bg-pink-50",
//     color: "text-pink-700",
//   },
//   {
//     icon: Code2,
//     label: "Website development",
//     desc: "Fast, conversion-optimised sites",
//     bg: "bg-purple-50",
//     color: "text-purple-700",
//   },
//   {
//     icon: Smartphone,
//     label: "App development",
//     desc: "iOS, Android & full-stack software",
//     bg: "bg-teal-50",
//     color: "text-teal-700",
//   },
//   {
//     icon: Lightbulb,
//     label: "Brand mentoring",
//     desc: "1-on-1 strategy & founder coaching",
//     bg: "bg-red-50",
//     color: "text-red-700",
//   },
//   {
//     icon: Camera,
//     label: "Creative production",
//     desc: "Photography, reels & ad creatives",
//     bg: "bg-gray-100",
//     color: "text-gray-700",
//   },
// ];

// const STATS = [
//   { num: "30+", lbl: "Brands built" },
//   { num: "15×", lbl: "Avg. ROI" },
//   { num: "10M+", lbl: "Reach generated" },
//   { num: "98%", lbl: "Client retention" },
// ];

// const WORKS = [
//   {
//     icon: "🍽️",
//     bg: "bg-blue-50",
//     title: "Delhi059",
//     cat: "Restaurant · Canada",
//     result: "650+ reviews",
//   },
//   {
//     icon: "🚗",
//     bg: "bg-green-50",
//     title: "Local Ride",
//     cat: "Mobility · Canada",
//     result: "100K+ rides",
//   },
//   {
//     icon: "🛒",
//     bg: "bg-amber-50",
//     title: "BG Foods",
//     cat: "E-commerce · NA",
//     result: "50K+ orders",
//   },
//   {
//     icon: "📚",
//     bg: "bg-purple-50",
//     title: "MentorLeap",
//     cat: "EdTech · India",
//     result: "10K+ trained",
//   },
//   {
//     icon: "🚕",
//     bg: "bg-orange-50",
//     title: "CabTale",
//     cat: "Transport · India",
//     result: "1M+ downloads",
//   },
//   {
//     icon: "💎",
//     bg: "bg-pink-50",
//     title: "Dee Cee",
//     cat: "Jewellery · India",
//     result: "10× sales",
//   },
// ];

// const STEPS = [
//   {
//     n: 1,
//     title: "Discover",
//     desc: "Free consultation to understand your goals",
//   },
//   {
//     n: 2,
//     title: "Strategise",
//     desc: "Custom roadmap with clear milestones",
//   },
//   { n: 3, title: "Execute", desc: "Our team ships fast, you stay focused" },
//   { n: 4, title: "Scale", desc: "Data-driven growth, month over month" },
// ];

// function AgencyModal({ onClose }: { onClose: () => void }) {
//   // Close on Escape
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, [onClose]);

//   // Lock body scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   return (
//     <motion.div
//       key="agency-overlay"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 16 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 16 }}
//         transition={{ type: "spring", stiffness: 340, damping: 28 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
//         role="dialog"
//         aria-modal="true"
//         aria-label="MarkTale agency overview"
//       >
//         {/* ── Sticky header ── */}
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
//               M
//             </div>
//             <div>
//               <p className="font-bold text-gray-900 leading-tight text-sm">
//                 Marktale World
//               </p>
//               <p className="text-xs text-gray-500">
//                 Full-service brand growth agency
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-6 py-5 space-y-6">
//           {/* ── Services ── */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
//               What we do
//             </p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
//                 <div
//                   key={label}
//                   className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
//                 >
//                   <div
//                     className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}
//                   >
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-800 leading-tight">
//                       {label}
//                     </p>
//                     <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
//                       {desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ── Stats ── */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
//               Our track record
//             </p>
//             <div className="grid grid-cols-4 gap-2">
//               {STATS.map(({ num, lbl }) => (
//                 <div
//                   key={lbl}
//                   className="bg-gray-50 rounded-xl p-3 text-center"
//                 >
//                   <p className="text-lg font-black text-gray-900">{num}</p>
//                   <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ── Past work ── */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
//               Past work
//             </p>
//             <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
//               {WORKS.map(({ icon, bg, title, cat, result }) => (
//                 <div
//                   key={title}
//                   className="flex-shrink-0 w-36 border border-gray-100 hover:border-blue-300 rounded-xl p-3 transition-colors cursor-default"
//                 >
//                   <div
//                     className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center text-lg mb-2`}
//                   >
//                     {icon}
//                   </div>
//                   <p className="text-xs font-bold text-gray-800">{title}</p>
//                   <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
//                   <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
//                     {result}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ── Process ── */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
//               How we work
//             </p>
//             <div className="grid grid-cols-4 gap-2">
//               {STEPS.map(({ n, title, desc }) => (
//                 <div
//                   key={n}
//                   className="bg-gray-50 rounded-xl p-3 text-center"
//                 >
//                   <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
//                     {n}
//                   </div>
//                   <p className="text-xs font-semibold text-gray-800 mb-0.5">
//                     {title}
//                   </p>
//                   <p className="text-[10px] text-gray-500 leading-tight">
//                     {desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ── Testimonial ── */}
//           <blockquote className="border-l-4 border-blue-600 pl-4 text-sm italic text-gray-600 leading-relaxed">
//             &ldquo;MarkTale didn&apos;t just market our restaurant — they made us
//             the go-to place for the entire Indian community in our city.&rdquo;
//             <footer className="mt-1 not-italic text-xs text-gray-400">
//               — Owner, Delhi059 · Canada
//             </footer>
//           </blockquote>

//           {/* ── CTA ── */}
//           <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
//             <p className="font-black text-gray-900 text-lg mb-1">
//               Ready to grow your brand?
//             </p>
//             <p className="text-sm text-blue-700 mb-4">
//               Free 30-minute strategy call — no commitment, just clarity.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
//               <Link
//                 href="/contact"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 Get a free consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 href="/portfolio"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 border border-blue-300 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 View full portfolio <ExternalLink className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── Trigger button (export separately so HeroSection can import it) ──────────
// // Usage in HeroSection: import { AgencyPopupTrigger } from "./BehavioralPopups";
// export function AgencyPopupTrigger() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//       >
//         <Sparkles className="w-4 h-4 text-blue-600" />
//         See what we can do
//         <ChevronRight className="w-4 h-4 text-gray-400" />
//       </button>

//       <AnimatePresence>
//         {open && <AgencyModal onClose={() => setOpen(false)} />}
//       </AnimatePresence>
//     </>
//   );
// }

// // ─── Main behavioral popups (exit-intent + timed) ────────────────────────────
// export default function BehavioralPopups() {
//   const [showExitIntent, setShowExitIntent] = useState(false);
//   const [showTimedPopup, setShowTimedPopup] = useState(false);
//   const [showAgency, setShowAgency] = useState(false);
//   const hasShownExitRef = useRef(false);
//   const hasShownTimedRef = useRef(false);

//   // Tab title switcher
//   useEffect(() => {
//     const originalTitle = document.title;
//     const titles = [
//       "Wait! Come back! 😭",
//       "Don't miss this opportunity... 🚀",
//       "One last thing... 👀",
//       "We miss you! ❤️",
//     ];
//     const handleVisibility = () => {
//       document.title = document.hidden
//         ? titles[Math.floor(Math.random() * titles.length)]
//         : originalTitle;
//     };
//     document.addEventListener("visibilitychange", handleVisibility);
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibility);
//       document.title = originalTitle;
//     };
//   }, []);

//   // Exit intent
//   useEffect(() => {
//     const handle = (e: MouseEvent) => {
//       if (
//         e.clientY <= 0 &&
//         !hasShownExitRef.current &&
//         !localStorage.getItem("marktale_exit_popup_seen")
//       ) {
//         hasShownExitRef.current = true;
//         localStorage.setItem("marktale_exit_popup_seen", "true");
//         setShowExitIntent(true);
//       }
//     };
//     document.addEventListener("mouseleave", handle);
//     return () => document.removeEventListener("mouseleave", handle);
//   }, []);

//   // Timed popup — 45 s
//   useEffect(() => {
//     const t = setTimeout(() => {
//       if (
//         !hasShownTimedRef.current &&
//         !showExitIntent &&
//         !localStorage.getItem("marktale_timed_popup_seen")
//       ) {
//         hasShownTimedRef.current = true;
//         localStorage.setItem("marktale_timed_popup_seen", "true");
//         setShowTimedPopup(true);
//       }
//     }, 45_000);
//     return () => clearTimeout(t);
//   }, [showExitIntent]);

//   const closeExit = useCallback(() => setShowExitIntent(false), []);
//   const closeTimed = useCallback(() => setShowTimedPopup(false), []);
//   const closeAgency = useCallback(() => setShowAgency(false), []);

//   return (
//     <>
//       <AnimatePresence>
//         {/* Exit intent */}
//         {showExitIntent && (
//           <PopupModal onClose={closeExit} key="exit-intent">
//             <div className="text-center">
//               <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl">
//                 🛑
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 Wait! Before you go...
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 You&apos;re leaving without seeing our exclusive growth strategy
//                 for startups? Get a{" "}
//                 <strong>FREE AI Marketing Audit</strong> worth $500.
//               </p>
//               <Link
//                 href="/contact"
//                 onClick={closeExit}
//                 className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors mb-3"
//               >
//                 Claim My Free Audit <ArrowRight className="w-4 h-4" />
//               </Link>
//               <button
//                 onClick={closeExit}
//                 className="text-sm text-gray-400 hover:text-gray-600 underline"
//               >
//                 No thanks, I hate growth
//               </button>
//             </div>
//           </PopupModal>
//         )}

//         {/* Timed lead magnet */}
//         {showTimedPopup && (
//           <PopupModal onClose={closeTimed} key="timed-popup">
//             <div className="text-center">
//               <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
//                 <Gift className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 Enjoying the content?
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Join 1,000+ founders receiving our weekly &ldquo;AI Marketing
//                 Experiments&rdquo; newsletter. No fluff, just results.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <input
//                   type="email"
//                   placeholder="Enter your work email"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
//                 />
//                 <button
//                   onClick={closeTimed}
//                   className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition-colors"
//                 >
//                   <Sparkles className="w-4 h-4" /> Join the Club
//                 </button>
//               </div>
//               <button
//                 onClick={closeTimed}
//                 className="mt-4 text-sm text-gray-400 hover:text-gray-600"
//               >
//                 Maybe later
//               </button>
//             </div>
//           </PopupModal>
//         )}

//         {/* Agency showcase */}
//         {showAgency && (
//           <AgencyModal key="agency-modal" onClose={closeAgency} />
//         )}
//       </AnimatePresence>

//       {/* Floating "See our work" trigger (bottom-right, above WhatsApp) */}
//       <div className="fixed bottom-24 right-5 z-[150]">
//         <motion.button
//           onClick={() => setShowAgency(true)}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 3 }}
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-colors"
//         >
//           <Sparkles className="w-3.5 h-3.5" />
//           See what we do
//         </motion.button>
//       </div>
//     </>
//   );
// }

// // ─── Generic modal shell ──────────────────────────────────────────────────────
// function PopupModal({
//   children,
//   onClose,
// }: {
//   children: React.ReactNode;
//   onClose: () => void;
// }) {
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ type: "spring", stiffness: 340, damping: 28 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
//       >
//         <button
//           onClick={onClose}
//           aria-label="Close"
//           className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
//         >
//           <X className="w-4 h-4" />
//         </button>
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }






























// "use client";

// import { useEffect, useState, useCallback, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   X, Gift, Sparkles, ArrowRight, TrendingUp, Code2, Smartphone,
//   Target, Users, Camera, Lightbulb, Instagram, ExternalLink, ChevronRight,
// } from "lucide-react";
// import Link from "next/link";

// const SERVICES = [
//   { icon: Instagram, label: "Social media", desc: "Instagram, YouTube, LinkedIn, X", bg: "bg-blue-50", color: "text-blue-700" },
//   { icon: TrendingUp, label: "Brand growth", desc: "Strategy, identity & positioning", bg: "bg-green-50", color: "text-green-700" },
//   { icon: Target, label: "Performance marketing", desc: "Meta, Google & programmatic ads", bg: "bg-amber-50", color: "text-amber-700" },
//   { icon: Users, label: "Influencer marketing", desc: "50+ micro & macro partnerships", bg: "bg-pink-50", color: "text-pink-700" },
//   { icon: Code2, label: "Website development", desc: "Fast, conversion-optimised sites", bg: "bg-purple-50", color: "text-purple-700" },
//   { icon: Smartphone, label: "App development", desc: "iOS, Android & full-stack software", bg: "bg-teal-50", color: "text-teal-700" },
//   { icon: Lightbulb, label: "Brand mentoring", desc: "1-on-1 strategy & founder coaching", bg: "bg-red-50", color: "text-red-700" },
//   { icon: Camera, label: "Creative production", desc: "Photography, reels & ad creatives", bg: "bg-gray-100", color: "text-gray-700" },
// ];

// const STATS = [
//   { num: "30+", lbl: "Brands built" },
//   { num: "15×", lbl: "Avg. ROI" },
//   { num: "10M+", lbl: "Reach generated" },
//   { num: "98%", lbl: "Client retention" },
// ];

// const WORKS = [
//   { icon: "🍽️", bg: "bg-blue-50", title: "Delhi059", cat: "Restaurant · Canada", result: "650+ reviews" },
//   { icon: "🚗", bg: "bg-green-50", title: "Local Ride", cat: "Mobility · Canada", result: "100K+ rides" },
//   { icon: "🛒", bg: "bg-amber-50", title: "BG Foods", cat: "E-commerce · NA", result: "50K+ orders" },
//   { icon: "📚", bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India", result: "10K+ trained" },
//   { icon: "🚕", bg: "bg-orange-50", title: "CabTale", cat: "Transport · India", result: "1M+ downloads" },
//   { icon: "💎", bg: "bg-pink-50", title: "Dee Cee", cat: "Jewellery · India", result: "10× sales" },
// ];

// const STEPS = [
//   { n: 1, title: "Discover", desc: "Free consultation to understand your goals" },
//   { n: 2, title: "Strategise", desc: "Custom roadmap with clear milestones" },
//   { n: 3, title: "Execute", desc: "Our team ships fast, you stay focused" },
//   { n: 4, title: "Scale", desc: "Data-driven growth, month over month" },
// ];

// function AgencyModal({ onClose }: { onClose: () => void }) {
//   useEffect(() => {
//     console.log("[MarkTale] AgencyModal mounted ✅");
//     const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", handler);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", handler);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       key="agency-overlay"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 16 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 16 }}
//         transition={{ type: "spring", stiffness: 340, damping: 28 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
//         role="dialog"
//         aria-modal="true"
//         aria-label="MarkTale agency overview"
//       >
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">M</div>
//             <div>
//               <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
//               <p className="text-xs text-gray-500">Full-service brand growth agency</p>
//             </div>
//           </div>
//           <button onClick={onClose} aria-label="Close" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-6 py-5 space-y-6">
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">What we do</p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
//                 <div key={label} className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
//                   <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-800 leading-tight">{label}</p>
//                     <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Our track record</p>
//             <div className="grid grid-cols-4 gap-2">
//               {STATS.map(({ num, lbl }) => (
//                 <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
//                   <p className="text-lg font-black text-gray-900">{num}</p>
//                   <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Past work</p>
//             <div className="flex gap-2.5 overflow-x-auto pb-1">
//               {WORKS.map(({ icon, bg, title, cat, result }) => (
//                 <div key={title} className="flex-shrink-0 w-36 border border-gray-100 hover:border-blue-300 rounded-xl p-3 transition-colors">
//                   <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center text-lg mb-2`}>{icon}</div>
//                   <p className="text-xs font-bold text-gray-800">{title}</p>
//                   <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
//                   <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">{result}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">How we work</p>
//             <div className="grid grid-cols-4 gap-2">
//               {STEPS.map(({ n, title, desc }) => (
//                 <div key={n} className="bg-gray-50 rounded-xl p-3 text-center">
//                   <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">{n}</div>
//                   <p className="text-xs font-semibold text-gray-800 mb-0.5">{title}</p>
//                   <p className="text-[10px] text-gray-500 leading-tight">{desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <blockquote className="border-l-4 border-blue-600 pl-4 text-sm italic text-gray-600 leading-relaxed">
//             &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the entire Indian community in our city.&rdquo;
//             <footer className="mt-1 not-italic text-xs text-gray-400">— Owner, Delhi059 · Canada</footer>
//           </blockquote>

//           <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
//             <p className="font-black text-gray-900 text-lg mb-1">Ready to grow your brand?</p>
//             <p className="text-sm text-blue-700 mb-4">Free 30-minute strategy call — no commitment, just clarity.</p>
//             <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
//               <Link href="/contact" onClick={onClose} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
//                 Get a free consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link href="/portfolio" onClick={onClose} className="inline-flex items-center justify-center gap-2 border border-blue-300 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
//                 View full portfolio <ExternalLink className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // Named export — drop in HeroSection
// export function AgencyPopupTrigger() {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//       >
//         <Sparkles className="w-4 h-4 text-blue-600" />
//         See what we can do
//         <ChevronRight className="w-4 h-4 text-gray-400" />
//       </button>
//       <AnimatePresence>
//         {open && <AgencyModal onClose={() => setOpen(false)} />}
//       </AnimatePresence>
//     </>
//   );
// }

// // Default export — place in (main)/layout.tsx ONLY, NOT in app/layout.tsx
// export default function BehavioralPopups() {
//   const [showExitIntent, setShowExitIntent] = useState(false);
//   const [showTimedPopup, setShowTimedPopup] = useState(false);
//   const [showAgency, setShowAgency] = useState(false);
//   const hasShownExitRef = useRef(false);
//   const hasShownTimedRef = useRef(false);

//   useEffect(() => {
//     console.log("[MarkTale] BehavioralPopups mounted ✅");
//     console.log("[MarkTale] localStorage:", {
//       exit: localStorage.getItem("marktale_exit_popup_seen"),
//       timed: localStorage.getItem("marktale_timed_popup_seen"),
//     });
//     // DEV: uncomment to force-reset between page reloads
//     // localStorage.removeItem("marktale_exit_popup_seen");
//     // localStorage.removeItem("marktale_timed_popup_seen");
//   }, []);

//   // Tab title switcher
//   useEffect(() => {
//     const orig = document.title;
//     const titles = ["Wait! Come back! 😭", "Don't miss this... 🚀", "One last thing... 👀", "We miss you! ❤️"];
//     const handle = () => { document.title = document.hidden ? titles[Math.floor(Math.random() * titles.length)] : orig; };
//     document.addEventListener("visibilitychange", handle);
//     return () => { document.removeEventListener("visibilitychange", handle); document.title = orig; };
//   }, []);

//   // Exit intent
//   useEffect(() => {
//     const handle = (e: MouseEvent) => {
//       console.log("[MarkTale] mouseleave, clientY:", e.clientY);
//       if (e.clientY <= 0 && !hasShownExitRef.current && !localStorage.getItem("marktale_exit_popup_seen")) {
//         console.log("[MarkTale] Exit-intent popup triggered ✅");
//         hasShownExitRef.current = true;
//         localStorage.setItem("marktale_exit_popup_seen", "true");
//         setShowExitIntent(true);
//       }
//     };
//     document.addEventListener("mouseleave", handle);
//     return () => document.removeEventListener("mouseleave", handle);
//   }, []);

//   // Timed popup — 5s for testing, change to 45_000 for production
//   useEffect(() => {
//     console.log("[MarkTale] Timed popup timer started — fires in 5s");
//     const t = setTimeout(() => {
//       console.log("[MarkTale] 5s elapsed. Conditions:", {
//         hasShown: hasShownTimedRef.current,
//         lsKey: localStorage.getItem("marktale_timed_popup_seen"),
//       });
//       if (!hasShownTimedRef.current && !localStorage.getItem("marktale_timed_popup_seen")) {
//         console.log("[MarkTale] Timed popup showing ✅");
//         hasShownTimedRef.current = true;
//         localStorage.setItem("marktale_timed_popup_seen", "true");
//         setShowTimedPopup(true);
//       } else {
//         console.warn("[MarkTale] Timed popup blocked — clear localStorage to retest");
//       }
//     }, 5_000); // ← change to 45_000 for production
//     return () => clearTimeout(t);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const closeExit = useCallback(() => { console.log("[MarkTale] Exit popup closed"); setShowExitIntent(false); }, []);
//   const closeTimed = useCallback(() => { console.log("[MarkTale] Timed popup closed"); setShowTimedPopup(false); }, []);
//   const closeAgency = useCallback(() => { console.log("[MarkTale] Agency modal closed"); setShowAgency(false); }, []);

//   return (
//     <>
//       <AnimatePresence>
//         {showExitIntent && (
//           <PopupModal onClose={closeExit} key="exit-intent">
//             <div className="text-center">
//               <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl">🛑</div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Wait! Before you go...</h3>
//               <p className="text-gray-600 mb-6">
//                 You&apos;re leaving without seeing our exclusive growth strategy for startups? Get a <strong>FREE AI Marketing Audit</strong> worth $500.
//               </p>
//               <Link href="/contact" onClick={closeExit} className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors mb-3">
//                 Claim My Free Audit <ArrowRight className="w-4 h-4" />
//               </Link>
//               <button onClick={closeExit} className="text-sm text-gray-400 hover:text-gray-600 underline">
//                 No thanks, I hate growth
//               </button>
//             </div>
//           </PopupModal>
//         )}

//         {showTimedPopup && (
//           <PopupModal onClose={closeTimed} key="timed-popup">
//             <div className="text-center">
//               <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
//                 <Gift className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Enjoying the content?</h3>
//               <p className="text-gray-600 mb-6">
//                 Join 1,000+ founders receiving our weekly &ldquo;AI Marketing Experiments&rdquo; newsletter. No fluff, just results.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <input type="email" placeholder="Enter your work email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm" />
//                 <button onClick={closeTimed} className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition-colors">
//                   <Sparkles className="w-4 h-4" /> Join the Club
//                 </button>
//               </div>
//               <button onClick={closeTimed} className="mt-4 text-sm text-gray-400 hover:text-gray-600">Maybe later</button>
//             </div>
//           </PopupModal>
//         )}

//         {showAgency && <AgencyModal key="agency-modal" onClose={closeAgency} />}
//       </AnimatePresence>

//       {/* Floating button — appears after 3s, above WhatsApp */}
//       <motion.div
//         className="fixed bottom-24 right-5 z-[150]"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 3 }}
//       >
//         <button
//           onClick={() => { console.log("[MarkTale] Agency modal opened via float button"); setShowAgency(true); }}
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-colors"
//         >
//           <Sparkles className="w-3.5 h-3.5" />
//           See what we do
//         </button>
//       </motion.div>
//     </>
//   );
// }

// function PopupModal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ type: "spring", stiffness: 340, damping: 28 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
//       >
//         <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
//           <X className="w-4 h-4" />
//         </button>
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }




















// "use client";

// // components/BehavioralPopups.tsx
// // Unified popup system:
// //  - Popup 1 → 8s  (Growth teaser)
// //  - Popup 2 → 15s (Newsletter signup)
// //  - Popup 3 → 20s (Exit / Free audit)
// //  - After all 3 shown → persistent floating button opens Agency modal

// import { useEffect, useState, useCallback, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   X, Gift, Sparkles, ArrowRight, TrendingUp, Code2, Smartphone,
//   Target, Users, Camera, Lightbulb, Instagram, ExternalLink, ChevronRight,
// } from "lucide-react";
// import Link from "next/link";

// // ─── Constants ────────────────────────────────────────────────────────────────

// const LS_KEY = "marktale_popup_stage"; // stores "0" | "1" | "2" | "done"

// const TIMINGS = [8_000, 15_000, 20_000]; // ms after mount

// // ─── Agency modal data ────────────────────────────────────────────────────────

// const SERVICES = [
//   { icon: Instagram,  label: "Social media",          desc: "Instagram, YouTube, LinkedIn, X",       bg: "bg-blue-50",   color: "text-blue-700"  },
//   { icon: TrendingUp, label: "Brand growth",           desc: "Strategy, identity & positioning",      bg: "bg-green-50",  color: "text-green-700" },
//   { icon: Target,     label: "Performance marketing",  desc: "Meta, Google & programmatic ads",       bg: "bg-amber-50",  color: "text-amber-700" },
//   { icon: Users,      label: "Influencer marketing",   desc: "50+ micro & macro partnerships",        bg: "bg-pink-50",   color: "text-pink-700"  },
//   { icon: Code2,      label: "Website development",    desc: "Fast, conversion-optimised sites",      bg: "bg-purple-50", color: "text-purple-700"},
//   { icon: Smartphone, label: "App development",        desc: "iOS, Android & full-stack software",    bg: "bg-teal-50",   color: "text-teal-700"  },
//   { icon: Lightbulb,  label: "Brand mentoring",        desc: "1-on-1 strategy & founder coaching",   bg: "bg-red-50",    color: "text-red-700"   },
//   { icon: Camera,     label: "Creative production",    desc: "Photography, reels & ad creatives",     bg: "bg-gray-100",  color: "text-gray-700"  },
// ];

// const STATS = [
//   { num: "30+",  lbl: "Brands built"     },
//   { num: "15×",  lbl: "Avg. ROI"         },
//   { num: "10M+", lbl: "Reach generated"  },
//   { num: "98%",  lbl: "Client retention" },
// ];

// const WORKS = [
//   { icon: "🍽️", bg: "bg-blue-50",   title: "Delhi059",   cat: "Restaurant · Canada", result: "650+ reviews"   },
//   { icon: "🚗",  bg: "bg-green-50",  title: "Local Ride", cat: "Mobility · Canada",   result: "100K+ rides"    },
//   { icon: "🛒",  bg: "bg-amber-50",  title: "BG Foods",   cat: "E-commerce · NA",     result: "50K+ orders"    },
//   { icon: "📚",  bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India",      result: "10K+ trained"   },
//   { icon: "🚕",  bg: "bg-orange-50", title: "CabTale",    cat: "Transport · India",   result: "1M+ downloads"  },
//   { icon: "💎",  bg: "bg-pink-50",   title: "Dee Cee",    cat: "Jewellery · India",   result: "10× sales"      },
// ];

// const STEPS = [
//   { n: 1, title: "Discover",   desc: "Free consultation to understand your goals" },
//   { n: 2, title: "Strategise", desc: "Custom roadmap with clear milestones"       },
//   { n: 3, title: "Execute",    desc: "Our team ships fast, you stay focused"      },
//   { n: 4, title: "Scale",      desc: "Data-driven growth, month over month"       },
// ];

// // ─── Agency Modal ─────────────────────────────────────────────────────────────

// function AgencyModal({ onClose }: { onClose: () => void }) {
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", handler);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", handler);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       key="agency-overlay"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 16 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 16 }}
//         transition={{ type: "spring", stiffness: 340, damping: 28 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
//         role="dialog"
//         aria-modal="true"
//         aria-label="MarkTale agency overview"
//       >
//         {/* Header */}
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">M</div>
//             <div>
//               <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
//               <p className="text-xs text-gray-500">Full-service brand growth agency</p>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-5 py-5 space-y-6">
//           {/* Services */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">What we do</p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
//                 <div key={label} className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
//                   <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-800 leading-tight">{label}</p>
//                     <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Stats */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Our track record</p>
//             <div className="grid grid-cols-4 gap-2">
//               {STATS.map(({ num, lbl }) => (
//                 <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
//                   <p className="text-lg font-black text-gray-900">{num}</p>
//                   <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Past work */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Past work</p>
//             <div className="flex gap-2.5 overflow-x-auto pb-1">
//               {WORKS.map(({ icon, bg, title, cat, result }) => (
//                 <div key={title} className="flex-shrink-0 w-36 border border-gray-100 hover:border-blue-300 rounded-xl p-3 transition-colors">
//                   <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center text-lg mb-2`}>{icon}</div>
//                   <p className="text-xs font-bold text-gray-800">{title}</p>
//                   <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
//                   <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">{result}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* How we work */}
//           <section>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">How we work</p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {STEPS.map(({ n, title, desc }) => (
//                 <div key={n} className="bg-gray-50 rounded-xl p-3 text-center">
//                   <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">{n}</div>
//                   <p className="text-xs font-semibold text-gray-800 mb-0.5">{title}</p>
//                   <p className="text-[10px] text-gray-500 leading-tight">{desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Testimonial */}
//           <blockquote className="border-l-4 border-blue-600 pl-4 text-sm italic text-gray-600 leading-relaxed">
//             &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the entire Indian community in our city.&rdquo;
//             <footer className="mt-1 not-italic text-xs text-gray-400">— Owner, Delhi059 · Canada</footer>
//           </blockquote>

//           {/* CTA */}
//           <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
//             <p className="font-black text-gray-900 text-lg mb-1">Ready to grow your brand?</p>
//             <p className="text-sm text-blue-700 mb-4">Free 30-minute strategy call — no commitment, just clarity.</p>
//             <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
//               <Link
//                 href="/contact"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 Get a free consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 href="/portfolio"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 border border-blue-300 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 View full portfolio <ExternalLink className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── Named export: inline trigger button (for HeroSection etc.) ───────────────

// export function AgencyPopupTrigger() {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//       >
//         <Sparkles className="w-4 h-4 text-blue-600" />
//         See what we can do
//         <ChevronRight className="w-4 h-4 text-gray-400" />
//       </button>
//       <AnimatePresence>
//         {open && <AgencyModal onClose={() => setOpen(false)} />}
//       </AnimatePresence>
//     </>
//   );
// }

// // ─── Shared small popup wrapper ───────────────────────────────────────────────

// function PopupShell({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", handler);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", handler);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[500] flex items-end sm:items-center justify-center p-4"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 32, scale: 0.97 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: 20, scale: 0.97 }}
//         transition={{ type: "spring", stiffness: 380, damping: 32 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative"
//         role="dialog"
//         aria-modal="true"
//       >
//         <button
//           onClick={onClose}
//           aria-label="Close"
//           className="absolute top-3.5 right-3.5 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10"
//         >
//           <X className="w-4 h-4" />
//         </button>
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── Popup 1 — Growth teaser (8s) ─────────────────────────────────────────────

// function PopupGrowth({ onClose }: { onClose: () => void }) {
//   return (
//     <PopupShell onClose={onClose}>
//       <div className="p-6 pt-7">
//         <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
//           <TrendingUp className="w-6 h-6 text-blue-600" />
//         </div>
//         <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1">Marktale World</p>
//         <h3 className="text-xl font-black text-gray-900 mb-2 leading-snug">Want to grow your brand?</h3>
//         <p className="text-gray-500 text-sm leading-relaxed mb-6">
//           We&apos;ve scaled 30+ brands across India, Canada, and the USA — social media, apps,
//           websites, and performance marketing under one roof.
//         </p>
//         <Link
//           href="/grow"
//           onClick={onClose}
//           className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors mb-2.5"
//         >
//           See how we can help <ArrowRight className="w-4 h-4" />
//         </Link>
//         <button onClick={onClose} className="w-full text-xs text-gray-400 hover:text-gray-500 py-1 transition-colors">
//           Maybe later
//         </button>
//       </div>
//     </PopupShell>
//   );
// }

// // ─── Popup 2 — Newsletter (15s) ───────────────────────────────────────────────

// function PopupNewsletter({ onClose }: { onClose: () => void }) {
//   return (
//     <PopupShell onClose={onClose}>
//       <div className="p-6 pt-7 text-center">
//         <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//           <Gift className="w-7 h-7 text-blue-600" />
//         </div>
//         <h3 className="text-xl font-black text-gray-900 mb-2">Enjoying the content?</h3>
//         <p className="text-gray-500 text-sm leading-relaxed mb-5">
//           Join 1,000+ founders receiving our weekly &ldquo;AI Marketing Experiments&rdquo; newsletter.
//           No fluff, just results.
//         </p>
//         <div className="flex flex-col gap-3">
//           <input
//             type="email"
//             placeholder="Enter your work email"
//             className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all"
//           />
//           <button
//             onClick={onClose}
//             className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
//           >
//             <Sparkles className="w-4 h-4" /> Join the Club
//           </button>
//         </div>
//         <button onClick={onClose} className="mt-4 text-xs text-gray-400 hover:text-gray-500 transition-colors">
//           Maybe later
//         </button>
//       </div>
//     </PopupShell>
//   );
// }

// // ─── Popup 3 — Free audit (20s) ───────────────────────────────────────────────

// function PopupAudit({ onClose }: { onClose: () => void }) {
//   return (
//     <PopupShell onClose={onClose}>
//       <div className="p-6 pt-7 text-center">
//         <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 text-3xl leading-none">
//           🛑
//         </div>
//         <h3 className="text-xl font-black text-gray-900 mb-2">One last thing…</h3>
//         <p className="text-gray-500 text-sm leading-relaxed mb-6">
//           Get a <strong className="text-gray-800">FREE AI Marketing Audit</strong> worth $500 — we&apos;ll
//           show you exactly what&apos;s holding your brand back.
//         </p>
//         <Link
//           href="/contact"
//           onClick={onClose}
//           className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors mb-2.5"
//         >
//           Claim My Free Audit <ArrowRight className="w-4 h-4" />
//         </Link>
//         <button onClick={onClose} className="w-full text-xs text-gray-400 hover:text-gray-500 py-1 transition-colors">
//           No thanks, I&apos;m all good
//         </button>
//       </div>
//     </PopupShell>
//   );
// }

// // ─── Main default export ──────────────────────────────────────────────────────

// /**
//  * Drop this inside (main)/layout.tsx ONLY — NOT in app/layout.tsx.
//  *
//  * Sequence:
//  *   Stage 0 → show PopupGrowth    at  8s
//  *   Stage 1 → show PopupNewsletter at 15s
//  *   Stage 2 → show PopupAudit     at 20s
//  *   "done"  → show persistent floating button → opens AgencyModal
//  */
// export default function BehavioralPopups() {
//   // Which popup is currently visible: null | "growth" | "newsletter" | "audit" | "agency"
//   const [activePopup, setActivePopup] = useState<
//     null | "growth" | "newsletter" | "audit" | "agency"
//   >(null);

//   // Whether all 3 timed popups are exhausted
//   const [allDone, setAllDone] = useState(false);

//   // Persistent agency modal open state
//   const [agencyOpen, setAgencyOpen] = useState(false);

//   // Track which stage we're on across renders
//   const stageRef = useRef<number>(0);

//   // Tab title switcher (cosmetic / engagement trick)
//   useEffect(() => {
//     const orig = document.title;
//     const titles = ["Wait! Come back! 😭", "Don't miss this... 🚀", "One last thing... 👀", "We miss you! ❤️"];
//     const handle = () => {
//       document.title = document.hidden
//         ? titles[Math.floor(Math.random() * titles.length)]
//         : orig;
//     };
//     document.addEventListener("visibilitychange", handle);
//     return () => {
//       document.removeEventListener("visibilitychange", handle);
//       document.title = orig;
//     };
//   }, []);

//   // Schedule the three popups
//   useEffect(() => {
//     // If already fully done from a previous session, skip straight to button
//     const saved = localStorage.getItem(LS_KEY);
//     if (saved === "done") {
//       setAllDone(true);
//       return;
//     }

//     // Determine starting stage from localStorage
//     const startStage = saved ? parseInt(saved, 10) : 0;
//     stageRef.current = startStage;

//     // Timings relative to mount (always cumulative from 0)
//     const timers: ReturnType<typeof setTimeout>[] = [];

//     const popupTypes = ["growth", "newsletter", "audit"] as const;

//     popupTypes.forEach((type, idx) => {
//       if (idx < startStage) return; // already shown in a previous session

//       timers.push(
//         setTimeout(() => {
//           setActivePopup(type);
//           const nextStage = idx + 1;
//           stageRef.current = nextStage;
//           if (nextStage >= 3) {
//             localStorage.setItem(LS_KEY, "done");
//           } else {
//             localStorage.setItem(LS_KEY, String(nextStage));
//           }
//         }, TIMINGS[idx])
//       );
//     });

//     return () => timers.forEach(clearTimeout);
//   }, []);

//   // Called when any timed popup is closed
//   const handleClose = useCallback(() => {
//     setActivePopup(null);
//     // If stage is done, reveal the floating button
//     if (localStorage.getItem(LS_KEY) === "done") {
//       setAllDone(true);
//     }
//   }, []);

//   return (
//     <>
//       {/* ── Timed popups ─────────────────────────────────────────────────── */}
//       <AnimatePresence mode="wait">
//         {activePopup === "growth" && (
//           <PopupGrowth key="popup-growth" onClose={handleClose} />
//         )}
//         {activePopup === "newsletter" && (
//           <PopupNewsletter key="popup-newsletter" onClose={handleClose} />
//         )}
//         {activePopup === "audit" && (
//           <PopupAudit key="popup-audit" onClose={handleClose} />
//         )}
//       </AnimatePresence>

//       {/* ── Agency modal (opened via float button) ───────────────────────── */}
//       <AnimatePresence>
//         {agencyOpen && (
//           <AgencyModal key="agency-modal" onClose={() => setAgencyOpen(false)} />
//         )}
//       </AnimatePresence>

//       {/* ── Persistent floating button (shown after all 3 popups shown) ──── */}
//       <AnimatePresence>
//         {allDone && !agencyOpen && (
//           <motion.div
//             key="float-btn"
//             initial={{ opacity: 0, y: 16, scale: 0.85 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 8, scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 340, damping: 26 }}
//             // bottom-24 leaves room above WhatsApp float (bottom-6 / bottom-16)
//             className="fixed bottom-24 right-4 z-[150]"
//           >
//             <button
//               onClick={() => setAgencyOpen(true)}
//               aria-label="See what MarkTale can do"
//               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-all"
//             >
//               <Sparkles className="w-3.5 h-3.5" />
//               See what we do
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


































// "use client";

// /**
//  * BehavioralPopups.tsx  —  MarkTale World
//  *
//  * Timeline:
//  *   8s  → PopupGrow      (grow your brand / lead gen)
//  *   20s → PopupEmail     (newsletter signup)
//  *   Always visible → floating "See what we do" button → AgencyDrawer
//  *
//  * localStorage keys:
//  *   marktale_grow_seen   → "1"
//  *   marktale_email_seen  → "1"
//  *
//  * Place <BehavioralPopups /> in (main)/layout.tsx ONLY.
//  */

// import {
//   useEffect,
//   useState,
//   useCallback,
//   useRef,
// } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import {
//   X,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Target,
//   Users,
//   Code2,
//   Smartphone,
//   Zap,
//   BarChart3,
//   Mail,
//   ChevronRight,
//   ExternalLink,
//   Instagram,
//   Camera,
//   Lightbulb,
// } from "lucide-react";

// // ─────────────────────────────────────────────────────────────
// // Shared overlay + card wrapper
// // ─────────────────────────────────────────────────────────────

// function Overlay({
//   children,
//   onClose,
//   zIndex = "z-[500]",
// }: {
//   children: React.ReactNode;
//   onClose: () => void;
//   zIndex?: string;
// }) {
//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", esc);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", esc);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       onClick={onClose}
//       className={`fixed inset-0 bg-black/55 backdrop-blur-[3px] ${zIndex} flex items-end sm:items-center justify-center p-3 sm:p-5`}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: 28, scale: 0.96 }}
//         transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
//         onClick={(e) => e.stopPropagation()}
//         className="w-full"
//         role="dialog"
//         aria-modal="true"
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // POPUP 1 — GROW YOUR BRAND  (8 s)
// // ─────────────────────────────────────────────────────────────

// const GROW_OPTIONS = [
//   {
//     icon: TrendingUp,
//     color: "text-blue-600",
//     bg: "bg-blue-50",
//     border: "border-blue-100 hover:border-blue-300",
//     label: "Grow my brand",
//     sub: "Strategy, identity & storytelling",
//   },
//   {
//     icon: Target,
//     color: "text-orange-500",
//     bg: "bg-orange-50",
//     border: "border-orange-100 hover:border-orange-300",
//     label: "Generate leads",
//     sub: "Meta, Google & performance ads",
//   },
//   {
//     icon: Users,
//     color: "text-pink-500",
//     bg: "bg-pink-50",
//     border: "border-pink-100 hover:border-pink-300",
//     label: "Build a community",
//     sub: "Social media & influencer marketing",
//   },
//   {
//     icon: Code2,
//     color: "text-purple-600",
//     bg: "bg-purple-50",
//     border: "border-purple-100 hover:border-purple-300",
//     label: "Launch a product",
//     sub: "Website, app & go-to-market",
//   },
//   {
//     icon: BarChart3,
//     color: "text-green-600",
//     bg: "bg-green-50",
//     border: "border-green-100 hover:border-green-300",
//     label: "Scale revenue",
//     sub: "Funnels, retargeting & analytics",
//   },
//   {
//     icon: Smartphone,
//     color: "text-teal-600",
//     bg: "bg-teal-50",
//     border: "border-teal-100 hover:border-teal-300",
//     label: "Build an app",
//     sub: "iOS, Android & full-stack",
//   },
// ];

// function PopupGrow({ onClose }: { onClose: () => void }) {
//   const [selected, setSelected] = useState<number | null>(null);

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
//         {/* Top accent bar */}
//         <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

//         <div className="px-5 pt-5 pb-6">
//           {/* Header row */}
//           <div className="flex items-start justify-between mb-5">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
//                 <Zap className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-500 mb-0.5">
//                   Marktale World
//                 </p>
//                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 leading-tight">
//                   What&apos;s your growth goal?
//                 </h2>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Options grid */}
//           <div className="grid grid-cols-2 gap-2 mb-5">
//             {GROW_OPTIONS.map(({ icon: Icon, color, bg, border, label, sub }, i) => (
//               <button
//                 key={label}
//                 onClick={() => setSelected(i === selected ? null : i)}
//                 className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all text-left ${border} ${
//                   selected === i
//                     ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50/60"
//                     : "border-gray-100 bg-white"
//                 }`}
//               >
//                 <div className={`w-7 h-7 rounded-lg ${bg} ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
//                   <Icon className="w-3.5 h-3.5" />
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
//                   <p className="text-[10px] text-gray-400 leading-tight mt-0.5 truncate">{sub}</p>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Stats strip */}
//           <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 mb-5">
//             {[["30+", "Brands"], ["15×", "Avg ROI"], ["98%", "Retention"]].map(
//               ([num, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-sm font-black text-gray-900">{num}</p>
//                   <p className="text-[10px] text-gray-500">{lbl}</p>
//                 </div>
//               )
//             )}
//           </div>

//           {/* CTA */}
//           <Link
//             href="/grow"
//             onClick={onClose}
//             className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-blue-200"
//           >
//             Let&apos;s grow my brand <ArrowRight className="w-4 h-4" />
//           </Link>
//           <button
//             onClick={onClose}
//             className="w-full text-[11px] text-gray-400 hover:text-gray-500 py-2.5 transition-colors"
//           >
//             I&apos;ll explore on my own
//           </button>
//         </div>
//       </div>
//     </Overlay>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // POPUP 2 — EMAIL NEWSLETTER  (20 s)
// // ─────────────────────────────────────────────────────────────

// const EMAIL_PERKS = [
//   "Weekly AI marketing experiments — real results",
//   "Behind-the-scenes brand case studies",
//   "Exclusive tools, prompts & growth playbooks",
// ];

// // function PopupEmail({ onClose }: { onClose: () => void }) {
// //   const [email, setEmail] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = () => {
// //     if (!email || !/\S+@\S+\.\S+/.test(email)) {
// //       setError("Please enter a valid email address.");
// //       return;
// //     }
// //     setError("");
// //     setSubmitted(true);
// //     // TODO: wire to your email service here
// //   };

// //   return (
// //     <Overlay onClose={onClose}>
// //       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
// //         <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

// //         <div className="px-5 pt-5 pb-6">
// //           <div className="flex items-start justify-between mb-4">
// //             <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
// //               <Mail className="w-5 h-5 text-white" />
// //             </div>
// //             <button
// //               onClick={onClose}
// //               aria-label="Close"
// //               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
// //             >
// //               <X className="w-4 h-4" />
// //             </button>
// //           </div>

// //           <AnimatePresence mode="wait">
// //             {!submitted ? (
// //               <motion.div
// //                 key="form"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0, y: -8 }}
// //               >
// //                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-500 mb-1">
// //                   Free weekly newsletter
// //                 </p>
// //                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 mb-1 leading-tight">
// //                   Marketing that actually works.
// //                 </h2>
// //                 <p className="text-xs text-gray-500 mb-4">
// //                   Join 1,000+ founders. No fluff — just strategies that move the needle.
// //                 </p>

// //                 <ul className="space-y-2 mb-5">
// //                   {EMAIL_PERKS.map((p) => (
// //                     <li key={p} className="flex items-start gap-2">
// //                       <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
// //                         <ChevronRight className="w-2.5 h-2.5" />
// //                       </span>
// //                       <span className="text-[12px] text-gray-600 leading-snug">{p}</span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <div className="flex gap-2 mb-1">
// //                   <input
// //                     type="email"
// //                     value={email}
// //                     onChange={(e) => {
// //                       setEmail(e.target.value);
// //                       setError("");
// //                     }}
// //                     onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
// //                     placeholder="your@email.com"
// //                     className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-300"
// //                   />
// //                   <button
// //                     onClick={handleSubmit}
// //                     className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex-shrink-0"
// //                   >
// //                     <Sparkles className="w-3.5 h-3.5" /> Join
// //                   </button>
// //                 </div>
// //                 {error && (
// //                   <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>
// //                 )}
// //                 <button
// //                   onClick={onClose}
// //                   className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
// //                 >
// //                   No thanks, I prefer to figure it out alone
// //                 </button>
// //               </motion.div>
// //             ) : (
// //               <motion.div
// //                 key="success"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="text-center py-4"
// //               >
// //                 <div className="text-3xl mb-3">🎉</div>
// //                 <h3 className="text-base font-black text-gray-900 mb-1">You&apos;re in!</h3>
// //                 <p className="text-xs text-gray-500 mb-5">
// //                   Welcome to the club. Check your inbox for a confirmation.
// //                 </p>
// //                 <button
// //                   onClick={onClose}
// //                   className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
// //                 >
// //                   Back to exploring →
// //                 </button>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </Overlay>
// //   );
// // }

// // ─────────────────────────────────────────────────────────────
// // AGENCY DRAWER — "See what we do"
// // ─────────────────────────────────────────────────────────────




// function PopupEmail({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     setError("");

//     // ── Optimistic UI ──────────────────────────────────────
//     // Show success immediately — no spinner, no waiting on the network.
//     setSubmitted(true);

//     // ── Fire-and-forget background save ────────────────────
//     // Runs silently; UI never reflects its pending/failed state.
//     fetch("/api/subscribe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     }).catch((err) => {
//       // Swallow errors silently — don't disrupt the user's experience.
//       // Optionally log to an error tracker here.
//       console.error("Newsletter subscribe failed silently:", err);
//     });
//   };

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
//         <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

//         <div className="px-5 pt-5 pb-6">
//           <div className="flex items-start justify-between mb-4">
//             <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
//               <Mail className="w-5 h-5 text-white" />
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {!submitted ? (
//               <motion.div
//                 key="form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0, y: -8 }}
//               >
//                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-500 mb-1">
//                   Free weekly newsletter
//                 </p>
//                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 mb-1 leading-tight">
//                   Marketing that actually works.
//                 </h2>
//                 <p className="text-xs text-gray-500 mb-4">
//                   Join 1,000+ founders. No fluff — just strategies that move the needle.
//                 </p>

//                 <ul className="space-y-2 mb-5">
//                   {EMAIL_PERKS.map((p) => (
//                     <li key={p} className="flex items-start gap-2">
//                       <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
//                         <ChevronRight className="w-2.5 h-2.5" />
//                       </span>
//                       <span className="text-[12px] text-gray-600 leading-snug">{p}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex gap-2 mb-1">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setError("");
//                     }}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
//                     placeholder="your@email.com"
//                     className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-300"
//                   />
//                   <button
//                     onClick={handleSubmit}
//                     className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex-shrink-0"
//                   >
//                     <Sparkles className="w-3.5 h-3.5" /> Join
//                   </button>
//                 </div>
//                 {error && (
//                   <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>
//                 )}
//                 <button
//                   onClick={onClose}
//                   className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
//                 >
//                   No thanks, I prefer to figure it out alone
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center py-4"
//               >
//                 <div className="text-3xl mb-3">🎉</div>
//                 <h3 className="text-base font-black text-gray-900 mb-1">You&apos;re in!</h3>
//                 <p className="text-xs text-gray-500 mb-5">
//                   Welcome to the club. Check your inbox for a confirmation.
//                 </p>
//                 <button
//                   onClick={onClose}
//                   className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
//                 >
//                   Back to exploring →
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </Overlay>
//   );
// }




// const SERVICES = [
//   { icon: Instagram,  label: "Social media",         desc: "Instagram, YouTube, LinkedIn, X",     bg: "bg-blue-50",   color: "text-blue-700"   },
//   { icon: TrendingUp, label: "Brand growth",          desc: "Strategy, identity & positioning",    bg: "bg-green-50",  color: "text-green-700"  },
//   { icon: Target,     label: "Performance ads",       desc: "Meta, Google & programmatic",         bg: "bg-amber-50",  color: "text-amber-700"  },
//   { icon: Users,      label: "Influencer marketing",  desc: "50+ micro & macro partnerships",      bg: "bg-pink-50",   color: "text-pink-700"   },
//   { icon: Code2,      label: "Websites",              desc: "Fast, conversion-optimised sites",    bg: "bg-purple-50", color: "text-purple-700" },
//   { icon: Smartphone, label: "App development",       desc: "iOS, Android & full-stack",           bg: "bg-teal-50",   color: "text-teal-700"   },
//   { icon: Lightbulb,  label: "Brand mentoring",       desc: "1-on-1 strategy & coaching",         bg: "bg-red-50",    color: "text-red-700"    },
//   { icon: Camera,     label: "Creative production",   desc: "Photography, reels & ad creatives",   bg: "bg-gray-100",  color: "text-gray-700"   },
// ];

// const WORKS = [
//   { icon: "🍽️", bg: "bg-blue-50",   title: "Delhi059",   cat: "Restaurant · Canada", result: "650+ reviews"  },
//   { icon: "🚗",  bg: "bg-green-50",  title: "Local Ride", cat: "Mobility · Canada",   result: "100K+ rides"   },
//   { icon: "🛒",  bg: "bg-amber-50",  title: "BG Foods",   cat: "E-commerce · NA",     result: "50K+ orders"   },
//   { icon: "📚",  bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India",      result: "10K+ trained"  },
//   { icon: "🚕",  bg: "bg-orange-50", title: "CabTale",    cat: "Transport · India",   result: "1M+ downloads" },
//   { icon: "💎",  bg: "bg-pink-50",   title: "Dee Cee",    cat: "Jewellery · India",   result: "10× sales"     },
// ];

// function AgencyDrawer({ onClose }: { onClose: () => void }) {
//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", esc);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", esc);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/55 backdrop-blur-[3px] z-[500] flex items-end sm:items-center justify-center sm:p-5"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 60 }}
//         transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.85 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
//         role="dialog"
//         aria-modal="true"
//         aria-label="MarkTale agency overview"
//       >
//         {/* Drag handle (mobile) */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-gray-200 rounded-full" />
//         </div>

//         {/* Sticky header */}
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
//               M
//             </div>
//             <div>
//               <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
//               <p className="text-[11px] text-gray-500">Full-service brand growth agency</p>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-5 py-5 space-y-6">
//           {/* Services */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               What we do
//             </p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
//                 <div
//                   key={label}
//                   className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
//                 >
//                   <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
//                     <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Stats */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               Track record
//             </p>
//             <div className="grid grid-cols-4 gap-2">
//               {[["30+","Brands"], ["15×","Avg ROI"], ["10M+","Reach"], ["98%","Retention"]].map(
//                 ([num, lbl]) => (
//                   <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
//                     <p className="text-base font-black text-gray-900">{num}</p>
//                     <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
//                   </div>
//                 )
//               )}
//             </div>
//           </section>

//           {/* Past work */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               Past work
//             </p>
//             <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-5 px-5">
//               {WORKS.map(({ icon, bg, title, cat, result }) => (
//                 <div
//                   key={title}
//                   className="flex-shrink-0 w-32 border border-gray-100 hover:border-blue-200 rounded-xl p-3 transition-colors"
//                 >
//                   <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center text-base mb-2`}>
//                     {icon}
//                   </div>
//                   <p className="text-[12px] font-bold text-gray-800">{title}</p>
//                   <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
//                   <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
//                     {result}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Testimonial */}
//           <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-gray-500 leading-relaxed">
//             &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the
//             entire Indian community in our city.&rdquo;
//             <footer className="mt-1 not-italic text-[11px] text-gray-400">
//               — Owner, Delhi059 · Canada
//             </footer>
//           </blockquote>

//           {/* CTA */}
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 text-center">
//             <p className="font-black text-gray-900 text-base mb-1">Ready to grow your brand?</p>
//             <p className="text-xs text-blue-600 mb-4">
//               Free 30-minute strategy call — no commitment, just clarity.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
//               <Link
//                 href="/contact"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
//               >
//                 Get a free consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 href="/portfolio"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 View portfolio <ExternalLink className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </div>

//           {/* Bottom spacer for mobile safe area */}
//           <div className="h-1 sm:h-0" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // DEFAULT EXPORT — place in (main)/layout.tsx
// // ─────────────────────────────────────────────────────────────

// export default function BehavioralPopups() {
//   const [activePopup, setActivePopup] = useState<"grow" | "email" | null>(null);
//   const [agencyOpen, setAgencyOpen] = useState(false);

//   // Tab title trick
//   useEffect(() => {
//     const orig = document.title;
//     const alts = [
//       "We miss you! 👀",
//       "One last thing… 🚀",
//       "Don't miss this ✨",
//     ];
//     const handle = () => {
//       document.title = document.hidden
//         ? alts[Math.floor(Math.random() * alts.length)]
//         : orig;
//     };
//     document.addEventListener("visibilitychange", handle);
//     return () => {
//       document.removeEventListener("visibilitychange", handle);
//       document.title = orig;
//     };
//   }, []);

//   // Popup 1 — grow  (8 s)
//   useEffect(() => {
//     if (localStorage.getItem("mt_grow_seen")) return;
//     const t = setTimeout(() => {
//       setActivePopup("grow");
//       localStorage.setItem("mt_grow_seen", "1");
//     }, 8_000);
//     return () => clearTimeout(t);
//   }, []);

//   // Popup 2 — email  (20 s)
//   useEffect(() => {
//     if (localStorage.getItem("mt_email_seen")) return;
//     const t = setTimeout(() => {
//       // only show if no other popup is open
//       setActivePopup((cur) => {
//         if (cur === null) {
//           localStorage.setItem("mt_email_seen", "1");
//           return "email";
//         }
//         return cur;
//       });
//     }, 20_000);
//     return () => clearTimeout(t);
//   }, []);

//   const closePopup = useCallback(() => setActivePopup(null), []);

//   return (
//     <>
//       {/* ── Timed popups ────────────────────────────────────── */}
//       <AnimatePresence mode="wait">
//         {activePopup === "grow" && (
//           <PopupGrow key="grow" onClose={closePopup} />
//         )}
//         {activePopup === "email" && (
//           <PopupEmail key="email" onClose={closePopup} />
//         )}
//       </AnimatePresence>

//       {/* ── Agency drawer ────────────────────────────────────── */}
//       <AnimatePresence>
//         {agencyOpen && (
//           <AgencyDrawer key="agency" onClose={() => setAgencyOpen(false)} />
//         )}
//       </AnimatePresence>

//       {/* ── Persistent floating button ───────────────────────── */}
//       {/* z-[150] keeps it below popups (z-500) and above page content */}
//       {/* bottom-24 leaves clear space above WhatsApp float buttons  */}
//       <motion.div
//         className="fixed bottom-[88px] right-4 z-[150]"
//         initial={{ opacity: 0, scale: 0.7, y: 10 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ delay: 2.5, type: "spring", stiffness: 360, damping: 28 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setAgencyOpen(true)}
//           aria-label="See what MarkTale can do"
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-200/60 transition-colors"
//         >
//           <Sparkles className="w-3.5 h-3.5" />
//           See what we do
//         </motion.button>
//       </motion.div>
//     </>
//   );
// }






















"use client";

/**
 * BehavioralPopups.tsx  —  MarkTale World
 *
 * Timeline:
 *   8s  → PopupGrow      (grow your brand / lead gen)
 *   20s → PopupEmail     (newsletter signup)
 *   Always visible → floating "See what we do" button → AgencyDrawer
 *
 * localStorage keys:
 *   mt_grow_seen        → timestamp (ms) of last time grow popup was shown
 *   mt_email_seen       → timestamp (ms) of last time email popup was shown
 *   mt_email_subscribed → "1" once user actually submits a valid email (permanent)
 *
 * Reappearance rule: popups can show again after 24 hours, UNLESS the
 * email popup has already been successfully submitted — that one is
 * permanently suppressed once subscribed.
 *
 * Place <BehavioralPopups /> in (main)/layout.tsx ONLY.
 */









// import {
//   useEffect,
//   useState,
//   useCallback,
// } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import {
//   X,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Target,
//   Users,
//   Code2,
//   Smartphone,
//   Zap,
//   BarChart3,
//   Mail,
//   ChevronRight,
//   ExternalLink,
//   Instagram,
//   Camera,
//   Lightbulb,
// } from "lucide-react";

// // ─────────────────────────────────────────────────────────────
// // Storage helpers — 24h reappearance window
// // ─────────────────────────────────────────────────────────────

// const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// /** Returns true if popup is allowed to show (never shown, or last shown >24h ago) */
// function canShowAgain(key: string): boolean {
//   if (typeof window === "undefined") return false;
//   const last = localStorage.getItem(key);
//   if (!last) return true;
//   const lastTime = parseInt(last, 10);
//   if (Number.isNaN(lastTime)) return true;
//   return Date.now() - lastTime > ONE_DAY_MS;
// }

// /** Records "now" as the last-shown timestamp for a popup key */
// function markShown(key: string) {
//   if (typeof window === "undefined") return;
//   localStorage.setItem(key, Date.now().toString());
// }

// // ─────────────────────────────────────────────────────────────
// // Shared overlay + card wrapper
// // ─────────────────────────────────────────────────────────────

// function Overlay({
//   children,
//   onClose,
//   zIndex = "z-[500]",
// }: {
//   children: React.ReactNode;
//   onClose: () => void;
//   zIndex?: string;
// }) {
//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", esc);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", esc);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       onClick={onClose}
//       className={`fixed inset-0 bg-black/55 backdrop-blur-[3px] ${zIndex} flex items-end sm:items-center justify-center p-3 sm:p-5`}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: 28, scale: 0.96 }}
//         transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
//         onClick={(e) => e.stopPropagation()}
//         className="w-full"
//         role="dialog"
//         aria-modal="true"
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // POPUP 1 — GROW YOUR BRAND  (8 s)
// // ─────────────────────────────────────────────────────────────

// const GROW_OPTIONS = [
//   {
//     icon: TrendingUp,
//     color: "text-blue-600",
//     bg: "bg-blue-50",
//     border: "border-blue-100 hover:border-blue-300",
//     label: "Grow my brand",
//     sub: "Strategy, identity & storytelling",
//   },
//   {
//     icon: Target,
//     color: "text-orange-500",
//     bg: "bg-orange-50",
//     border: "border-orange-100 hover:border-orange-300",
//     label: "Generate leads",
//     sub: "Meta, Google & performance ads",
//   },
//   {
//     icon: Users,
//     color: "text-pink-500",
//     bg: "bg-pink-50",
//     border: "border-pink-100 hover:border-pink-300",
//     label: "Build a community",
//     sub: "Social media & influencer marketing",
//   },
//   {
//     icon: Code2,
//     color: "text-purple-600",
//     bg: "bg-purple-50",
//     border: "border-purple-100 hover:border-purple-300",
//     label: "Launch a product",
//     sub: "Website, app & go-to-market",
//   },
//   {
//     icon: BarChart3,
//     color: "text-green-600",
//     bg: "bg-green-50",
//     border: "border-green-100 hover:border-green-300",
//     label: "Scale revenue",
//     sub: "Funnels, retargeting & analytics",
//   },
//   {
//     icon: Smartphone,
//     color: "text-teal-600",
//     bg: "bg-teal-50",
//     border: "border-teal-100 hover:border-teal-300",
//     label: "Build an app",
//     sub: "iOS, Android & full-stack",
//   },
// ];

// function PopupGrow({ onClose }: { onClose: () => void }) {
//   const [selected, setSelected] = useState<number | null>(null);

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
//         {/* Top accent bar */}
//         <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

//         <div className="px-5 pt-5 pb-6">
//           {/* Header row */}
//           <div className="flex items-start justify-between mb-5">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
//                 <Zap className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-500 mb-0.5">
//                   Marktale World
//                 </p>
//                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 leading-tight">
//                   What&apos;s your growth goal?
//                 </h2>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Options grid */}
//           <div className="grid grid-cols-2 gap-2 mb-5">
//             {GROW_OPTIONS.map(({ icon: Icon, color, bg, border, label, sub }, i) => (
//               <button
//                 key={label}
//                 onClick={() => setSelected(i === selected ? null : i)}
//                 className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all text-left ${border} ${
//                   selected === i
//                     ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50/60"
//                     : "border-gray-100 bg-white"
//                 }`}
//               >
//                 <div className={`w-7 h-7 rounded-lg ${bg} ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
//                   <Icon className="w-3.5 h-3.5" />
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
//                   <p className="text-[10px] text-gray-400 leading-tight mt-0.5 truncate">{sub}</p>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Stats strip */}
//           <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 mb-5">
//             {[["30+", "Brands"], ["15×", "Avg ROI"], ["98%", "Retention"]].map(
//               ([num, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-sm font-black text-gray-900">{num}</p>
//                   <p className="text-[10px] text-gray-500">{lbl}</p>
//                 </div>
//               )
//             )}
//           </div>

//           {/* CTA */}
//           <Link
//             href="/grow"
//             onClick={onClose}
//             className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-blue-200"
//           >
//             Let&apos;s grow my brand <ArrowRight className="w-4 h-4" />
//           </Link>
//           <button
//             onClick={onClose}
//             className="w-full text-[11px] text-gray-400 hover:text-gray-500 py-2.5 transition-colors"
//           >
//             I&apos;ll explore on my own
//           </button>
//         </div>
//       </div>
//     </Overlay>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // POPUP 2 — EMAIL NEWSLETTER  (20 s)
// // ─────────────────────────────────────────────────────────────

// const EMAIL_PERKS = [
//   "Weekly AI marketing experiments — real results",
//   "Behind-the-scenes brand case studies",
//   "Exclusive tools, prompts & growth playbooks",
// ];

// function PopupEmail({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     setError("");

//     // ── Optimistic UI ──────────────────────────────────────
//     // Show success immediately — no spinner, no waiting on the network.
//     setSubmitted(true);

//     // Permanently suppress this popup going forward — they're subscribed now.
//     localStorage.setItem("mt_email_subscribed", "1");

//     // ── Fire-and-forget background save ────────────────────
//     // Runs silently; UI never reflects its pending/failed state.
//     fetch("/api/subscribe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     }).catch((err) => {
//       // Swallow errors silently — don't disrupt the user's experience.
//       console.error("Newsletter subscribe failed silently:", err);
//     });
//   };

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
//         <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

//         <div className="px-5 pt-5 pb-6">
//           <div className="flex items-start justify-between mb-4">
//             <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
//               <Mail className="w-5 h-5 text-white" />
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {!submitted ? (
//               <motion.div
//                 key="form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0, y: -8 }}
//               >
//                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-500 mb-1">
//                   Free weekly newsletter
//                 </p>
//                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 mb-1 leading-tight">
//                   Marketing that actually works.
//                 </h2>
//                 <p className="text-xs text-gray-500 mb-4">
//                   Join 1,000+ founders. No fluff — just strategies that move the needle.
//                 </p>

//                 <ul className="space-y-2 mb-5">
//                   {EMAIL_PERKS.map((p) => (
//                     <li key={p} className="flex items-start gap-2">
//                       <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
//                         <ChevronRight className="w-2.5 h-2.5" />
//                       </span>
//                       <span className="text-[12px] text-gray-600 leading-snug">{p}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex gap-2 mb-1">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setError("");
//                     }}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
//                     placeholder="your@email.com"
//                     className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-300"
//                   />
//                   <button
//                     onClick={handleSubmit}
//                     className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex-shrink-0"
//                   >
//                     <Sparkles className="w-3.5 h-3.5" /> Join
//                   </button>
//                 </div>
//                 {error && (
//                   <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>
//                 )}
//                 <button
//                   onClick={onClose}
//                   className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
//                 >
//                   No thanks, I prefer to figure it out alone
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center py-4"
//               >
//                 <div className="text-3xl mb-3">🎉</div>
//                 <h3 className="text-base font-black text-gray-900 mb-1">You&apos;re in!</h3>
//                 <p className="text-xs text-gray-500 mb-5">
//                   Welcome to the club. Check your inbox for a confirmation.
//                 </p>
//                 <button
//                   onClick={onClose}
//                   className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
//                 >
//                   Back to exploring →
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </Overlay>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // AGENCY DRAWER — "See what we do"
// // ─────────────────────────────────────────────────────────────

// const SERVICES = [
//   { icon: Instagram,  label: "Social media",         desc: "Instagram, YouTube, LinkedIn, X",     bg: "bg-blue-50",   color: "text-blue-700"   },
//   { icon: TrendingUp, label: "Brand growth",          desc: "Strategy, identity & positioning",    bg: "bg-green-50",  color: "text-green-700"  },
//   { icon: Target,     label: "Performance ads",       desc: "Meta, Google & programmatic",         bg: "bg-amber-50",  color: "text-amber-700"  },
//   { icon: Users,      label: "Influencer marketing",  desc: "50+ micro & macro partnerships",      bg: "bg-pink-50",   color: "text-pink-700"   },
//   { icon: Code2,      label: "Websites",              desc: "Fast, conversion-optimised sites",    bg: "bg-purple-50", color: "text-purple-700" },
//   { icon: Smartphone, label: "App development",       desc: "iOS, Android & full-stack",           bg: "bg-teal-50",   color: "text-teal-700"   },
//   { icon: Lightbulb,  label: "Brand mentoring",       desc: "1-on-1 strategy & coaching",         bg: "bg-red-50",    color: "text-red-700"    },
//   { icon: Camera,     label: "Creative production",   desc: "Photography, reels & ad creatives",   bg: "bg-gray-100",  color: "text-gray-700"   },
// ];

// const WORKS = [
//   { icon: "🍽️", bg: "bg-blue-50",   title: "Delhi059",   cat: "Restaurant · Canada", result: "650+ reviews"  },
//   { icon: "🚗",  bg: "bg-green-50",  title: "Local Ride", cat: "Mobility · Canada",   result: "100K+ rides"   },
//   { icon: "🛒",  bg: "bg-amber-50",  title: "BG Foods",   cat: "E-commerce · NA",     result: "50K+ orders"   },
//   { icon: "📚",  bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India",      result: "10K+ trained"  },
//   { icon: "🚕",  bg: "bg-orange-50", title: "CabTale",    cat: "Transport · India",   result: "1M+ downloads" },
//   { icon: "💎",  bg: "bg-pink-50",   title: "Dee Cee",    cat: "Jewellery · India",   result: "10× sales"     },
// ];

// function AgencyDrawer({ onClose }: { onClose: () => void }) {
//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", esc);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", esc);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/55 backdrop-blur-[3px] z-[500] flex items-end sm:items-center justify-center sm:p-5"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 60 }}
//         transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.85 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
//         role="dialog"
//         aria-modal="true"
//         aria-label="MarkTale agency overview"
//       >
//         {/* Drag handle (mobile) */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-gray-200 rounded-full" />
//         </div>

//         {/* Sticky header */}
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
//               M
//             </div>
//             <div>
//               <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
//               <p className="text-[11px] text-gray-500">Full-service brand growth agency</p>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-5 py-5 space-y-6">
//           {/* Services */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               What we do
//             </p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
//                 <div
//                   key={label}
//                   className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
//                 >
//                   <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
//                     <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Stats */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               Track record
//             </p>
//             <div className="grid grid-cols-4 gap-2">
//               {[["30+","Brands"], ["15×","Avg ROI"], ["10M+","Reach"], ["98%","Retention"]].map(
//                 ([num, lbl]) => (
//                   <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
//                     <p className="text-base font-black text-gray-900">{num}</p>
//                     <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
//                   </div>
//                 )
//               )}
//             </div>
//           </section>

//           {/* Past work */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               Past work
//             </p>
//             <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-5 px-5">
//               {WORKS.map(({ icon, bg, title, cat, result }) => (
//                 <div
//                   key={title}
//                   className="flex-shrink-0 w-32 border border-gray-100 hover:border-blue-200 rounded-xl p-3 transition-colors"
//                 >
//                   <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center text-base mb-2`}>
//                     {icon}
//                   </div>
//                   <p className="text-[12px] font-bold text-gray-800">{title}</p>
//                   <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
//                   <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
//                     {result}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Testimonial */}
//           <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-gray-500 leading-relaxed">
//             &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the
//             entire Indian community in our city.&rdquo;
//             <footer className="mt-1 not-italic text-[11px] text-gray-400">
//               — Owner, Delhi059 · Canada
//             </footer>
//           </blockquote>

//           {/* CTA */}
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 text-center">
//             <p className="font-black text-gray-900 text-base mb-1">Ready to grow your brand?</p>
//             <p className="text-xs text-blue-600 mb-4">
//               Free 30-minute strategy call — no commitment, just clarity.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
//               <Link
//                 href="/contact"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
//               >
//                 Get a free consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 href="/portfolio"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 View portfolio <ExternalLink className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </div>

//           {/* Bottom spacer for mobile safe area */}
//           <div className="h-1 sm:h-0" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // DEFAULT EXPORT — place in (main)/layout.tsx
// // ─────────────────────────────────────────────────────────────

// export default function BehavioralPopups() {
//   const [activePopup, setActivePopup] = useState<"grow" | "email" | null>(null);
//   const [agencyOpen, setAgencyOpen] = useState(false);

//   // Tab title trick
//   useEffect(() => {
//     const orig = document.title;
//     const alts = [
//       "We miss you! 👀",
//       "One last thing… 🚀",
//       "Don't miss this ✨",
//     ];
//     const handle = () => {
//       document.title = document.hidden
//         ? alts[Math.floor(Math.random() * alts.length)]
//         : orig;
//     };
//     document.addEventListener("visibilitychange", handle);
//     return () => {
//       document.removeEventListener("visibilitychange", handle);
//       document.title = orig;
//     };
//   }, []);

//   // Popup 1 — grow  (8 s, reappears after 24h)
//   useEffect(() => {
//     if (!canShowAgain("mt_grow_seen")) return;
//     const t = setTimeout(() => {
//       setActivePopup("grow");
//       markShown("mt_grow_seen");
//     }, 8_000);
//     return () => clearTimeout(t);
//   }, []);

//   // Popup 2 — email  (20 s, reappears after 24h, unless already subscribed)
//   useEffect(() => {
//     if (localStorage.getItem("mt_email_subscribed")) return;
//     if (!canShowAgain("mt_email_seen")) return;
//     const t = setTimeout(() => {
//       // only show if no other popup is open
//       setActivePopup((cur) => {
//         if (cur === null) {
//           markShown("mt_email_seen");
//           return "email";
//         }
//         return cur;
//       });
//     }, 20_000);
//     return () => clearTimeout(t);
//   }, []);

//   const closePopup = useCallback(() => setActivePopup(null), []);

//   return (
//     <>
//       {/* ── Timed popups ────────────────────────────────────── */}
//       <AnimatePresence mode="wait">
//         {activePopup === "grow" && (
//           <PopupGrow key="grow" onClose={closePopup} />
//         )}
//         {activePopup === "email" && (
//           <PopupEmail key="email" onClose={closePopup} />
//         )}
//       </AnimatePresence>

//       {/* ── Agency drawer ────────────────────────────────────── */}
//       <AnimatePresence>
//         {agencyOpen && (
//           <AgencyDrawer key="agency" onClose={() => setAgencyOpen(false)} />
//         )}
//       </AnimatePresence>

//       {/* ── Persistent floating button ───────────────────────── */}
//       {/* z-[150] keeps it below popups (z-500) and above page content */}
//       {/* bottom-24 leaves clear space above WhatsApp float buttons  */}
//       <motion.div
//         className="fixed bottom-[88px] right-4 z-[150]"
//         initial={{ opacity: 0, scale: 0.7, y: 10 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ delay: 2.5, type: "spring", stiffness: 360, damping: 28 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setAgencyOpen(true)}
//           aria-label="See what MarkTale can do"
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-200/60 transition-colors"
//         >
//           <Sparkles className="w-3.5 h-3.5" />
//           See what we do
//         </motion.button>
//       </motion.div>
//     </>
//   );
// }


























"use client";

/**
 * BehavioralPopups.tsx  —  MarkTale World
 *
 * Timeline:
 *   8s  → PopupGrow      (grow your brand / lead gen)
 *   20s → PopupEmail     (newsletter signup)
 *   Always visible → floating "See what we do" button → AgencyDrawer
 *
 * localStorage keys:
 *   mt_grow_seen        → timestamp (ms) of last time grow popup was shown
 *   mt_email_seen       → timestamp (ms) of last time email popup was shown
 *   mt_email_subscribed → "1" once user actually submits a valid email (permanent)
 *
 * Reappearance rules:
 *   - Grow popup   → reappears every 1 hour
 *   - Email popup  → suppressed for the rest of the calendar day it was shown;
 *                    permanently suppressed once subscribed
 *
 * Place <BehavioralPopups /> in (main)/layout.tsx ONLY.
 */











// import {
//   useEffect,
//   useState,
//   useCallback,
// } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import {
//   X,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Target,
//   Users,
//   Code2,
//   Smartphone,
//   Zap,
//   BarChart3,
//   Mail,
//   ChevronRight,
//   ExternalLink,
//   Instagram,
//   Camera,
//   Lightbulb,
// } from "lucide-react";

// // ─────────────────────────────────────────────────────────────
// // Storage helpers
// // ─────────────────────────────────────────────────────────────

// const ONE_HOUR_MS = 60 * 60 * 1000;

// /**
//  * Grow popup — reappears after 1 hour (rolling window).
//  * Email popup — reappears next calendar day (after midnight).
//  */
// function canShowGrowAgain(): boolean {
//   if (typeof window === "undefined") return false;
//   const last = localStorage.getItem("mt_grow_seen");
//   if (!last) return true;
//   const lastTime = parseInt(last, 10);
//   if (Number.isNaN(lastTime)) return true;
//   return Date.now() - lastTime > ONE_HOUR_MS;
// }

// function canShowEmailAgain(): boolean {
//   if (typeof window === "undefined") return false;
//   const last = localStorage.getItem("mt_email_seen");
//   if (!last) return true;
//   const lastDate = new Date(parseInt(last, 10));
//   if (isNaN(lastDate.getTime())) return true;
//   const now = new Date();
//   return (
//     lastDate.getFullYear() !== now.getFullYear() ||
//     lastDate.getMonth() !== now.getMonth() ||
//     lastDate.getDate() !== now.getDate()
//   );
// }

// function markShown(key: string) {
//   if (typeof window === "undefined") return;
//   localStorage.setItem(key, Date.now().toString());
// }

// // ─────────────────────────────────────────────────────────────
// // Shared overlay + card wrapper
// // ─────────────────────────────────────────────────────────────

// function Overlay({
//   children,
//   onClose,
//   zIndex = "z-[500]",
// }: {
//   children: React.ReactNode;
//   onClose: () => void;
//   zIndex?: string;
// }) {
//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", esc);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", esc);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       onClick={onClose}
//       className={`fixed inset-0 bg-black/55 backdrop-blur-[3px] ${zIndex} flex items-end sm:items-center justify-center p-3 sm:p-5`}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: 28, scale: 0.96 }}
//         transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
//         onClick={(e) => e.stopPropagation()}
//         className="w-full"
//         role="dialog"
//         aria-modal="true"
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // POPUP 1 — GROW YOUR BRAND  (8 s, repeats every hour)
// // ─────────────────────────────────────────────────────────────

// const GROW_OPTIONS = [
//   {
//     icon: TrendingUp,
//     color: "text-blue-600",
//     bg: "bg-blue-50",
//     border: "border-blue-100 hover:border-blue-300",
//     label: "Grow my brand",
//     sub: "Strategy, identity & storytelling",
//   },
//   {
//     icon: Target,
//     color: "text-orange-500",
//     bg: "bg-orange-50",
//     border: "border-orange-100 hover:border-orange-300",
//     label: "Generate leads",
//     sub: "Meta, Google & performance ads",
//   },
//   {
//     icon: Users,
//     color: "text-pink-500",
//     bg: "bg-pink-50",
//     border: "border-pink-100 hover:border-pink-300",
//     label: "Build a community",
//     sub: "Social media & influencer marketing",
//   },
//   {
//     icon: Code2,
//     color: "text-purple-600",
//     bg: "bg-purple-50",
//     border: "border-purple-100 hover:border-purple-300",
//     label: "Launch a product",
//     sub: "Website, app & go-to-market",
//   },
//   {
//     icon: BarChart3,
//     color: "text-green-600",
//     bg: "bg-green-50",
//     border: "border-green-100 hover:border-green-300",
//     label: "Scale revenue",
//     sub: "Funnels, retargeting & analytics",
//   },
//   {
//     icon: Smartphone,
//     color: "text-teal-600",
//     bg: "bg-teal-50",
//     border: "border-teal-100 hover:border-teal-300",
//     label: "Build an app",
//     sub: "iOS, Android & full-stack",
//   },
// ];

// function PopupGrow({ onClose }: { onClose: () => void }) {
//   const [selected, setSelected] = useState<number | null>(null);

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
//         {/* Top accent bar */}
//         <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

//         <div className="px-5 pt-5 pb-6">
//           {/* Header row */}
//           <div className="flex items-start justify-between mb-5">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
//                 <Zap className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-500 mb-0.5">
//                   Marktale World
//                 </p>
//                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 leading-tight">
//                   What&apos;s your growth goal?
//                 </h2>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Options grid */}
//           <div className="grid grid-cols-2 gap-2 mb-5">
//             {GROW_OPTIONS.map(({ icon: Icon, color, bg, border, label, sub }, i) => (
//               <button
//                 key={label}
//                 onClick={() => setSelected(i === selected ? null : i)}
//                 className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all text-left ${border} ${
//                   selected === i
//                     ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50/60"
//                     : "border-gray-100 bg-white"
//                 }`}
//               >
//                 <div className={`w-7 h-7 rounded-lg ${bg} ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
//                   <Icon className="w-3.5 h-3.5" />
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
//                   <p className="text-[10px] text-gray-400 leading-tight mt-0.5 truncate">{sub}</p>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Stats strip */}
//           <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 mb-5">
//             {[["30+", "Brands"], ["15×", "Avg ROI"], ["98%", "Retention"]].map(
//               ([num, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-sm font-black text-gray-900">{num}</p>
//                   <p className="text-[10px] text-gray-500">{lbl}</p>
//                 </div>
//               )
//             )}
//           </div>

//           {/* CTA */}
//           <Link
//             href="/grow"
//             onClick={onClose}
//             className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-blue-200"
//           >
//             Let&apos;s grow my brand <ArrowRight className="w-4 h-4" />
//           </Link>
//           <button
//             onClick={onClose}
//             className="w-full text-[11px] text-gray-400 hover:text-gray-500 py-2.5 transition-colors"
//           >
//             I&apos;ll explore on my own
//           </button>
//         </div>
//       </div>
//     </Overlay>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // POPUP 2 — EMAIL NEWSLETTER  (20 s, once per calendar day)
// // ─────────────────────────────────────────────────────────────

// const EMAIL_PERKS = [
//   "Weekly AI marketing experiments — real results",
//   "Behind-the-scenes brand case studies",
//   "Exclusive tools, prompts & growth playbooks",
// ];

// function PopupEmail({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     setError("");

//     // Optimistic UI — show success immediately
//     setSubmitted(true);

//     // Permanently suppress this popup — they're subscribed now
//     localStorage.setItem("mt_email_subscribed", "1");

//     // Fire-and-forget background save
//     fetch("/api/subscribe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     }).catch((err) => {
//       console.error("Newsletter subscribe failed silently:", err);
//     });
//   };

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
//         <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

//         <div className="px-5 pt-5 pb-6">
//           <div className="flex items-start justify-between mb-4">
//             <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
//               <Mail className="w-5 h-5 text-white" />
//             </div>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {!submitted ? (
//               <motion.div
//                 key="form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0, y: -8 }}
//               >
//                 <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-500 mb-1">
//                   Free weekly newsletter
//                 </p>
//                 <h2 className="text-[17px] sm:text-lg font-black text-gray-900 mb-1 leading-tight">
//                   Marketing that actually works.
//                 </h2>
//                 <p className="text-xs text-gray-500 mb-4">
//                   Join 1,000+ founders. No fluff — just strategies that move the needle.
//                 </p>

//                 <ul className="space-y-2 mb-5">
//                   {EMAIL_PERKS.map((p) => (
//                     <li key={p} className="flex items-start gap-2">
//                       <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
//                         <ChevronRight className="w-2.5 h-2.5" />
//                       </span>
//                       <span className="text-[12px] text-gray-600 leading-snug">{p}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex gap-2 mb-1">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setError("");
//                     }}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
//                     placeholder="your@email.com"
//                     className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-300"
//                   />
//                   <button
//                     onClick={handleSubmit}
//                     className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex-shrink-0"
//                   >
//                     <Sparkles className="w-3.5 h-3.5" /> Join
//                   </button>
//                 </div>
//                 {error && (
//                   <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>
//                 )}
//                 <button
//                   onClick={onClose}
//                   className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
//                 >
//                   No thanks, I prefer to figure it out alone
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center py-4"
//               >
//                 <div className="text-3xl mb-3">🎉</div>
//                 <h3 className="text-base font-black text-gray-900 mb-1">You&apos;re in!</h3>
//                 <p className="text-xs text-gray-500 mb-5">
//                   Welcome to the club. Check your inbox for a confirmation.
//                 </p>
//                 <button
//                   onClick={onClose}
//                   className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
//                 >
//                   Back to exploring →
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </Overlay>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // AGENCY DRAWER — "See what we do"
// // ─────────────────────────────────────────────────────────────

// const SERVICES = [
//   { icon: Instagram,  label: "Social media",         desc: "Instagram, YouTube, LinkedIn, X",     bg: "bg-blue-50",   color: "text-blue-700"   },
//   { icon: TrendingUp, label: "Brand growth",          desc: "Strategy, identity & positioning",    bg: "bg-green-50",  color: "text-green-700"  },
//   { icon: Target,     label: "Performance ads",       desc: "Meta, Google & programmatic",         bg: "bg-amber-50",  color: "text-amber-700"  },
//   { icon: Users,      label: "Influencer marketing",  desc: "50+ micro & macro partnerships",      bg: "bg-pink-50",   color: "text-pink-700"   },
//   { icon: Code2,      label: "Websites",              desc: "Fast, conversion-optimised sites",    bg: "bg-purple-50", color: "text-purple-700" },
//   { icon: Smartphone, label: "App development",       desc: "iOS, Android & full-stack",           bg: "bg-teal-50",   color: "text-teal-700"   },
//   { icon: Lightbulb,  label: "Brand mentoring",       desc: "1-on-1 strategy & coaching",         bg: "bg-red-50",    color: "text-red-700"    },
//   { icon: Camera,     label: "Creative production",   desc: "Photography, reels & ad creatives",   bg: "bg-gray-100",  color: "text-gray-700"   },
// ];

// const WORKS = [
//   { icon: "🍽️", bg: "bg-blue-50",   title: "Delhi059",   cat: "Restaurant · Canada", result: "650+ reviews"  },
//   { icon: "🚗",  bg: "bg-green-50",  title: "Local Ride", cat: "Mobility · Canada",   result: "100K+ rides"   },
//   { icon: "🛒",  bg: "bg-amber-50",  title: "BG Foods",   cat: "E-commerce · NA",     result: "50K+ orders"   },
//   { icon: "📚",  bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India",      result: "10K+ trained"  },
//   { icon: "🚕",  bg: "bg-orange-50", title: "CabTale",    cat: "Transport · India",   result: "1M+ downloads" },
//   { icon: "💎",  bg: "bg-pink-50",   title: "Dee Cee",    cat: "Jewellery · India",   result: "10× sales"     },
// ];

// function AgencyDrawer({ onClose }: { onClose: () => void }) {
//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", esc);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", esc);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/55 backdrop-blur-[3px] z-[500] flex items-end sm:items-center justify-center sm:p-5"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 60 }}
//         transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.85 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
//         role="dialog"
//         aria-modal="true"
//         aria-label="MarkTale agency overview"
//       >
//         {/* Drag handle (mobile) */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-gray-200 rounded-full" />
//         </div>

//         {/* Sticky header */}
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
//               M
//             </div>
//             <div>
//               <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
//               <p className="text-[11px] text-gray-500">Full-service brand growth agency</p>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-5 py-5 space-y-6">
//           {/* Services */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               What we do
//             </p>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//               {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
//                 <div
//                   key={label}
//                   className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
//                 >
//                   <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
//                     <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Stats */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               Track record
//             </p>
//             <div className="grid grid-cols-4 gap-2">
//               {[["30+","Brands"], ["15×","Avg ROI"], ["10M+","Reach"], ["98%","Retention"]].map(
//                 ([num, lbl]) => (
//                   <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
//                     <p className="text-base font-black text-gray-900">{num}</p>
//                     <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
//                   </div>
//                 )
//               )}
//             </div>
//           </section>

//           {/* Past work */}
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
//               Past work
//             </p>
//             <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-5 px-5">
//               {WORKS.map(({ icon, bg, title, cat, result }) => (
//                 <div
//                   key={title}
//                   className="flex-shrink-0 w-32 border border-gray-100 hover:border-blue-200 rounded-xl p-3 transition-colors"
//                 >
//                   <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center text-base mb-2`}>
//                     {icon}
//                   </div>
//                   <p className="text-[12px] font-bold text-gray-800">{title}</p>
//                   <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
//                   <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
//                     {result}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Testimonial */}
//           <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-gray-500 leading-relaxed">
//             &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the
//             entire Indian community in our city.&rdquo;
//             <footer className="mt-1 not-italic text-[11px] text-gray-400">
//               — Owner, Delhi059 · Canada
//             </footer>
//           </blockquote>

//           {/* CTA */}
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 text-center">
//             <p className="font-black text-gray-900 text-base mb-1">Ready to grow your brand?</p>
//             <p className="text-xs text-blue-600 mb-4">
//               Free 30-minute strategy call — no commitment, just clarity.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
//               <Link
//                 href="/contact"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
//               >
//                 Get a free consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 href="/portfolio"
//                 onClick={onClose}
//                 className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
//               >
//                 View portfolio <ExternalLink className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </div>

//           {/* Bottom spacer for mobile safe area */}
//           <div className="h-1 sm:h-0" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // DEFAULT EXPORT — place in (main)/layout.tsx
// // ─────────────────────────────────────────────────────────────

// export default function BehavioralPopups() {
//   const [activePopup, setActivePopup] = useState<"grow" | "email" | null>(null);
//   const [agencyOpen, setAgencyOpen] = useState(false);

//   // Tab title trick
//   useEffect(() => {
//     const orig = document.title;
//     const alts = [
//       "We miss you! 👀",
//       "One last thing… 🚀",
//       "Don't miss this ✨",
//     ];
//     const handle = () => {
//       document.title = document.hidden
//         ? alts[Math.floor(Math.random() * alts.length)]
//         : orig;
//     };
//     document.addEventListener("visibilitychange", handle);
//     return () => {
//       document.removeEventListener("visibilitychange", handle);
//       document.title = orig;
//     };
//   }, []);

//   // Popup 1 — grow (8s delay, then repeats every hour)
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     if (!canShowGrowAgain()) return;
//     const t = setTimeout(() => {
//       setActivePopup("grow");
//       markShown("mt_grow_seen");
//     }, 8_000);
//     return () => clearTimeout(t);
//   }, []);

//   // Popup 2 — email (20s delay, once per calendar day, permanently off after subscribe)
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     if (localStorage.getItem("mt_email_subscribed")) return;
//     if (!canShowEmailAgain()) return;
//     const t = setTimeout(() => {
//       setActivePopup((cur) => {
//         if (cur === null) {
//           markShown("mt_email_seen");
//           return "email";
//         }
//         return cur;
//       });
//     }, 20_000);
//     return () => clearTimeout(t);
//   }, []);

//   const closePopup = useCallback(() => setActivePopup(null), []);

//   return (
//     <>
//       {/* ── Timed popups ────────────────────────────────────── */}
//       <AnimatePresence mode="wait">
//         {activePopup === "grow" && (
//           <PopupGrow key="grow" onClose={closePopup} />
//         )}
//         {activePopup === "email" && (
//           <PopupEmail key="email" onClose={closePopup} />
//         )}
//       </AnimatePresence>

//       {/* ── Agency drawer ────────────────────────────────────── */}
//       <AnimatePresence>
//         {agencyOpen && (
//           <AgencyDrawer key="agency" onClose={() => setAgencyOpen(false)} />
//         )}
//       </AnimatePresence>

//       {/* ── Persistent floating button ───────────────────────── */}
//       {/* z-[150] keeps it below popups (z-500) and above page content */}
//       {/* bottom-24 leaves clear space above WhatsApp float buttons  */}
//       <motion.div
//         className="fixed bottom-[88px] right-4 z-[150]"
//         initial={{ opacity: 0, scale: 0.7, y: 10 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ delay: 2.5, type: "spring", stiffness: 360, damping: 28 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setAgencyOpen(true)}
//           aria-label="See what MarkTale can do"
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-200/60 transition-colors"
//         >
//           <Sparkles className="w-3.5 h-3.5" />
//           See what we do
//         </motion.button>
//       </motion.div>
//     </>
//   );
// }























import {
  useEffect,
  useState,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  X,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Code2,
  Smartphone,
  Zap,
  BarChart3,
  Mail,
  ChevronRight,
  ExternalLink,
  Instagram,
  Camera,
  Lightbulb,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

const ONE_HOUR_MS = 60 * 60 * 1000;

// ─────────────────────────────────────────────────────────────
// Email storage helpers (grow popup no longer needs these)
// ─────────────────────────────────────────────────────────────

function canShowEmailAgain(): boolean {
  if (typeof window === "undefined") return false;
  const last = localStorage.getItem("mt_email_seen");
  if (!last) return true;
  const lastDate = new Date(parseInt(last, 10));
  if (isNaN(lastDate.getTime())) return true;
  const now = new Date();
  return (
    lastDate.getFullYear() !== now.getFullYear() ||
    lastDate.getMonth() !== now.getMonth() ||
    lastDate.getDate() !== now.getDate()
  );
}

function markShown(key: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, Date.now().toString());
}

// ─────────────────────────────────────────────────────────────
// Shared overlay + card wrapper
// ─────────────────────────────────────────────────────────────

function Overlay({
  children,
  onClose,
  zIndex = "z-[500]",
}: {
  children: React.ReactNode;
  onClose: () => void;
  zIndex?: string;
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className={`fixed inset-0 bg-black/55 backdrop-blur-[3px] ${zIndex} flex items-end sm:items-center justify-center p-3 sm:p-5`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full"
        role="dialog"
        aria-modal="true"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// POPUP 1 — GROW YOUR BRAND
// Shows 8s after every page load/reload, then repeats every hour
// ─────────────────────────────────────────────────────────────

const GROW_OPTIONS = [
  {
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-300",
    label: "Grow my brand",
    sub: "Strategy, identity & storytelling",
  },
  {
    icon: Target,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100 hover:border-orange-300",
    label: "Generate leads",
    sub: "Meta, Google & performance ads",
  },
  {
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100 hover:border-pink-300",
    label: "Build a community",
    sub: "Social media & influencer marketing",
  },
  {
    icon: Code2,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100 hover:border-purple-300",
    label: "Launch a product",
    sub: "Website, app & go-to-market",
  },
  {
    icon: BarChart3,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100 hover:border-green-300",
    label: "Scale revenue",
    sub: "Funnels, retargeting & analytics",
  },
  {
    icon: Smartphone,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100 hover:border-teal-300",
    label: "Build an app",
    sub: "iOS, Android & full-stack",
  },
];

function PopupGrow({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="px-5 pt-5 pb-6">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-500 mb-0.5">
                  Marktale World
                </p>
                <h2 className="text-[17px] sm:text-lg font-black text-gray-900 leading-tight">
                  What&apos;s your growth goal?
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options grid */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {GROW_OPTIONS.map(({ icon: Icon, color, bg, border, label, sub }, i) => (
              <button
                key={label}
                onClick={() => setSelected(i === selected ? null : i)}
                className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all text-left ${border} ${
                  selected === i
                    ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50/60"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg ${bg} ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400 leading-tight mt-0.5 truncate">{sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Stats strip */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 mb-5">
            {[["30+", "Brands"], ["15×", "Avg ROI"], ["98%", "Retention"]].map(
              ([num, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="text-sm font-black text-gray-900">{num}</p>
                  <p className="text-[10px] text-gray-500">{lbl}</p>
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <Link
            href="/grow"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-blue-200"
          >
            Let&apos;s grow my brand <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onClose}
            className="w-full text-[11px] text-gray-400 hover:text-gray-500 py-2.5 transition-colors"
          >
            I&apos;ll explore on my own
          </button>
        </div>
      </div>
    </Overlay>
  );
}

// ─────────────────────────────────────────────────────────────
// POPUP 2 — EMAIL NEWSLETTER  (20 s, once per calendar day)
// ─────────────────────────────────────────────────────────────

const EMAIL_PERKS = [
  "Weekly AI marketing experiments — real results",
  "Behind-the-scenes brand case studies",
  "Exclusive tools, prompts & growth playbooks",
];

function PopupEmail({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    // Optimistic UI — show success immediately
    setSubmitted(true);

    // Permanently suppress this popup — they're subscribed now
    localStorage.setItem("mt_email_subscribed", "1");

    // Fire-and-forget background save
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch((err) => {
      console.error("Newsletter subscribe failed silently:", err);
    });
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="px-5 pt-5 pb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-500 mb-1">
                  Free weekly newsletter
                </p>
                <h2 className="text-[17px] sm:text-lg font-black text-gray-900 mb-1 leading-tight">
                  Marketing that actually works.
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  Join 1,000+ founders. No fluff — just strategies that move the needle.
                </p>

                <ul className="space-y-2 mb-5">
                  {EMAIL_PERKS.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-2.5 h-2.5" />
                      </span>
                      <span className="text-[12px] text-gray-600 leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mb-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-300"
                  />
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex-shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Join
                  </button>
                </div>
                {error && (
                  <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>
                )}
                <button
                  onClick={onClose}
                  className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
                >
                  No thanks, I prefer to figure it out alone
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="text-base font-black text-gray-900 mb-1">You&apos;re in!</h3>
                <p className="text-xs text-gray-500 mb-5">
                  Welcome to the club. Check your inbox for a confirmation.
                </p>
                <button
                  onClick={onClose}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Back to exploring →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Overlay>
  );
}

// ─────────────────────────────────────────────────────────────
// AGENCY DRAWER — "See what we do"
// ─────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Instagram,  label: "Social media",         desc: "Instagram, YouTube, LinkedIn, X",     bg: "bg-blue-50",   color: "text-blue-700"   },
  { icon: TrendingUp, label: "Brand growth",          desc: "Strategy, identity & positioning",    bg: "bg-green-50",  color: "text-green-700"  },
  { icon: Target,     label: "Performance ads",       desc: "Meta, Google & programmatic",         bg: "bg-amber-50",  color: "text-amber-700"  },
  { icon: Users,      label: "Influencer marketing",  desc: "50+ micro & macro partnerships",      bg: "bg-pink-50",   color: "text-pink-700"   },
  { icon: Code2,      label: "Websites",              desc: "Fast, conversion-optimised sites",    bg: "bg-purple-50", color: "text-purple-700" },
  { icon: Smartphone, label: "App development",       desc: "iOS, Android & full-stack",           bg: "bg-teal-50",   color: "text-teal-700"   },
  { icon: Lightbulb,  label: "Brand mentoring",       desc: "1-on-1 strategy & coaching",         bg: "bg-red-50",    color: "text-red-700"    },
  { icon: Camera,     label: "Creative production",   desc: "Photography, reels & ad creatives",   bg: "bg-gray-100",  color: "text-gray-700"   },
];

const WORKS = [
  { icon: "🍽️", bg: "bg-blue-50",   title: "Delhi059",   cat: "Restaurant · Canada", result: "650+ reviews"  },
  { icon: "🚗",  bg: "bg-green-50",  title: "Local Ride", cat: "Mobility · Canada",   result: "100K+ rides"   },
  { icon: "🛒",  bg: "bg-amber-50",  title: "BG Foods",   cat: "E-commerce · NA",     result: "50K+ orders"   },
  { icon: "📚",  bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India",      result: "10K+ trained"  },
  { icon: "🚕",  bg: "bg-orange-50", title: "CabTale",    cat: "Transport · India",   result: "1M+ downloads" },
  { icon: "💎",  bg: "bg-pink-50",   title: "Dee Cee",    cat: "Jewellery · India",   result: "10× sales"     },
];

function AgencyDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/55 backdrop-blur-[3px] z-[500] flex items-end sm:items-center justify-center sm:p-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.85 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="MarkTale agency overview"
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              M
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
              <p className="text-[11px] text-gray-500">Full-service brand growth agency</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-5 space-y-6">
          {/* Services */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
              What we do
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
              Track record
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[["30+","Brands"], ["15×","Avg ROI"], ["10M+","Reach"], ["98%","Retention"]].map(
                ([num, lbl]) => (
                  <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-base font-black text-gray-900">{num}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Past work */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
              Past work
            </p>
            <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-5 px-5">
              {WORKS.map(({ icon, bg, title, cat, result }) => (
                <div
                  key={title}
                  className="flex-shrink-0 w-32 border border-gray-100 hover:border-blue-200 rounded-xl p-3 transition-colors"
                >
                  <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center text-base mb-2`}>
                    {icon}
                  </div>
                  <p className="text-[12px] font-bold text-gray-800">{title}</p>
                  <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
                  <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-gray-500 leading-relaxed">
            &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the
            entire Indian community in our city.&rdquo;
            <footer className="mt-1 not-italic text-[11px] text-gray-400">
              — Owner, Delhi059 · Canada
            </footer>
          </blockquote>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 text-center">
            <p className="font-black text-gray-900 text-base mb-1">Ready to grow your brand?</p>
            <p className="text-xs text-blue-600 mb-4">
              Free 30-minute strategy call — no commitment, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
              >
                Get a free consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                View portfolio <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bottom spacer for mobile safe area */}
          <div className="h-1 sm:h-0" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// DEFAULT EXPORT — place in (main)/layout.tsx
// ─────────────────────────────────────────────────────────────

export default function BehavioralPopups() {
  const [activePopup, setActivePopup] = useState<"grow" | "email" | null>(null);
  const [agencyOpen, setAgencyOpen] = useState(false);

  // Tab title trick
  useEffect(() => {
    const orig = document.title;
    const alts = [
      "We miss you! 👀",
      "One last thing… 🚀",
      "Don't miss this ✨",
    ];
    const handle = () => {
      document.title = document.hidden
        ? alts[Math.floor(Math.random() * alts.length)]
        : orig;
    };
    document.addEventListener("visibilitychange", handle);
    return () => {
      document.removeEventListener("visibilitychange", handle);
      document.title = orig;
    };
  }, []);

  // ── Popup 1 — Grow Your Brand ──────────────────────────────
  // Always shows 8s after every page load/reload.
  // Then repeats automatically every 1 hour while the tab stays open.
  // No localStorage gate — reload always resets the 8s timer.
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Show 8s after every load/reload
    const initial = setTimeout(() => {
      setActivePopup("grow");
    }, 8_000);

    // Repeat every hour while tab is open
    const interval = setInterval(() => {
      // Only show if no other popup is currently open
      setActivePopup((cur) => (cur === null ? "grow" : cur));
    }, ONE_HOUR_MS);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  // ── Popup 2 — Email Newsletter ─────────────────────────────
  // 20s delay, once per calendar day, permanently off after subscribe.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("mt_email_subscribed")) return;
    if (!canShowEmailAgain()) return;

    const t = setTimeout(() => {
      setActivePopup((cur) => {
        if (cur === null) {
          markShown("mt_email_seen");
          return "email";
        }
        return cur;
      });
    }, 20_000);

    return () => clearTimeout(t);
  }, []);

  const closePopup = useCallback(() => setActivePopup(null), []);

  return (
    <>
      {/* ── Timed popups ────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activePopup === "grow" && (
          <PopupGrow key="grow" onClose={closePopup} />
        )}
        {activePopup === "email" && (
          <PopupEmail key="email" onClose={closePopup} />
        )}
      </AnimatePresence>

      {/* ── Agency drawer ────────────────────────────────────── */}
      <AnimatePresence>
        {agencyOpen && (
          <AgencyDrawer key="agency" onClose={() => setAgencyOpen(false)} />
        )}
      </AnimatePresence>

      {/* ── Persistent floating button ───────────────────────── */}
      {/* z-[150] keeps it below popups (z-500) and above page content */}
      {/* bottom-24 leaves clear space above WhatsApp float buttons  */}
      <motion.div
        className="fixed bottom-[88px] right-4 z-[150]"
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 360, damping: 28 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setAgencyOpen(true)}
          aria-label="See what MarkTale can do"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-200/60 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          See what we do
        </motion.button>
      </motion.div>
    </>
  );
}