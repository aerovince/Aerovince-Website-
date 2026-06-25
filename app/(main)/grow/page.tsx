// "use client";

// // components/grow/GrowPage.tsx
// // Full landing page for /grow — linked from the growth popup

// import React, { useRef } from "react";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import {
//   ArrowRight,
//   Instagram,
//   TrendingUp,
//   Target,
//   Users,
//   Code2,
//   Smartphone,
//   Lightbulb,
//   Camera,
//   Star,
//   CheckCircle,
//   Zap,
// } from "lucide-react";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const SERVICES = [
//   {
//     icon: Instagram,
//     title: "Social media marketing",
//     desc: "Instagram, YouTube, LinkedIn, X — organic content, paid campaigns, community management, and growth strategy built for each platform.",
//     color: "text-blue-600",
//     bg: "bg-blue-50",
//     border: "border-blue-100",
//   },
//   {
//     icon: TrendingUp,
//     title: "Brand growth strategy",
//     desc: "Full brand identity, market positioning, competitive analysis, and a 90-day roadmap that moves the needle from day one.",
//     color: "text-green-600",
//     bg: "bg-green-50",
//     border: "border-green-100",
//   },
//   {
//     icon: Target,
//     title: "Performance marketing",
//     desc: "Meta Ads, Google Ads, and programmatic media buying with rigorous A/B testing and weekly reporting. We optimise for revenue, not vanity metrics.",
//     color: "text-orange-600",
//     bg: "bg-orange-50",
//     border: "border-orange-100",
//   },
//   {
//     icon: Users,
//     title: "Influencer marketing",
//     desc: "A vetted network of 50+ micro and macro influencers across India, Canada, and the USA. Campaigns that generate authentic reach and measurable conversions.",
//     color: "text-pink-600",
//     bg: "bg-pink-50",
//     border: "border-pink-100",
//   },
//   {
//     icon: Code2,
//     title: "Website development",
//     desc: "Fast, SEO-ready, conversion-optimised websites on Next.js. From landing pages to full e-commerce — designed to sell, not just impress.",
//     color: "text-purple-600",
//     bg: "bg-purple-50",
//     border: "border-purple-100",
//   },
//   {
//     icon: Smartphone,
//     title: "App development",
//     desc: "iOS, Android, and full-stack web apps. We've shipped ride-hailing platforms, EdTech products, and food e-commerce apps that handle real scale.",
//     color: "text-teal-600",
//     bg: "bg-teal-50",
//     border: "border-teal-100",
//   },
//   {
//     icon: Lightbulb,
//     title: "Brand mentoring",
//     desc: "One-on-one founder coaching and brand strategy sessions. Ideal for early-stage startups who need clarity before spending on execution.",
//     color: "text-yellow-600",
//     bg: "bg-yellow-50",
//     border: "border-yellow-100",
//   },
//   {
//     icon: Camera,
//     title: "Creative production",
//     desc: "Product photography, social reels, ad creatives, and poster design — everything a brand needs to look premium at every touchpoint.",
//     color: "text-gray-600",
//     bg: "bg-gray-50",
//     border: "border-gray-100",
//   },
// ];

// const RESULTS = [
//   {
//     brand: "Delhi059",
//     category: "Restaurant · Canada",
//     metric: "650+",
//     label: "Google reviews",
//     sub: "Ranked #1 on Maps. Zero ad spend.",
//     color: "bg-blue-600",
//   },
//   {
//     brand: "BG Foods",
//     category: "E-commerce · North America",
//     metric: "50K+",
//     label: "Orders in 18 months",
//     sub: "1000% revenue growth from zero.",
//     color: "bg-orange-500",
//   },
//   {
//     brand: "CabTale",
//     category: "Transport · India",
//     metric: "1M+",
//     label: "App downloads",
//     sub: "12 cities. 800% growth in 18mo.",
//     color: "bg-teal-600",
//   },
//   {
//     brand: "Local Ride",
//     category: "Rideshare · Canada",
//     metric: "100K+",
//     label: "Rides completed",
//     sub: "Full product + go-to-market from scratch.",
//     color: "bg-green-600",
//   },
//   {
//     brand: "MentorLeap",
//     category: "EdTech · India",
//     metric: "10K+",
//     label: "Professionals trained",
//     sub: "60% reduction in paid CAC.",
//     color: "bg-purple-600",
//   },
//   {
//     brand: "Dee Cee",
//     category: "Jewellery · India",
//     metric: "10×",
//     label: "Sales growth",
//     sub: "Zero to marketplace leader in 12mo.",
//     color: "bg-pink-600",
//   },
// ];

