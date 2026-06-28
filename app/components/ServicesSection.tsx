// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Video,
//   Search,
//   FileText,
//   Target,
//   ShieldCheck,
//   TrendingUp,
//   BarChart,
//   Globe,
//   Smartphone,
//   Zap,
//   Rocket,
//   Award,
//   Users,
//   Brain,
//   Megaphone,
//   LineChart,
//   Code,
//   Sparkles,
//   CheckCircle,
// } from "lucide-react";
// import Link from "next/link";

// const services = [
//   {
//     title: "Android & iOS Development",
//     icon: Smartphone,
//     description:
//       "High-performance mobile applications that users love. Native and cross-platform expertise.",
//     badge: "Popular",
//     color: "blue",
//     stat: "+500% Growth",
//   },
//   {
//     title: "Web Development",
//     icon: Globe,
//     description:
//       "Scalable, fast, and secure websites that convert visitors into customers.",
//     badge: "Essential",
//     color: "black",
//     stat: "99.9% Uptime",
//   },
//   {
//     title: "Market Research",
//     icon: Search,
//     description:
//       "Deep insights into your market, competitors, and customers for data-driven decisions.",
//     badge: "Strategic",
//     color: "blue",
//     stat: "95% Accuracy",
//   },
//   {
//     title: "Marketing Strategy",
//     icon: FileText,
//     description:
//       "Comprehensive growth plans with clear roadmaps and measurable KPIs.",
//     badge: "Core",
//     color: "yellow",
//     stat: "10x ROI",
//   },
//   {
//     title: "Performance Marketing",
//     icon: TrendingUp,
//     description:
//       "ROI-focused campaigns across Google, Meta, and emerging platforms.",
//     badge: "High Impact",
//     color: "blue",
//     stat: "200% Avg ROI",
//   },
//   {
//     title: "SEO & Analytics",
//     icon: BarChart,
//     description:
//       "Dominate search rankings with actionable data insights and continuous optimization.",
//     badge: "Essential",
//     color: "black",
//     stat: "#1 Rankings",
//   },
//   {
//     title: "Lead Generation",
//     icon: Target,
//     description:
//       "Qualified leads delivered consistently through multi-channel strategies.",
//     badge: "Growth",
//     color: "yellow",
//     stat: "50k+ Leads",
//   },
//   {
//     title: "Video Content",
//     icon: Video,
//     description:
//       "Story-driven videos that capture attention and drive engagement.",
//     badge: "Creative",
//     color: "blue",
//     stat: "1M+ Views",
//   },
//   {
//     title: "Reputation Management",
//     icon: ShieldCheck,
//     description:
//       "Protect and enhance your brand image across all digital platforms.",
//     badge: "Trust",
//     color: "black",
//     stat: "4.95 Rating",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// export default function ServicesSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="relative py-24 lg:py-32 bg-white overflow-hidden" id="services">
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
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-blue-600" />
//             <span className="text-blue-700 font-semibold text-sm tracking-wide">
//               WHAT WE DELIVER
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2]">
//             Everything you need to
//             <span className="block text-blue-600 mt-2">
//               scale your business
//             </span>
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
//             From strategy to execution — we provide end-to-end solutions that
//             drive real, measurable growth.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//             >
//               {/* Animated Background Gradient */}
//               <div className={`absolute inset-0 bg-gradient-to-r ${
//                 service.color === 'blue' ? 'from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5' :
//                 service.color === 'yellow' ? 'from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5' :
//                 'from-black/0 via-black/0 to-black/0 group-hover:from-black/5'
//               } group-hover:via-transparent group-hover:to-transparent transition-all duration-500`} />

//               {/* Badge */}
//               <motion.div 
//                 className="absolute top-4 right-4 z-10"
//                 initial={{ x: 20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
//                   service.color === 'blue' ? 'bg-blue-100 text-blue-700' :
//                   service.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
//                   'bg-gray-100 text-gray-700'
//                 }`}>
//                   {service.badge}
//                 </span>
//               </motion.div>

