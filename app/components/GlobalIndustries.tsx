// "use client";

// import React, { useState } from "react";
// import { motion , AnimatePresence } from "framer-motion";
// import {
//   Globe,
//   Lightbulb,
//   Sparkles,
//   MapPin,
//   Briefcase,
//   ArrowRight,
//   Zap,
//   Award,
//   TrendingUp,
//   Users,
//   CheckCircle,
//   Flag,
//   Building2,
//   Truck,
//   Rocket,
//   Star,
//   Heart,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const locations = [
//   { name: "Canada", flag: "🇨🇦", color: "blue" },
//   { name: "USA", flag: "🇺🇸", color: "blue" },
//   { name: "UAE", flag: "🇦🇪", color: "yellow" },
//   { name: "India", flag: "🇮🇳", color: "blue" },
//   { name: "New Zealand", flag: "🇳🇿", color: "black" },
//   { name: "South Africa", flag: "🇿🇦", color: "yellow" },
// ];

// const industries = [
//   { name: "Healthcare", icon: Heart, color: "blue" },
//   { name: "B2B", icon: Briefcase, color: "black" },
//   { name: "E-Commerce", icon: Truck, color: "yellow" },
//   { name: "FMCG", icon: Zap, color: "blue" },
//   { name: "Finance", icon: TrendingUp, color: "black" },
//   { name: "Education", icon: Building2, color: "yellow" },
//   { name: "SaaS", icon: Rocket, color: "blue" },
//   { name: "Mobile Apps", icon: Smartphone, color: "black" },
//   { name: "Fashion", icon: Sparkles, color: "yellow" },
//   { name: "Hospitality", icon: Star, color: "blue" },
// ];

// const stats = [
//   {
//     value: "6+",
//     label: "Countries",
//     icon: Flag,
//     color: "blue",
//     trend: "Global",
//   },
//   {
//     value: "10+",
//     label: "Industries",
//     icon: Building2,
//     color: "yellow",
//     trend: "Diverse",
//   },
//   {
//     value: "150+",
//     label: "Brands Scaled",
//     icon: Users,
//     color: "blue",
//     trend: "Growing",
//   },
//   {
//     value: "200%",
//     label: "Avg Growth",
//     icon: TrendingUp,
//     color: "black",
//     trend: "ROI",
//   },
// ];

// // Import Smartphone if not already imported
// import { Smartphone } from "lucide-react";

// export default function GlobalIndustries() {
//   const [activeTab, setActiveTab] = useState<"locations" | "industries">(
//     "locations",
//   );
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
//   const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
//   const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="global"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />

//         {/* World Map Silhouette */}
//         <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
//           <Globe className="w-full h-full text-black" />
//         </div>
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
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
//               WORLDWIDE REACH
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             Global presence.
//             <span className="block text-blue-600 mt-2">Local expertise.</span>
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
//             We've helped businesses across 6+ countries and 10+ industries
//             achieve remarkable growth.
//           </p>
//         </motion.div>

//         {/* Stats Grid - Premium Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="group"
//             >
//               <div className="relative bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
//                 <div
//                   className={`absolute top-0 right-0 w-20 h-20 rounded-full ${
//                     stat.color === "blue"
//                       ? "bg-blue-600/5"
//                       : stat.color === "yellow"
//                         ? "bg-yellow-500/5"
//                         : "bg-black/5"
//                   } -mr-10 -mt-10`}
//                 />

//                 <div
//                   className={`w-12 h-12 rounded-xl ${
//                     stat.color === "blue"
//                       ? "bg-blue-600"
//                       : stat.color === "yellow"
//                         ? "bg-yellow-500"
//                         : "bg-black"
//                   } flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <stat.icon className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="flex items-center justify-center gap-2">
//                   <p className="text-3xl font-bold text-black">{stat.value}</p>
//                   <span
//                     className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
//                       stat.color === "blue"
//                         ? "bg-blue-100 text-blue-700"
//                         : stat.color === "yellow"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : "bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     {stat.trend}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex bg-gray-100 rounded-full p-1">
//             <button
//               onClick={() => setActiveTab("locations")}
//               className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 activeTab === "locations"
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               <Flag className="w-4 h-4 inline mr-2" />
//               Countries We Serve
//             </button>
//             <button
//               onClick={() => setActiveTab("industries")}
//               className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 activeTab === "industries"
//                   ? "bg-yellow-500 text-black shadow-md"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               <Building2 className="w-4 h-4 inline mr-2" />
//               Industries We Serve
//             </button>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="min-h-[500px]">
//           <AnimatePresence mode="wait">
//             {activeTab === "locations" ? (
//               <motion.div
//                 key="locations"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {locations.map((loc, idx) => (
//                   <motion.div
//                     key={loc.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: idx * 0.05 }}
//                     onMouseEnter={() => setSelectedLocation(loc.name)}
//                     onMouseLeave={() => setSelectedLocation(null)}
//                     whileHover={{ y: -5 }}
//                     className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
//                   >
//                     <div
//                       className={`absolute top-0 right-0 w-24 h-24 rounded-full ${
//                         loc.color === "blue"
//                           ? "bg-blue-600/5"
//                           : loc.color === "yellow"
//                             ? "bg-yellow-500/5"
//                             : "bg-black/5"
//                       } -mr-12 -mt-12`}
//                     />