// const PROCESS = [
//   {
//     step: "01",
//     title: "Free strategy call",
//     desc: "30 minutes. We listen, ask the right questions, and tell you exactly what we'd do — no pitch, no obligation.",
//   },
//   {
//     step: "02",
//     title: "Custom growth plan",
//     desc: "A tailored 90-day roadmap with services, targets, timelines, and a clear budget range. You know what you're getting before you sign anything.",
//   },
//   {
//     step: "03",
//     title: "Execution starts",
//     desc: "Our team moves fast. Most brands see first results within the first two weeks — content live, ads running, or code shipped.",
//   },
//   {
//     step: "04",
//     title: "Measure and scale",
//     desc: "Weekly reports, monthly strategy reviews. We double down on what works and cut what doesn't. Growth compounds.",
//   },
// ];

// const TESTIMONIAL = {
//   quote:
//     "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city.",
//   author: "Owner",
//   brand: "Delhi059, Canada",
// };

// // ─── Subcomponents ────────────────────────────────────────────────────────────

// function FadeUp({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 28 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function GrowPage() {
//   return (
//     <div className="bg-white min-h-screen">

//       {/* ── HERO ── */}
//       <section className="relative pt-16 pb-24 px-6 overflow-hidden bg-white">
//         {/* Subtle grid background */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)",
//             backgroundSize: "48px 48px",
//           }}
//         />
//         {/* Blue glow top-right */}
//         <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-40 pointer-events-none" />

//         <div className="relative max-w-5xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
//               <Zap className="w-3.5 h-3.5" />
//               30+ brands scaled across India, Canada & USA
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.08] tracking-tight mb-6"
//           >
//             Your brand can grow.{" "}
//             <span className="text-blue-600">We know how.</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
//           >
//             Whether you&apos;re a first-time founder or a growing company,
//             Marktale handles everything — strategy, social, performance
//             marketing, websites, and apps — so you can focus on the product.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-3 justify-center"
//           >
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors shadow-lg shadow-blue-600/20"
//             >
//               Book a free strategy call <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link
//               href="/portfolio"
//               className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors"
//             >
//               See our work
//             </Link>
//           </motion.div>

//           {/* Social proof bar */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-400"
//           >
//             {[
//               "15× average ROI",
//               "98% client retention",
//               "10M+ reach generated",
//               "Free 30-min consultation",
//             ].map((item) => (
//               <span key={item} className="flex items-center gap-1.5">
//                 <CheckCircle className="w-4 h-4 text-blue-500" />
//                 {item}
//               </span>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── SERVICES ── */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <FadeUp className="text-center mb-14">
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
//               Everything under one roof
//             </p>
//             <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
//               What we do
//             </h2>
//             <p className="text-gray-500 text-lg max-w-xl mx-auto">
//               You don&apos;t need to hire five agencies. We cover every channel
//               your brand needs to grow.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {SERVICES.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
//               <FadeUp key={title} delay={i * 0.05}>
//                 <div
//                   className={`h-full bg-white border ${border} rounded-2xl p-5 hover:shadow-md transition-shadow`}
//                 >
//                   <div
//                     className={`w-10 h-10 ${bg} ${color} rounded-xl flex items-center justify-center mb-4`}
//                   >
//                     <Icon className="w-5 h-5" />
//                   </div>
//                   <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
//                     {title}
//                   </h3>
//                   <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── RESULTS ── */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <FadeUp className="text-center mb-14">
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
//               Real brands. Real numbers.
//             </p>
//             <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
//               Results we&apos;ve delivered
//             </h2>
//             <p className="text-gray-500 text-lg max-w-xl mx-auto">
//               Not case study fluff — actual metrics from brands we built from
//               scratch or scaled from stagnation.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {RESULTS.map(({ brand, category, metric, label, sub, color }, i) => (
//               <FadeUp key={brand} delay={i * 0.07}>
//                 <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
//                   <div className="flex items-center gap-3 mb-5">
//                     <div
//                       className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-white text-xs font-black`}
//                     >
//                       {brand[0]}
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-sm">{brand}</p>
//                       <p className="text-gray-400 text-xs">{category}</p>
//                     </div>
//                   </div>
//                   <p className="text-4xl font-black text-gray-900 mb-1">
//                     {metric}
//                   </p>
//                   <p className="text-sm font-semibold text-gray-700 mb-1">
//                     {label}
//                   </p>
//                   <p className="text-xs text-gray-400">{sub}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>

