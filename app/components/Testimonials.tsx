// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Quote,
//   Sparkles,
//   ArrowRight,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   Users,
//   TrendingUp,
//   Award,
//   Heart,
//   Briefcase,
//   Zap,
//   CheckCircle,
//   MessageCircle,
//   ThumbsUp,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "CEO",
//     company: "TechStart",
//     quote:
//       "Awesome B2C Marketing Agency. Flawless Project Delivery. They exceeded our expectations in every way.",
//     rating: 5,
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
//     color: "blue",
//     achievement: "+300% ROI",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Marketing Director",
//     company: "GrowthX",
//     quote:
//       "They transformed our digital presence completely. Best investment we ever made. Highly recommended!",
//     rating: 5,
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     color: "yellow",
//     achievement: "+500% Growth",
//   },
//   {
//     id: 3,
//     name: "Priya Sharma",
//     role: "Founder",
//     company: "EcoCart",
//     quote:
//       "The team's dedication and creativity is unmatched. Our ROI increased by 300% in just 6 months.",
//     rating: 5,
//     avatar:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
//     color: "black",
//     achievement: "#1 Ranking",
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     role: "CTO",
//     company: "InnovateLabs",
//     quote:
//       "Exceptional service and outstanding results. They truly understand what it takes to scale a business.",
//     rating: 5,
//     avatar:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
//     color: "blue",
//     achievement: "10x Revenue",
//   },
// ];

