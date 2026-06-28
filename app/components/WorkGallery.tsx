// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Briefcase,
// //   TrendingUp,
// //   Award,
// //   ArrowRight,
// //   Sparkles,
// //   Zap,
// //   Star,
// //   Eye,
// //   BarChart3,
// //   Shield,
// //   Rocket,
// //   Globe,
// //   CheckCircle,
// //   MapPin,
// //   Clock,
// //   Heart,
// //   Users,
// //   DollarSign,
// // } from "lucide-react";

// // const workItems = [
// //     {
// //     id: "mentorleap",
// //     title: "MentorLeap",
// //     category: "EdTech",
// //     location: "India",
// //     description:
// //       "Transforming professionals into confident communicators and strategic leaders through AI-powered mentorship and structured learning programs.",
// //     image: "/Feature_logos/mentorleep.png",
// //     tags: ["EdTech", "Featured"],
// //     result: "10k+ Professionals",
// //     growth: "400%",
// //     featured: true,
// //   },
// //   {
// //     id: "delhi059",
// //     title: "Delhi059",
// //     category: "Restaurant",
// //     location: "Canada",
// //     description:
// //       "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
// //     image: "/delhi059-logo.jpg",
// //     tags: ["Hospitality", "Featured"],
// //     result: "650+ Reviews",
// //     growth: "500%",
// //     featured: true,
// //   },
// //   {
// //     id: "local-ride",
// //     title: "Local Ride",
// //     category: "Transportation",
// //     location: "Canada",
// //     description:
// //       "Engineered from the ground up into a thriving Canadian rideshare powerhouse.",
// //     image: "/Feature_logos/localride.jpg",
// //     tags: ["App Development", "Featured"],
// //     result: "100k+ Rides",
// //     growth: "300%",
// //     featured: true,
// //   },
// //   {
// //     id: "bg-foods",
// //     title: "BG Foods",
// //     category: "E-commerce",
// //     location: "Canada/USA",
// //     description:
// //       "Building a thriving food e-commerce platform across North America.",
// //     image: "/Feature_logos/bgfoods.jpeg",
// //     tags: ["E-commerce", "Featured"],
// //     result: "50k+ Orders",
// //     growth: "1000%",
// //     featured: true,
// //   },
// //   {
// //     id: "dee-cee-accessories",
// //     title: "Dee Cee Accessories",
// //     category: "Jewelry",
// //     location: "India",
// //     description:
// //       "Digital setup from scratch. Products photography, SEO based listings.",
// //     image: "/Feature_logos/deecee.jpg",
// //     tags: ["E-commerce"],
// //     result: "10x Sales",
// //     growth: "900%",
// //     featured: false,
// //   },
// //   {
// //     id: "cabtale",
// //     title: "CabTale",
// //     category: "Transportation",
// //     location: "India",
// //     description:
// //       "Building the future of urban mobility with seamless booking experiences.",
// //     image: "/Feature_logos/cabtale.jpg",
// //     tags: ["Mobility", "App Development"],
// //     result: "1M+ Downloads",
// //     growth: "800%",
// //     featured: false,
// //   },
// //   {
// //     id: "last-mile-care",
// //     title: "Last Mile Care",
// //     category: "NGO",
// //     location: "India",
// //     description: "Supporting communities with compassionate care.",
// //     // image: "https://www.marktaleworld.com/clients/lastmilecare.png",
// //     image: "/Feature_logos/lastmilecare.jpeg",

// //     tags: ["Non-profit"],
// //     result: "50k+ Reached",
// //     growth: "200%",
// //     featured: false,
// //   },
// // ];
// // const categories = [
// //   "All",
// //   "Featured",
// //   "EdTech",        // ← add this
// //   "Hospitality",
// //   "Transportation",
// //   "E-commerce",
// //   "Non-profit",
// // ];
// // export default function WorkGallery() {
// //   const [filter, setFilter] = useState("All");
// //   const [activeCard, setActiveCard] = useState<string | null>(null);
// //   const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

// //   const filteredItems =
// //     filter === "All"
// //       ? workItems
// //       : filter === "Featured"
// //         ? workItems.filter((item) => item.featured)
// //         : workItems.filter((item) => item.tags.includes(filter));

// //   const stats = [
// //     {
// //       value: "150+",
// //       label: "Brands Scaled",
// //       icon: Briefcase,
// //       change: "+42%",
// //       color: "blue",
// //     },
// //     {
// //       value: "200%",
// //       label: "Avg. Growth",
// //       icon: TrendingUp,
// //       change: "+15%",
// //       color: "yellow",
// //     },
// //     {
// //       value: "4.95",
// //       label: "Client Rating",
// //       icon: Star,
// //       change: "5★",
// //       color: "blue",
// //     },
// //     {
// //       value: "98%",
// //       label: "Retention Rate",
// //       icon: Heart,
// //       change: "+8%",
// //       color: "yellow",
// //     },
// //   ];

// //   return (
// //     <section
// //       className="relative py-24 lg:py-32 bg-white overflow-hidden"
// //       id="work"
// //     >
// //       {/* Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
// //         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
// //         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl" />
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl" />
// //       </div>

// //       <div className="container mx-auto px-6 max-w-7xl relative z-10">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-20"
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
// //           >
// //             <Sparkles className="w-4 h-4 text-blue-600" />
// //             <span className="text-blue-700 font-semibold text-sm tracking-wide">
// //               OUR WORK
// //             </span>
// //           </motion.div>

// //           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
// //             Digital empires
// //             <span className="block text-blue-600 mt-2">built to last.</span>
// //           </h2>

// //           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
// //             From concept to category leader — helping 150+ brands achieve
// //             unprecedented growth across industries.
// //           </p>
// //         </motion.div>

// //         {/* Stats Row */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.1, duration: 0.5 }}
// //           className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28"
// //         >
// //           {stats.map((stat, idx) => (
// //             <motion.div
// //               key={idx}
// //               whileHover={{ y: -8, scale: 1.02 }}
// //               className="group"
// //             >
// //               <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
// //                 {/* Animated Border on Hover */}
// //                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-transparent transition-all duration-500" />

// //                 <div
// //                   className={`w-12 h-12 rounded-xl ${
// //                     stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
// //                   } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
// //                 >
// //                   <stat.icon
// //                     className={`w-6 h-6 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
// //                   />
// //                 </div>
// //                 <div className="flex items-baseline gap-2">
// //                   <p className="text-3xl font-bold text-black">{stat.value}</p>
// //                   <span
// //                     className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
// //                       stat.color === "blue"
// //                         ? "bg-blue-100 text-blue-700"
// //                         : "bg-yellow-100 text-yellow-700"
// //                     }`}
// //                   >
// //                     {stat.change}
// //                   </span>
// //                 </div>
// //                 <p className="text-gray-500 text-sm mt-1">{stat.label}</p>

// //                 {/* Decorative Line */}
// //                 <div
// //                   className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
// //                     stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
// //                   }`}
// //                 />
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Filter Buttons */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="flex flex-wrap justify-center gap-3 mb-16"
// //         >
// //           {categories.map((cat) => (
// //             <motion.button
// //               key={cat}
// //               onClick={() => setFilter(cat)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
// //                 filter === cat
// //                   ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
// //                   : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
// //               }`}
// //             >
// //               {cat}
// //             </motion.button>
// //           ))}
// //         </motion.div>

// //         {/* Projects Grid - Premium Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           <AnimatePresence mode="popLayout">
// //             {filteredItems.map((item, index) => (
// //               <motion.div
// //                 key={item.id}
// //                 layout
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -50 }}
// //                 transition={{ duration: 0.5, delay: index * 0.05 }}
// //                 onMouseEnter={() => setActiveCard(item.id)}
// //                 onMouseLeave={() => setActiveCard(null)}
// //               >
// //                 <div className="block h-full group">
// //                   <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
// //                     {/* Image Container with Parallax Effect */}
// //                     <div className="relative h-64 overflow-hidden bg-gray-100">
// //                       <motion.div
// //                         className="w-full h-full"
// //                         animate={{
// //                           scale: activeCard === item.id ? 1.1 : 1,
// //                         }}
// //                         transition={{ duration: 0.6 }}
// //                       >
// //                         <Image
// //                           src={item.image}
// //                           alt={item.title}
// //                           fill
// //                           className="object-cover"
// //                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// //                           onLoad={() =>
// //                             setImageLoaded((prev) => ({
// //                               ...prev,
// //                               [item.id]: true,
// //                             }))
// //                           }
// //                         />
// //                       </motion.div>