//           <FadeUp delay={0.3} className="text-center mt-10">
//             <Link
//               href="/portfolio"
//               className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
//             >
//               Read the full case studies <ArrowRight className="w-4 h-4" />
//             </Link>
//           </FadeUp>
//         </div>
//       </section>

//       {/* ── PROCESS ── */}
//       <section className="py-20 px-6 bg-gray-900 text-white">
//         <div className="max-w-5xl mx-auto">
//           <FadeUp className="text-center mb-14">
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
//               No surprises
//             </p>
//             <h2 className="text-3xl md:text-5xl font-black mb-4">
//               How we work
//             </h2>
//             <p className="text-gray-400 text-lg max-w-xl mx-auto">
//               From first call to first result, here&apos;s exactly what working
//               with Marktale looks like.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {PROCESS.map(({ step, title, desc }, i) => (
//               <FadeUp key={step} delay={i * 0.1}>
//                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors">
//                   <span className="text-4xl font-black text-blue-500/40 block mb-3">
//                     {step}
//                   </span>
//                   <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL ── */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <FadeUp>
//             <div className="flex justify-center gap-0.5 mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-5 h-5 text-yellow-400 fill-yellow-400"
//                 />
//               ))}
//             </div>
//             <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-6">
//               &ldquo;{TESTIMONIAL.quote}&rdquo;
//             </blockquote>
//             <p className="text-gray-500 text-sm">
//               <span className="font-semibold text-gray-700">
//                 {TESTIMONIAL.author}
//               </span>{" "}
//               — {TESTIMONIAL.brand}
//             </p>
//           </FadeUp>
//         </div>
//       </section>

//       {/* ── WHY US ── */}
//       <section className="py-20 px-6 bg-blue-600 text-white">
//         <div className="max-w-5xl mx-auto">
//           <FadeUp className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-black mb-4">
//               Big enough to scale.
//               <br />
//               Small enough to care.
//             </h2>
//             <p className="text-blue-100 text-lg max-w-2xl mx-auto">
//               You&apos;re not a ticket number here. Every brand gets a dedicated
//               team that treats your money like their own.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { num: "30+", lbl: "Brands built" },
//               { num: "15×", lbl: "Average ROI" },
//               { num: "24/7", lbl: "Support" },
//               { num: "Free", lbl: "First call" },
//             ].map(({ num, lbl }) => (
//               <FadeUp key={lbl}>
//                 <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
//                   <p className="text-3xl font-black text-white mb-1">{num}</p>
//                   <p className="text-blue-100 text-xs font-semibold uppercase tracking-wide">
//                     {lbl}
//                   </p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <FadeUp>
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
//               Ready to start?
//             </p>
//             <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
//               Let&apos;s grow your brand.
//             </h2>
//             <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
//               Book a free 30-minute strategy call. No pitch. No pressure. Just
//               an honest look at what would actually move the needle for your
//               business.
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-xl shadow-blue-600/25"
//             >
//               Book free strategy call <ArrowRight className="w-5 h-5" />
//             </Link>
//             <p className="text-gray-400 text-sm mt-5">
//               No commitment · Response within 24 hours
//             </p>
//           </FadeUp>
//         </div>
//       </section>
//     </div>
//   );
// }



