// const stats = [
//   {
//     value: "150+",
//     label: "Happy Clients",
//     icon: Users,
//     trend: "+42%",
//     color: "blue",
//   },
//   {
//     value: "98%",
//     label: "Satisfaction Rate",
//     icon: ThumbsUp,
//     trend: "Top 1%",
//     color: "yellow",
//   },
//   {
//     value: "300%",
//     label: "Average ROI",
//     icon: TrendingUp,
//     trend: "+150%",
//     color: "black",
//   },
//   {
//     value: "4.95",
//     label: "Client Rating",
//     icon: Star,
//     trend: "5 Stars",
//     color: "blue",
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const nextTestimonial = () => {
//     setDirection(1);
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setDirection(-1);
//     setActiveIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length,
//     );
//   };

//   const current = testimonials[activeIndex];

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="testimonials"
//     >
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
//               CLIENT LOVE
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             What our
//             <span className="block text-blue-600 mt-2">
//               clients say about us
//             </span>
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
//             Real stories from real clients. See why 150+ businesses trust us
//             with their growth.
//           </p>
//         </motion.div>

//         {/* Stats Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -5 }}
//               className="group text-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <div
//                 className={`w-10 h-10 rounded-xl ${
//                   stat.color === "blue"
//                     ? "bg-blue-100 group-hover:bg-blue-600"
//                     : stat.color === "yellow"
//                       ? "bg-yellow-100 group-hover:bg-yellow-500"
//                       : "bg-gray-100 group-hover:bg-black"
//                 } flex items-center justify-center mx-auto mb-2 transition-all duration-300`}
//               >
//                 <stat.icon
//                   className={`w-5 h-5 transition-colors duration-300 ${
//                     stat.color === "blue"
//                       ? "text-blue-600 group-hover:text-white"
//                       : stat.color === "yellow"
//                         ? "text-yellow-600 group-hover:text-black"
//                         : "text-black group-hover:text-white"
//                   }`}
//                 />
//               </div>
//               <p className="text-2xl font-bold text-black">{stat.value}</p>
//               <p className="text-xs text-gray-500">{stat.label}</p>
//               <span
//                 className={`inline-block mt-1 text-[10px] font-semibold px-1.5 py-0.5 rounded ${
//                   stat.color === "blue"
//                     ? "bg-blue-100 text-blue-700"
//                     : stat.color === "yellow"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-gray-100 text-gray-700"
//                 }`}
//               >
//                 {stat.trend}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Main Testimonial Section - Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Testimonial Cards Stack */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             {/* Background Decorative Card */}
//             <div className="absolute -top-4 -left-4 w-full h-full bg-gray-100 rounded-3xl hidden lg:block" />

//             {/* Active Testimonial Card */}
//             <div
//               className={`relative bg-gradient-to-br ${
//                 current.color === "blue"
//                   ? "from-blue-600 to-blue-700"
//                   : current.color === "yellow"
//                     ? "from-yellow-500 to-yellow-600"
//                     : "from-gray-900 to-black"
//               } rounded-3xl p-8 shadow-2xl overflow-hidden`}
//             >
//               {/* Quote Icon */}
//               <Quote
//                 className={`absolute -top-6 -right-6 w-24 h-24 ${
//                   current.color === "yellow" ? "text-black/10" : "text-white/10"
//                 }`}
//               />

//               {/* Rating */}
//               <div className="flex gap-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-5 h-5 fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>

//               {/* Quote Text */}
//               <AnimatePresence mode="wait" custom={direction}>
//                 <motion.div
//                   key={activeIndex}
//                   custom={direction}
//                   variants={variants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.4 }}
//                 >
//                   <p
//                     className={`text-xl md:text-2xl font-medium leading-relaxed mb-6 ${
//                       current.color === "yellow" ? "text-black" : "text-white"
//                     }`}
//                   >
//                     "{current.quote}"
//                   </p>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Author Info */}
//               <div className="flex items-center gap-4 pt-4 border-t border-white/20">
//                 <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 ring-2 ring-white/30">
//                   <Image
//                     src={current.avatar}
//                     alt={current.name}
//                     width={48}
//                     height={48}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p
//                     className={`font-bold ${
//                       current.color === "yellow" ? "text-black" : "text-white"
//                     }`}
//                   >
//                     {current.name}
//                   </p>
//                   <p
//                     className={`text-sm ${
//                       current.color === "yellow"
//                         ? "text-black/60"
//                         : "text-white/60"
//                     }`}
//                   >
//                     {current.role}, {current.company}
//                   </p>
//                 </div>
//               </div>

//               {/* Achievement Badge */}
//               <div
//                 className={`absolute bottom-6 right-6 px-3 py-1.5 rounded-full text-xs font-bold ${
//                   current.color === "blue"
//                     ? "bg-white/20 text-white"
//                     : current.color === "yellow"
//                       ? "bg-black/20 text-black"
//                       : "bg-white/20 text-white"
//                 }`}
//               >
//                 {current.achievement}
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex justify-between items-center mt-6">
//               <div className="flex gap-2">
//                 <motion.button
//                   onClick={prevTestimonial}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
//                     current.color === "yellow"
//                       ? "border-gray-300 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white"
//                       : "border-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
//                   }`}
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </motion.button>
//                 <motion.button
//                   onClick={nextTestimonial}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
//                     current.color === "yellow"
//                       ? "border-gray-300 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white"
//                       : "border-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
//                   }`}
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </motion.button>
//               </div>

//               {/* Progress Indicator */}
//               <div className="flex gap-1">
//                 {testimonials.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setDirection(idx > activeIndex ? 1 : -1);
//                       setActiveIndex(idx);
//                     }}
//                     className={`h-1 rounded-full transition-all duration-300 ${
//                       idx === activeIndex
//                         ? `w-6 ${current.color === "yellow" ? "bg-yellow-500" : "bg-blue-600"}`
//                         : "w-1 bg-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side - Features & Benefits */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="space-y-6">
//               <div>
//                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-4">
//                   <MessageCircle className="w-3 h-3 text-blue-600" />
//                   <span className="text-blue-600 font-semibold text-xs tracking-wide uppercase">
//                     Why Clients Love Us
//                   </span>
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
//                   We don't just deliver — we exceed expectations
//                 </h3>
//                 <p className="text-gray-500 leading-relaxed text-sm">
//                   Our clients consistently praise our dedication, creativity,
//                   and ability to drive real results.
//                 </p>
//               </div>

//               {/* Feature List */}
//               <div className="space-y-3">
//                 {[
//                   {
//                     text: "Dedicated account manager",
//                     icon: Users,
//                     color: "blue",
//                   },
//                   {
//                     text: "Weekly progress reports",
//                     icon: TrendingUp,
//                     color: "yellow",
//                   },
//                   {
//                     text: "24/7 priority support",
//                     icon: Heart,
//                     color: "black",
//                   },
//                   {
//                     text: "Strategy-first approach",
//                     icon: CheckCircle,
//                     color: "blue",
//                   },
//                 ].map((feature, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     whileHover={{ x: 5 }}
//                     className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
//                   >
//                     <div
//                       className={`w-8 h-8 rounded-lg ${
//                         feature.color === "blue"
//                           ? "bg-blue-100"
//                           : feature.color === "yellow"
//                             ? "bg-yellow-100"
//                             : "bg-gray-200"
//                       } flex items-center justify-center`}
//                     >
//                       <feature.icon
//                         className={`w-4 h-4 ${
//                           feature.color === "blue"
//                             ? "text-blue-600"
//                             : feature.color === "yellow"
//                               ? "text-yellow-600"
//                               : "text-black"
//                         }`}
//                       />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">
//                       {feature.text}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Trust Badges */}
//               <div className="flex flex-wrap gap-3 pt-4">
//                 <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
//                   <CheckCircle className="w-3.5 h-3.5 text-green-600" />
//                   <span className="text-xs font-medium text-green-700">
//                     100% Satisfaction
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-full">
//                   <Zap className="w-3.5 h-3.5 text-yellow-600" />
//                   <span className="text-xs font-medium text-yellow-700">
//                     Fast Delivery
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
//                   <Award className="w-3.5 h-3.5 text-blue-600" />
//                   <span className="text-xs font-medium text-blue-700">
//                     Award Winning
//                   </span>
//                 </div>
//               </div>

//               {/* CTA */}
//               <Link href="/contact">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-3 font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 mt-4"
//                 >
//                   Share Your Story
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </Link>

//               {/* Client Count */}
//               <div className="flex items-center justify-center gap-3 pt-2">
//                 <div className="flex -space-x-2">
//                   {["SJ", "MC", "PS", "DW"].map((initials, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ scale: 1.1, zIndex: 10 }}
//                       className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-700"
//                     >
//                       {initials}
//                     </motion.div>
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-400">
//                   Join 150+ satisfied clients
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-10 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <div className="flex justify-center mb-4">
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                 Join our family of happy clients
//               </h3>
//               <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
//                 150+ brands already trust us. Ready to be next?
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
//                 >
//                   Get Started
//                   <ArrowRight className="w-3.5 h-3.5" />
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

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Sparkles,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Award,
  Heart,
  Zap,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  accent: string; // gradient classes, mirrors hero's service-panel accents
  glowColor: string; // hex, for the ambient glow behind the card
  achievement: string;
}

interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  trend: string;
  accent: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    quote:
      "Awesome B2C Marketing Agency. Flawless project delivery. They exceeded our expectations in every way.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    accent: "from-blue-500 to-cyan-400",
    glowColor: "#3b82f6",
    achievement: "+300% ROI",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthX",
    quote:
      "They transformed our digital presence completely. Best investment we ever made — highly recommended.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    accent: "from-amber-500 to-orange-400",
    glowColor: "#f59e0b",
    achievement: "+500% Growth",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Founder",
    company: "EcoCart",
    quote:
      "The team's dedication and creativity is unmatched. Our ROI increased by 300% in just 6 months.",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    accent: "from-emerald-500 to-teal-400",
    glowColor: "#10b981",
    achievement: "#1 Ranking",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO",
    company: "InnovateLabs",
    quote:
      "Exceptional service and outstanding results. They truly understand what it takes to scale a business.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    accent: "from-violet-500 to-purple-400",
    glowColor: "#8b5cf6",
    achievement: "10x Revenue",
  },
];

const stats: StatItem[] = [
  { value: "150+", label: "Happy Clients", icon: Users, trend: "+42%", accent: "from-blue-500 to-cyan-400" },
  { value: "98%", label: "Satisfaction Rate", icon: CheckCircle, trend: "Top 1%", accent: "from-amber-500 to-orange-400" },
  { value: "300%", label: "Average ROI", icon: TrendingUp, trend: "+150%", accent: "from-emerald-500 to-teal-400" },
  { value: "4.95", label: "Client Rating", icon: Star, trend: "5 Stars", accent: "from-violet-500 to-purple-400" },
];

const features = [
  { text: "Dedicated account manager", icon: Users, accent: "from-blue-500 to-cyan-400" },
  { text: "Weekly progress reports", icon: TrendingUp, accent: "from-amber-500 to-orange-400" },
  { text: "24/7 priority support", icon: Heart, accent: "from-emerald-500 to-teal-400" },
  { text: "Strategy-first approach", icon: CheckCircle, accent: "from-violet-500 to-purple-400" },
];

const trustChips = [
  { icon: CheckCircle, label: "100% Satisfaction", accent: "from-emerald-500 to-teal-400" },
  { icon: Zap, label: "Fast Delivery", accent: "from-amber-500 to-orange-400" },
  { icon: Award, label: "Award Winning", accent: "from-blue-500 to-cyan-400" },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target * 100) / 100);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function parseStat(value: string): { num: number; suffix: string; isFloat: boolean } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, isFloat: false };
  return { num: parseFloat(match[1]), suffix: match[2], isFloat: match[1].includes(".") };
}