// //                       {/* Gradient Overlay */}
// //                       <motion.div
// //                         className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
// //                         animate={{
// //                           opacity: activeCard === item.id ? 1 : 0.6,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                       />

// //                       {/* Category Badge */}
// //                       <motion.div
// //                         className="absolute top-4 left-4"
// //                         initial={{ x: -20, opacity: 0 }}
// //                         animate={{ x: 0, opacity: 1 }}
// //                         transition={{ delay: 0.1 }}
// //                       >
// //                         <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
// //                           {item.category}
// //                         </span>
// //                       </motion.div>

// //                       {/* Featured Badge */}
// //                       {item.featured && (
// //                         <motion.div
// //                           className="absolute top-4 right-4"
// //                           initial={{ x: 20, opacity: 0 }}
// //                           animate={{ x: 0, opacity: 1 }}
// //                           transition={{ delay: 0.15 }}
// //                         >
// //                           <div className="px-3 py-1.5 bg-yellow-500 text-black text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
// //                             <Zap className="w-3 h-3" />
// //                             Featured
// //                           </div>
// //                         </motion.div>
// //                       )}

// //                       {/* Location Badge */}
// //                       <motion.div
// //                         className="absolute bottom-4 left-4"
// //                         initial={{ y: 20, opacity: 0 }}
// //                         animate={{ y: 0, opacity: 1 }}
// //                         transition={{ delay: 0.2 }}
// //                       >
// //                         <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-1">
// //                           <MapPin className="w-3 h-3 text-white/80" />
// //                           <span className="text-white/80 text-xs font-medium">
// //                             {item.location}
// //                           </span>
// //                         </div>
// //                       </motion.div>

// //                       {/* Quick View Overlay with Slide Up Effect */}
// //                       <motion.div
// //                         className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
// //                         initial={{ opacity: 0 }}
// //                         animate={{
// //                           opacity: activeCard === item.id ? 1 : 0,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         <motion.div
// //                           className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-2xl"
// //                           initial={{ y: 20, opacity: 0 }}
// //                           animate={{
// //                             y: activeCard === item.id ? 0 : 20,
// //                             opacity: activeCard === item.id ? 1 : 0,
// //                           }}
// //                           transition={{ duration: 0.3, delay: 0.1 }}
// //                         >
// //                           <Eye className="w-4 h-4 text-blue-600" />
// //                           <span className="text-sm font-semibold text-blue-600">
// //                             Quick View
// //                           </span>
// //                         </motion.div>
// //                       </motion.div>
// //                     </div>

// //                     {/* Content Section */}
// //                     <div className="p-6">
// //                       <div className="flex items-start justify-between gap-3 mb-3">
// //                         <div>
// //                           <motion.h3
// //                             className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300"
// //                             animate={{
// //                               x: activeCard === item.id ? 5 : 0,
// //                             }}
// //                           >
// //                             {item.title}
// //                           </motion.h3>
// //                           <div className="flex items-center gap-2 text-xs text-gray-400">
// //                             <span>{item.category}</span>
// //                             <span>•</span>
// //                             <span>{item.location}</span>
// //                           </div>
// //                         </div>
// //                         <motion.div
// //                           className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
// //                           animate={{
// //                             x: activeCard === item.id ? 5 : 0,
// //                             backgroundColor:
// //                               activeCard === item.id ? "#2563EB" : "#F3F4F6",
// //                           }}
// //                         >
// //                           <ArrowRight
// //                             className={`w-4 h-4 transition-all duration-300 ${
// //                               activeCard === item.id
// //                                 ? "text-white translate-x-0.5"
// //                                 : "text-gray-400"
// //                             }`}
// //                           />
// //                         </motion.div>
// //                       </div>

// //                       <motion.p
// //                         className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4"
// //                         animate={{
// //                           opacity: activeCard === item.id ? 0.8 : 0.6,
// //                         }}
// //                       >
// //                         {item.description}
// //                       </motion.p>

// //                       {/* Metrics Row with Animated Border */}
// //                       <motion.div
// //                         className="flex items-center justify-between pt-4 border-t border-gray-100"
// //                         animate={{
// //                           borderColor:
// //                             activeCard === item.id ? "#2563EB20" : "#E5E7EB",
// //                         }}
// //                       >
// //                         <div className="flex items-center gap-2">
// //                           <motion.div
// //                             className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
// //                             animate={{
// //                               scale: activeCard === item.id ? 1.1 : 1,
// //                               backgroundColor:
// //                                 activeCard === item.id ? "#2563EB" : "#DBEAFE",
// //                             }}
// //                           >
// //                             <Award
// //                               className={`w-3.5 h-3.5 transition-colors duration-300 ${
// //                                 activeCard === item.id
// //                                   ? "text-white"
// //                                   : "text-blue-600"
// //                               }`}
// //                             />
// //                           </motion.div>
// //                           <span className="text-xs font-semibold text-gray-700">
// //                             {item.result}
// //                           </span>
// //                         </div>
// //                         <div className="flex items-center gap-1.5">
// //                           <motion.div
// //                             className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center"
// //                             animate={{
// //                               scale: activeCard === item.id ? 1.1 : 1,
// //                               backgroundColor:
// //                                 activeCard === item.id ? "#EAB308" : "#FEF3C7",
// //                             }}
// //                           >
// //                             <TrendingUp
// //                               className={`w-3.5 h-3.5 transition-colors duration-300 ${
// //                                 activeCard === item.id
// //                                   ? "text-white"
// //                                   : "text-yellow-600"
// //                               }`}
// //                             />
// //                           </motion.div>
// //                           <span className="text-xs font-bold text-yellow-600">
// //                             {item.growth}
// //                           </span>
// //                         </div>
// //                       </motion.div>
// //                     </div>

// //                     {/* Card Border Animation on Hover */}
// //                     <motion.div
// //                       className="absolute inset-0 rounded-2xl pointer-events-none"
// //                       initial={{ opacity: 0 }}
// //                       animate={{
// //                         opacity: activeCard === item.id ? 1 : 0,
// //                         boxShadow:
// //                           activeCard === item.id ? "0 0 0 2px #2563EB" : "none",
// //                       }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/50" />
// //                     </motion.div>

// //                     {/* Shine Effect on Hover */}
// //                     <motion.div
// //                       className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
// //                       initial={{ opacity: 0 }}
// //                       animate={{
// //                         opacity: activeCard === item.id ? 1 : 0,
// //                       }}
// //                     >
// //                       <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine" />
// //                     </motion.div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </div>

// //         {/* Empty State */}
// //         {filteredItems.length === 0 && (
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200"
// //           >
// //             <motion.div
// //               animate={{ rotate: [0, 10, -10, 0] }}
// //               transition={{ duration: 0.5 }}
// //               className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center"
// //             >
// //               <Briefcase className="w-8 h-8 text-blue-600" />
// //             </motion.div>
// //             <p className="text-gray-500 font-medium">
// //               No projects found in &apos;{filter}&apos; category.
// //             </p>
// //             <button
// //               onClick={() => setFilter("All")}
// //               className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group"
// //             >
// //               View all projects
// //               <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </motion.div>
// //         )}

// //         {/* CTA Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, duration: 0.5 }}
// //           className="mt-28"
// //         >
// //           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 shadow-2xl">
// //             {/* Animated Background Elements */}
// //             <motion.div
// //               className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
// //               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
// //               transition={{ duration: 5, repeat: Infinity }}
// //             />
// //             <motion.div
// //               className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
// //               animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
// //               transition={{ duration: 7, repeat: Infinity }}
// //             />

// //             <div className="relative z-10 text-center">
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
// //               >
// //                 <Rocket className="w-4 h-4 text-yellow-400" />
// //                 <span className="text-white/90 text-sm font-medium">
// //                   Ready to scale?
// //                 </span>
// //               </motion.div>

// //               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
// // <p>Let&apos;s grow your business</p>
// //                 <span className="block text-yellow-400 mt-2">
// //                   digital empire
// //                 </span>
// //               </h3>

// //               <p className="text-blue-100 max-w-xl mx-auto mb-8">
// //                 Join 150+ successful brands that trusted us with their growth
// //                 journey.
// //               </p>

// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <motion.div
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <Link
// //                     href="/contact"
// //                     className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
// //                   >
// //                     Start Your Project
// //                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                   </Link>
// //                 </motion.div>