// "use client";

// // components/grow/GrowPage.tsx

// import React, { useRef } from "react";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import {
//   ArrowRight,
//   TrendingUp,
//   Target,
//   Users,
//   Code2,
//   Smartphone,
//   Star,
//   CheckCircle,
//   Zap,
//   Rocket,
//   BarChart,
//   Layers,
//   BookOpen,
//   Download,
// } from "lucide-react";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const SERVICES = [
//   {
//     icon: Rocket,
//     title: "Go-to-Market Strategy",
//     desc: "Don't launch to crickets. We build full GTM roadmaps, positioning, and pre-launch campaigns to ensure your MVP hits the ground running.",
//     color: "text-blue-600",
//     bg: "bg-blue-50",
//     border: "border-blue-100",
//   },
//   {
//     icon: Target,
//     title: "Performance & Growth Ads",
//     desc: "Meta, Google, and LinkedIn ads optimized for Customer Acquisition Cost (CAC) and Lifetime Value (LTV). We scale your MRR, not vanity metrics.",
//     color: "text-orange-600",
//     bg: "bg-orange-50",
//     border: "border-orange-100",
//   },
//   {
//     icon: Users,
//     title: "Community & Social Scale",
//     desc: "Organic growth through X (Twitter), LinkedIn, and short-form video. We build cult-like communities around your product and vision.",
//     color: "text-pink-600",
//     bg: "bg-pink-50",
//     border: "border-pink-100",
//   },
//   {
//     icon: Code2,
//     title: "High-Converting Web Dev",
//     desc: "Next.js landing pages and SaaS marketing sites built for speed and SEO. If your site doesn't convert traffic into waitlist signups or users, we fix it.",
//     color: "text-purple-600",
//     bg: "bg-purple-50",
//     border: "border-purple-100",
//   },
//   {
//     icon: Smartphone,
//     title: "Product & App Scaling",
//     desc: "UI/UX optimization and full-stack development. We've scaled ride-hailing and EdTech apps handling thousands of concurrent users.",
//     color: "text-teal-600",
//     bg: "bg-teal-50",
//     border: "border-teal-100",
//   },
//   {
//     icon: TrendingUp,
//     title: "SEO & Content Moats",
//     desc: "Programmatic SEO and high-value content marketing to build an organic acquisition engine that compound over time.",
//     color: "text-green-600",
//     bg: "bg-green-50",
//     border: "border-green-100",
//   },
//   {
//     icon: Layers,
//     title: "Founder Branding",
//     desc: "Investors and early adopters buy into founders first. We ghostwrite and manage your personal brand on LinkedIn and X to drive inbound deal flow.",
//     color: "text-yellow-600",
//     bg: "bg-yellow-50",
//     border: "border-yellow-100",
//   },
//   {
//     icon: BarChart,
//     title: "Data & Analytics",
//     desc: "Mixpanel, GA4, and custom dashboards. Stop guessing. We set up the infrastructure so you know exactly where your users drop off.",
//     color: "text-gray-600",
//     bg: "bg-gray-50",
//     border: "border-gray-100",
//   },
// ];

// const RESULTS = [
//   {
//     brand: "SaaSify",
//     category: "B2B SaaS · USA",
//     metric: "$50k",
//     label: "New MRR in 90 Days",
//     sub: "Scaled via LinkedIn Ads & Founder Brand.",
//     color: "bg-blue-600",
//   },
//   {
//     brand: "FinFlow",
//     category: "FinTech · UK",
//     metric: "40%",
//     label: "Drop in CAC",
//     sub: "Optimized onboarding and Meta Ads overhaul.",
//     color: "bg-orange-500",
//   },
//   {
//     brand: "CabTale",
//     category: "Transport · India",
//     metric: "1M+",
//     label: "App Downloads",
//     sub: "12 cities. 800% growth in 18 months.",
//     color: "bg-teal-600",
//   },
// ];