/** Auto-advance the testimonial carousel, pausing on hover/interaction. */
function useAutoAdvance(length: number, intervalMs: number, paused: boolean, onAdvance: () => void) {
  useEffect(() => {
    if (paused) return;
    const id = setInterval(onAdvance, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs, paused, onAdvance]);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ stat, delay, start }: { stat: StatItem; delay: number; start: boolean }) {
  const { num, suffix, isFloat } = useMemo(() => parseStat(stat.value), [stat.value]);
  const count = useAnimatedCounter(num, 1500, start);
  const display = isFloat ? count.toFixed(2) : Math.floor(count);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative text-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div
        className={`absolute -inset-8 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`}
      />
      <div
        className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center mx-auto mb-2.5 shadow-md group-hover:scale-110 transition-transform duration-300`}
      >
        <stat.icon size={17} className="text-white" />
      </div>
      <p className="relative text-xl sm:text-2xl font-extrabold text-gray-900 tabular-nums">
        {display}
        {suffix}
      </p>
      <p className="relative text-[11px] sm:text-xs text-gray-500 mt-0.5">{stat.label}</p>
      <span
        className={`relative inline-block mt-1.5 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gradient-to-r ${stat.accent} text-white`}
      >
        {stat.trend}
      </span>
    </motion.div>
  );
}

function QuoteCard({
  testimonial,
  direction,
}: {
  testimonial: Testimonial;
  direction: number;
}) {
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
  };

  return (
    <div className="relative">
      {/* Ambient ground glow that recolors per testimonial — plain CSS transition, cheap */}
      <div
        className="absolute -inset-4 rounded-[2rem] blur-2xl"
        style={{
          background: `linear-gradient(135deg, ${testimonial.glowColor}35, transparent 70%)`,
          transition: "background 0.6s ease",
        }}
      />

      <div
        className={`relative bg-gradient-to-br ${testimonial.accent} rounded-3xl p-7 sm:p-8 shadow-2xl overflow-hidden`}
        style={{ transition: "background 0.6s ease" }}
      >
        <Quote className="absolute -top-6 -right-6 w-24 h-24 text-white/10" />

        {/* Rating */}
        <div className="flex gap-1 mb-5 sm:mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={17} className="fill-white text-white" />
          ))}
        </div>

        {/* Quote text — slide transition on change */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={testimonial.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 text-white">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Author */}
        <div className="flex items-center gap-3.5 sm:gap-4 pt-4 border-t border-white/20">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white/20 ring-2 ring-white/30 shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white truncate">{testimonial.name}</p>
            <p className="text-sm text-white/70 truncate">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>

        {/* Achievement badge */}
        <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
          {testimonial.achievement}
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const current = testimonials[activeIndex];

  const goTo = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  };
  const next = () => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useAutoAdvance(testimonials.length, 5000, hovered, next);

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

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden" id="testimonials">
      {/* Background — consistent with Hero / CreativeShowcase, GPU-cheap */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <motion.div
          className="absolute -top-24 -right-24 w-[260px] sm:w-[420px] lg:w-[560px] h-[260px] sm:h-[420px] lg:h-[560px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-2xl will-change-transform"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[220px] sm:w-[340px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-amber-100/30 via-orange-100/15 to-transparent blur-2xl will-change-transform"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
              Client Love
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
            What our
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              clients say about us
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4">
            Real stories from real clients. See why 150+ businesses trust us with their growth.
          </p>
        </motion.div>

        {/* ─── Stats ─── */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.08} start={statsVisible} />
          ))}
        </div>

        {/* ─── Main split layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left — testimonial carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative"
          >
            <QuoteCard testimonial={current} direction={direction} />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                <motion.button
                  onClick={prev}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-violet-600 transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button
                  onClick={next}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-violet-600 transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>

              {/* Dot indicators — layoutId-animated like the hero's service switcher */}
              <div className="flex gap-1.5">
                {testimonials.map((t, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={t.id}
                      onClick={() => goTo(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className="relative h-1.5 rounded-full bg-gray-200 overflow-hidden transition-all duration-300"
                      style={{ width: active ? 28 : 7 }}
                    >
                      {active && (
                        <motion.span
                          layoutId="testimonial-dot-active"
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${current.accent}`}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — features & benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <MessageCircle size={12} className="text-blue-600" />
                  <span className="text-blue-600 font-semibold text-[11px] tracking-widest uppercase">
                    Why Clients Love Us
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  We don&apos;t just deliver — we exceed expectations
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Our clients consistently praise our dedication, creativity, and ability to drive
                  real results.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.accent} flex items-center justify-center shrink-0`}
                    >
                      <feature.icon size={15} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {trustChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${chip.accent} flex items-center justify-center shrink-0`}>
                      <chip.icon size={9} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{chip.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative z-10 mt-2">
                <Link
                  href="/contact"
                  style={{ backgroundColor: "#111827" }}
                  className="group relative w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 font-semibold rounded-xl overflow-hidden shadow-lg shadow-gray-900/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Share Your Story
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>

              {/* Client avatars */}
              <div className="flex items-center justify-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={t.id}
                      whileHover={{ scale: 1.15, zIndex: 10 }}
                      className={`w-7 h-7 rounded-full bg-gradient-to-br ${t.accent} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}
                    >
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">Join 150+ satisfied clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom CTA banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-10 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-56 sm:w-64 h-56 sm:h-64 bg-blue-600/25 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 sm:w-64 h-56 sm:h-64 bg-violet-600/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Join our family of happy clients
              </h3>
              <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
                150+ brands already trust us. Ready to be next?
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all text-sm overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}