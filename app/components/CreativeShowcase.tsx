// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   MessageCircle,
//   Sparkles,
//   Briefcase,
//   TrendingUp,
//   Users,
//   Eye,
//   Zap,
//   Award,
//   // Star,
//   // Play,
//   Clock,
//   Share2,
// } from "lucide-react";

// const creativeContent = [
//   {
//     type: "post" as const,
//     image: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
//     thumbnail: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
//     brand: "Delhi059",
//     likes: "2.4k",
//     comments: "156",
//     views: "",
//     duration: "",
//     link: "https://www.instagram.com/p/DBjCxUbuKge/",
//     category: "Food & Beverage",
//   },
//   {
//     type: "post" as const,
//     thumbnail: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
//     image: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
//     brand: "Local Ride",
//     views: "",
//     duration: "",
//     likes: "3.1k",
//     comments: "203",
//     link: "https://www.instagram.com/p/DSGIHDZgcQm/",
//     category: "Transportation",
//   },
//   {
//     type: "post" as const,
//     image: "/creatives/promaccreatives.png",
//     thumbnail: "/creatives/promaccreatives.png",
//     brand: "Promac Advisory",
//     likes: "1.9k",
//     comments: "124",
//     views: "",
//     duration: "",
//     link: undefined,
//     category: "Real Estate",
//   },
//   {
//     type: "post" as const,
//     thumbnail: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
//     image: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
//     brand: "Astro Nexus",
//     views: "",
//     duration: "",
//     likes: "1.8k",
//     comments: "89",
//     link: "https://www.instagram.com/p/DTSxqv6iNh5/",
//     category: "Astrology",
//   },
//   {
//     type: "post" as const,
//     image: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
//     thumbnail: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
//     brand: "Dee Cee Accessories",
//     likes: "2.2k",
//     comments: "167",
//     views: "",
//     duration: "",
//     link: "https://www.instagram.com/p/DHIHRiZSdrU/",
//     category: "Jewelry",
//   },
//   {
//     type: "post" as const,
//     thumbnail: "/creatives/biryanibar.jpg",
//     image: "/creatives/biryanibar.jpg",
//     brand: "Biryani Bar",
//     views: "",
//     duration: "",
//     likes: "3.5k",
//     comments: "234",
//     link: undefined,
//     category: "Hospitality",
//   },
// ];

// const stats = [
//   { number: "30+", label: "Brands Built", icon: Briefcase, color: "blue" },
//   {
//     number: "10+",
//     label: "Years of Legacy",
//     icon: TrendingUp,
//     color: "yellow",
//   },
//   { number: "500K+", label: "Lives Impacted", icon: Users, color: "blue" },
//   { number: "100%", label: "Passion Driven", icon: Heart, color: "black" },
// ];

// const categories = [
//   "All",
//   "Food & Beverage",
//   "Transportation",
//   "Real Estate",
//   "Jewelry",
//   "Hospitality",
// ];

// export default function CreativeShowcase() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   // const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const filteredContent =
//     selectedCategory === "All"
//       ? creativeContent
//       : creativeContent.filter((item) => item.category === selectedCategory);

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="creative"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Legacy Story Section */}
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
//               OUR JOURNEY
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             A Legacy Reborn,
//             <span className="block text-blue-600 mt-2">A Vision Renewed</span>
//           </h2>

//           <div className="max-w-3xl mx-auto space-y-4 mt-6">
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Every great story has chapters of triumph and transformation. Ours
//               began with a dream—to build brands that don't just exist, but{" "}
//               <span className="font-bold text-black">
//                 inspire, connect, and dominate
//               </span>
//               .
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               After years of building 30+ brands and touching half a million
//               lives, we faced a crossroads. But from that moment of reflection
//               came something more powerful—
//               <span className="font-bold text-blue-600">
//                 a restart fueled by passion, experience, and an unshakeable
//                 commitment to creativity
//               </span>
//               .
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Today, we don't just create content. We craft{" "}
//               <span className="font-bold text-black">legacies</span>. We tell{" "}
//               <span className="font-bold text-black">stories</span>. We build{" "}
//               <span className="font-bold text-black">empires</span>.
//             </p>
//           </div>
//         </motion.div>

//         {/* Stats Counter */}
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
//               whileHover={{ y: -5 }}
//               className="group text-center"
//             >
//               <div
//                 className={`w-12 h-12 rounded-xl ${stat.color === "blue"
//                   ? "bg-blue-600"
//                   : stat.color === "yellow"
//                     ? "bg-yellow-500"
//                     : "bg-black"
//                   } flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <stat.icon
//                   className={`w-5 h-5 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
//                 />
//               </div>
//               <div className="text-3xl md:text-4xl font-bold text-black mb-1">
//                 {stat.number}
//               </div>
//               <div className="text-xs text-gray-500 uppercase tracking-wide">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-2 mb-12"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
//                 ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* Creative Content Grid */}
//         <div className="mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredContent.map((item, idx) => (
//                 <motion.div
//                   key={item.brand}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3, delay: idx * 0.05 }}
//                   onMouseEnter={() => setHoveredCard(idx)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => {
//                     if (item.link) {
//                       window.open(item.link, "_blank", "noopener,noreferrer");
//                     }
//                   }}
//                   className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.brand}
//                     fill
//                     className={`object-cover transition-all duration-700 ${hoveredCard === idx ? "scale-110" : "scale-100"
//                       }`}
//                   />

//                   {/* Gradient Overlay */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${hoveredCard === idx ? "opacity-100" : "opacity-0"
//                       }`}
//                   />

//                   {/* Brand Badge */}
//                   <div className="absolute top-3 left-3">
//                     <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-lg">
//                       {item.brand}
//                     </span>
//                   </div>

//                   {/* Category Badge */}
//                   <div className="absolute top-3 right-3">
//                     <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-lg">
//                       {item.category}
//                     </span>
//                   </div>