// const PROCESS = [
//   {
//     step: "01",
//     title: "Free Strategy Audit",
//     desc: "We analyze your current funnel, CAC, and product-market fit. We tell you exactly where you're bleeding money and how to fix it.",
//   },
//   {
//     step: "02",
//     title: "The Growth Blueprint",
//     desc: "You get a custom 90-day sprint plan. Clear KPIs, timelines, and budget allocation. We align our marketing with your next funding round.",
//   },
//   {
//     step: "03",
//     title: "Rapid Execution",
//     desc: "Startups need speed. We launch campaigns and ship code in days, not months. We A/B test ruthlessly to find your winning channels.",
//   },
//   {
//     step: "04",
//     title: "Scale & Optimize",
//     desc: "Weekly sprint reviews. Once we hit a profitable LTV:CAC ratio, we pour fuel on the fire and scale your user base aggressively.",
//   },
// ];

// const TESTIMONIAL = {
//   quote:
//     "Marktale didn't just run ads; they acted like our co-founders. They fixed our onboarding flow, revamped our messaging, and helped us close our Seed round by proving our acquisition model.",
//   author: "Sarah Jenkins, Founder & CEO",
//   brand: "FinFlow",
// };

// // ─── Subcomponents ────────────────────────────────────────────────────────────

// function FadeUp({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function StartupGrowPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen font-sans">
//       {/* ── HERO ── */}
//       <section className="relative pt-24 pb-32 px-6 overflow-hidden bg-slate-900 text-white">
//         {/* Abstract Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
//           <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px]" />
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative max-w-5xl mx-auto text-center z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
//               <Zap className="w-4 h-4 fill-blue-400" />
//               The Growth Engine for Ambitious Startups
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8"
//           >
//             Build your product. <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//               We&apos;ll build your user base.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
//           >
//             From Seed to Series B, Marktale is the full-stack marketing and tech partner 
//             that turns your MVP into a market leader. Lower CAC, higher MRR, zero agency BS.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Link
//               href="/contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
//             >
//               Book Free Strategy Call <ArrowRight className="w-5 h-5" />
//             </Link>
//             <Link
//               href="#free-guide"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all backdrop-blur-sm"
//             >
//               <Download className="w-5 h-5" /> Get Startup Growth Guide
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── SERVICES ── */}
//       <section className="py-24 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <FadeUp className="text-center mb-16">
//             <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
//               End-to-End Execution
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
//               Everything your startup needs to scale
//             </h2>
//             <p className="text-slate-600 text-xl max-w-2xl mx-auto">
//               Stop hiring disjointed freelancers. We provide a unified team of growth hackers, engineers, and creatives working in sync.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {SERVICES.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
//               <FadeUp key={title} delay={i * 0.05}>
//                 <div
//                   className={`h-full bg-white border ${border} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
//                 >
//                   <div
//                     className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6`}
//                   >
//                     <Icon className="w-7 h-7" />
//                   </div>
//                   <h3 className="font-bold text-slate-900 text-lg mb-3 leading-tight">
//                     {title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── LEAD MAGNET (FREE GUIDE) ── */}
//       <section id="free-guide" className="py-24 px-6 bg-white relative overflow-hidden">
//         <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
//           {/* Decor */}
//           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
//              <BookOpen className="w-64 h-64" />
//           </div>

//           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
//             <FadeUp>
//               <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 text-xs font-bold tracking-wider uppercase mb-6">
//                 100% Free Resource
//               </span>
//               <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
//                 The 0 to 10k Users Startup Playbook
//               </h2>
//               <p className="text-blue-100 text-lg mb-8 leading-relaxed">
//                 Stop wasting runway on ads that don't convert. Download our battle-tested guide revealing the exact frameworks we use to find product-market fit, lower CAC, and scale early-stage startups rapidly.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Frameworks for validating your MVP quickly.",
//                   "How to calculate and optimize true LTV:CAC.",
//                   "Zero-dollar growth hacks for your first 1,000 users.",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3 text-blue-50 font-medium">
//                     <CheckCircle className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </FadeUp>

//             <FadeUp delay={0.2} className="bg-white p-8 rounded-3xl shadow-xl">
//               <h3 className="text-2xl font-bold text-slate-900 mb-2">Get the playbook</h3>
//               <p className="text-slate-500 text-sm mb-6">Delivered instantly to your inbox.</p>