//               {/* Icon Container */}
//               <div className="p-6 pb-0">
//                 <motion.div 
//                   className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
//                     hoveredCard === index 
//                       ? service.color === 'blue' ? 'bg-blue-600' : service.color === 'yellow' ? 'bg-yellow-500' : 'bg-black'
//                       : 'bg-gray-100'
//                   }`}
//                   animate={{
//                     scale: hoveredCard === index ? 1.1 : 1,
//                     rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <service.icon className={`w-8 h-8 transition-colors duration-300 ${
//                     hoveredCard === index ? 'text-white' : service.color === 'blue' ? 'text-blue-600' : service.color === 'yellow' ? 'text-yellow-600' : 'text-black'
//                   }`} />
//                 </motion.div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className={`text-xl font-bold text-black mb-3 transition-colors duration-300 ${
//                   hoveredCard === index ? 'text-blue-600' : ''
//                 }`}>
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-500 leading-relaxed mb-4">
//                   {service.description}
//                 </p>

//                 {/* Stat Badge - Appears on Hover */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{
//                     opacity: hoveredCard === index ? 1 : 0,
//                     y: hoveredCard === index ? 0 : 10,
//                   }}
//                   transition={{ duration: 0.2 }}
//                   className="mb-3"
//                 >
//                   <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50">
//                     <TrendingUp className="w-3 h-3 text-green-600" />
//                     <span className="text-xs font-semibold text-green-600">{service.stat}</span>
//                   </div>
//                 </motion.div>

//                 {/* Learn More Link */}
//                 <motion.div
//                   animate={{
//                     x: hoveredCard === index ? 5 : 0,
//                   }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Link
//                     href="/services"
//                     className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider transition-all group-hover:gap-3"
//                     style={{ color: service.color === 'blue' ? '#2563EB' : service.color === 'yellow' ? '#EAB308' : '#000000' }}
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </Link>
//                 </motion.div>
//               </div>

//               {/* Bottom Accent Line */}
//               <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
//                 service.color === 'blue' ? 'bg-blue-600' : service.color === 'yellow' ? 'bg-yellow-500' : 'bg-black'
//               }`} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Trust Badges Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-16 flex flex-wrap justify-center gap-4"
//         >
//           {[
//             { icon: Award, label: "Award Winning Agency", color: "blue" },
//             { icon: Users, label: "150+ Happy Clients", color: "yellow" },
//             { icon: Rocket, label: "200% Avg Growth", color: "blue" },
//             { icon: Zap, label: "Fast Delivery", color: "black" },
//             { icon: CheckCircle, label: "98% Retention", color: "blue" },
//           ].map((badge, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -5, scale: 1.05 }}
//               className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
//             >
//               <div className={`w-6 h-6 rounded-full ${
//                 badge.color === 'blue' ? 'bg-blue-100' : badge.color === 'yellow' ? 'bg-yellow-100' : 'bg-gray-100'
//               } flex items-center justify-center`}>
//                 <badge.icon className={`w-3.5 h-3.5 ${
//                   badge.color === 'blue' ? 'text-blue-600' : badge.color === 'yellow' ? 'text-yellow-600' : 'text-black'
//                 }`} />
//               </div>
//               <span className="text-xs md:text-sm font-semibold text-gray-700">
//                 {badge.label}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
//             <div className="relative z-10">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                 Ready to scale your business?
//               </h3>
//               <p className="text-blue-100 mb-6 max-w-xl mx-auto">
//                 Let's create a custom growth strategy tailored to your brand.
//               </p>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all"
//                 >
//                   Get Started Now
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






