//                     <div className="flex items-center gap-3 mb-4">
//                       <span className="text-4xl">{loc.flag}</span>
//                       <h3
//                         className={`text-xl font-bold transition-colors duration-300 ${
//                           selectedLocation === loc.name
//                             ? "text-blue-600"
//                             : "text-black"
//                         }`}
//                       >
//                         {loc.name}
//                       </h3>
//                     </div>

//                     <p className="text-gray-500 text-sm mb-4">
//                       We've successfully helped brands establish and scale their
//                       presence in {loc.name}.
//                     </p>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1">
//                         <MapPin className="w-3 h-3 text-gray-400" />
//                         <span className="text-xs text-gray-400">
//                           Active Market
//                         </span>
//                       </div>
//                       <motion.div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                           selectedLocation === loc.name
//                             ? "bg-blue-600 text-white"
//                             : "bg-gray-100 text-gray-400"
//                         }`}
//                         animate={{ x: selectedLocation === loc.name ? 5 : 0 }}
//                       >
//                         <ArrowRight className="w-4 h-4" />
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="industries"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {industries.map((ind, idx) => (
//                   <motion.div
//                     key={ind.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: idx * 0.05 }}
//                     onMouseEnter={() => setSelectedIndustry(ind.name)}
//                     onMouseLeave={() => setSelectedIndustry(null)}
//                     whileHover={{ y: -5 }}
//                     className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
//                   >
//                     <div
//                       className={`absolute top-0 right-0 w-24 h-24 rounded-full ${
//                         ind.color === "blue"
//                           ? "bg-blue-600/5"
//                           : ind.color === "yellow"
//                             ? "bg-yellow-500/5"
//                             : "bg-black/5"
//                       } -mr-12 -mt-12`}
//                     />

//                     <div className="flex items-center gap-3 mb-4">
//                       <div
//                         className={`w-10 h-10 rounded-xl ${
//                           ind.color === "blue"
//                             ? "bg-blue-100"
//                             : ind.color === "yellow"
//                               ? "bg-yellow-100"
//                               : "bg-gray-100"
//                         } flex items-center justify-center`}
//                       >
//                         <ind.icon
//                           className={`w-5 h-5 ${
//                             ind.color === "blue"
//                               ? "text-blue-600"
//                               : ind.color === "yellow"
//                                 ? "text-yellow-600"
//                                 : "text-black"
//                           }`}
//                         />
//                       </div>
//                       <h3
//                         className={`text-lg font-bold transition-colors duration-300 ${
//                           selectedIndustry === ind.name
//                             ? "text-yellow-600"
//                             : "text-black"
//                         }`}
//                       >
//                         {ind.name}
//                       </h3>
//                     </div>

//                     <p className="text-gray-500 text-sm mb-4">
//                       Specialized strategies tailored for the {ind.name} sector.
//                     </p>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1">
//                         <Briefcase className="w-3 h-3 text-gray-400" />
//                         <span className="text-xs text-gray-400">Expertise</span>
//                       </div>
//                       <motion.div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                           selectedIndustry === ind.name
//                             ? "bg-yellow-500 text-black"
//                             : "bg-gray-100 text-gray-400"
//                         }`}
//                         animate={{ x: selectedIndustry === ind.name ? 5 : 0 }}
//                       >
//                         <ArrowRight className="w-4 h-4" />
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Interactive Map Preview */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl border border-gray-200"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
//                 <Globe className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-black">Global Footprint</h4>
//                 <p className="text-sm text-gray-500">
//                   6+ countries across 3 continents
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {["North America", "Middle East", "Asia Pacific", "Africa"].map(
//                 (region, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm"
//                   >
//                     {region}
//                   </span>
//                 ),
//               )}
//             </div>
//           </div>
//         </motion.div>

//         {/* Trust Indicators */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mt-12 flex flex-wrap justify-center gap-3"
//         >
//           {[
//             { icon: Zap, label: "Fast Execution", color: "yellow" },
//             { icon: Award, label: "Award Winning", color: "blue" },
//             { icon: CheckCircle, label: "98% Success Rate", color: "green" },
//             { icon: Rocket, label: "Scalable Solutions", color: "black" },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md transition-all"
//             >
//               <item.icon
//                 className={`w-3.5 h-3.5 ${
//                   item.color === "yellow"
//                     ? "text-yellow-500"
//                     : item.color === "blue"
//                       ? "text-blue-600"
//                       : item.color === "green"
//                         ? "text-green-500"
//                         : "text-black"
//                 }`}
//               />
//               <span className="text-xs font-medium text-gray-700">
//                 {item.label}
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
//           className="mt-16"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                 Ready to expand globally?
//               </h3>
//               <p className="text-blue-100 mb-6 max-w-xl mx-auto">
//                 Let's take your brand to new markets and industries worldwide.
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all"
//                 >
//                   Start Your Global Journey
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </motion.div>
//               <p className="text-blue-200 text-xs mt-4">
//                 No commitment • Free consultation
//               </p>
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
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Globe, ArrowRight, ArrowUpRight, Flag, Building2,
  Heart, Briefcase, Truck, Zap, TrendingUp,
  Rocket, Star, Sparkles, Smartphone, Users,
  MapPin, CheckCircle, MessageCircle,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917489951514";

function getWhatsAppLink(context: string) {
  const message = encodeURIComponent(
    `Hi Aerovince! 👋\n\nI'm interested in growing my business in *${context}*.\n\nCould we schedule a quick call to discuss how you can help?\n\nThank you!`
  );
  return `https://wa.me/${WA_NUMBER}?text=${message}`;
}

const LOCATIONS = [
  {
    name: "India",
    flag: "🇮🇳",
    region: "South Asia",
    gradient: "from-orange-400 to-rose-400",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-100",
    accentText: "text-orange-600",
    desc: "Our home market. Deep expertise across metros and tier-2 cities — from Mumbai startups to Delhi enterprises.",
    activeSince: "2020",
    brandsServed: "90+",
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    region: "Middle East",
    gradient: "from-amber-400 to-yellow-400",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-100",
    accentText: "text-amber-600",
    desc: "We help brands break into one of the world's most competitive and high-spending markets — Dubai, Abu Dhabi, and beyond.",
    activeSince: "2021",
    brandsServed: "20+",
  },
  {
    name: "USA",
    flag: "🇺🇸",
    region: "North America",
    gradient: "from-blue-500 to-indigo-400",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentText: "text-blue-600",
    desc: "Performance-driven campaigns for SaaS brands, e-commerce stores, and service businesses scaling in the US market.",
    activeSince: "2022",
    brandsServed: "15+",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    gradient: "from-red-400 to-rose-500",
    accentBg: "bg-red-50",
    accentBorder: "border-red-100",
    accentText: "text-red-600",
    desc: "Localized growth strategies for Canadian businesses seeking brand visibility, qualified leads, and digital expansion.",
    activeSince: "2022",
    brandsServed: "10+",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Asia Pacific",
    gradient: "from-teal-400 to-emerald-400",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-100",
    accentText: "text-teal-600",
    desc: "Helping NZ-based businesses compete digitally — from local SEO to international growth campaigns.",
    activeSince: "2023",
    brandsServed: "8+",
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    region: "Africa",
    gradient: "from-emerald-400 to-green-500",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100",
    accentText: "text-emerald-600",
    desc: "Building brand presence and lead pipelines for South African businesses entering the digital-first economy.",
    activeSince: "2023",
    brandsServed: "7+",
  },
];

const INDUSTRIES = [
  {
    name: "Healthcare",
    icon: Heart,
    gradient: "from-rose-400 to-pink-400",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-100",
    accentText: "text-rose-600",
    desc: "Patient lead generation, local SEO, and reputation management for hospitals, clinics, and health brands.",
    stat: "+320% patient inquiries",
  },
  {
    name: "SaaS & Tech",
    icon: Rocket,
    gradient: "from-blue-500 to-violet-500",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentText: "text-blue-600",
    desc: "Demand gen, content-led SEO, and paid acquisition for B2B SaaS companies at seed to Series B.",
    stat: "+312% pipeline growth",
  },
  {
    name: "E-Commerce",
    icon: Truck,
    gradient: "from-violet-500 to-purple-400",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
    accentText: "text-violet-600",
    desc: "Performance ads, listing optimisation, and retention email funnels for online stores and D2C brands.",
    stat: "+187% revenue growth",
  },
  {
    name: "Education & EdTech",
    icon: Building2,
    gradient: "from-cyan-500 to-blue-400",
    accentBg: "bg-cyan-50",
    accentBorder: "border-cyan-100",
    accentText: "text-cyan-600",
    desc: "Admissions funnels, geo-targeted campaigns, and lead automation for schools, institutes, and EdTech platforms.",
    stat: "+60% admissions",
  },
  {
    name: "Restaurants & Food",
    icon: Star,
    gradient: "from-orange-400 to-amber-400",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-100",
    accentText: "text-orange-600",
    desc: "Local SEO, Google Business optimisation, social content, and online ordering campaigns for food brands.",
    stat: "2.8x online orders",
  },
  {
    name: "Real Estate",
    icon: Building2,
    gradient: "from-amber-400 to-yellow-400",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-100",
    accentText: "text-amber-600",
    desc: "Lead funnels, WhatsApp automation, and paid campaigns that fill developer pipelines with qualified buyers.",
    stat: "₹18Cr sales pipeline",
  },
  {
    name: "Finance & Fintech",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-400",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100",
    accentText: "text-emerald-600",
    desc: "Compliant content marketing, performance ads, and SEO for fintech apps, wealth managers, and NBFCs.",
    stat: "95% lead quality score",
  },
  {
    name: "B2B & Manufacturing",
    icon: Briefcase,
    gradient: "from-slate-400 to-gray-500",
    accentBg: "bg-slate-50",
    accentBorder: "border-slate-100",
    accentText: "text-slate-600",
    desc: "LinkedIn-led demand gen, trade content, and export market campaigns for manufacturers and B2B service firms.",
    stat: "+240% qualified leads",
  },
  {
    name: "Mobile Apps",
    icon: Smartphone,
    gradient: "from-pink-500 to-rose-400",
    accentBg: "bg-pink-50",
    accentBorder: "border-pink-100",
    accentText: "text-pink-600",
    desc: "App store optimisation, install campaigns, and retention marketing for consumer and B2B mobile products.",
    stat: "1M+ installs driven",
  },
  {
    name: "Hospitality & Travel",
    icon: Globe,
    gradient: "from-sky-400 to-cyan-400",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-100",
    accentText: "text-sky-600",
    desc: "Seasonal campaigns, review management, and booking-focused funnels for hotels, resorts, and travel brands.",
    stat: "+3x direct bookings",
  },
];

const GLOBAL_STATS = [
  { label: "Countries Active", value: "6+", icon: Flag, sub: "3 continents" },
  { label: "Industries Served", value: "10+", icon: Building2, sub: "Across sectors" },
  { label: "Brands Scaled", value: "150+", icon: Users, sub: "Globally" },
  { label: "Avg. Growth", value: "↑ 200%", icon: TrendingUp, sub: "Client average" },
];

// ─── Variants ──────────────────────────────────────────────────────────────────
// Explicitly typed as `Variants` (instead of letting TS infer a plain
// object) so the literal `ease` tuple isn't widened to `number[]` —
// framer-motion's Transition type requires a fixed-length Easing tuple,
// not `number[]`. `as const` locks the array length/values in too.

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Location Card ─────────────────────────────────────────────────────────────

function LocationCard({ loc }: { loc: typeof LOCATIONS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col"
        style={{
          boxShadow: hovered
            ? "0 20px 60px -12px rgba(59,130,246,0.10), 0 0 0 1px rgba(59,130,246,0.06)"
            : "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* Top gradient strip */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${loc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Flag + name row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl leading-none">{loc.flag}</span>
              <div>
                <h3 className={`text-lg font-bold text-gray-900 transition-colors duration-200 ${hovered ? loc.accentText : ""}`}>
                  {loc.name}
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={9} className="text-gray-400" />
                  <span className="text-[10px] text-gray-400 font-medium">{loc.region}</span>
                </div>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${loc.accentBg} ${loc.accentBorder} ${loc.accentText}`}>
              Active
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed flex-1">{loc.desc}</p>

          {/* Bottom meta */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Since</p>
                <p className="text-xs font-bold text-gray-700">{loc.activeSince}</p>
              </div>
              <div className="w-px h-6 bg-gray-100" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Brands</p>
                <p className="text-xs font-bold text-gray-700">{loc.brandsServed}</p>
              </div>
            </div>
            <motion.a
              href={getWhatsAppLink(loc.name)}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
              transition={{ duration: 0.2 }}
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${loc.accentText} ${loc.accentBg} border ${loc.accentBorder} px-2.5 py-1 rounded-full`}
            >
              <MessageCircle size={10} />
              Enquire
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Industry Card ─────────────────────────────────────────────────────────────

function IndustryCard({ ind }: { ind: typeof INDUSTRIES[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = ind.icon;

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? -5 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col"
        style={{
          boxShadow: hovered
            ? "0 16px 48px -8px rgba(59,130,246,0.10), 0 0 0 1px rgba(59,130,246,0.06)"
            : "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <div className={`h-0.5 w-full bg-gradient-to-r ${ind.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className="p-5 flex flex-col flex-1">
          {/* Icon + title */}
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-9 h-9 rounded-xl ${ind.accentBg} border ${ind.accentBorder} flex items-center justify-center shrink-0`}
            >
              <Icon size={16} className={ind.accentText} />
            </motion.div>
            <h3 className={`text-sm font-bold text-gray-900 transition-colors duration-200 ${hovered ? ind.accentText : ""}`}>
              {ind.name}
            </h3>
          </div>

          {/* Desc */}
          <p className="text-xs text-gray-500 leading-relaxed flex-1">{ind.desc}</p>

          {/* Stat */}
          <div className={`mt-4 pt-3 border-t border-gray-100 flex items-center justify-between`}>
            <span className={`text-[10px] font-bold ${ind.accentText} flex items-center gap-1`}>
              <CheckCircle size={9} className="fill-current" />
              {ind.stat}
            </span>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 4 }}
              className={`text-[10px] font-semibold ${ind.accentText}`}
            >
              <ArrowUpRight size={12} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function GlobalIndustries() {
  const [activeTab, setActiveTab] = useState<"locations" | "industries">("locations");

  return (
    <section id="global" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <motion.div
          className="absolute -top-48 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-50/70 to-transparent blur-3xl"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-50/50 to-transparent blur-3xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Global Reach · Local Expertise
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight">
              We go where
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                your market is.
              </span>
            </h2>

            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              6 countries. 10 industries. 150+ brands. Whether you're a local business or
              a brand ready to go global — we've done it before.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3 shrink-0"
          >
            {GLOBAL_STATS.map((s) => (
              <div key={s.label} className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 min-w-[130px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <s.icon size={11} className="text-blue-500" />
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{s.label}</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{s.value}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Tab switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-10"
        >
          {[
            { id: "locations", label: "Countries We Serve", icon: Flag },
            { id: "industries", label: "Industries We Serve", icon: Building2 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "locations" | "industries")}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              <tab.icon size={12} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ── Tab content ── */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            {activeTab === "locations" ? (
              <motion.div
                key="locations"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {LOCATIONS.map((loc) => (
                    <LocationCard key={loc.name} loc={loc} />
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="industries"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
                >
                  {INDUSTRIES.map((ind) => (
                    <IndustryCard key={ind.name} ind={ind} />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Regions strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-[#F8FAFC] border border-gray-100 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-md shadow-blue-500/20">
              <Globe size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Global Footprint</p>
              <p className="text-xs text-gray-500">6+ countries across 3 continents</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["South Asia", "Middle East", "North America", "Asia Pacific", "Africa"].map((r) => (
              <span key={r} className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">
                {r}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent" />
            <motion.div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-violet-500/10 blur-2xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-9 lg:px-12">
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  <Sparkles size={10} />
                  Your industry. Your country. Our strategy.
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  Ready to grow —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                    wherever you are?
                  </span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tell us your market and industry. We'll map out a custom growth
                  strategy in a free 20-minute call — no commitment, no sales pitch.
                </p>
              </div>

              <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
                <motion.a
                  href={getWhatsAppLink("my market")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-500/25 group"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                >
                  Or fill contact form
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <p className="text-center text-[11px] text-gray-600">
                  Response within 2 hrs · Mon–Sat · No obligation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}