//               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//                 <div>
//                   <label className="sr-only">Work Email</label>
//                   <input 
//                     type="email" 
//                     placeholder="founder@startup.com" 
//                     className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors">
//                   <Download className="w-5 h-5" /> Download Free Guide
//                 </button>
//                 <p className="text-xs text-center text-slate-400 mt-4">We hate spam as much as you do. Unsubscribe anytime.</p>
//               </form>
//             </FadeUp>
//           </div>
//         </div>
//       </section>

//       {/* ── RESULTS ── */}
//       <section className="py-24 px-6 bg-slate-50">
//         <div className="max-w-6xl mx-auto">
//           <FadeUp className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
//               Traction that gets you funded
//             </h2>
//             <p className="text-slate-600 text-xl max-w-2xl mx-auto">
//               Investors don't fund ideas; they fund metrics. Here are a few startups we've helped achieve explosive growth.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {RESULTS.map(({ brand, category, metric, label, sub, color }, i) => (
//               <FadeUp key={brand} delay={i * 0.1}>
//                 <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
//                   <div className="flex items-center gap-4 mb-8">
//                     <div
//                       className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white text-lg font-black shadow-md`}
//                     >
//                       {brand[0]}
//                     </div>
//                     <div>
//                       <p className="font-bold text-slate-900 text-lg">{brand}</p>
//                       <p className="text-slate-500 text-sm">{category}</p>
//                     </div>
//                   </div>
//                   <p className="text-5xl font-black text-slate-900 mb-2">
//                     {metric}
//                   </p>
//                   <p className="text-lg font-bold text-blue-600 mb-3">
//                     {label}
//                   </p>
//                   <p className="text-sm text-slate-500 leading-relaxed">{sub}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PROCESS ── */}
//       <section className="py-24 px-6 bg-slate-900 text-white">
//         <div className="max-w-6xl mx-auto">
//           <FadeUp className="text-center mb-16">
//             <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
//               Agile Methodology
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mb-6">
//               How we sprint with you
//             </h2>
//             <p className="text-slate-400 text-xl max-w-2xl mx-auto">
//               No bloated retainers. No vanity metrics. Just rapid execution and data-driven growth.
//             </p>
//           </FadeUp>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {PROCESS.map(({ step, title, desc }, i) => (
//               <FadeUp key={step} delay={i * 0.1}>
//                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-colors">
//                   <span className="text-5xl font-black text-blue-500/30 block mb-6">
//                     {step}
//                   </span>
//                   <h3 className="font-bold text-white text-xl mb-4">{title}</h3>
//                   <p className="text-slate-400 text-base leading-relaxed">{desc}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL ── */}
//       <section className="py-24 px-6 bg-slate-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <FadeUp>
//             <div className="flex justify-center gap-1 mb-8">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-6 h-6 text-yellow-400 fill-yellow-400"
//                 />
//               ))}
//             </div>
//             <blockquote className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
//               &ldquo;{TESTIMONIAL.quote}&rdquo;
//             </blockquote>
//             <p className="text-slate-600 text-lg">
//               <span className="font-bold text-slate-900">
//                 {TESTIMONIAL.author}
//               </span>{" "}
//               — {TESTIMONIAL.brand}
//             </p>
//           </FadeUp>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-32 px-6 bg-white border-t border-slate-100">
//         <div className="max-w-4xl mx-auto text-center">
//           <FadeUp>
//             <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
//               Ready to scale your <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                 Startup?
//               </span>
//             </h2>
//             <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//               Book a free 30-minute growth consultation. We'll audit your current strategy and give you actionable steps to lower your CAC—whether you hire us or not.
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-blue-600/25 hover:-translate-y-1"
//             >
//               Book Your Growth Consultation <ArrowRight className="w-6 h-6" />
//             </Link>
//             <p className="text-slate-400 text-sm mt-6 font-medium">
//               Zero commitment · Honest feedback · Founder to Founder
//             </p>
//           </FadeUp>
//         </div>
//       </section>
//     </div>
//   );
// }


