// //                 <motion.div
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <Link
// //                     href="/portfolio"
// //                     className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
// //                   >
// //                     <Globe className="w-4 h-4" />
// //                     View Portfolio
// //                   </Link>
// //                 </motion.div>
// //               </div>

// //               <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">No retainer fees</p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">
// //                     Strategy-first approach
// //                   </p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">Data-driven results</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Add this to your global CSS or component style */}
// //       <style jsx>{`
// //         @keyframes shine {
// //           0% {
// //             left: -100%;
// //           }
// //           100% {
// //             left: 100%;
// //           }
// //         }
// //         .animate-shine {
// //           animation: shine 1.5s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Briefcase,
// //   TrendingUp,
// //   Award,
// //   ArrowRight,
// //   Sparkles,
// //   Zap,
// //   Star,
// //   Eye,
// //   Rocket,
// //   Globe,
// //   CheckCircle,
// //   MapPin,
// //   Heart,
// // } from "lucide-react";

// // const workItems = [
// //   {
// //     id: "mentorleap",
// //     title: "MentorLeap",
// //     category: "EdTech",
// //     location: "India",
// //     description:
// //       "Transforming professionals into confident communicators and strategic leaders through AI-powered mentorship and structured learning programs.",
// //     image: "/Feature_logos/mentorleep.png",
// //     tags: ["EdTech", "Featured"],
// //     result: "10k+ Professionals",
// //     growth: "400%",
// //     featured: true,
// //   },
// //   {
// //     id: "delhi059",
// //     title: "Delhi059",
// //     category: "Restaurant",
// //     location: "Canada",
// //     description:
// //       "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
// //     image: "/delhi059-logo.jpg",
// //     tags: ["Hospitality", "Featured"],
// //     result: "650+ Reviews",
// //     growth: "500%",
// //     featured: true,
// //   },
// //   {
// //     id: "local-ride",
// //     title: "Local Ride",
// //     category: "Transportation",
// //     location: "Canada",
// //     description:
// //       "Engineered from the ground up into a thriving Canadian rideshare powerhouse.",
// //     image: "/Feature_logos/localride.jpg",
// //     tags: ["App Development", "Featured"],
// //     result: "100k+ Rides",
// //     growth: "300%",
// //     featured: true,
// //   },
// //   {
// //     id: "bg-foods",
// //     title: "BG Foods",
// //     category: "E-commerce",
// //     location: "Canada/USA",
// //     description:
// //       "Building a thriving food e-commerce platform across North America.",
// //     image: "/Feature_logos/bgfoods.jpeg",
// //     tags: ["E-commerce", "Featured"],
// //     result: "50k+ Orders",
// //     growth: "1000%",
// //     featured: true,
// //   },
// //   {
// //     id: "dee-cee-accessories",
// //     title: "Dee Cee Accessories",
// //     category: "Jewelry",
// //     location: "India",
// //     description:
// //       "Digital setup from scratch. Products photography, SEO based listings.",
// //     image: "/Feature_logos/deecee.jpg",
// //     tags: ["E-commerce"],
// //     result: "10x Sales",
// //     growth: "900%",
// //     featured: false,
// //   },
// //   {
// //     id: "cabtale",
// //     title: "CabTale",
// //     category: "Transportation",
// //     location: "India",
// //     description:
// //       "Building the future of urban mobility with seamless booking experiences.",
// //     image: "/Feature_logos/cabtale.jpg",
// //     tags: ["Mobility", "App Development"],
// //     result: "1M+ Downloads",
// //     growth: "800%",
// //     featured: false,
// //   },
// //   {
// //     id: "last-mile-care",
// //     title: "Last Mile Care",
// //     category: "NGO",
// //     location: "India",
// //     description: "Supporting communities with compassionate care.",
// //     image: "/Feature_logos/lastmilecare.jpeg",
// //     tags: ["Non-profit"],
// //     result: "50k+ Reached",
// //     growth: "200%",
// //     featured: false,
// //   },
// // ];

// // const categories = [
// //   "All",
// //   "Featured",
// //   "EdTech",
// //   "Hospitality",
// //   "Transportation",
// //   "E-commerce",
// //   "Non-profit",
// // ];

// // export default function WorkGallery() {
// //   const [filter, setFilter] = useState("All");
// //   const [activeCard, setActiveCard] = useState<string | null>(null);

// //   const filteredItems =
// //     filter === "All"
// //       ? workItems
// //       : filter === "Featured"
// //         ? workItems.filter((item) => item.featured)
// //         : workItems.filter((item) => item.tags.includes(filter));

// //   const stats = [
// //     {
// //       value: "150+",
// //       label: "Brands Scaled",
// //       icon: Briefcase,
// //       change: "+42%",
// //       color: "blue",
// //     },
// //     {
// //       value: "200%",
// //       label: "Avg. Growth",
// //       icon: TrendingUp,
// //       change: "+15%",
// //       color: "yellow",
// //     },
// //     {
// //       value: "4.95",
// //       label: "Client Rating",
// //       icon: Star,
// //       change: "5★",
// //       color: "blue",
// //     },
// //     {
// //       value: "98%",
// //       label: "Retention Rate",
// //       icon: Heart,
// //       change: "+8%",
// //       color: "yellow",
// //     },
// //   ];

// //   return (
// //     <section
// //       className="relative py-24 lg:py-32 bg-white overflow-hidden"
// //       id="work"
// //     >
// //       {/* Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
// //         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
// //         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl" />
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl" />
// //       </div>

// //       <div className="container mx-auto px-6 max-w-7xl relative z-10">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-20"
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
// //           >
// //             <Sparkles className="w-4 h-4 text-blue-600" />
// //             <span className="text-blue-700 font-semibold text-sm tracking-wide">
// //               OUR WORK
// //             </span>
// //           </motion.div>

// //           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
// //             Digital empires
// //             <span className="block text-blue-600 mt-2">built to last.</span>
// //           </h2>

// //           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
// //             From concept to category leader — helping 150+ brands achieve
// //             unprecedented growth across industries.
// //           </p>
// //         </motion.div>

// //         {/* Stats Row */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.1, duration: 0.5 }}
// //           className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28"
// //         >
// //           {stats.map((stat, idx) => (
// //             <motion.div
// //               key={idx}
// //               whileHover={{ y: -8, scale: 1.02 }}
// //               className="group"
// //             >
// //               <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
// //                 {/* Animated Border on Hover */}
// //                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-transparent transition-all duration-500" />

// //                 <div
// //                   className={`w-12 h-12 rounded-xl ${
// //                     stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
// //                   } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
// //                 >
// //                   <stat.icon
// //                     className={`w-6 h-6 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
// //                   />
// //                 </div>
// //                 <div className="flex items-baseline gap-2">
// //                   <p className="text-3xl font-bold text-black">{stat.value}</p>
// //                   <span
// //                     className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
// //                       stat.color === "blue"
// //                         ? "bg-blue-100 text-blue-700"
// //                         : "bg-yellow-100 text-yellow-700"
// //                     }`}
// //                   >
// //                     {stat.change}
// //                   </span>
// //                 </div>
// //                 <p className="text-gray-500 text-sm mt-1">{stat.label}</p>

// //                 {/* Decorative Line */}
// //                 <div
// //                   className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
// //                     stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
// //                   }`}
// //                 />
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Filter Buttons */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="flex flex-wrap justify-center gap-3 mb-16"
// //         >
// //           {categories.map((cat) => (
// //             <motion.button
// //               key={cat}
// //               onClick={() => setFilter(cat)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
// //                 filter === cat
// //                   ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
// //                   : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
// //               }`}
// //             >
// //               {cat}
// //             </motion.button>
// //           ))}
// //         </motion.div>

// //         {/* Projects Grid - Premium Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           <AnimatePresence mode="popLayout">
// //             {filteredItems.map((item, index) => (
// //               <motion.div
// //                 key={item.id}
// //                 layout
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -50 }}
// //                 transition={{ duration: 0.5, delay: index * 0.05 }}
// //                 onMouseEnter={() => setActiveCard(item.id)}
// //                 onMouseLeave={() => setActiveCard(null)}
// //               >
// //                 <div className="block h-full group">
// //                   <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
// //                     {/* Image Container with Parallax Effect */}
// //                     <div className="relative h-64 overflow-hidden bg-gray-100">
// //                       <motion.div
// //                         className="w-full h-full"
// //                         animate={{
// //                           scale: activeCard === item.id ? 1.1 : 1,
// //                         }}
// //                         transition={{ duration: 0.6 }}
// //                       >
// //                         <Image
// //                           src={item.image}
// //                           alt={item.title}
// //                           fill
// //                           className="object-cover"
// //                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// //                         />
// //                       </motion.div>

