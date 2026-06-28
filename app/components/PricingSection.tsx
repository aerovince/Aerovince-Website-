







// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Check,
//   Rocket,
//   TrendingUp,
//   Sparkles,
//   ArrowRight,
//   Shield,
//   Star,
//   Zap,
//   Briefcase,
//   Crown,
//   Heart,
//   Clock,
//   Award,
// } from "lucide-react";
// import Link from "next/link";

// const plans = [
//   {
//     name: "Startup Building Plan",
//     icon: Rocket,
//     tagline: "Best for new startups & founders",
//     features: [
//       "Website + Domain + Hosting",
//       "Brand setup",
//       "Social media setup & optimization",
//       "Content (graphics, reels, articles)",
//       "SEO basics",
//       "Monthly report",
//     ],
//     cta: "Book Free Consultation",
//     ctaLink: "/contact",
//     highlighted: false,
//     color: "blue",
//     stat: "Ideal for Launch",
//   },
//   {
//     name: "Growth Plan",
//     icon: TrendingUp,
//     tagline: "For businesses ready to scale",
//     features: [
//       "Includes everything in Startup Plan",
//       "E-commerce product listing & optimization",
//       "Paid ads setup",
//       "Advanced growth strategy",
//       "Funnel & retargeting",
//     ],
//     cta: "Get Started Now",
//     ctaLink: "/contact",
//     highlighted: true,
//     badge: "MOST POPULAR",
//     color: "yellow",
//     stat: "200% Avg Growth",
//   },
// ];

// const trustStats = [
//   { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
//   { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
//   { value: "98%", label: "Client Retention", icon: Heart, change: "Top 1%" },
//   { value: "4.95", label: "Client Rating", icon: Award, change: "5★" },
// ];

// export default function PricingSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="relative py-24 lg:py-32 bg-white overflow-hidden" id="pricing">
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-blue-600" />
//             <span className="text-blue-700 font-semibold text-sm tracking-wide">
//               SIMPLE, TRANSPARENT PRICING
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             Choose your
//             <span className="block text-blue-600 mt-2">growth path.</span>
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
//             No hidden fees. Start with what you need and scale as you grow. All
//             plans include dedicated support.
//           </p>
//         </motion.div>

        
//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="group relative"
//             >
//               <div
//                 className={`relative rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-2xl transition-all duration-500 ${
//                   plan.highlighted
//                     ? "border-yellow-300 shadow-xl"
//                     : "border-gray-200"
//                 }`}
//               >
//                 {/* Animated Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${
//                   plan.color === 'blue' 
//                     ? 'from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5'
//                     : 'from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5'
//                 } group-hover:via-transparent group-hover:to-transparent transition-all duration-500`} />

//                 {/* Badge for Growth Plan */}
//                 {plan.badge && (
//                   <div className="absolute top-4 right-4 z-20">
//                     <motion.div 
//                       className="relative"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <div className="relative bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
//                         <Zap className="w-3 h-3" />
//                         {plan.badge}
//                       </div>
//                     </motion.div>
//                   </div>
//                 )}

//                 <div className="p-8">
//                   {/* Header with Icon */}
//                   <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
//                     <motion.div
//                       className={`p-3 rounded-xl transition-all duration-300 ${
//                         hoveredCard === index
//                           ? plan.color === 'blue' ? 'bg-blue-600 shadow-lg shadow-blue-600/25' : 'bg-yellow-500 shadow-lg shadow-yellow-500/25'
//                           : plan.highlighted ? 'bg-yellow-100' : 'bg-blue-100'
//                       }`}
//                       animate={{
//                         scale: hoveredCard === index ? 1.1 : 1,
//                         rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <plan.icon
//                         size={24}
//                         className={
//                           hoveredCard === index ? 'text-white' : plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'
//                         }
//                       />
//                     </motion.div>
//                     <div>
//                       <h3 className={`text-2xl font-bold text-black transition-colors duration-300 ${
//                         hoveredCard === index ? (plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600') : ''
//                       }`}>
//                         {plan.name}
//                       </h3>
//                       <p className="text-sm text-gray-500 mt-0.5">
//                         {plan.tagline}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Features List */}
//                   <ul className="space-y-3.5 mb-8">
//                     {plan.features.map((feature, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 + idx * 0.05 }}
//                         className="flex items-start gap-3 group/feature"
//                       >
//                         <motion.div
//                           className={`flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === index
//                               ? plan.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'
//                               : plan.highlighted ? 'bg-yellow-100' : 'bg-blue-100'
//                           }`}
//                           animate={{
//                             scale: hoveredCard === index ? 1.1 : 1,
//                           }}
//                         >
//                           <Check
//                             size={12}
//                             className={
//                               hoveredCard === index ? 'text-white' : plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'
//                             }
//                             strokeWidth={3}
//                           />
//                         </motion.div>
//                         <span className={`text-sm transition-colors duration-300 ${
//                           hoveredCard === index ? 'text-gray-900' : 'text-gray-600'
//                         }`}>
//                           {feature}
//                         </span>
//                       </motion.li>
//                     ))}
//                   </ul>