"use client";

// components/grow/GrowPage.tsx

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Code2,
  Smartphone,
  Star,
  CheckCircle,
  Zap,
  Rocket,
  BarChart,
  Layers,
  BookOpen,
  Download,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Rocket,
    title: "Go-to-Market Strategy",
    desc: "Don't launch to crickets. We build full GTM roadmaps, positioning, and pre-launch campaigns to ensure your MVP hits the ground running.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Target,
    title: "Performance & Growth Ads",
    desc: "Meta, Google, and LinkedIn ads optimized for Customer Acquisition Cost (CAC) and Lifetime Value (LTV). We scale your MRR, not vanity metrics.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: Users,
    title: "Community & Social Scale",
    desc: "Organic growth through X (Twitter), LinkedIn, and short-form video. We build cult-like communities around your product and vision.",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: Code2,
    title: "High-Converting Web Dev",
    desc: "Next.js landing pages and SaaS marketing sites built for speed and SEO. If your site doesn't convert traffic into waitlist signups or users, we fix it.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: Smartphone,
    title: "Product & App Scaling",
    desc: "UI/UX optimization and full-stack development. We've scaled ride-hailing and EdTech apps handling thousands of concurrent users.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: TrendingUp,
    title: "SEO & Content Moats",
    desc: "Programmatic SEO and high-value content marketing to build an organic acquisition engine that compound over time.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: Layers,
    title: "Founder Branding",
    desc: "Investors and early adopters buy into founders first. We ghostwrite and manage your personal brand on LinkedIn and X to drive inbound deal flow.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
  {
    icon: BarChart,
    title: "Data & Analytics",
    desc: "Mixpanel, GA4, and custom dashboards. Stop guessing. We set up the infrastructure so you know exactly where your users drop off.",
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-100",
  },
];

const RESULTS = [
  {
    brand: "SaaSify",
    category: "B2B SaaS · USA",
    metric: "$50k",
    label: "New MRR in 90 Days",
    sub: "Scaled via LinkedIn Ads & Founder Brand.",
    color: "bg-blue-600",
  },
  {
    brand: "FinFlow",
    category: "FinTech · UK",
    metric: "40%",
    label: "Drop in CAC",
    sub: "Optimized onboarding and Meta Ads overhaul.",
    color: "bg-orange-500",
  },
  {
    brand: "CabTale",
    category: "Transport · India",
    metric: "1M+",
    label: "App Downloads",
    sub: "12 cities. 800% growth in 18 months.",
    color: "bg-teal-600",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free Strategy Audit",
    desc: "We analyze your current funnel, CAC, and product-market fit. We tell you exactly where you're bleeding money and how to fix it.",
  },
  {
    step: "02",
    title: "The Growth Blueprint",
    desc: "You get a custom 90-day sprint plan. Clear KPIs, timelines, and budget allocation. We align our marketing with your next funding round.",
  },
  {
    step: "03",
    title: "Rapid Execution",
    desc: "Startups need speed. We launch campaigns and ship code in days, not months. We A/B test ruthlessly to find your winning channels.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    desc: "Weekly sprint reviews. Once we hit a profitable LTV:CAC ratio, we pour fuel on the fire and scale your user base aggressively.",
  },
];

const TESTIMONIAL = {
  quote:
    "Marktale didn't just run ads; they acted like our co-founders. They fixed our onboarding flow, revamped our messaging, and helped us close our Seed round by proving our acquisition model.",
  author: "Sarah Jenkins, Founder & CEO",
  brand: "FinFlow",
};