// //                       {/* Gradient Overlay */}
// //                       <motion.div
// //                         className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
// //                         animate={{
// //                           opacity: activeCard === item.id ? 1 : 0.6,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                       />

// //                       {/* Category Badge */}
// //                       <motion.div
// //                         className="absolute top-4 left-4"
// //                         initial={{ x: -20, opacity: 0 }}
// //                         animate={{ x: 0, opacity: 1 }}
// //                         transition={{ delay: 0.1 }}
// //                       >
// //                         <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
// //                           {item.category}
// //                         </span>
// //                       </motion.div>

// //                       {/* Featured Badge */}
// //                       {item.featured && (
// //                         <motion.div
// //                           className="absolute top-4 right-4"
// //                           initial={{ x: 20, opacity: 0 }}
// //                           animate={{ x: 0, opacity: 1 }}
// //                           transition={{ delay: 0.15 }}
// //                         >
// //                           <div className="px-3 py-1.5 bg-yellow-500 text-black text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
// //                             <Zap className="w-3 h-3" />
// //                             Featured
// //                           </div>
// //                         </motion.div>
// //                       )}

// //                       {/* Location Badge */}
// //                       <motion.div
// //                         className="absolute bottom-4 left-4"
// //                         initial={{ y: 20, opacity: 0 }}
// //                         animate={{ y: 0, opacity: 1 }}
// //                         transition={{ delay: 0.2 }}
// //                       >
// //                         <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-1">
// //                           <MapPin className="w-3 h-3 text-white/80" />
// //                           <span className="text-white/80 text-xs font-medium">
// //                             {item.location}
// //                           </span>
// //                         </div>
// //                       </motion.div>

// //                       {/* Quick View Overlay with Slide Up Effect */}
// //                       <motion.div
// //                         className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
// //                         initial={{ opacity: 0 }}
// //                         animate={{
// //                           opacity: activeCard === item.id ? 1 : 0,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         <motion.div
// //                           className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-2xl"
// //                           initial={{ y: 20, opacity: 0 }}
// //                           animate={{
// //                             y: activeCard === item.id ? 0 : 20,
// //                             opacity: activeCard === item.id ? 1 : 0,
// //                           }}
// //                           transition={{ duration: 0.3, delay: 0.1 }}
// //                         >
// //                           <Eye className="w-4 h-4 text-blue-600" />
// //                           <span className="text-sm font-semibold text-blue-600">
// //                             Quick View
// //                           </span>
// //                         </motion.div>
// //                       </motion.div>
// //                     </div>

// //                     {/* Content Section */}
// //                     <div className="p-6">
// //                       <div className="flex items-start justify-between gap-3 mb-3">
// //                         <div>
// //                           <motion.h3
// //                             className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300"
// //                             animate={{
// //                               x: activeCard === item.id ? 5 : 0,
// //                             }}
// //                           >
// //                             {item.title}
// //                           </motion.h3>
// //                           <div className="flex items-center gap-2 text-xs text-gray-400">
// //                             <span>{item.category}</span>
// //                             <span>•</span>
// //                             <span>{item.location}</span>
// //                           </div>
// //                         </div>
// //                         <motion.div
// //                           className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
// //                           animate={{
// //                             x: activeCard === item.id ? 5 : 0,
// //                             backgroundColor:
// //                               activeCard === item.id ? "#2563EB" : "#F3F4F6",
// //                           }}
// //                         >
// //                           <ArrowRight
// //                             className={`w-4 h-4 transition-all duration-300 ${
// //                               activeCard === item.id
// //                                 ? "text-white translate-x-0.5"
// //                                 ? "text-white translate-x-0.5"
// //                                 : "text-gray-400"
// //                             }`}
// //                           />
// //                         </motion.div>
// //                       </div>

// //                       <motion.p
// //                         className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4"
// //                         animate={{
// //                           opacity: activeCard === item.id ? 0.8 : 0.6,
// //                         }}
// //                       >
// //                         {item.description}
// //                       </motion.p>

// //                       {/* Metrics Row with Animated Border */}
// //                       <motion.div
// //                         className="flex items-center justify-between pt-4 border-t border-gray-100"
// //                         animate={{
// //                           borderColor:
// //                             activeCard === item.id ? "#2563EB20" : "#E5E7EB",
// //                         }}
// //                       >
// //                         <div className="flex items-center gap-2">
// //                           <motion.div
// //                             className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
// //                             animate={{
// //                               scale: activeCard === item.id ? 1.1 : 1,
// //                               backgroundColor:
// //                                 activeCard === item.id ? "#2563EB" : "#DBEAFE",
// //                             }}
// //                           >
// //                             <Award
// //                               className={`w-3.5 h-3.5 transition-colors duration-300 ${
// //                                 activeCard === item.id
// //                                   ? "text-white"
// //                                   : "text-blue-600"
// //                               }`}
// //                             />
// //                           </motion.div>
// //                           <span className="text-xs font-semibold text-gray-700">
// //                             {item.result}
// //                           </span>
// //                         </div>
// //                         <div className="flex items-center gap-1.5">
// //                           <motion.div
// //                             className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center"
// //                             animate={{
// //                               scale: activeCard === item.id ? 1.1 : 1,
// //                               backgroundColor:
// //                                 activeCard === item.id ? "#EAB308" : "#FEF3C7",
// //                             }}
// //                           >
// //                             <TrendingUp
// //                               className={`w-3.5 h-3.5 transition-colors duration-300 ${
// //                                 activeCard === item.id
// //                                   ? "text-white"
// //                                   : "text-yellow-600"
// //                               }`}
// //                             />
// //                           </motion.div>
// //                           <span className="text-xs font-bold text-yellow-600">
// //                             {item.growth}
// //                           </span>
// //                         </div>
// //                       </motion.div>
// //                     </div>

// //                     {/* Card Border Animation on Hover */}
// //                     <motion.div
// //                       className="absolute inset-0 rounded-2xl pointer-events-none"
// //                       initial={{ opacity: 0 }}
// //                       animate={{
// //                         opacity: activeCard === item.id ? 1 : 0,
// //                         boxShadow:
// //                           activeCard === item.id ? "0 0 0 2px #2563EB" : "none",
// //                       }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/50" />
// //                     </motion.div>

// //                     {/* Shine Effect on Hover */}
// //                     <motion.div
// //                       className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
// //                       initial={{ opacity: 0 }}
// //                       animate={{
// //                         opacity: activeCard === item.id ? 1 : 0,
// //                       }}
// //                     >
// //                       <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine" />
// //                     </motion.div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </div>

// //         {/* Empty State */}
// //         {filteredItems.length === 0 && (
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200"
// //           >
// //             <motion.div
// //               animate={{ rotate: [0, 10, -10, 0] }}
// //               transition={{ duration: 0.5 }}
// //               className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center"
// //             >
// //               <Briefcase className="w-8 h-8 text-blue-600" />
// //             </motion.div>
// //             <p className="text-gray-500 font-medium">
// //               No projects found in &apos;{filter}&apos; category.
// //             </p>
// //             <button
// //               onClick={() => setFilter("All")}
// //               className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group"
// //             >
// //               View all projects
// //               <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </motion.div>
// //         )}

// //         {/* CTA Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, duration: 0.5 }}
// //           className="mt-28"
// //         >
// //           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 shadow-2xl">
// //             {/* Animated Background Elements */}
// //             <motion.div
// //               className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
// //               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
// //               transition={{ duration: 5, repeat: Infinity }}
// //             />
// //             <motion.div
// //               className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
// //               animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
// //               transition={{ duration: 7, repeat: Infinity }}
// //             />

// //             <div className="relative z-10 text-center">
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
// //               >
// //                 <Rocket className="w-4 h-4 text-yellow-400" />
// //                 <span className="text-white/90 text-sm font-medium">
// //                   Ready to scale?
// //                 </span>
// //               </motion.div>

// //               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
// //                 Let&apos;s grow your business
// //                 <span className="block text-yellow-400 mt-2">
// //                   digital empire
// //                 </span>
// //               </h3>