//                   {/* Engagement Metrics Overlay */}
//                   <div
//                     className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hoveredCard === idx ? "translate-y-0" : "translate-y-full"
//                       }`}
//                   >
//                     <div className="flex items-center justify-between text-white">
//                       <div className="flex items-center gap-3">
//                         <span className="flex items-center gap-1 text-xs">
//                           <Heart size={12} className="text-red-400" />
//                           {item.likes}
//                         </span>
//                         <span className="flex items-center gap-1 text-xs">
//                           <MessageCircle size={12} />
//                           {item.comments}
//                         </span>
//                       </div>
//                       <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
//                         <Eye size={12} className="text-white" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover Border Effect */}
//                   <div
//                     className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${hoveredCard === idx ? "ring-2 ring-blue-500/50" : ""
//                       }`}
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Trust Badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {[
//             { icon: Zap, label: "10M+ Reach", color: "yellow" },
//             { icon: Award, label: "Award Winning", color: "blue" },
//             { icon: Clock, label: "24/7 Support", color: "black" },
//             { icon: Share2, label: "Viral Campaigns", color: "blue" },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md transition-all"
//             >
//               <item.icon
//                 className={`w-3 h-3 ${item.color === "yellow"
//                   ? "text-yellow-500"
//                   : item.color === "blue"
//                     ? "text-blue-600"
//                     : "text-black"
//                   }`}
//               />
//               <span className="text-xs font-medium text-gray-700">
//                 {item.label}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View More CTA */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Link
//               // href="/projects"
//               href="/portfolio"
//               className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
//             >
//               Explore Our Full Journey
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//           <p className="mt-3 text-gray-400 text-xs">
//             Dive into our visual journey, reels, articles, and influencer
//             campaigns
//           </p>
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-10 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                 Ready to create your success story?
//               </h3>
//               <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
//                 Let's create something extraordinary together
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
//                 >
//                   Start Your Journey
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






// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   MessageCircle,
//   Sparkles,
//   Briefcase,
//   TrendingUp,
//   Users,
//   Eye,
//   Zap,
//   Award,
//   Clock,
//   Share2,
// } from "lucide-react";

// const creativeContent = [
//   {
//     type: "post" as const,
//     image: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
//     thumbnail: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
//     brand: "Delhi059",
//     likes: "2.4k",
//     comments: "156",
//     views: "",
//     duration: "",
//     link: "https://www.instagram.com/p/DBjCxUbuKge/",
//     category: "Food & Beverage",
//   },
//   {
//     type: "post" as const,
//     thumbnail: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
//     image: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
//     brand: "Local Ride",
//     views: "",
//     duration: "",
//     likes: "3.1k",
//     comments: "203",
//     link: "https://www.instagram.com/p/DSGIHDZgcQm/",
//     category: "Transportation",
//   },
//   {
//     type: "post" as const,
//     image: "/creatives/promaccreatives.png",
//     thumbnail: "/creatives/promaccreatives.png",
//     brand: "Promac Advisory",
//     likes: "1.9k",
//     comments: "124",
//     views: "",
//     duration: "",
//     link: undefined,
//     category: "Real Estate",
//   },
//   {
//     type: "post" as const,
//     thumbnail: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
//     image: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
//     brand: "Astro Nexus",
//     views: "",
//     duration: "",
//     likes: "1.8k",
//     comments: "89",
//     link: "https://www.instagram.com/p/DTSxqv6iNh5/",
//     category: "Astrology",
//   },
//   {
//     type: "post" as const,
//     image: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
//     thumbnail: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
//     brand: "Dee Cee Accessories",
//     likes: "2.2k",
//     comments: "167",
//     views: "",
//     duration: "",
//     link: "https://www.instagram.com/p/DHIHRiZSdrU/",
//     category: "Jewelry",
//   },
//   {
//     type: "post" as const,
//     thumbnail: "/creatives/biryanibar.jpg",
//     image: "/creatives/biryanibar.jpg",
//     brand: "Biryani Bar",
//     views: "",
//     duration: "",
//     likes: "3.5k",
//     comments: "234",
//     link: undefined,
//     category: "Hospitality",
//   },
// ];

// const stats = [
//   { number: "30+", label: "Brands Built", icon: Briefcase, color: "blue" },
//   {
//     number: "10+",
//     label: "Years of Legacy",
//     icon: TrendingUp,
//     color: "yellow",
//   },
//   { number: "500K+", label: "Lives Impacted", icon: Users, color: "blue" },
//   { number: "100%", label: "Passion Driven", icon: Heart, color: "black" },
// ];

// const categories = [
//   "All",
//   "Food & Beverage",
//   "Transportation",
//   "Real Estate",
//   "Jewelry",
//   "Hospitality",
// ];

// export default function CreativeShowcase() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const filteredContent =
//     selectedCategory === "All"
//       ? creativeContent
//       : creativeContent.filter((item) => item.category === selectedCategory);

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="creative"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Legacy Story Section */}
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
//               OUR JOURNEY
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             A Legacy Reborn,
//             <span className="block text-blue-600 mt-2">A Vision Renewed</span>
//           </h2>

//           <div className="max-w-3xl mx-auto space-y-4 mt-6">
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Every great story has chapters of triumph and transformation. Ours
//               began with a dream—to build brands that don&apos;t just exist, but{" "}
//               <span className="font-bold text-black">
//                 inspire, connect, and dominate
//               </span>
//               .
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               After years of building 30+ brands and touching half a million
//               lives, we faced a crossroads. But from that moment of reflection
//               came something more powerful—
//               <span className="font-bold text-blue-600">
//                 a restart fueled by passion, experience, and an unshakeable
//                 commitment to creativity
//               </span>
//               .
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Today, we don&apos;t just create content. We craft{" "}
//               <span className="font-bold text-black">legacies</span>. We tell{" "}
//               <span className="font-bold text-black">stories</span>. We build{" "}
//               <span className="font-bold text-black">empires</span>.
//             </p>
//           </div>
//         </motion.div>

//         {/* Stats Counter */}
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
//               whileHover={{ y: -5 }}
//               className="group text-center"
//             >
//               <div
//                 className={`w-12 h-12 rounded-xl ${stat.color === "blue"
//                   ? "bg-blue-600"
//                   : stat.color === "yellow"
//                     ? "bg-yellow-500"
//                     : "bg-black"
//                   } flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <stat.icon
//                   className={`w-5 h-5 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
//                 />
//               </div>
//               <div className="text-3xl md:text-4xl font-bold text-black mb-1">
//                 {stat.number}
//               </div>
//               <div className="text-xs text-gray-500 uppercase tracking-wide">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-2 mb-12"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
//                 ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* Creative Content Grid */}
//         <div className="mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredContent.map((item, idx) => (
//                 <motion.div
//                   key={item.brand}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3, delay: idx * 0.05 }}
//                   onMouseEnter={() => setHoveredCard(idx)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => {
//                     if (item.link) {
//                       window.open(item.link, "_blank", "noopener,noreferrer");
//                     }
//                   }}
//                   className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.brand}
//                     fill
//                     className={`object-cover transition-all duration-700 ${hoveredCard === idx ? "scale-110" : "scale-100"
//                       }`}
//                   />

//                   {/* Gradient Overlay */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${hoveredCard === idx ? "opacity-100" : "opacity-0"
//                       }`}
//                   />

//                   {/* Brand Badge */}
//                   <div className="absolute top-3 left-3">
//                     <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-lg">
//                       {item.brand}
//                     </span>
//                   </div>

//                   {/* Category Badge */}
//                   <div className="absolute top-3 right-3">
//                     <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-lg">
//                       {item.category}
//                     </span>
//                   </div>

//                   {/* Engagement Metrics Overlay */}
//                   <div
//                     className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hoveredCard === idx ? "translate-y-0" : "translate-y-full"
//                       }`}
//                   >
//                     <div className="flex items-center justify-between text-white">
//                       <div className="flex items-center gap-3">
//                         <span className="flex items-center gap-1 text-xs">
//                           <Heart size={12} className="text-red-400" />
//                           {item.likes}
//                         </span>
//                         <span className="flex items-center gap-1 text-xs">
//                           <MessageCircle size={12} />
//                           {item.comments}
//                         </span>
//                       </div>
//                       <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
//                         <Eye size={12} className="text-white" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover Border Effect */}
//                   <div
//                     className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${hoveredCard === idx ? "ring-2 ring-blue-500/50" : ""
//                       }`}
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Trust Badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {[
//             { icon: Zap, label: "10M+ Reach", color: "yellow" },
//             { icon: Award, label: "Award Winning", color: "blue" },
//             { icon: Clock, label: "24/7 Support", color: "black" },
//             { icon: Share2, label: "Viral Campaigns", color: "blue" },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md transition-all"
//             >
//               <item.icon
//                 className={`w-3 h-3 ${item.color === "yellow"
//                   ? "text-yellow-500"
//                   : item.color === "blue"
//                     ? "text-blue-600"
//                     : "text-black"
//                   }`}
//               />
//               <span className="text-xs font-medium text-gray-700">
//                 {item.label}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View More CTA */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Link
//               href="/projects"
//               className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
//             >
//               Explore Our Full Journey
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//           <p className="mt-3 text-gray-400 text-xs">
//             Dive into our visual journey, reels, articles, and influencer
//             campaigns
//           </p>
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-10 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                 Ready to create your success story?
//               </h3>
//               <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
//                 Let&apos;s create something extraordinary together
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
//                 >
//                   Start Your Journey
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


































// "use client";

// import React, { useState, useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   MessageCircle,
//   Sparkles,
//   Briefcase,
//   TrendingUp,
//   Users,
//   Eye,
//   Zap,
//   Award,
//   Clock,
//   Share2,
// } from "lucide-react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface CreativeItem {
//   brand: string;
//   image: string;
//   likes: string;
//   comments: string;
//   link?: string;
//   category: string;
//   accent: string; // tailwind gradient classes, matches hero's service-panel accents
// }

// interface StatItem {
//   number: string;
//   label: string;
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   accent: string;
// }

// // ─── Content ──────────────────────────────────────────────────────────────────

// const creativeContent: CreativeItem[] = [
//   {
//     image: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
//     brand: "Delhi059",
//     likes: "2.4k",
//     comments: "156",
//     link: "https://www.instagram.com/p/DBjCxUbuKge/",
//     category: "Food & Beverage",
//     accent: "from-amber-500 to-orange-400",
//   },
//   {
//     image: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
//     brand: "Local Ride",
//     likes: "3.1k",
//     comments: "203",
//     link: "https://www.instagram.com/p/DSGIHDZgcQm/",
//     category: "Transportation",
//     accent: "from-blue-500 to-cyan-400",
//   },
//   {
//     image: "/creatives/promaccreatives.png",
//     brand: "Promac Advisory",
//     likes: "1.9k",
//     comments: "124",
//     link: undefined,
//     category: "Real Estate",
//     accent: "from-emerald-500 to-teal-400",
//   },
//   {
//     image: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
//     brand: "Astro Nexus",
//     likes: "1.8k",
//     comments: "89",
//     link: "https://www.instagram.com/p/DTSxqv6iNh5/",
//     category: "Astrology",
//     accent: "from-violet-500 to-purple-400",
//   },
//   {
//     image: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
//     brand: "Dee Cee Accessories",
//     likes: "2.2k",
//     comments: "167",
//     link: "https://www.instagram.com/p/DHIHRiZSdrU/",
//     category: "Jewelry",
//     accent: "from-pink-500 to-rose-400",
//   },
//   {
//     image: "/creatives/biryanibar.jpg",
//     brand: "Biryani Bar",
//     likes: "3.5k",
//     comments: "234",
//     link: undefined,
//     category: "Hospitality",
//     accent: "from-amber-500 to-orange-400",
//   },
// ];

// const stats: StatItem[] = [
//   { number: "30+", label: "Brands Built", icon: Briefcase, accent: "from-blue-500 to-cyan-400" },
//   { number: "10+", label: "Years of Legacy", icon: TrendingUp, accent: "from-amber-500 to-orange-400" },
//   { number: "500K+", label: "Lives Impacted", icon: Users, accent: "from-violet-500 to-purple-400" },
//   { number: "100%", label: "Passion Driven", icon: Heart, accent: "from-pink-500 to-rose-400" },
// ];

// const trustBadges = [
//   { icon: Zap, label: "10M+ Reach", accent: "from-amber-500 to-orange-400" },
//   { icon: Award, label: "Award Winning", accent: "from-blue-500 to-cyan-400" },
//   { icon: Clock, label: "24/7 Support", accent: "from-emerald-500 to-teal-400" },
//   { icon: Share2, label: "Viral Campaigns", accent: "from-violet-500 to-purple-400" },
// ];

// const categories = [
//   "All",
//   "Food & Beverage",
//   "Transportation",
//   "Real Estate",
//   "Jewelry",
//   "Hospitality",
//   "Astrology",
// ];

// // ─── Hooks ────────────────────────────────────────────────────────────────────

// function useAnimatedCounter(target: number, duration = 1600, start = false) {
//   const [count, setCount] = useState(0);
//   React.useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     let raf = 0;
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * target));
//       if (progress < 1) raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [target, duration, start]);
//   return count;
// }

// // ─── Sub-components ───────────────────────────────────────────────────────────

// /** Parses "30+", "500K+", "100%" into a number + suffix so it can count up. */
// function parseStat(number: string): { value: number; suffix: string } {
//   const match = number.match(/^([\d.]+)(.*)$/);
//   if (!match) return { value: 0, suffix: number };
//   return { value: parseFloat(match[1]), suffix: match[2] };
// }

// function StatCard({ stat, delay, start }: { stat: StatItem; delay: number; start: boolean }) {
//   const { value, suffix } = useMemo(() => parseStat(stat.number), [stat.number]);
//   const count = useAnimatedCounter(value, 1600, start);
//   const isFloat = stat.number.includes(".");
//   const display = isFloat ? value.toFixed(1) : Math.floor(count);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.5 }}
//       whileHover={{ y: -4 }}
//       className="group relative text-center"
//     >
//       <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-transparent transition-all duration-300 px-4 py-6 overflow-hidden">
//         {/* Hover glow */}
//         <div
//           className={`absolute -inset-8 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`}
//         />
//         <div
//           className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}
//         >
//           <stat.icon size={18} className="text-white" />
//         </div>
//         <div className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
//           {isFloat ? display : count}
//           {suffix}
//         </div>
//         <div className="relative text-[11px] sm:text-xs text-gray-500 uppercase tracking-wide mt-1">
//           {stat.label}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function CategorySwitcher({
//   active,
//   onSelect,
// }: {
//   active: string;
//   onSelect: (c: string) => void;
// }) {
//   return (
//     <div className="flex flex-wrap justify-center gap-2">
//       {categories.map((cat) => {
//         const isActive = active === cat;
//         return (
//           <button
//             key={cat}
//             onClick={() => onSelect(cat)}
//             className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
//             style={{ color: isActive ? "white" : "#4b5563" }}
//           >
//             {isActive && (
//               <motion.span
//                 layoutId="creative-category-pill"
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-600/25"
//                 transition={{ type: "spring", stiffness: 350, damping: 30 }}
//               />
//             )}
//             <span className="relative z-10">{cat}</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// function CreativeCard({ item, index }: { item: CreativeItem; index: number }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 24, scale: 0.96 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => {
//         if (item.link) window.open(item.link, "_blank", "noopener,noreferrer");
//       }}
//       whileHover={{ y: -6 }}
//       className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300"
//     >
//       <Image
//         src={item.image}
//         alt={item.brand}
//         fill
//         className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
//       />

//       {/* Gradient overlay — recolors per-item via CSS, no per-frame cost */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 ${
//           hovered ? "opacity-100" : "opacity-60"
//         }`}
//       />

//       {/* Accent ring on hover */}
//       <div
//         className={`absolute inset-0 rounded-2xl pointer-events-none ring-2 transition-all duration-300 ${
//           hovered ? "ring-white/40" : "ring-transparent"
//         }`}
//       />

//       {/* Brand badge */}
//       <div className="absolute top-3 left-3">
//         <span
//           className={`px-2.5 py-1 bg-gradient-to-r ${item.accent} text-white text-[10px] font-bold rounded-lg shadow-lg`}
//         >
//           {item.brand}
//         </span>
//       </div>

//       {/* Category badge */}
//       <div className="absolute top-3 right-3">
//         <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium rounded-lg">
//           {item.category}
//         </span>
//       </div>

//       {/* Engagement metrics */}
//       <div
//         className={`absolute bottom-0 left-0 right-0 p-3.5 transition-all duration-300 ${
//           hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
//         }`}
//       >
//         <div className="flex items-center justify-between text-white">
//           <div className="flex items-center gap-3">
//             <span className="flex items-center gap-1 text-xs font-medium">
//               <Heart size={13} className="text-rose-400 fill-rose-400" />
//               {item.likes}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-medium">
//               <MessageCircle size={13} />
//               {item.comments}
//             </span>
//           </div>
//           <div
//             className={`w-7 h-7 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-md`}
//           >
//             <Eye size={13} className="text-white" />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Main Section ─────────────────────────────────────────────────────────────

// export default function CreativeShowcase() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [statsVisible, setStatsVisible] = useState(false);
//   const statsRef = React.useRef<HTMLDivElement>(null);

//   React.useEffect(() => {
//     const el = statsRef.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
//       { threshold: 0.3 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   const filteredContent =
//     selectedCategory === "All"
//       ? creativeContent
//       : creativeContent.filter((item) => item.category === selectedCategory);

//   return (
//     <section className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden" id="creative">
//       {/* Background — same restrained, GPU-cheap treatment as the hero */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
//         <motion.div
//           className="absolute -top-24 -right-24 w-[260px] sm:w-[420px] lg:w-[560px] h-[260px] sm:h-[420px] lg:h-[560px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-2xl will-change-transform"
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -left-20 w-[220px] sm:w-[340px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-amber-100/30 via-orange-100/15 to-transparent blur-2xl will-change-transform"
//           animate={{ scale: [1, 1.07, 1] }}
//           transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
//             backgroundSize: "48px 48px",
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
//         {/* ─── Header / Story ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center mb-16 sm:mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6"
//           >
//             <Sparkles size={14} className="text-blue-600" />
//             <span className="text-blue-700 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
//               Our Journey
//             </span>
//           </motion.div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
//             A Legacy Reborn,
//             <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
//               A Vision Renewed
//             </span>
//           </h2>

//           <div className="max-w-2xl mx-auto space-y-4 mt-6">
//             <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
//               Every great story has chapters of triumph and transformation. Ours began with a
//               dream — to build brands that don&apos;t just exist, but{" "}
//               <span className="font-semibold text-gray-900">inspire, connect, and dominate</span>.
//             </p>
//             <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
//               After years of building 30+ brands and touching half a million lives, we faced a
//               crossroads. From that moment of reflection came something more powerful —{" "}
//               <span className="font-semibold text-blue-600">
//                 a restart fueled by passion, experience, and an unshakeable commitment to creativity
//               </span>
//               .
//             </p>
//           </div>
//         </motion.div>

//         {/* ─── Stats ─── */}
//         <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-16 sm:mb-20">
//           {stats.map((stat, i) => (
//             <StatCard key={stat.label} stat={stat} delay={i * 0.08} start={statsVisible} />
//           ))}
//         </div>

//         {/* ─── Category filter ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-10 sm:mb-12"
//         >
//           <CategorySwitcher active={selectedCategory} onSelect={setSelectedCategory} />
//         </motion.div>

//         {/* ─── Creative grid ─── */}
//         <div className="mb-14 sm:mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredContent.map((item, idx) => (
//                 <CreativeCard key={item.brand} item={item} index={idx} />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* ─── Trust badges ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-14 sm:mb-16"
//         >
//           {trustBadges.map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all"
//             >
//               <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center shrink-0`}>
//                 <item.icon size={9} className="text-white" />
//               </div>
//               <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{item.label}</span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ─── View more CTA ─── */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="inline-block">
//             <Link
//               href="/projects"
//               className="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-gray-900/20"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Our Full Journey
//                 <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </Link>
//           </motion.div>
//           <p className="mt-3 text-gray-400 text-xs">
//             Dive into our visual journey, reels, articles, and influencer campaigns
//           </p>
//         </motion.div>

//         {/* ─── CTA banner ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, duration: 0.55 }}
//           className="mt-16 sm:mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-10 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-56 sm:w-64 h-56 sm:h-64 bg-blue-600/25 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-56 sm:w-64 h-56 sm:h-64 bg-violet-600/20 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
//                 Ready to create your success story?
//               </h3>
//               <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
//                 Let&apos;s create something extraordinary together
//               </p>
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
//                 <Link
//                   href="/contact"
//                   className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all text-sm overflow-hidden group"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Start Your Journey
//                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
//                   </span>
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

// import React, { useState, useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   MessageCircle,
//   Sparkles,
//   Briefcase,
//   TrendingUp,
//   Users,
//   Eye,
//   Zap,
//   Award,
//   Clock,
//   Share2,
// } from "lucide-react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface CreativeItem {
//   brand: string;
//   image: string;
//   likes: string;
//   comments: string;
//   link?: string;
//   category: string;
//   accent: string; // tailwind gradient classes, matches hero's service-panel accents
// }

// interface StatItem {
//   number: string;
//   label: string;
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   accent: string;
// }

// // ─── Content ──────────────────────────────────────────────────────────────────

// const creativeContent: CreativeItem[] = [
//   {
//     image: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
//     brand: "Delhi059",
//     likes: "2.4k",
//     comments: "156",
//     link: "https://www.instagram.com/p/DBjCxUbuKge/",
//     category: "Food & Beverage",
//     accent: "from-amber-500 to-orange-400",
//   },
//   {
//     image: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
//     brand: "Local Ride",
//     likes: "3.1k",
//     comments: "203",
//     link: "https://www.instagram.com/p/DSGIHDZgcQm/",
//     category: "Transportation",
//     accent: "from-blue-500 to-cyan-400",
//   },
//   {
//     image: "/creatives/promaccreatives.png",
//     brand: "Promac Advisory",
//     likes: "1.9k",
//     comments: "124",
//     link: undefined,
//     category: "Real Estate",
//     accent: "from-emerald-500 to-teal-400",
//   },
//   {
//     image: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
//     brand: "Astro Nexus",
//     likes: "1.8k",
//     comments: "89",
//     link: "https://www.instagram.com/p/DTSxqv6iNh5/",
//     category: "Astrology",
//     accent: "from-violet-500 to-purple-400",
//   },
//   {
//     image: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
//     brand: "Dee Cee Accessories",
//     likes: "2.2k",
//     comments: "167",
//     link: "https://www.instagram.com/p/DHIHRiZSdrU/",
//     category: "Jewelry",
//     accent: "from-pink-500 to-rose-400",
//   },
//   {
//     image: "/creatives/biryanibar.jpg",
//     brand: "Biryani Bar",
//     likes: "3.5k",
//     comments: "234",
//     link: undefined,
//     category: "Hospitality",
//     accent: "from-amber-500 to-orange-400",
//   },
// ];

// const stats: StatItem[] = [
//   { number: "30+", label: "Brands Built", icon: Briefcase, accent: "from-blue-500 to-cyan-400" },
//   { number: "10+", label: "Years of Legacy", icon: TrendingUp, accent: "from-amber-500 to-orange-400" },
//   { number: "500K+", label: "Lives Impacted", icon: Users, accent: "from-violet-500 to-purple-400" },
//   { number: "100%", label: "Passion Driven", icon: Heart, accent: "from-pink-500 to-rose-400" },
// ];

// const trustBadges = [
//   { icon: Zap, label: "10M+ Reach", accent: "from-amber-500 to-orange-400" },
//   { icon: Award, label: "Award Winning", accent: "from-blue-500 to-cyan-400" },
//   { icon: Clock, label: "24/7 Support", accent: "from-emerald-500 to-teal-400" },
//   { icon: Share2, label: "Viral Campaigns", accent: "from-violet-500 to-purple-400" },
// ];

// const categories = [
//   "All",
//   "Food & Beverage",
//   "Transportation",
//   "Real Estate",
//   "Jewelry",
//   "Hospitality",
//   "Astrology",
// ];

// // ─── Hooks ────────────────────────────────────────────────────────────────────

// function useAnimatedCounter(target: number, duration = 1600, start = false) {
//   const [count, setCount] = useState(0);
//   React.useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     let raf = 0;
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * target));
//       if (progress < 1) raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [target, duration, start]);
//   return count;
// }