//                   {/* Stat Badge */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{
//                       opacity: hoveredCard === index ? 1 : 0,
//                       y: hoveredCard === index ? 0 : 10,
//                     }}
//                     transition={{ duration: 0.2 }}
//                     className="mb-4"
//                   >
//                     <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full ${
//                       plan.color === 'blue' ? 'bg-blue-50' : 'bg-yellow-50'
//                     }`}>
//                       <TrendingUp className={`w-3 h-3 ${plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'}`} />
//                       <span className={`text-xs font-semibold ${plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'}`}>
//                         {plan.stat}
//                       </span>
//                     </div>
//                   </motion.div>

//                   {/* CTA Button */}
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={plan.ctaLink}
//                       className={`group/btn relative w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
//                         plan.highlighted
//                           ? "bg-yellow-500 text-black hover:bg-yellow-600 hover:shadow-xl hover:shadow-yellow-500/25"
//                           : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
//                       }`}
//                     >
//                       <span>{plan.cta}</span>
//                       <ArrowRight
//                         size={18}
//                         className="group-hover/btn:translate-x-1 transition-transform"
//                       />
//                     </Link>
//                   </motion.div>

//                   {/* Fine print */}
//                   <p className="text-xs text-center text-gray-400 mt-4">
//                     No long-term contracts • Cancel anytime
//                   </p>
//                 </div>

//                 {/* Bottom Accent Line */}
//                 <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
//                   plan.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'
//                 }`} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Guarantee Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
//             <Shield className="w-5 h-5 text-blue-600" />
//             <span className="text-sm font-medium text-gray-700">
//               30-day money-back guarantee
//             </span>
//             <div className="w-px h-4 bg-gray-300" />
//             <Clock className="w-5 h-5 text-yellow-600" />
//             <span className="text-sm font-medium text-gray-700">
//               24/7 Priority Support
//             </span>
//           </div>
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
//             <div className="relative z-10">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
//               >
//                 <Rocket className="w-4 h-4 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-medium">
//                   Not sure which plan fits?
//                 </span>
//               </motion.div>

//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 Let's talk about your goals
//               </h3>
//               <p className="text-blue-100 max-w-xl mx-auto mb-8">
//                 Book a free consultation and we'll help you choose the right
//                 plan for your business.
//               </p>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   href="/contact"
//                   className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
//                 >
//                   Book Free Consultation
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



























// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Check, ArrowRight, Rocket, TrendingUp, Zap,
//   Shield, Star, Users, Crown, Sparkles, ArrowUpRight,
//   BarChart3, Globe, Bot, CheckCircle,
// } from "lucide-react";

// // ─── Data ──────────────────────────────────────────────────────────────────────