// //               <p className="text-blue-100 max-w-xl mx-auto mb-8">
// //                 Join 150+ successful brands that trusted us with their growth
// //                 journey.
// //               </p>

// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <motion.div
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <Link
// //                     href="/contact"
// //                     className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
// //                   >
// //                     Start Your Project
// //                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                   </Link>
// //                 </motion.div>

// //                 <motion.div
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <Link
// //                     href="/portfolio"
// //                     className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
// //                   >
// //                     <Globe className="w-4 h-4" />
// //                     View Portfolio
// //                   </Link>
// //                 </motion.div>
// //               </div>

// //               <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">No retainer fees</p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">
// //                     Strategy-first approach
// //                   </p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">Data-driven results</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Add this to your global CSS or component style */}
// //       <style jsx>{`
// //         @keyframes shine {
// //           0% {
// //             left: -100%;
// //           }
// //           100% {
// //             left: 100%;
// //           }
// //         }
// //         .animate-shine {
// //           animation: shine 1.5s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }




















// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Briefcase,
// //   TrendingUp,
// //   Award,
// //   ArrowRight,
// //   Sparkles,
// //   Zap,
// //   Star,
// //   Eye,
// //   Rocket,
// //   Globe,
// //   CheckCircle,
// //   MapPin,
// //   Heart,
// // } from "lucide-react";

// // const workItems = [
// //   {
// //     id: "mentorleap",
// //     title: "MentorLeap",
// //     category: "EdTech",
// //     location: "India",
// //     description:
// //       "Transforming professionals into confident communicators and strategic leaders through AI-powered mentorship and structured learning programs.",
// //     image: "/Feature_logos/mentorleep.png",
// //     tags: ["EdTech", "Featured"],
// //     result: "10k+ Professionals",
// //     growth: "400%",
// //     featured: true,
// //   },
// //   {
// //     id: "delhi059",
// //     title: "Delhi059",
// //     category: "Restaurant",
// //     location: "Canada",
// //     description:
// //       "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
// //     image: "/delhi059-logo.jpg",
// //     tags: ["Hospitality", "Featured"],
// //     result: "650+ Reviews",
// //     growth: "500%",
// //     featured: true,
// //   },
// //   {
// //     id: "local-ride",
// //     title: "Local Ride",
// //     category: "Transportation",
// //     location: "Canada",
// //     description:
// //       "Engineered from the ground up into a thriving Canadian rideshare powerhouse.",
// //     image: "/Feature_logos/localride.jpg",
// //     tags: ["App Development", "Featured"],
// //     result: "100k+ Rides",
// //     growth: "300%",
// //     featured: true,
// //   },
// //   {
// //     id: "bg-foods",
// //     title: "BG Foods",
// //     category: "E-commerce",
// //     location: "Canada/USA",
// //     description:
// //       "Building a thriving food e-commerce platform across North America.",
// //     image: "/Feature_logos/bgfoods.jpeg",
// //     tags: ["E-commerce", "Featured"],
// //     result: "50k+ Orders",
// //     growth: "1000%",
// //     featured: true,
// //   },
// //   {
// //     id: "dee-cee-accessories",
// //     title: "Dee Cee Accessories",
// //     category: "Jewelry",
// //     location: "India",
// //     description:
// //       "Digital setup from scratch. Products photography, SEO based listings.",
// //     image: "/Feature_logos/deecee.jpg",
// //     tags: ["E-commerce"],
// //     result: "10x Sales",
// //     growth: "900%",
// //     featured: false,
// //   },
// //   {
// //     id: "cabtale",
// //     title: "CabTale",
// //     category: "Transportation",
// //     location: "India",
// //     description:
// //       "Building the future of urban mobility with seamless booking experiences.",
// //     image: "/Feature_logos/cabtale.jpg",
// //     tags: ["Mobility", "App Development"],
// //     result: "1M+ Downloads",
// //     growth: "800%",
// //     featured: false,
// //   },
// //   {
// //     id: "last-mile-care",
// //     title: "Last Mile Care",
// //     category: "NGO",
// //     location: "India",
// //     description: "Supporting communities with compassionate care.",
// //     image: "/Feature_logos/lastmilecare.jpeg",
// //     tags: ["Non-profit"],
// //     result: "50k+ Reached",
// //     growth: "200%",
// //     featured: false,
// //   },
// // ];

// // const categories = [
// //   "All",
// //   "Featured",
// //   "EdTech",
// //   "Hospitality",
// //   "Transportation",
// //   "E-commerce",
// //   "Non-profit",
// // ];

// // export default function WorkGallery() {
// //   const [filter, setFilter] = useState("All");
// //   const [activeCard, setActiveCard] = useState<string | null>(null);

// //   const filteredItems =
// //     filter === "All"
// //       ? workItems
// //       : filter === "Featured"
// //         ? workItems.filter((item) => item.featured)
// //         : workItems.filter((item) => item.tags.includes(filter));

// //   const stats = [
// //     {
// //       value: "150+",
// //       label: "Brands Scaled",
// //       icon: Briefcase,
// //       change: "+42%",
// //       color: "blue",
// //     },
// //     {
// //       value: "200%",
// //       label: "Avg. Growth",
// //       icon: TrendingUp,
// //       change: "+15%",
// //       color: "yellow",
// //     },
// //     {
// //       value: "4.95",
// //       label: "Client Rating",
// //       icon: Star,
// //       change: "5★",
// //       color: "blue",
// //     },
// //     {
// //       value: "98%",
// //       label: "Retention Rate",
// //       icon: Heart,
// //       change: "+8%",
// //       color: "yellow",
// //     },
// //   ];

// //   return (
// //     <section
// //       className="relative py-24 lg:py-32 bg-white overflow-hidden"
// //       id="work"
// //     >
// //       {/* Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
// //         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
// //         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl" />
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl" />
// //       </div>

// //       <div className="container mx-auto px-6 max-w-7xl relative z-10">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-20"
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
// //           >
// //             <Sparkles className="w-4 h-4 text-blue-600" />
// //             <span className="text-blue-700 font-semibold text-sm tracking-wide">
// //               OUR WORK
// //             </span>
// //           </motion.div>

// //           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
// //             Digital empires
// //             <span className="block text-blue-600 mt-2">built to last.</span>
// //           </h2>

// //           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
// //             From concept to category leader — helping 150+ brands achieve
// //             unprecedented growth across industries.
// //           </p>
// //         </motion.div>

// //         {/* Stats Row */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.1, duration: 0.5 }}
// //           className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28"
// //         >
// //           {stats.map((stat, idx) => (
// //             <motion.div
// //               key={idx}
// //               whileHover={{ y: -8, scale: 1.02 }}
// //               className="group"
// //             >
// //               <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
// //                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-transparent transition-all duration-500" />

// //                 <div
// //                   className={`w-12 h-12 rounded-xl ${
// //                     stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
// //                   } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
// //                 >
// //                   <stat.icon
// //                     className={`w-6 h-6 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
// //                   />
// //                 </div>
// //                 <div className="flex items-baseline gap-2">
// //                   <p className="text-3xl font-bold text-black">{stat.value}</p>
// //                   <span
// //                     className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
// //                       stat.color === "blue"
// //                         ? "bg-blue-100 text-blue-700"
// //                         : "bg-yellow-100 text-yellow-700"
// //                     }`}
// //                   >
// //                     {stat.change}
// //                   </span>
// //                 </div>
// //                 <p className="text-gray-500 text-sm mt-1">{stat.label}</p>

// //                 <div
// //                   className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
// //                     stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
// //                   }`}
// //                 />
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Filter Buttons */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="flex flex-wrap justify-center gap-3 mb-16"
// //         >
// //           {categories.map((cat) => (
// //             <motion.button
// //               key={cat}
// //               onClick={() => setFilter(cat)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
// //                 filter === cat
// //                   ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
// //                   : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
// //               }`}
// //             >
// //               {cat}
// //             </motion.button>
// //           ))}
// //         </motion.div>

// //         {/* Projects Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           <AnimatePresence mode="popLayout">
// //             {filteredItems.map((item, index) => (
// //               <motion.div
// //                 key={item.id}
// //                 layout
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -50 }}
// //                 transition={{ duration: 0.5, delay: index * 0.05 }}
// //                 onMouseEnter={() => setActiveCard(item.id)}
// //                 onMouseLeave={() => setActiveCard(null)}
// //               >
// //                 <div className="block h-full group">
// //                   <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
// //                     <div className="relative h-64 overflow-hidden bg-gray-100">
// //                       <motion.div
// //                         className="w-full h-full"
// //                         animate={{
// //                           scale: activeCard === item.id ? 1.1 : 1,
// //                         }}
// //                         transition={{ duration: 0.6 }}
// //                       >
// //                         <Image
// //                           src={item.image}
// //                           alt={item.title}
// //                           fill
// //                           className="object-cover"
// //                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// //                         />
// //                       </motion.div>