// ─── Subcomponents ────────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StartupGrowPage() {
  const [guideEmail, setGuideEmail] = useState("");
  const [guideStatus, setGuideStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleGuideSubmit = async () => {
    if (!guideEmail || !guideEmail.includes("@")) return;
    setGuideStatus("loading");
    try {
      const res = await fetch("/api/grow-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: guideEmail }),
      });
      const data = await res.json();
      if (data.success) {
        setGuideStatus("success");
        // ✅ Auto-download the PDF from public folder
        const link = document.createElement("a");
        link.href = "/guides/The Business Growth Blueprint - Marktale.pdf";
        link.download = "The Business Growth Blueprint - Marktale.pdf"; document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setGuideStatus("error");
      }
    } catch {
      setGuideStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* ── HERO ── */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-4 h-4 fill-blue-400" />
              The Growth Engine for Ambitious Startups
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Build your product. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              We&apos;ll build your user base.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
          >
            From Seed to Series B, Marktale is the full-stack marketing and
            tech partner that turns your MVP into a market leader. Lower CAC,
            higher MRR, zero agency BS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Book Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#free-guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all backdrop-blur-sm"
            >
              <Download className="w-5 h-5" /> Get Startup Growth Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
              End-to-End Execution
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Everything your startup needs to scale
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Stop hiring disjointed freelancers. We provide a unified team of
              growth hackers, engineers, and creatives working in sync.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(
              ({ icon: Icon, title, desc, color, bg, border }, i) => (
                <FadeUp key={title} delay={i * 0.05}>
                  <div
                    className={`h-full bg-white border ${border} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div
                      className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3 leading-tight">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </FadeUp>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET (FREE GUIDE) ── */}
      <section
        id="free-guide"
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decor */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BookOpen className="w-64 h-64" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 text-xs font-bold tracking-wider uppercase mb-6">
                100% Free Resource
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                The 0 to 10k Users Startup Playbook
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Stop wasting runway on ads that don&apos;t convert. Download
                our battle-tested guide revealing the exact frameworks we use
                to find product-market fit, lower CAC, and scale early-stage
                startups rapidly.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Frameworks for validating your MVP quickly.",
                  "How to calculate and optimize true LTV:CAC.",
                  "Zero-dollar growth hacks for your first 1,000 users.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-blue-50 font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2} className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Get the playbook
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Delivered instantly to your inbox + downloaded automatically.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="sr-only">Work Email</label>
                  <input
                    type="email"
                    placeholder="founder@startup.com"
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleGuideSubmit()}
                    disabled={
                      guideStatus === "loading" || guideStatus === "success"
                    }
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                <button
                  onClick={handleGuideSubmit}
                  disabled={
                    guideStatus === "loading" || guideStatus === "success"
                  }
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors"
                >
                  {guideStatus === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : guideStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Check your inbox!
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" /> Download Free Guide
                    </>
                  )}
                </button>

                {guideStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-xs text-center text-slate-400 mt-4">
                  We hate spam as much as you do. Unsubscribe anytime.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Traction that gets you funded
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Investors don&apos;t fund ideas; they fund metrics. Here are a
              few startups we&apos;ve helped achieve explosive growth.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESULTS.map(({ brand, category, metric, label, sub, color }, i) => (
              <FadeUp key={brand} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white text-lg font-black shadow-md`}
                    >
                      {brand[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{brand}</p>
                      <p className="text-slate-500 text-sm">{category}</p>
                    </div>
                  </div>
                  <p className="text-5xl font-black text-slate-900 mb-2">
                    {metric}
                  </p>
                  <p className="text-lg font-bold text-blue-600 mb-3">
                    {label}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
              Agile Methodology
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              How we sprint with you
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              No bloated retainers. No vanity metrics. Just rapid execution and
              data-driven growth.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }, i) => (
              <FadeUp key={step} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-colors">
                  <span className="text-5xl font-black text-blue-500/30 block mb-6">
                    {step}
                  </span>
                  <h3 className="font-bold text-white text-xl mb-4">{title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <p className="text-slate-600 text-lg">
              <span className="font-bold text-slate-900">
                {TESTIMONIAL.author}
              </span>{" "}
              — {TESTIMONIAL.brand}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Ready to scale your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Startup?
              </span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute growth consultation. We&apos;ll audit your
              current strategy and give you actionable steps to lower your
              CAC—whether you hire us or not.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-blue-600/25 hover:-translate-y-1"
            >
              Book Your Growth Consultation <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-slate-400 text-sm mt-6 font-medium">
              Zero commitment · Honest feedback · Founder to Founder
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}