// const PLANS = [
//   {
//     id: "starter",
//     name: "Starter",
//     tagline: "Launch with confidence",
//     price: "24,999",
//     period: "/mo",
//     usd: "~$300",
//     icon: Rocket,
//     gradient: "from-blue-500 to-cyan-400",
//     accentBg: "bg-blue-50",
//     accentBorder: "border-blue-100",
//     accentText: "text-blue-600",
//     checkBg: "bg-blue-50",
//     checkText: "text-blue-500",
//     badgeText: null,
//     featured: false,
//     bestFor: "Local businesses · Solopreneurs · New brands",
//     features: [
//       { text: "Website design + domain + hosting", included: true },
//       { text: "Brand identity setup", included: true },
//       { text: "Social media setup & optimisation", included: true },
//       { text: "Content — graphics, reels, articles", included: true },
//       { text: "SEO foundation audit & fixes", included: true },
//       { text: "Monthly performance report", included: true },
//       { text: "Paid ads management", included: false },
//       { text: "AI automation workflows", included: false },
//     ],
//     cta: "Book Free Strategy Call",
//     ctaHref: "#contact",
//     proof: "Get found online in 30 days or we work free",
//   },
//   {
//     id: "growth",
//     name: "Growth",
//     tagline: "The full engine — built to scale",
//     price: "54,999",
//     period: "/mo",
//     usd: "~$660",
//     icon: TrendingUp,
//     gradient: "from-violet-500 to-blue-500",
//     accentBg: "bg-violet-50",
//     accentBorder: "border-violet-100",
//     accentText: "text-violet-600",
//     checkBg: "bg-violet-50",
//     checkText: "text-violet-500",
//     badgeText: "Most Popular",
//     featured: true,
//     bestFor: "Startups · SMBs · Growing ecommerce brands",
//     features: [
//       { text: "Everything in Starter", included: true },
//       { text: "Google + Meta Ads management", included: true },
//       { text: "Advanced SEO + content strategy", included: true },
//       { text: "Lead funnel + landing pages", included: true },
//       { text: "Retargeting & audience building", included: true },
//       { text: "E-commerce listing optimisation", included: true },
//       { text: "Bi-weekly strategy calls", included: true },
//       { text: "AI automation workflows", included: false },
//     ],
//     cta: "Start Growing Now",
//     ctaHref: "#contact",
//     proof: "Average client sees +74% leads in month one",
//   },
//   {
//     id: "scale",
//     name: "Scale",
//     tagline: "Full-stack growth. One team.",
//     price: "99,999",
//     period: "/mo",
//     usd: "~$1,200",
//     icon: Crown,
//     gradient: "from-rose-500 to-violet-500",
//     accentBg: "bg-rose-50",
//     accentBorder: "border-rose-100",
//     accentText: "text-rose-600",
//     checkBg: "bg-rose-50",
//     checkText: "text-rose-500",
//     badgeText: "Best Value",
//     featured: false,
//     bestFor: "Funded startups · Mid-market · Enterprises",
//     features: [
//       { text: "Everything in Growth", included: true },
//       { text: "AI marketing automation stack", included: true },
//       { text: "Dedicated account manager", included: true },
//       { text: "Weekly strategy & review calls", included: true },
//       { text: "Multi-channel paid ads (Google, Meta, LinkedIn)", included: true },
//       { text: "CRM integration & pipeline setup", included: true },
//       { text: "Video & content production", included: true },
//       { text: "Priority 24/7 support SLA", included: true },
//     ],
//     cta: "Talk to Our Team",
//     ctaHref: "#contact",
//     proof: "For brands serious about $1M+ revenue targets",
//   },
// ];

// const PROOF_LOGOS = [
//   "TechVault", "BrightPath", "ZenithCo", "PeakForge", "NovaBrand", "StrideCo",
// ];

// const GUARANTEES = [
//   { icon: Shield, text: "No long-term lock-in — month to month" },
//   { icon: CheckCircle, text: "Strategy call within 48 hours of signing" },
//   { icon: Star, text: "30-day results guarantee or we work free" },
//   { icon: Users, text: "Dedicated account manager from day one" },
// ];

// const COMPARE_POINTS = [
//   { label: "In-house marketing team", cost: "₹6–12L/mo", note: "Salaries, tools, management overhead" },
//   { label: "Other agencies", cost: "₹80K–3L/mo", note: "Often siloed, no full-stack ownership" },
//   { label: "Aerovince Growth Plan", cost: "₹54,999/mo", note: "Full team. All channels. Accountable to revenue.", highlight: true },
// ];