"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Zap, Palette, Code2, Bot, Users,
  Share2, Mail, TrendingUp, Video,
  ArrowRight, ArrowUpRight, CheckCircle,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimisation",
    short: "SEO",
    description:
      "Rank higher, get found first, own your category. We build technical and content SEO foundations that compound month over month — not quick tricks that collapse with the next algorithm update.",
    stat: "#1 rankings",
    statDetail: "for 80+ client keywords",
    gradient: "from-blue-500 to-cyan-400",
    lightBg: "bg-blue-50",
    lightBorder: "border-blue-100",
    textAccent: "text-blue-600",
    tags: ["Technical SEO", "Content", "Link Building", "Local SEO"],
  },
  {
    id: "ads",
    icon: Zap,
    title: "Performance Marketing",
    short: "Paid Ads",
    description:
      "ROI-obsessed ad campaigns on Google, Meta, and LinkedIn. We don't set budgets on fire — every rupee is tracked to a conversion, a lead, or a booked call.",
    stat: "4.2x avg ROI",
    statDetail: "across all client campaigns",
    gradient: "from-violet-500 to-purple-400",
    lightBg: "bg-violet-50",
    lightBorder: "border-violet-100",
    textAccent: "text-violet-600",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting"],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Identity",
    short: "Branding",
    description:
      "A brand isn't a logo — it's the instant feeling someone gets when they encounter your business. We design identities that communicate premium quality before a single word is read.",
    stat: "80+ brands built",
    statDetail: "across 12 industries",
    gradient: "from-rose-500 to-pink-400",
    lightBg: "bg-rose-50",
    lightBorder: "border-rose-100",
    textAccent: "text-rose-600",
    tags: ["Logo Design", "Visual Identity", "Brand Voice", "Style Guide"],
  },
  {
    id: "webdev",
    icon: Code2,
    title: "Web Design & Development",
    short: "Web Dev",
    description:
      "We build fast, conversion-optimised websites on Next.js, React, and Webflow. Every page is engineered with a goal — not just to look good, but to turn visitors into customers.",
    stat: "60+ sites launched",
    statDetail: "avg. 3.1% conversion rate",
    gradient: "from-cyan-500 to-blue-400",
    lightBg: "bg-cyan-50",
    lightBorder: "border-cyan-100",
    textAccent: "text-cyan-600",
    tags: ["Next.js", "React", "Webflow", "CRO"],
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Marketing Automation",
    short: "AI Automation",
    description:
      "Stop doing manually what a machine can do better. We build AI workflows for lead nurturing, follow-up sequences, reporting, and content — saving 30+ hours a week while compounding results.",
    stat: "30+ hrs/week saved",
    statDetail: "average per client",
    gradient: "from-emerald-500 to-teal-400",
    lightBg: "bg-emerald-50",
    lightBorder: "border-emerald-100",
    textAccent: "text-emerald-600",
    tags: ["Lead Nurturing", "AI Workflows", "CRM Automation", "Reporting"],
  },
  {
    id: "leadgen",
    icon: Users,
    title: "Lead Generation",
    short: "Lead Gen",
    description:
      "We design end-to-end lead funnels — from the first ad impression to the booked call. Qualified leads, not random enquiries. Consistent volume, not feast-or-famine pipelines.",
    stat: "50K+ leads generated",
    statDetail: "across all client accounts",
    gradient: "from-amber-500 to-orange-400",
    lightBg: "bg-amber-50",
    lightBorder: "border-amber-100",
    textAccent: "text-amber-600",
    tags: ["Funnel Design", "Landing Pages", "Lead Magnets", "Qualification"],
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Marketing",
    short: "Social",
    description:
      "Content that builds community, earns trust, and converts quietly in the background. We manage your presence on Instagram, LinkedIn, and YouTube with a strategy, not a posting schedule.",
    stat: "1M+ reach/month",
    statDetail: "across managed accounts",
    gradient: "from-pink-500 to-rose-400",
    lightBg: "bg-pink-50",
    lightBorder: "border-pink-100",
    textAccent: "text-pink-600",
    tags: ["Instagram", "LinkedIn", "YouTube", "Content Strategy"],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Marketing",
    short: "Email",
    description:
      "The highest-ROI channel, still. We build and manage email sequences that nurture cold leads into warm conversations and warm conversations into paying customers — automatically.",
    stat: "42% avg open rate",
    statDetail: "vs 21% industry average",
    gradient: "from-indigo-500 to-blue-400",
    lightBg: "bg-indigo-50",
    lightBorder: "border-indigo-100",
    textAccent: "text-indigo-600",
    tags: ["Sequences", "Newsletters", "Segmentation", "A/B Testing"],
  },
  {
    id: "cro",
    icon: TrendingUp,
    title: "Conversion Optimisation",
    short: "CRO",
    description:
      "More traffic isn't always the answer. Sometimes, doubling conversion rate is 10x cheaper than doubling ad spend. We run structured experiments that compound — testing, learning, and scaling what wins.",
    stat: "2.7x avg CRO lift",
    statDetail: "across client landing pages",
    gradient: "from-teal-500 to-emerald-400",
    lightBg: "bg-teal-50",
    lightBorder: "border-teal-100",
    textAccent: "text-teal-600",
    tags: ["A/B Testing", "Heatmaps", "UX Research", "Landing Pages"],
  },
  {
    id: "video",
    icon: Video,
    title: "Video & Content Marketing",
    short: "Video",
    description:
      "Scroll-stopping video that educates, entertains, and sells. From short-form reels to long-form YouTube strategy — we produce content that builds authority and drives bottom-of-funnel decisions.",
    stat: "1M+ views generated",
    statDetail: "across client content",
    gradient: "from-orange-500 to-red-400",
    lightBg: "bg-orange-50",
    lightBorder: "border-orange-100",
    textAccent: "text-orange-600",
    tags: ["Reels", "YouTube", "Case Studies", "Explainer Videos"],
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
  isActive,
  onEnter,
  onLeave,
}: {
  service: typeof SERVICES[0];
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.div
        animate={{ y: isActive ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col cursor-pointer"
        style={{
          boxShadow: isActive
            ? "0 20px 60px -12px rgba(59,130,246,0.10), 0 0 0 1px rgba(59,130,246,0.06)"
            : "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        {/* Top gradient strip */}
        <div
          className={`h-0.5 w-full bg-gradient-to-r ${service.gradient} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
        />

        <div className="p-6 flex flex-col flex-1">
          {/* Icon */}
          <div className={`w-11 h-11 rounded-xl ${service.lightBg} border ${service.lightBorder} flex items-center justify-center mb-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
            <Icon size={20} className={service.textAccent} />
          </div>

          {/* Title + short label */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className={`text-base font-bold text-gray-900 leading-snug transition-colors duration-200 ${isActive ? service.textAccent : ""}`}>
              {service.title}
            </h3>
            <span className={`text-[10px] font-bold shrink-0 px-2 py-0.5 rounded-md border ${service.lightBg} ${service.lightBorder} ${service.textAccent}`}>
              {service.short}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {service.tags.map((t) => (
              <span key={t} className="text-[10px] font-medium text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                {t}
              </span>
            ))}
          </div>

          {/* Bottom stat + link */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
            <div>
              <p className={`text-sm font-bold ${service.textAccent}`}>{service.stat}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{service.statDetail}</p>
            </div>
            <motion.div
              animate={{ x: isActive ? 3 : 0, opacity: isActive ? 1 : 0.4 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/services" className={`text-xs font-semibold flex items-center gap-1 ${service.textAccent}`}>
                Learn more <ArrowUpRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-50/60 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-50/40 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            What We Deliver
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight">
            Every channel.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
              One accountable team.
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            From search to social, branding to automation — we manage the entire
            marketing stack, so you can focus on building the product.
          </p>
        </motion.div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isActive={activeCard === service.id}
              onEnter={() => setActiveCard(service.id)}
              onLeave={() => setActiveCard(null)}
            />
          ))}

          {/* CTA card in grid */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: SERVICES.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden h-full min-h-[200px] flex flex-col justify-between p-7 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative z-10">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Not sure where to start?</p>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Get a free custom growth plan built for your business.
                </h3>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-6">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl group/btn hover:bg-blue-50 transition-colors"
                  >
                    Book Free Strategy Call
                    <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  View all services <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Trust badges row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            "Google Partner",
            "Meta Business Partner",
            "HubSpot Certified",
            "SEMrush Agency Partner",
            "98% Client Satisfaction",
            "150+ Projects Delivered",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 px-3.5 py-1.5 rounded-full">
              <CheckCircle size={11} className="text-emerald-500" />
              {badge}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}