// //                       <motion.div
// //                         className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
// //                         animate={{
// //                           opacity: activeCard === item.id ? 1 : 0.6,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                       />

// //                       <motion.div
// //                         className="absolute top-4 left-4"
// //                         initial={{ x: -20, opacity: 0 }}
// //                         animate={{ x: 0, opacity: 1 }}
// //                         transition={{ delay: 0.1 }}
// //                       >
// //                         <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
// //                           {item.category}
// //                         </span>
// //                       </motion.div>

// //                       {item.featured && (
// //                         <motion.div
// //                           className="absolute top-4 right-4"
// //                           initial={{ x: 20, opacity: 0 }}
// //                           animate={{ x: 0, opacity: 1 }}
// //                           transition={{ delay: 0.15 }}
// //                         >
// //                           <div className="px-3 py-1.5 bg-yellow-500 text-black text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
// //                             <Zap className="w-3 h-3" />
// //                             Featured
// //                           </div>
// //                         </motion.div>
// //                       )}

// //                       <motion.div
// //                         className="absolute bottom-4 left-4"
// //                         initial={{ y: 20, opacity: 0 }}
// //                         animate={{ y: 0, opacity: 1 }}
// //                         transition={{ delay: 0.2 }}
// //                       >
// //                         <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-1">
// //                           <MapPin className="w-3 h-3 text-white/80" />
// //                           <span className="text-white/80 text-xs font-medium">
// //                             {item.location}
// //                           </span>
// //                         </div>
// //                       </motion.div>

// //                       <motion.div
// //                         className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
// //                         initial={{ opacity: 0 }}
// //                         animate={{
// //                           opacity: activeCard === item.id ? 1 : 0,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         <motion.div
// //                           className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-2xl"
// //                           initial={{ y: 20, opacity: 0 }}
// //                           animate={{
// //                             y: activeCard === item.id ? 0 : 20,
// //                             opacity: activeCard === item.id ? 1 : 0,
// //                           }}
// //                           transition={{ duration: 0.3, delay: 0.1 }}
// //                         >
// //                           <Eye className="w-4 h-4 text-blue-600" />
// //                           <span className="text-sm font-semibold text-blue-600">
// //                             Quick View
// //                           </span>
// //                         </motion.div>
// //                       </motion.div>
// //                     </div>

// //                     <div className="p-6">
// //                       <div className="flex items-start justify-between gap-3 mb-3">
// //                         <div>
// //                           <motion.h3
// //                             className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300"
// //                             animate={{
// //                               x: activeCard === item.id ? 5 : 0,
// //                             }}
// //                           >
// //                             {item.title}
// //                           </motion.h3>
// //                           <div className="flex items-center gap-2 text-xs text-gray-400">
// //                             <span>{item.category}</span>
// //                             <span>•</span>
// //                             <span>{item.location}</span>
// //                           </div>
// //                         </div>
// //                         <motion.div
// //                           className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
// //                           animate={{
// //                             x: activeCard === item.id ? 5 : 0,
// //                             backgroundColor:
// //                               activeCard === item.id ? "#2563EB" : "#F3F4F6",
// //                           }}
// //                         >
// //                           <ArrowRight
// //                             className={`w-4 h-4 transition-all duration-300 ${
// //                               activeCard === item.id
// //                                 ? "text-white translate-x-0.5"
// //                                 : "text-gray-400"
// //                             }`}
// //                           />
// //                         </motion.div>
// //                       </div>

// //                       <motion.p
// //                         className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4"
// //                         animate={{
// //                           opacity: activeCard === item.id ? 0.8 : 0.6,
// //                         }}
// //                       >
// //                         {item.description}
// //                       </motion.p>

// //                       <motion.div
// //                         className="flex items-center justify-between pt-4 border-t border-gray-100"
// //                         animate={{
// //                           borderColor:
// //                             activeCard === item.id ? "#2563EB20" : "#E5E7EB",
// //                         }}
// //                       >
// //                         <div className="flex items-center gap-2">
// //                           <motion.div
// //                             className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
// //                             animate={{
// //                               scale: activeCard === item.id ? 1.1 : 1,
// //                               backgroundColor:
// //                                 activeCard === item.id ? "#2563EB" : "#DBEAFE",
// //                             }}
// //                           >
// //                             <Award
// //                               className={`w-3.5 h-3.5 transition-colors duration-300 ${
// //                                 activeCard === item.id
// //                                   ? "text-white"
// //                                   : "text-blue-600"
// //                               }`}
// //                             />
// //                           </motion.div>
// //                           <span className="text-xs font-semibold text-gray-700">
// //                             {item.result}
// //                           </span>
// //                         </div>
// //                         <div className="flex items-center gap-1.5">
// //                           <motion.div
// //                             className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center"
// //                             animate={{
// //                               scale: activeCard === item.id ? 1.1 : 1,
// //                               backgroundColor:
// //                                 activeCard === item.id ? "#EAB308" : "#FEF3C7",
// //                             }}
// //                           >
// //                             <TrendingUp
// //                               className={`w-3.5 h-3.5 transition-colors duration-300 ${
// //                                 activeCard === item.id
// //                                   ? "text-white"
// //                                   : "text-yellow-600"
// //                               }`}
// //                             />
// //                           </motion.div>
// //                           <span className="text-xs font-bold text-yellow-600">
// //                             {item.growth}
// //                           </span>
// //                         </div>
// //                       </motion.div>
// //                     </div>

// //                     <motion.div
// //                       className="absolute inset-0 rounded-2xl pointer-events-none"
// //                       initial={{ opacity: 0 }}
// //                       animate={{
// //                         opacity: activeCard === item.id ? 1 : 0,
// //                         boxShadow:
// //                           activeCard === item.id ? "0 0 0 2px #2563EB" : "none",
// //                       }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/50" />
// //                     </motion.div>

// //                     <motion.div
// //                       className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
// //                       initial={{ opacity: 0 }}
// //                       animate={{
// //                         opacity: activeCard === item.id ? 1 : 0,
// //                       }}
// //                     >
// //                       <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine" />
// //                     </motion.div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </div>

// //         {/* Empty State */}
// //         {filteredItems.length === 0 && (
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200"
// //           >
// //             <motion.div
// //               animate={{ rotate: [0, 10, -10, 0] }}
// //               transition={{ duration: 0.5 }}
// //               className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center"
// //             >
// //               <Briefcase className="w-8 h-8 text-blue-600" />
// //             </motion.div>
// //             <p className="text-gray-500 font-medium">
// //               No projects found in &apos;{filter}&apos; category.
// //             </p>
// //             <button
// //               onClick={() => setFilter("All")}
// //               className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group"
// //             >
// //               View all projects
// //               <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </motion.div>
// //         )}

// //         {/* CTA Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, duration: 0.5 }}
// //           className="mt-28"
// //         >
// //           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 shadow-2xl">
// //             <motion.div
// //               className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
// //               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
// //               transition={{ duration: 5, repeat: Infinity }}
// //             />
// //             <motion.div
// //               className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
// //               animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
// //               transition={{ duration: 7, repeat: Infinity }}
// //             />

// //             <div className="relative z-10 text-center">
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
// //               >
// //                 <Rocket className="w-4 h-4 text-yellow-400" />
// //                 <span className="text-white/90 text-sm font-medium">
// //                   Ready to scale?
// //                 </span>
// //               </motion.div>

// //               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
// //                 Let&apos;s grow your business
// //                 <span className="block text-yellow-400 mt-2">
// //                   digital empire
// //                 </span>
// //               </h3>

// //               <p className="text-blue-100 max-w-xl mx-auto mb-8">
// //                 Join 150+ successful brands that trusted us with their growth
// //                 journey.
// //               </p>

// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <motion.div
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <Link
// //                     href="/contact"
// //                     className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
// //                   >
// //                     Start Your Project
// //                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                   </Link>
// //                 </motion.div>

// //                 <motion.div
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <Link
// //                     href="/portfolio"
// //                     className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
// //                   >
// //                     <Globe className="w-4 h-4" />
// //                     View Portfolio
// //                   </Link>
// //                 </motion.div>
// //               </div>