// // ─── Variants ─────────────────────────────────────────────────────────────────

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
// };

// // ─── Plan Card ────────────────────────────────────────────────────────────────

// function PlanCard({ plan, index }: { plan: typeof PLANS[0]; index: number }) {
//   const [hovered, setHovered] = useState(false);
//   const Icon = plan.icon;

//   return (
//     <motion.div
//       variants={cardVariants}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative flex flex-col"
//     >
//       {/* Popular badge — sits above card */}
//       <AnimatePresence>
//         {plan.badgeText && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20"
//           >
//             <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3.5 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white shadow-md`}>
//               <Sparkles size={9} />
//               {plan.badgeText}
//             </span>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         animate={{ y: hovered ? -6 : 0, scale: plan.featured && hovered ? 1.01 : 1 }}
//         transition={{ type: "spring", stiffness: 300, damping: 24 }}
//         className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col flex-1 ${
//           plan.featured
//             ? "border-violet-200 shadow-xl shadow-violet-500/10"
//             : "border-gray-100 shadow-sm shadow-gray-900/5"
//         }`}
//         style={{
//           boxShadow: hovered && plan.featured
//             ? "0 24px 64px -12px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.12)"
//             : hovered
//             ? "0 20px 60px -12px rgba(59,130,246,0.10), 0 0 0 1px rgba(59,130,246,0.06)"
//             : undefined,
//         }}
//       >
//         {/* Top gradient strip */}
//         <div className={`h-0.5 w-full bg-gradient-to-r ${plan.gradient}`} />

//         <div className="p-7 flex flex-col flex-1">

//           {/* Icon + Plan name */}
//           <div className="flex items-start justify-between mb-5">
//             <div className="flex items-center gap-3">
//               <motion.div
//                 animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className={`w-10 h-10 rounded-xl ${plan.accentBg} border ${plan.accentBorder} flex items-center justify-center`}
//               >
//                 <Icon size={18} className={plan.accentText} />
//               </motion.div>
//               <div>
//                 <h3 className="text-base font-bold text-gray-900">{plan.name}</h3>
//                 <p className="text-[11px] text-gray-400 mt-0.5">{plan.tagline}</p>
//               </div>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="mb-1">
//             <div className="flex items-baseline gap-1.5">
//               <span className="text-sm font-semibold text-gray-400">₹</span>
//               <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
//                 {plan.price}
//               </span>
//               <span className="text-sm text-gray-400 font-medium">{plan.period}</span>
//             </div>
//             <p className="text-[11px] text-gray-400 mt-1">{plan.usd} · billed monthly · no lock-in</p>
//           </div>

//           {/* Best for pill */}
//           <div className={`inline-flex items-center gap-1.5 self-start text-[10px] font-semibold ${plan.accentText} ${plan.accentBg} border ${plan.accentBorder} px-2.5 py-1 rounded-full mt-3 mb-5`}>
//             <Globe size={9} />
//             {plan.bestFor}
//           </div>

//           {/* Features */}
//           <ul className="space-y-2.5 flex-1">
//             {plan.features.map((f, i) => (
//               <motion.li
//                 key={i}
//                 initial={{ opacity: 0, x: -8 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                 className="flex items-start gap-2.5"
//               >
//                 <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
//                   f.included ? `${plan.checkBg} border ${plan.accentBorder}` : "bg-gray-50 border border-gray-100"
//                 }`}>
//                   <Check
//                     size={9}
//                     strokeWidth={3}
//                     className={f.included ? plan.checkText : "text-gray-300"}
//                   />
//                 </div>
//                 <span className={`text-sm leading-snug ${f.included ? "text-gray-700" : "text-gray-300 line-through"}`}>
//                   {f.text}
//                 </span>
//               </motion.li>
//             ))}
//           </ul>

//           {/* Proof line */}
//           <div className={`mt-5 pt-4 border-t ${plan.featured ? "border-violet-100" : "border-gray-100"}`}>
//             <p className={`text-[11px] font-semibold ${plan.accentText} flex items-center gap-1.5`}>
//               <Star size={10} className="fill-current" />
//               {plan.proof}
//             </p>
//           </div>