// // ─── Sub-components ───────────────────────────────────────────────────────────

// /** Parses "30+", "500K+", "100%" into a number + suffix so it can count up. */
// function parseStat(number: string): { value: number; suffix: string } {
//   const match = number.match(/^([\d.]+)(.*)$/);
//   if (!match) return { value: 0, suffix: number };
//   return { value: parseFloat(match[1]), suffix: match[2] };
// }

// function StatCard({ stat, delay, start }: { stat: StatItem; delay: number; start: boolean }) {
//   const { value, suffix } = useMemo(() => parseStat(stat.number), [stat.number]);
//   const count = useAnimatedCounter(value, 1600, start);
//   const isFloat = stat.number.includes(".");
//   const display = isFloat ? value.toFixed(1) : Math.floor(count);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.5 }}
//       whileHover={{ y: -4 }}
//       className="group relative text-center"
//     >
//       <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-transparent transition-all duration-300 px-4 py-6 overflow-hidden">
//         {/* Hover glow */}
//         <div
//           className={`absolute -inset-8 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`}
//         />
//         <div
//           className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}
//         >
//           <stat.icon size={18} className="text-white" />
//         </div>
//         <div className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
//           {isFloat ? display : count}
//           {suffix}
//         </div>
//         <div className="relative text-[11px] sm:text-xs text-gray-500 uppercase tracking-wide mt-1">
//           {stat.label}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function CategorySwitcher({
//   active,
//   onSelect,
// }: {
//   active: string;
//   onSelect: (c: string) => void;
// }) {
//   return (
//     <div className="flex flex-wrap justify-center gap-2">
//       {categories.map((cat) => {
//         const isActive = active === cat;
//         return (
//           <button
//             key={cat}
//             onClick={() => onSelect(cat)}
//             className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
//             style={{ color: isActive ? "white" : "#4b5563" }}
//           >
//             {isActive && (
//               <motion.span
//                 layoutId="creative-category-pill"
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-600/25"
//                 transition={{ type: "spring", stiffness: 350, damping: 30 }}
//               />
//             )}
//             <span className="relative z-10">{cat}</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// function CreativeCard({ item, index }: { item: CreativeItem; index: number }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 24, scale: 0.96 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => {
//         if (item.link) window.open(item.link, "_blank", "noopener,noreferrer");
//       }}
//       whileHover={{ y: -6 }}
//       className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300"
//     >
//       <Image
//         src={item.image}
//         alt={item.brand}
//         fill
//         className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
//       />