// //               <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">No retainer fees</p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">
// //                     Strategy-first approach
// //                   </p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-yellow-400" />
// //                   <p className="text-xs text-blue-100">Data-driven results</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes shine {
// //           0% {
// //             left: -100%;
// //           }
// //           100% {
// //             left: 100%;
// //           }
// //         }
// //         .animate-shine {
// //           animation: shine 1.5s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }




















// // Aerovince\app\components\WorkGallery.tsx"use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   TrendingUp,
//   Award,
//   ArrowRight,
//   Sparkles,
//   Zap,
//   Star,
//   Eye,
//   Rocket,
//   Globe,
//   CheckCircle,
//   MapPin,
//   Heart,
// } from "lucide-react";
// import { projects } from "@/lib/projects";

// // ── Derive workItems from the shared data source ──────────────────────────────
// // WorkGallery is the home-page "featured work" section. It reads from the same
// // projects array so you never have to update two files.
// const workItems = projects;

// const categories = [
//   "All",
//   "Featured",
//   "EdTech",
//   "Hospitality",
//   "Transportation",
//   "E-commerce",
//   "Non-profit",
// ];

// export default function WorkGallery() {
//   const [filter, setFilter] = useState("All");
//   const [activeCard, setActiveCard] = useState<string | null>(null);

//   const filteredItems =
//     filter === "All"
//       ? workItems
//       : filter === "Featured"
//         ? workItems.filter((item) => item.featured)
//         : workItems.filter((item) => item.tags.includes(filter));

//   const stats = [
//     {
//       value: "150+",
//       label: "Brands Scaled",
//       icon: Briefcase,
//       change: "+42%",
//       color: "blue",
//     },
//     {
//       value: "200%",
//       label: "Avg. Growth",
//       icon: TrendingUp,
//       change: "+15%",
//       color: "yellow",
//     },
//     {
//       value: "4.95",
//       label: "Client Rating",
//       icon: Star,
//       change: "5★",
//       color: "blue",
//     },
//     {
//       value: "98%",
//       label: "Retention Rate",
//       icon: Heart,
//       change: "+8%",
//       color: "yellow",
//     },
//   ];

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="work"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Header */}
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
//               OUR WORK
//             </span>
//           </motion.div>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
//             Digital empires
//             <span className="block text-blue-600 mt-2">built to last.</span>
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             From concept to category leader — helping 150+ brands achieve
//             unprecedented growth across industries.
//           </p>
//         </motion.div>

//         {/* Stats Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div key={idx} whileHover={{ y: -8, scale: 1.02 }} className="group">
//               <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-transparent transition-all duration-500" />
//                 <div className={`w-12 h-12 rounded-xl ${stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                   <stat.icon className={`w-6 h-6 ${stat.color === "yellow" ? "text-black" : "text-white"}`} />
//                 </div>
//                 <div className="flex items-baseline gap-2">
//                   <p className="text-3xl font-bold text-black">{stat.value}</p>
//                   <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${stat.color === "blue" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
//                     {stat.change}
//                   </span>
//                 </div>
//                 <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
//                 <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"}`} />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-3 mb-16"
//         >
//           {categories.map((cat) => (
//             <motion.button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
//                 ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
//                 }`}
//             >
//               {cat}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence mode="popLayout">
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 onMouseEnter={() => setActiveCard(item.id)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 {/* ── FIX: wrap the entire card in Link so it's clickable ── */}
//                 <Link href={`/portfolio/${item.id}`} className="block h-full group">
//                   <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
//                     {/* Image */}
//                     <div className="relative h-64 overflow-hidden bg-gray-100">
//                       <motion.div
//                         className="w-full h-full"
//                         animate={{ scale: activeCard === item.id ? 1.1 : 1 }}
//                         transition={{ duration: 0.6 }}
//                       >
//                         <Image
//                           src={item.image}
//                           alt={item.title}
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         />
//                       </motion.div>

//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
//                         animate={{ opacity: activeCard === item.id ? 1 : 0.6 }}
//                         transition={{ duration: 0.3 }}
//                       />

//                       {/* Category badge */}
//                       <div className="absolute top-4 left-4">
//                         <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
//                           {item.category}
//                         </span>
//                       </div>

//                       {/* Featured badge */}
//                       {item.featured && (
//                         <div className="absolute top-4 right-4">
//                           <div className="px-3 py-1.5 bg-yellow-500 text-black text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
//                             <Zap className="w-3 h-3" />
//                             Featured
//                           </div>
//                         </div>
//                       )}

//                       {/* Location */}
//                       <div className="absolute bottom-4 left-4">
//                         <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-1">
//                           <MapPin className="w-3 h-3 text-white/80" />
//                           <span className="text-white/80 text-xs font-medium">{item.location}</span>
//                         </div>
//                       </div>

//                       {/* Hover overlay — "View Case Study" (not "Quick View") */}
//                       <motion.div
//                         className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: activeCard === item.id ? 1 : 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <motion.div
//                           className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-2xl"
//                           animate={{
//                             y: activeCard === item.id ? 0 : 20,
//                             opacity: activeCard === item.id ? 1 : 0,
//                           }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <Eye className="w-4 h-4 text-blue-600" />
//                           <span className="text-sm font-semibold text-blue-600">
//                             View Case Study
//                           </span>
//                         </motion.div>
//                       </motion.div>
//                     </div>

//                     {/* Card body */}
//                     <div className="p-6">
//                       <div className="flex items-start justify-between gap-3 mb-3">
//                         <div>
//                           <motion.h3
//                             className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300"
//                             animate={{ x: activeCard === item.id ? 5 : 0 }}
//                           >
//                             {item.title}
//                           </motion.h3>
//                           <div className="flex items-center gap-2 text-xs text-gray-400">
//                             <span>{item.category}</span>
//                             <span>•</span>
//                             <span>{item.location}</span>
//                           </div>
//                         </div>
//                         <motion.div
//                           className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
//                           animate={{
//                             x: activeCard === item.id ? 5 : 0,
//                             backgroundColor: activeCard === item.id ? "#2563EB" : "#F3F4F6",
//                           }}
//                         >
//                           <ArrowRight className={`w-4 h-4 transition-colors duration-300 ${activeCard === item.id ? "text-white" : "text-gray-400"}`} />
//                         </motion.div>
//                       </div>

//                       <motion.p
//                         className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4"
//                         animate={{ opacity: activeCard === item.id ? 0.8 : 0.6 }}
//                       >
//                         {item.description}
//                       </motion.p>

//                       <motion.div
//                         className="flex items-center justify-between pt-4 border-t border-gray-100"
//                         animate={{ borderColor: activeCard === item.id ? "#2563EB20" : "#E5E7EB" }}
//                       >
//                         <div className="flex items-center gap-2">
//                           <motion.div
//                             className="w-6 h-6 rounded-full flex items-center justify-center"
//                             animate={{
//                               scale: activeCard === item.id ? 1.1 : 1,
//                               backgroundColor: activeCard === item.id ? "#2563EB" : "#DBEAFE",
//                             }}
//                           >
//                             <Award className={`w-3.5 h-3.5 transition-colors duration-300 ${activeCard === item.id ? "text-white" : "text-blue-600"}`} />
//                           </motion.div>
//                           <span className="text-xs font-semibold text-gray-700">{item.result}</span>
//                         </div>
//                         <div className="flex items-center gap-1.5">
//                           <motion.div
//                             className="w-6 h-6 rounded-full flex items-center justify-center"
//                             animate={{
//                               scale: activeCard === item.id ? 1.1 : 1,
//                               backgroundColor: activeCard === item.id ? "#EAB308" : "#FEF3C7",
//                             }}
//                           >
//                             <TrendingUp className={`w-3.5 h-3.5 transition-colors duration-300 ${activeCard === item.id ? "text-white" : "text-yellow-600"}`} />
//                           </motion.div>
//                           <span className="text-xs font-bold text-yellow-600">{item.growth}</span>
//                         </div>
//                       </motion.div>
//                     </div>

//                     {/* Active ring */}
//                     <motion.div
//                       className="absolute inset-0 rounded-2xl pointer-events-none"
//                       animate={{ opacity: activeCard === item.id ? 1 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/50" />
//                     </motion.div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Empty state */}
//         {filteredItems.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200"
//           >
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <p className="text-gray-500 font-medium">
//               No projects found in &apos;{filter}&apos; category.
//             </p>
//             <button
//               onClick={() => setFilter("All")}
//               className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group"
//             >
//               View all projects
//               <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </motion.div>
//         )}

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mt-28"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 shadow-2xl">
//             <motion.div
//               className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
//               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//               transition={{ duration: 5, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
//               animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
//               transition={{ duration: 7, repeat: Infinity }}
//             />

//             <div className="relative z-10 text-center">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6">
//                 <Rocket className="w-4 h-4 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-medium">Ready to scale?</span>
//               </div>

//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//                 Let&apos;s grow your business
//                 <span className="block text-yellow-400 mt-2">digital empire</span>
//               </h3>

//               <p className="text-blue-100 max-w-xl mx-auto mb-8">
//                 Join 150+ successful brands that trusted us with their growth journey.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   href="/contact"
//                   className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
//                 >
//                   Start Your Project
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link
//                   href="/portfolio"
//                   className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
//                 >
//                   <Globe className="w-4 h-4" />
//                   View All Case Studies
//                 </Link>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
//                 {["No retainer fees", "Strategy-first approach", "Data-driven results"].map((t) => (
//                   <div key={t} className="flex items-center gap-2">
//                     <CheckCircle className="w-4 h-4 text-yellow-400" />
//                     <p className="text-xs text-blue-100">{t}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }































"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, TrendingUp, Users, Star,
  Briefcase, Filter,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "SaaS", "EdTech", "E-commerce", "Restaurant", "Healthcare", "Real Estate"];