//           {/* CTA */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             className="mt-5"
//           >
//             <Link
//               href={plan.ctaHref}
//               className={`group relative overflow-hidden w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
//                 plan.featured
//                   ? "bg-gray-900 text-white shadow-md shadow-gray-900/15"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               {plan.featured && (
//                 <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               )}
//               <span className="relative z-10 flex items-center gap-2">
//                 {plan.cta}
//                 <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
//               </span>
//             </Link>
//           </motion.div>

//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── Main Component ────────────────────────────────────────────────────────────

// export default function PricingSection() {
//   return (
//     <section id="pricing" className="relative py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">

//       {/* ── Background ── */}
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
//         <motion.div
//           className="absolute -top-48 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-violet-100/40 to-blue-100/20 blur-3xl"
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-100/30 to-transparent blur-3xl"
//           animate={{ scale: [1, 1.07, 1] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.022]"
//           style={{
//             backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
//             backgroundSize: "64px 64px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center max-w-2xl mx-auto mb-6"
//         >
//           <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//             Simple, Transparent Pricing
//           </span>

//           <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight">
//             Premium marketing.{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
//               Honest pricing.
//             </span>
//           </h2>

//           <p className="mt-5 text-lg text-gray-500 leading-relaxed">
//             In an affordable budget, you get a full marketing team — strategy,
//             execution, and optimization — that most companies pay 10x more for in-house.
//           </p>
//         </motion.div>

//         {/* ── Value comparison strip ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//           className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-14 max-w-3xl mx-auto"
//         >
//           {COMPARE_POINTS.map((c, i) => (
//             <div
//               key={c.label}
//               className={`flex-1 rounded-xl px-5 py-4 border text-center ${
//                 c.highlight
//                   ? "bg-white border-violet-200 shadow-sm shadow-violet-500/8"
//                   : "bg-white/60 border-gray-100"
//               }`}
//             >
//               <p className={`text-xs font-medium mb-1 ${c.highlight ? "text-violet-600" : "text-gray-400"}`}>
//                 {c.label}
//               </p>
//               <p className={`text-lg font-extrabold ${c.highlight ? "text-gray-900" : "text-gray-500"}`}>
//                 {c.cost}
//               </p>
//               <p className={`text-[10px] mt-1 leading-snug ${c.highlight ? "text-gray-500" : "text-gray-400"}`}>
//                 {c.note}
//               </p>
//               {c.highlight && (
//                 <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
//                   <CheckCircle size={8} /> Best Value
//                 </div>
//               )}
//             </div>
//           ))}
//         </motion.div>

//         {/* ── Cards ── */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-start"
//         >
//           {PLANS.map((plan, i) => (
//             <PlanCard key={plan.id} plan={plan} index={i} />
//           ))}
//         </motion.div>

//         {/* ── Enterprise row ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-6"
//         >
//           <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
//             <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-6">
//               <div className="flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
//                   <Zap size={18} className="text-amber-500" />
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 mb-0.5">
//                     <h3 className="text-sm font-bold text-gray-900">Enterprise</h3>
//                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">Custom</span>
//                   </div>
//                   <p className="text-xs text-gray-500 max-w-xl">
//                     Large brands, enterprise teams, and multi-market campaigns. Custom strategy, dedicated team, priority SLA, and bespoke integrations built around your goals.
//                   </p>
//                 </div>
//               </div>
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="shrink-0">
//                 <Link
//                   href="#contact"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition-all group"
//                 >
//                   Request Custom Quote
//                   <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ── Guarantees strip ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3"
//         >
//           {GUARANTEES.map((g) => (
//             <div key={g.text} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm shadow-gray-900/3">
//               <g.icon size={14} className="text-blue-500 shrink-0" />
//               <p className="text-xs text-gray-600 font-medium leading-snug">{g.text}</p>
//             </div>
//           ))}
//         </motion.div>