//       {/* Gradient overlay — recolors per-item via CSS, no per-frame cost */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 ${
//           hovered ? "opacity-100" : "opacity-60"
//         }`}
//       />

//       {/* Accent ring on hover */}
//       <div
//         className={`absolute inset-0 rounded-2xl pointer-events-none ring-2 transition-all duration-300 ${
//           hovered ? "ring-white/40" : "ring-transparent"
//         }`}
//       />

//       {/* Brand badge */}
//       <div className="absolute top-3 left-3">
//         <span
//           className={`px-2.5 py-1 bg-gradient-to-r ${item.accent} text-white text-[10px] font-bold rounded-lg shadow-lg`}
//         >
//           {item.brand}
//         </span>
//       </div>

//       {/* Category badge */}
//       <div className="absolute top-3 right-3">
//         <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium rounded-lg">
//           {item.category}
//         </span>
//       </div>

//       {/* Engagement metrics */}
//       <div
//         className={`absolute bottom-0 left-0 right-0 p-3.5 transition-all duration-300 ${
//           hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
//         }`}
//       >
//         <div className="flex items-center justify-between text-white">
//           <div className="flex items-center gap-3">
//             <span className="flex items-center gap-1 text-xs font-medium">
//               <Heart size={13} className="text-rose-400 fill-rose-400" />
//               {item.likes}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-medium">
//               <MessageCircle size={13} />
//               {item.comments}
//             </span>
//           </div>
//           <div
//             className={`w-7 h-7 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-md`}
//           >
//             <Eye size={13} className="text-white" />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Main Section ─────────────────────────────────────────────────────────────