const PROJECTS = [
  {
    id: "techvault",
    title: "TechVault",
    category: "SaaS",
    location: "Bengaluru, India",
    image: "/images/work/techvault.jpg",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50 border-blue-100",
    tags: ["SEO", "Paid Ads", "Content"],
    result: "3.1x pipeline growth",
    growth: "+312%",
    duration: "6 months",
    featured: true,
    description:
      "Rebuilt their entire demand-gen engine — from technical SEO to a multi-touch paid strategy across Google and LinkedIn. Organic traffic tripled in under 6 months.",
  },
  {
    id: "brightpath",
    title: "BrightPath Edu",
    category: "EdTech",
    location: "Mumbai, India",
    image: "/images/work/brightpath.jpg",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-50",
    accentColor: "text-violet-600",
    accentBg: "bg-violet-50 border-violet-100",
    tags: ["Lead Gen", "Web Dev", "Branding"],
    result: "+60% admissions",
    growth: "+60%",
    duration: "4 months",
    featured: true,
    description:
      "Redesigned their conversion funnel from scratch, launched geo-targeted ad campaigns, and automated their entire lead nurturing workflow with AI.",
  },
  {
    id: "zenithco",
    title: "ZenithCo",
    category: "E-commerce",
    location: "Delhi, India",
    image: "/images/work/zenithco.jpg",
    color: "from-cyan-500 to-blue-400",
    bgColor: "bg-cyan-50",
    accentColor: "text-cyan-600",
    accentBg: "bg-cyan-50 border-cyan-100",
    tags: ["Performance Ads", "CRO", "Email"],
    result: "$2.4M revenue added",
    growth: "+187%",
    duration: "8 months",
    featured: false,
    description:
      "Full performance marketing takeover — restructured their Meta and Google Ads, introduced email sequences, and ran 40+ CRO tests to lift conversion rate from 1.9% to 5.3%.",
  },
  {
    id: "novabrand",
    title: "NovaBrand Foods",
    category: "Restaurant",
    location: "Pune, India",
    image: "/images/work/novabrand.jpg",
    color: "from-rose-500 to-orange-400",
    bgColor: "bg-rose-50",
    accentColor: "text-rose-600",
    accentBg: "bg-rose-50 border-rose-100",
    tags: ["Branding", "Social Media", "SEO"],
    result: "2.8x online orders",
    growth: "+180%",
    duration: "3 months",
    featured: false,
    description:
      "Built a brand identity from scratch, launched their social media presence, and drove online order volume through a local SEO and Google Business strategy.",
  },
  {
    id: "peakforge",
    title: "PeakForge Health",
    category: "Healthcare",
    location: "Chennai, India",
    image: "/images/work/peakforge.jpg",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-50 border-emerald-100",
    tags: ["Lead Gen", "SEO", "Web Dev"],
    result: "4.2x patient inquiries",
    growth: "+320%",
    duration: "5 months",
    featured: true,
    description:
      "Rebuilt their local SEO presence, launched a high-converting service page funnel, and automated follow-up sequences — driving qualified patient inquiries from day one.",
  },
  {
    id: "strideo",
    title: "StrideCo Realty",
    category: "Real Estate",
    location: "Hyderabad, India",
    image: "/images/work/strideo.jpg",
    color: "from-amber-500 to-yellow-400",
    bgColor: "bg-amber-50",
    accentColor: "text-amber-600",
    accentBg: "bg-amber-50 border-amber-100",
    tags: ["Paid Ads", "Lead Gen", "CRO"],
    result: "₹18Cr in sales pipeline",
    growth: "+240%",
    duration: "7 months",
    featured: false,
    description:
      "End-to-end lead generation infrastructure for a real estate developer — Facebook lead campaigns, WhatsApp automation, and a CRM integration that tracked every rupee.",
  },
];

const SUMMARY_STATS = [
  { label: "Brands Scaled", value: "150+", icon: Briefcase },
  { label: "Avg. Revenue Growth", value: "↑ 200%", icon: TrendingUp },
  { label: "Client Rating", value: "4.9 / 5", icon: Star },
  { label: "Satisfaction Rate", value: "98%", icon: Users },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/portfolio/${project.id}`} className="block group h-full">
        <motion.div
          animate={{ y: hovered ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col"
          style={{
            boxShadow: hovered
              ? "0 20px 60px -12px rgba(59,130,246,0.12), 0 0 0 1px rgba(59,130,246,0.08)"
              : "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)",
          }}
        >
          {/* Top gradient strip */}
          <div className={`h-0.5 w-full bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

          {/* Image area */}
          <div className={`relative h-52 ${project.bgColor} overflow-hidden flex items-center justify-center`}>
            {/* Placeholder gradient illustration */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
            <div className="relative flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-black text-xl">{project.title[0]}</span>
              </div>
              <span className="text-xs font-semibold text-gray-400">{project.location}</span>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/90 backdrop-blur px-2.5 py-1 rounded-full border border-gray-100 text-gray-700">
                  <Star size={9} className="fill-amber-400 text-amber-400" /> Featured
                </span>
              </div>
            )}

            {/* Category */}
            <div className="absolute top-3 right-3">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${project.accentBg} ${project.accentColor}`}>
                {project.category}
              </span>
            </div>

            {/* Hover view overlay */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: hovered ? 1 : 0.85, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full shadow-xl"
              >
                View Case Study <ArrowUpRight size={14} />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((t) => (
                <span key={t} className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>

            <h3 className={`text-lg font-bold text-gray-900 mb-1.5 transition-colors duration-200 ${hovered ? project.accentColor : ""}`}>
              {project.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2">
              {project.description}
            </p>

            {/* Bottom metrics */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Key Result</p>
                <p className="text-sm font-semibold text-gray-800">{project.result}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Growth</p>
                <p className={`text-sm font-bold ${project.accentColor}`}>{project.growth}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section ref={sectionRef} id="work" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -top-48 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-50/70 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-50/50 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Client Work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight">
              Results we've built.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Businesses that grew.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Every project below is a real business that came to us with a growth problem.
              Here's what happened next.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3 lg:gap-4 shrink-0"
          >
            {SUMMARY_STATS.map((s) => (
              <div key={s.label} className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 min-w-[120px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <s.icon size={12} className="text-blue-500" />
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{s.label}</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <Filter size={13} className="text-gray-400 mr-1" />
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileTap={{ scale: 0.95 }}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <p className="text-gray-400 text-sm font-medium">No projects in this category yet.</p>
            <button onClick={() => setActiveFilter("All")} className="mt-3 text-blue-600 text-sm font-semibold hover:underline">
              View all projects
            </button>
          </motion.div>
        )}

        {/* ── View all CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-100"
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Showing {filtered.length} of {PROJECTS.length} projects · More case studies available
          </p>
          <div className="flex gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition-all group"
            >
              View All Work
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 px-5 py-2.5 rounded-xl transition-all group shadow-sm"
            >
              Start Your Project
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}