//         {/* ── Social proof logos ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-10 text-center"
//         >
//           <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-4">
//             Brands already growing on these plans
//           </p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {PROOF_LOGOS.map((logo) => (
//               <span key={logo} className="text-xs font-semibold text-gray-300 hover:text-blue-500 transition-colors duration-200 cursor-default px-3 py-1.5 bg-white border border-gray-100 rounded-lg">
//                 {logo}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//         {/* ── Bottom CTA ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-14"
//         >
//           <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
//             {/* Background glow */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent" />
//             <motion.div
//               className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl"
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"
//               animate={{ scale: [1, 1.15, 1] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//             />

//             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-10 lg:px-12">
//               <div className="text-center lg:text-left max-w-xl">
//                 <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
//                   <BarChart3 size={11} />
//                   Not sure which plan fits your stage?
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
//                   Let's find the right plan for your goals —
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"> in a 20-minute call.</span>
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   We'll audit your current marketing, map your 90-day growth opportunity, and
//                   recommend exactly what you need. Zero obligation. Zero sales pressure.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
//                 <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
//                   <Link
//                     href="#contact"
//                     className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-7 py-3.5 rounded-xl w-full lg:w-auto shadow-md"
//                   >
//                     <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <span className="relative z-10 flex items-center gap-2">
//                       <Bot size={15} className="text-blue-600" />
//                       Book Free Strategy Call
//                       <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
//                     </span>
//                   </Link>
//                 </motion.div>
//                 <p className="text-center text-[11px] text-gray-500">
//                   Response within 2 hours · Mon–Sat · No hard sell
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }





















"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Check, ArrowRight, Rocket, TrendingUp, Crown, Zap,
  Shield, Star, Users, Sparkles, ArrowUpRight,
  MessageCircle, Globe, CheckCircle, BarChart3, Bot,
} from "lucide-react";

// ─── WhatsApp helper ───────────────────────────────────────────────────────────

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917489951514";

function getWhatsAppLink(planName: string) {
  const message = encodeURIComponent(
    `Hi Aerovince! 👋\n\nI'm interested in learning more about the *${planName}* plan.\n\nCould you share the pricing and what's best suited for my business?\n\nThank you!`
  );
  return `https://wa.me/${WA_NUMBER}?text=${message}`;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Launch with confidence",
    pricingNote: "Tailored to your business size & goals",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-400",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentText: "text-blue-600",
    checkBg: "bg-blue-50",
    checkText: "text-blue-500",
    badgeText: null,
    featured: false,
    bestFor: "Local businesses · Solopreneurs · New brands",
    features: [
      { text: "Website design + domain + hosting", included: true },
      { text: "Brand identity setup", included: true },
      { text: "Social media setup & optimisation", included: true },
      { text: "Content — graphics, reels, articles", included: true },
      { text: "SEO foundation audit & fixes", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Paid ads management", included: false },
      { text: "AI automation workflows", included: false },
    ],
    proof: "Get found online in 30 days or we work free",
    whatsappMsg: "Starter",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "The full engine — built to scale",
    pricingNote: "Custom quote based on your channels & budget",
    icon: TrendingUp,
    gradient: "from-violet-500 to-blue-500",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
    accentText: "text-violet-600",
    checkBg: "bg-violet-50",
    checkText: "text-violet-500",
    badgeText: "Most Popular",
    featured: true,
    bestFor: "Startups · SMBs · Growing ecommerce brands",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Google + Meta Ads management", included: true },
      { text: "Advanced SEO + content strategy", included: true },
      { text: "Lead funnel + landing pages", included: true },
      { text: "Retargeting & audience building", included: true },
      { text: "E-commerce listing optimisation", included: true },
      { text: "Bi-weekly strategy calls", included: true },
      { text: "AI automation workflows", included: false },
    ],
    proof: "Average client sees +74% leads in month one",
    whatsappMsg: "Growth",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Full-stack growth. One team.",
    pricingNote: "Scoped to your team size & market",
    icon: Crown,
    gradient: "from-rose-500 to-violet-500",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-100",
    accentText: "text-rose-600",
    checkBg: "bg-rose-50",
    checkText: "text-rose-500",
    badgeText: "Best Value",
    featured: false,
    bestFor: "Funded startups · Mid-market · Enterprises",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "AI marketing automation stack", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Weekly strategy & review calls", included: true },
      { text: "Multi-channel ads (Google, Meta, LinkedIn)", included: true },
      { text: "CRM integration & pipeline setup", included: true },
      { text: "Video & content production", included: true },
      { text: "Priority 24/7 support SLA", included: true },
    ],
    proof: "For brands serious about $1M+ revenue targets",
    whatsappMsg: "Scale",
  },
];