// export default function CreativeShowcase() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [statsVisible, setStatsVisible] = useState(false);
//   const statsRef = React.useRef<HTMLDivElement>(null);

//   React.useEffect(() => {
//     const el = statsRef.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
//       { threshold: 0.3 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   const filteredContent =
//     selectedCategory === "All"
//       ? creativeContent
//       : creativeContent.filter((item) => item.category === selectedCategory);

//   return (
//     <section className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden" id="creative">
//       {/* Background — same restrained, GPU-cheap treatment as the hero */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
//         <motion.div
//           className="absolute -top-24 -right-24 w-[260px] sm:w-[420px] lg:w-[560px] h-[260px] sm:h-[420px] lg:h-[560px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-2xl will-change-transform"
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -left-20 w-[220px] sm:w-[340px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-amber-100/30 via-orange-100/15 to-transparent blur-2xl will-change-transform"
//           animate={{ scale: [1, 1.07, 1] }}
//           transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
//             backgroundSize: "48px 48px",
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
//         {/* ─── Header / Story ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center mb-16 sm:mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6"
//           >
//             <Sparkles size={14} className="text-blue-600" />
//             <span className="text-blue-700 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
//               Our Journey
//             </span>
//           </motion.div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
//             A Legacy Reborn,
//             <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
//               A Vision Renewed
//             </span>
//           </h2>

//           <div className="max-w-2xl mx-auto space-y-4 mt-6">
//             <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
//               Every great story has chapters of triumph and transformation. Ours began with a
//               dream — to build brands that don&apos;t just exist, but{" "}
//               <span className="font-semibold text-gray-900">inspire, connect, and dominate</span>.
//             </p>
//             <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
//               After years of building 30+ brands and touching half a million lives, we faced a
//               crossroads. From that moment of reflection came something more powerful —{" "}
//               <span className="font-semibold text-blue-600">
//                 a restart fueled by passion, experience, and an unshakeable commitment to creativity
//               </span>
//               .
//             </p>
//           </div>
//         </motion.div>

//         {/* ─── Stats ─── */}
//         <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-16 sm:mb-20">
//           {stats.map((stat, i) => (
//             <StatCard key={stat.label} stat={stat} delay={i * 0.08} start={statsVisible} />
//           ))}
//         </div>

//         {/* ─── Category filter ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-10 sm:mb-12"
//         >
//           <CategorySwitcher active={selectedCategory} onSelect={setSelectedCategory} />
//         </motion.div>

//         {/* ─── Creative grid ─── */}
//         <div className="mb-14 sm:mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredContent.map((item, idx) => (
//                 <CreativeCard key={item.brand} item={item} index={idx} />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* ─── Trust badges ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-14 sm:mb-16"
//         >
//           {trustBadges.map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all"
//             >
//               <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center shrink-0`}>
//                 <item.icon size={9} className="text-white" />
//               </div>
//               <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{item.label}</span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ─── View more CTA ─── */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-20 inline-block">
//             <Link
//               href="/projects"
//               style={{ backgroundColor: "#111827" }}
//               className="group relative z-20 inline-flex items-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-gray-900/20"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Our Full Journey
//                 <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </Link>
//           </motion.div>
//           <p className="mt-3 text-gray-400 text-xs">
//             Dive into our visual journey, reels, articles, and influencer campaigns
//           </p>
//         </motion.div>

//         {/* ─── CTA banner ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, duration: 0.55 }}
//           className="mt-16 sm:mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-10 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-56 sm:w-64 h-56 sm:h-64 bg-blue-600/25 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-56 sm:w-64 h-56 sm:h-64 bg-violet-600/20 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
//                 Ready to create your success story?
//               </h3>
//               <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
//                 Let&apos;s create something extraordinary together
//               </p>
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
//                 <Link
//                   href="/contact"
//                   className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all text-sm overflow-hidden group"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Start Your Journey
//                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
//                   </span>
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

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Briefcase,
  TrendingUp,
  Users,
  Zap,
  Award,
  Clock,
  Share2,
  ExternalLink,
  X,
  Layers,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────
// NOTE: titles/brands are placeholders since Instagram post content can't be
// read from the link alone — swap in real names/categories when available.

interface Creative {
  id: number;
  title: string;
  brand: string;
  category: string;
  image: string;
  link: string;
  accent: string;
}

const RAW_LINKS = [
  "https://www.instagram.com/p/DZe1D09gEr_/?img_index=1",
  "https://www.instagram.com/p/DYl0c0Gge_1/",
  "https://www.instagram.com/p/DaP4s5xkQMR/?img_index=1",
  "https://www.instagram.com/p/DVxYNGCk19P/",
  "https://www.instagram.com/p/DSl92zoEgwL/?img_index=1",
  "https://www.instagram.com/p/CbKFLb_uP7Q/",
  "https://www.instagram.com/p/DZJyVFck26S/?img_index=1",
  "https://www.instagram.com/p/DaNkUZME3Au/",
  "https://www.instagram.com/p/DY6lqoqjOQm/?img_index=1",
];

const toMediaUrl = (link: string) => {
  const base = link.split("?")[0].replace(/\/$/, "");
  return `${base}/media/?size=l`;
};

const CATEGORY_ACCENT: Record<string, string> = {
  "Social Media": "from-pink-500 to-rose-400",
  "Digital Ads": "from-amber-500 to-orange-400",
  Branding: "from-violet-500 to-purple-400",
  Print: "from-emerald-500 to-teal-400",
  Events: "from-blue-500 to-cyan-400",
};

const creativeContent: Creative[] = [
  { id: 1, title: "Campaign Spotlight", brand: "Client Project", category: "Branding", image: toMediaUrl(RAW_LINKS[0]), link: RAW_LINKS[0], accent: CATEGORY_ACCENT.Branding },
  { id: 2, title: "Social Feature Post", brand: "Client Project", category: "Social Media", image: toMediaUrl(RAW_LINKS[1]), link: RAW_LINKS[1], accent: CATEGORY_ACCENT["Social Media"] },
  { id: 3, title: "Ad Creative Set", brand: "Client Project", category: "Digital Ads", image: toMediaUrl(RAW_LINKS[2]), link: RAW_LINKS[2], accent: CATEGORY_ACCENT["Digital Ads"] },
  { id: 4, title: "Print Series", brand: "Client Project", category: "Print", image: toMediaUrl(RAW_LINKS[3]), link: RAW_LINKS[3], accent: CATEGORY_ACCENT.Print },
  { id: 5, title: "Event Announcement", brand: "Client Project", category: "Events", image: toMediaUrl(RAW_LINKS[4]), link: RAW_LINKS[4], accent: CATEGORY_ACCENT.Events },
  { id: 6, title: "Feed Highlight", brand: "Client Project", category: "Social Media", image: toMediaUrl(RAW_LINKS[5]), link: RAW_LINKS[5], accent: CATEGORY_ACCENT["Social Media"] },
  { id: 7, title: "Identity Refresh", brand: "Client Project", category: "Branding", image: toMediaUrl(RAW_LINKS[6]), link: RAW_LINKS[6], accent: CATEGORY_ACCENT.Branding },
  { id: 8, title: "Performance Creative", brand: "Client Project", category: "Digital Ads", image: toMediaUrl(RAW_LINKS[7]), link: RAW_LINKS[7], accent: CATEGORY_ACCENT["Digital Ads"] },
  { id: 9, title: "Story Series", brand: "Client Project", category: "Social Media", image: toMediaUrl(RAW_LINKS[8]), link: RAW_LINKS[8], accent: CATEGORY_ACCENT["Social Media"] },
];

const CATEGORIES = ["All", "Social Media", "Digital Ads", "Branding", "Print", "Events"];

interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

const stats: StatItem[] = [
  { number: "30+", label: "Brands Built", icon: Briefcase, accent: "from-blue-500 to-cyan-400" },
  { number: "10+", label: "Years of Legacy", icon: TrendingUp, accent: "from-amber-500 to-orange-400" },
  { number: "500K+", label: "Lives Impacted", icon: Users, accent: "from-violet-500 to-purple-400" },
  { number: "100%", label: "Passion Driven", icon: Heart, accent: "from-pink-500 to-rose-400" },
];

const trustBadges = [
  { icon: Zap, label: "10M+ Reach", accent: "from-amber-500 to-orange-400" },
  { icon: Award, label: "Award Winning", accent: "from-blue-500 to-cyan-400" },
  { icon: Clock, label: "24/7 Support", accent: "from-emerald-500 to-teal-400" },
  { icon: Share2, label: "Viral Campaigns", accent: "from-violet-500 to-purple-400" },
];

// ─── Counter hook ─────────────────────────────────────────────────────────────

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
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function parseStat(number: string): { value: number; suffix: string } {
  const match = number.match(/^([\d.]+)(.*)$/);
  if (!match) return { value: 0, suffix: number };
  return { value: parseFloat(match[1]), suffix: match[2] };
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ stat, delay, start }: { stat: StatItem; delay: number; start: boolean }) {
  const { value, suffix } = useMemo(() => parseStat(stat.number), [stat.number]);
  const count = useAnimatedCounter(value, 1600, start);
  const isFloat = stat.number.includes(".");
  const display = isFloat ? value.toFixed(1) : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative text-center"
    >
      <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-transparent transition-all duration-300 px-3 sm:px-4 py-5 sm:py-6 overflow-hidden">
        <div className={`absolute -inset-8 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`} />
        <div className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center mx-auto mb-2.5 sm:mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <stat.icon size={17} className="text-white" />
        </div>
        <div className="relative text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
          {display}
          {suffix}
        </div>
        <div className="relative text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mt-1">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Category switcher ──────────────────────────────────────────────────────

function CategorySwitcher({ active, onSelect }: { active: string; onSelect: (c: string) => void }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shrink-0"
            style={{ color: isActive ? "white" : "#4b5563" }}
          >
            {isActive && (
              <motion.span
                layoutId="creative-cat-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-600/25"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── 3D tilt creative card ────────────────────────────────────────────────────
// Tilt is desktop-only (pointer-fine media query via CSS group) so mobile
// avoids the extra transform math and just gets a clean tap target.

function CreativeCard({
  item,
  index,
  onOpen,
}: {
  item: Creative;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
      className="group"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpen}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative aspect-[3/4] rounded-2xl cursor-pointer"
      >
        <div
          className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 hidden sm:block`}
          style={{ transform: "translateZ(-40px)" }}
        />

        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 border border-white/60 shadow-md group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-shadow duration-500">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Category badge */}
          <div
            className={`absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wide shadow-md`}
            style={{ transform: "translateZ(30px)" }}
          >
            {item.category}
          </div>

          {/* Instagram badge */}
          <div
            className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transform: "translateZ(30px)" }}
          >
            <ExternalLink size={11} className="text-gray-700" />
          </div>

          {/* Info panel */}
          <div
            className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 sm:group-hover:translate-y-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
            style={{ transform: "translateZ(30px)" }}
          >
            <p className="text-white/60 text-[9px] font-semibold uppercase tracking-widest mb-0.5">
              {item.brand}
            </p>
            <h3 className="text-white font-bold text-xs sm:text-sm leading-snug">{item.title}</h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

function CreativeLightbox({ item, onClose }: { item: Creative; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 backdrop-blur-md p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors z-10"
      >
        <X size={20} />
      </button>

      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 12 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] rounded-3xl overflow-hidden bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-visible"
      >
        <div className="relative aspect-[3/4] sm:aspect-auto sm:h-auto bg-gray-100">
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
        </div>

        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <span className={`inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-[11px] font-bold uppercase tracking-wide mb-4`}>
            <Sparkles size={11} />
            {item.category}
          </span>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{item.brand}</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-6">{item.title}</h3>

          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-2 bg-gray-900 text-white font-semibold text-sm px-6 py-3.5 rounded-xl overflow-hidden group w-fit shadow-lg shadow-gray-900/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                View on Instagram
                <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CreativeShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<Creative | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredContent = useMemo(
    () =>
      selectedCategory === "All"
        ? creativeContent
        : creativeContent.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden" id="creative">
      {/* Background — restrained, GPU-cheap */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <motion.div
          className="absolute -top-24 -right-24 w-[220px] sm:w-[420px] lg:w-[560px] h-[220px] sm:h-[420px] lg:h-[560px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-2xl will-change-transform"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[180px] sm:w-[340px] lg:w-[420px] h-[180px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-amber-100/30 via-orange-100/15 to-transparent blur-2xl will-change-transform"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-5 sm:mb-6"
          >
            <Sparkles size={13} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-[10px] sm:text-xs tracking-widest uppercase">
              Our Journey
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
            A Legacy Reborn,
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              A Vision Renewed
            </span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 mt-5 sm:mt-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
              Every great story has chapters of triumph and transformation. Ours began with a
              dream — to build brands that don't just exist, but{" "}
              <span className="font-semibold text-gray-900">inspire, connect, and dominate</span>.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
              After years of building 30+ brands and touching half a million lives, we faced a
              crossroads. From that moment of reflection came something more powerful —{" "}
              <span className="font-semibold text-blue-600">
                a restart fueled by passion, experience, and an unshakeable commitment to creativity
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-5 mb-12 sm:mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.08} start={statsVisible} />
          ))}
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <CategorySwitcher active={selectedCategory} onSelect={setSelectedCategory} />
        </motion.div>

        {/* Creative grid */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredContent.map((item, idx) => (
                <CreativeCard key={item.id} item={item} index={idx} onOpen={() => setLightboxItem(item)} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
        >
          {trustBadges.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center shrink-0`}>
                <item.icon size={8} className="text-white" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-gray-700 whitespace-nowrap">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* View more CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-20 inline-block">
            <Link
              href="/projects"
              style={{ backgroundColor: "#111827" }}
              className="group relative z-20 inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-white font-semibold text-sm rounded-xl overflow-hidden shadow-lg shadow-gray-900/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Full Journey
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
          <p className="mt-3 text-gray-400 text-xs px-4">
            Dive into our visual journey, reels, articles, and influencer campaigns
          </p>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-14 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-7 sm:p-10 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-600/25 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-violet-600/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                Ready to create your success story?
              </h3>
              <p className="text-gray-300 mb-5 max-w-md mx-auto text-xs sm:text-sm">
                Let's create something extraordinary together
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all text-sm overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxItem && <CreativeLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
      </AnimatePresence>
    </section>
  );
}