const GUARANTEES = [
  { icon: Shield, text: "No long-term lock-in contracts" },
  { icon: CheckCircle, text: "Strategy call within 48 hours" },
  { icon: Star, text: "30-day results guarantee" },
  { icon: Users, text: "Dedicated account manager from day one" },
];

const PROOF_LOGOS = [
  "TechVault", "BrightPath", "ZenithCo", "PeakForge", "NovaBrand", "StrideCo",
];

// ─── Variants ─────────────────────────────────────────────────────────────────
// Explicitly typed as `Variants` so the literal `ease` tuple isn't widened
// to `number[]` by TypeScript — framer-motion's Transition type requires a
// fixed-length Easing tuple, not a generic number array. `as const` locks
// the tuple's length/values in place.

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

// ─── Plan Card ────────────────────────────────────────────────────────────────

function PlanCard({ plan }: { plan: typeof PLANS[0] }) {
  const Icon = plan.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="relative flex flex-col group"
    >
      {/* Badge above card */}
      {plan.badgeText && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3.5 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white shadow-md`}>
            <Sparkles size={9} />
            {plan.badgeText}
          </span>
        </div>
      )}

      <div
        className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col flex-1 transition-all duration-300 ${
          plan.featured
            ? "border-violet-200 shadow-xl shadow-violet-500/10 group-hover:shadow-2xl group-hover:shadow-violet-500/15"
            : "border-gray-100 shadow-sm shadow-gray-900/5 group-hover:shadow-xl group-hover:shadow-blue-500/8 group-hover:border-gray-200"
        }`}
      >
        {/* Top gradient strip */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${plan.gradient}`} />

        <div className="p-7 flex flex-col flex-1">

          {/* Icon + name */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-10 h-10 rounded-xl ${plan.accentBg} border ${plan.accentBorder} flex items-center justify-center`}
              >
                <Icon size={18} className={plan.accentText} />
              </motion.div>
              <div>
                <h3 className="text-base font-bold text-gray-900">{plan.name}</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">{plan.tagline}</p>
              </div>
            </div>
          </div>

          {/* Pricing note — replaces hard price */}
          <div className={`${plan.accentBg} border ${plan.accentBorder} rounded-xl px-4 py-3 mb-5`}>
            <div className="flex items-center gap-2 mb-0.5">
              <MessageCircle size={12} className={plan.accentText} />
              <p className={`text-[11px] font-bold ${plan.accentText} uppercase tracking-wide`}>
                Pricing on Request
              </p>
            </div>
            <p className="text-xs text-gray-500 leading-snug">{plan.pricingNote}</p>
          </div>

          {/* Best for */}
          <div className={`inline-flex items-center gap-1.5 self-start text-[10px] font-semibold ${plan.accentText} ${plan.accentBg} border ${plan.accentBorder} px-2.5 py-1 rounded-full mb-5`}>
            <Globe size={9} />
            {plan.bestFor}
          </div>

          {/* Features */}
          <ul className="space-y-2.5 flex-1">
            {plan.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-2.5"
              >
                <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                  f.included
                    ? `${plan.checkBg} border ${plan.accentBorder}`
                    : "bg-gray-50 border border-gray-100"
                }`}>
                  <Check
                    size={9}
                    strokeWidth={3}
                    className={f.included ? plan.checkText : "text-gray-300"}
                  />
                </div>
                <span className={`text-sm leading-snug ${f.included ? "text-gray-700" : "text-gray-300 line-through"}`}>
                  {f.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Proof line */}
          <div className={`mt-5 pt-4 border-t ${plan.featured ? "border-violet-100" : "border-gray-100"}`}>
            <p className={`text-[11px] font-semibold ${plan.accentText} flex items-center gap-1.5`}>
              <Star size={10} className="fill-current" />
              {plan.proof}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5 mt-5">
            {/* Primary — WhatsApp */}
            <motion.a
              href={getWhatsAppLink(plan.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`group/wa relative overflow-hidden w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                plan.featured
                  ? "bg-gray-900 text-white shadow-md shadow-gray-900/15"
                  : "bg-gray-900 text-white"
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover/wa:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle size={15} />
                Ask on WhatsApp
                <ArrowRight size={13} className="group-hover/wa:translate-x-0.5 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary — Contact page */}
            <Link
              href="/contact"
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl font-medium text-sm border transition-all duration-200 group/contact ${
                plan.featured
                  ? "border-violet-200 text-violet-600 hover:bg-violet-50"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              Or fill contact form
              <ArrowUpRight size={12} className="opacity-50 group-hover/contact:opacity-100 group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 transition-all" />
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <motion.div
          className="absolute -top-48 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-violet-100/40 to-blue-100/20 blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-100/30 to-transparent blur-3xl"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Flexible Plans · No Fixed Pricing
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight">
            Premium work.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
              Priced for your goals.
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Every business is different. We don't do one-size-fits-all pricing — we scope
            each plan around your market, stage, and growth targets. Just ask us on WhatsApp
            and we'll get back within 2 hours.
          </p>
        </motion.div>

        {/* ── "How it works" strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-14 max-w-2xl mx-auto"
        >
          {[
            { step: "01", label: "Pick a plan tier" },
            { step: "02", label: "WhatsApp us or fill the form" },
            { step: "03", label: "Get a custom quote in 2 hrs" },
          ].map((s, i, arr) => (
            <div key={s.step} className="flex items-center gap-2 sm:gap-0">
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm shadow-gray-900/4">
                <span className="text-[10px] font-black text-blue-500 bg-blue-50 border border-blue-100 rounded-md px-1.5 py-0.5">
                  {s.step}
                </span>
                <span className="text-xs font-medium text-gray-600">{s.label}</span>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight size={13} className="text-gray-300 mx-2 shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Plan cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-start"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </motion.div>

        {/* ── Enterprise row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6"
        >
          <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <Zap size={18} className="text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-bold text-gray-900">Enterprise</h3>
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">Custom Scope</span>
                  </div>
                  <p className="text-xs text-gray-500 max-w-xl">
                    Large brands, multi-market campaigns, and dedicated team arrangements. We'll scope everything around your goals, team size, and channels.
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5 shrink-0">
                <motion.a
                  href={getWhatsAppLink("Enterprise")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-emerald-600 transition-colors px-5 py-2.5 rounded-xl group"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </motion.a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all group"
                >
                  Contact Form
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Guarantees ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {GUARANTEES.map((g) => (
            <div key={g.text} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm shadow-gray-900/3">
              <g.icon size={14} className="text-blue-500 shrink-0" />
              <p className="text-xs text-gray-600 font-medium leading-snug">{g.text}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Proof logos ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-4">
            Brands already growing on these plans
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PROOF_LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-xs font-semibold text-gray-300 hover:text-blue-500 transition-colors duration-200 cursor-default px-3 py-1.5 bg-white border border-gray-100 rounded-lg"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent" />
            <motion.div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-10 lg:px-12">
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  <BarChart3 size={11} />
                  Not sure which plan fits your stage?
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                  Just ask us on WhatsApp —
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> we reply in 2 hours.</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tell us about your business, your goals, and your current marketing situation.
                  We'll suggest the right plan and share a custom quote — zero obligation, zero sales pressure.
                </p>
              </div>

              <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
                {/* WhatsApp primary */}
                <motion.a
                  href={getWhatsAppLink("General Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl w-full lg:w-auto shadow-lg shadow-emerald-500/25 transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.a>

                {/* Contact form secondary */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                >
                  <Bot size={13} />
                  Or fill our contact form
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <p className="text-center text-[11px] text-gray-600">
                  Mon–Sat · 9am–7pm IST · No hard sell, ever
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}