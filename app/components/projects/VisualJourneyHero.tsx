

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';

// const milestones = [
//     { year: '2014', event: 'The Beginning', description: 'Started with a vision to transform brands' },
//     { year: '2017', event: 'Breaking Barriers', description: 'Crossed 10+ brands milestone' },
//     { year: '2020', event: 'Global Expansion', description: 'Expanded to Canada, USA, UAE' },
//     { year: '2023', event: 'The Restart', description: 'Reborn with renewed passion and purpose' },
//     { year: '2026', event: 'The Future', description: 'Building the next generation of iconic brands' }
// ];

// const achievements = [
//     { icon: Users, number: '500K+', label: 'Lives Touched' },
//     { icon: Award, number: '30+', label: 'Brands Built' },
//     { icon: TrendingUp, number: '10M+', label: 'Reach Generated' },
//     { icon: Sparkles, number: '∞', label: 'Creative Ideas' }
// ];

// export default function VisualJourneyHero() {
//     return (
//         <section className="relative py-32 bg-gradient-to-br from-kestone-black via-gray-900 to-kestone-black overflow-hidden">
//             {/* Animated Background Elements */}
//             <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-20 left-10 w-72 h-72 bg-kestone-red rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//             </div>

//             <div className="container mx-auto px-6 max-w-7xl relative z-10">
//                 {/* Main Hero Content */}
//                 <motion.div
//                     className="text-center mb-20"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <motion.div
//                         className="inline-block mb-6"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <span className="inline-flex items-center gap-2 px-6 py-3 bg-kestone-red/20 border border-kestone-red rounded-full text-kestone-red font-bold text-sm uppercase tracking-widest">
//                             <Sparkles size={16} />
//                             Our Visual Journey
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.3 }}
//                     >
//                         From Legacy to<br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-kestone-red via-pink-500 to-purple-500">
//                             Legendary
//                         </span>
//                     </motion.h1>

//                     <motion.p
//                         className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.5 }}
//                     >
//                         Every brand we&apos;ve built carries a piece of our soul. Every campaign tells a story.
//                         Every creative piece is a testament to our unwavering commitment to excellence.
//                     </motion.p>
//                 </motion.div>

//                 {/* Achievement Stats */}
//                 <motion.div
//                     className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.7 }}
//                 >
//                     {achievements.map((achievement, idx) => (
//                         <motion.div
//                             key={idx}
//                             className="text-center group"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
//                         >
//                             <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-kestone-red/20 rounded-full group-hover:bg-kestone-red/30 transition-colors duration-300">
//                                 <achievement.icon className="text-kestone-red" size={28} />
//                             </div>
//                             <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
//                                 {achievement.number}
//                             </div>
//                             <div className="text-sm text-gray-400 uppercase tracking-wide font-body">
//                                 {achievement.label}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* Timeline */}
//                 <motion.div
//                     className="relative"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                 >
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
//                             The Journey That Shaped Us
//                         </h2>
//                         <p className="text-gray-400 font-body">
//                             Every milestone, every challenge, every triumph—this is our story
//                         </p>
//                     </div>

//                     {/* Timeline Line */}
//                     <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-kestone-red via-purple-500 to-kestone-red opacity-30" />

//                     <div className="space-y-12 md:space-y-16">
//                         {milestones.map((milestone, idx) => (
//                             <motion.div
//                                 key={idx}
//                                 className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                                     }`}
//                                 initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                             >
//                                 {/* Content */}
//                                 <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
//                                     <div className="inline-block px-4 py-2 bg-kestone-red/20 rounded-full mb-3">
//                                         <span className="text-kestone-red font-heading font-bold text-lg">
//                                             {milestone.year}
//                                         </span>
//                                     </div>
//                                     <h3 className="text-2xl font-heading font-bold text-white mb-2">
//                                         {milestone.event}
//                                     </h3>
//                                     <p className="text-gray-400 font-body">
//                                         {milestone.description}
//                                     </p>
//                                 </div>

//                                 {/* Center Dot */}
//                                 <div className="relative flex-shrink-0">
//                                     <div className="w-6 h-6 bg-kestone-red rounded-full border-4 border-kestone-black shadow-lg shadow-kestone-red/50" />
//                                     <div className="absolute inset-0 w-6 h-6 bg-kestone-red rounded-full animate-ping opacity-75" />
//                                 </div>

//                                 {/* Spacer for alignment */}
//                                 <div className="flex-1 hidden md:block" />
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Emotional Closing */}
//                 <motion.div
//                     className="text-center mt-24 max-w-4xl mx-auto"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <div className="p-8 md:p-12 bg-gradient-to-br from-kestone-red/10 to-purple-500/10 rounded-3xl border border-kestone-red/20 backdrop-blur-sm">
//                         <p className="text-xl md:text-2xl text-white font-body leading-relaxed italic">
//                             &ldquo;This isn&apos;t just business. This is our life&apos;s work. Every brand we touch becomes part of our legacy.
//                             Every success story fuels our passion. We didn&apos;t just restart—we <span className="font-bold text-kestone-red">reignited</span>
//                             with a fire that burns brighter than ever.&rdquo;
//                         </p>
//                         <div className="mt-6 text-gray-400 font-heading">
//                             — The MarkTale Team
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }























// 'use client';

// import React, { useCallback, useRef } from 'react';
// import {
//     motion,
//     useMotionValue,
//     useSpring,
//     useTransform,
//     useScroll,
// } from 'framer-motion';
// import { Sparkles, TrendingUp, Users, Award, Rocket } from 'lucide-react';

// // ─── Content ────────────────────────────────────────────────────────────────

// const milestones = [
//     { year: '2014', event: 'First Brand, First Bet', description: 'Took on our first client with nothing but conviction and a laptop.' },
//     { year: '2017', event: 'Past the Tipping Point', description: 'Crossed our first ten brands and started saying no to the wrong ones.' },
//     { year: '2020', event: 'Beyond Borders', description: 'Took on clients across Canada, the US, and the UAE for the first time.' },
//     { year: '2023', event: 'A Deliberate Reset', description: 'Rebuilt our process from scratch — fewer clients, deeper work.' },
//     { year: '2026', event: 'What We\'re Building Now', description: 'Full-stack teams embedded in product, growth, and brand — not just campaigns.' },
// ];

// const achievements = [
//     { icon: Users, number: '500K+', label: 'Audiences Reached', accent: 'from-blue-500 to-cyan-400' },
//     { icon: Award, number: '30+', label: 'Brands Built', accent: 'from-violet-500 to-purple-400' },
//     { icon: TrendingUp, number: '10M+', label: 'Impressions Generated', accent: 'from-emerald-500 to-teal-400' },
//     { icon: Sparkles, number: '12', label: 'Years in Motion', accent: 'from-amber-500 to-orange-400' },
// ];

// // ─── 3D tilt achievement card ────────────────────────────────────────────────

// function AchievementCard({ item, index }: { item: (typeof achievements)[number]; index: number }) {
//     const ref = useRef<HTMLDivElement>(null);
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);
//     const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
//     const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
//     const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

//     const handleMouseMove = useCallback(
//         (e: React.MouseEvent<HTMLDivElement>) => {
//             const rect = ref.current?.getBoundingClientRect();
//             if (!rect) return;
//             mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
//             mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
//         },
//         [mouseX, mouseY]
//     );
//     const handleMouseLeave = useCallback(() => {
//         mouseX.set(0);
//         mouseY.set(0);
//     }, [mouseX, mouseY]);

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//             style={{ perspective: 900 }}
//         >
//             <motion.div
//                 ref={ref}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 whileHover={{ scale: 1.04 }}
//                 style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
//                 className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-7 text-center"
//             >
//                 <div
//                     className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500`}
//                     style={{ transform: 'translateZ(-30px)' }}
//                 />
//                 <div
//                     className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.accent} mb-4 shadow-lg`}
//                     style={{ transform: 'translateZ(30px)' }}
//                 >
//                     <item.icon size={22} className="text-white" />
//                 </div>
//                 <div className="relative text-3xl sm:text-4xl font-extrabold text-white mb-1.5" style={{ transform: 'translateZ(20px)' }}>
//                     {item.number}
//                 </div>
//                 <div className="relative text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-medium" style={{ transform: 'translateZ(20px)' }}>
//                     {item.label}
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// }

// // ─── Timeline node with 3D tilt ──────────────────────────────────────────────

// function TimelineItem({ milestone, index }: { milestone: (typeof milestones)[number]; index: number }) {
//     const isEven = index % 2 === 0;
//     const ref = useRef<HTMLDivElement>(null);
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);
//     const springConfig = { stiffness: 200, damping: 24 };
//     const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
//     const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

//     const handleMouseMove = useCallback(
//         (e: React.MouseEvent<HTMLDivElement>) => {
//             const rect = ref.current?.getBoundingClientRect();
//             if (!rect) return;
//             mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
//             mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
//         },
//         [mouseX, mouseY]
//     );
//     const handleMouseLeave = useCallback(() => {
//         mouseX.set(0);
//         mouseY.set(0);
//     }, [mouseX, mouseY]);

//     return (
//         <motion.div
//             className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//             initial={{ opacity: 0, x: isEven ? -40 : 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: '-60px' }}
//             transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
//         >
//             <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
//                 <motion.div
//                     ref={ref}
//                     onMouseMove={handleMouseMove}
//                     onMouseLeave={handleMouseLeave}
//                     style={{ perspective: 800, rotateX, rotateY, transformStyle: 'preserve-3d' }}
//                     className={`inline-block rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-5 sm:p-6 max-w-md ${isEven ? 'md:ml-auto' : ''}`}
//                 >
//                     <div
//                         className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 mb-3"
//                         style={{ transform: 'translateZ(20px)' }}
//                     >
//                         <span className="text-white font-bold text-sm">{milestone.year}</span>
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ transform: 'translateZ(15px)' }}>
//                         {milestone.event}
//                     </h3>
//                     <p className="text-gray-400 text-sm sm:text-base leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
//                         {milestone.description}
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Center node */}
//             <div className="relative shrink-0 z-10">
//                 <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full border-4 border-gray-950 shadow-lg shadow-blue-500/50" />
//                 <div className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full animate-ping opacity-40" />
//             </div>

//             <div className="flex-1 hidden md:block" />
//         </motion.div>
//     );
// }

// // ─── Section ────────────────────────────────────────────────────────────────

// export default function VisualJourneyHero() {
//     const sectionRef = useRef<HTMLElement>(null);
//     const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
//     const lineHeight = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%']);

//     return (
//         <section
//             ref={sectionRef}
//             className="relative py-24 sm:py-32 bg-gray-950 overflow-hidden"
//         >
//             {/* Ambient background */}
//             <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//                 <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-gray-950 to-gray-950" />
//                 <motion.div
//                     className="absolute top-10 left-1/4 w-[420px] h-[420px] rounded-full bg-blue-600/15 blur-3xl"
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//                 />
//                 <motion.div
//                     className="absolute bottom-10 right-1/4 w-[460px] h-[460px] rounded-full bg-violet-600/15 blur-3xl"
//                     animate={{ scale: [1, 1.12, 1] }}
//                     transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
//                 />
//                 {/* Grid overlay */}
//                 <div
//                     className="absolute inset-0 opacity-[0.03]"
//                     style={{
//                         backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
//                         backgroundSize: '56px 56px',
//                     }}
//                 />
//             </div>

//             <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
//                 {/* Hero content */}
//                 <motion.div
//                     className="text-center mb-16 sm:mb-20"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                 >
//                     <motion.span
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: 0.15 }}
//                         className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] border border-white/10 rounded-full text-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-7"
//                     >
//                         <Rocket size={14} />
//                         12 Years of Building
//                     </motion.span>

//                     <motion.h1
//                         className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-7 leading-[1.05] tracking-tight"
//                         initial={{ opacity: 0, y: 24 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.25 }}
//                     >
//                         Every Brand Has<br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
//                             A Starting Point
//                         </span>
//                     </motion.h1>

//                     <motion.p
//                         className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.7, delay: 0.4 }}
//                     >
//                         This is ours — twelve years of client work, format shifts, and one deliberate
//                         restart, distilled into the milestones that actually changed how we operate.
//                     </motion.p>
//                 </motion.div>

//                 {/* Achievement cards */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-28">
//                     {achievements.map((item, i) => (
//                         <AchievementCard key={item.label} item={item} index={i} />
//                     ))}
//                 </div>

//                 {/* Timeline */}
//                 <div className="relative">
//                     <motion.div
//                         className="text-center mb-14 sm:mb-16"
//                         initial={{ opacity: 0, y: 16 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
//                             The Timeline
//                         </h2>
//                         <p className="text-gray-400 text-sm sm:text-base">
//                             Five moments that changed how we build brands.
//                         </p>
//                     </motion.div>

//                     {/* Animated timeline line — fills in on scroll */}
//                     <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white/10">
//                         <motion.div
//                             className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400"
//                             style={{ height: lineHeight }}
//                         />
//                     </div>

//                     <div className="space-y-12 md:space-y-16">
//                         {milestones.map((milestone, i) => (
//                             <TimelineItem key={milestone.year} milestone={milestone} index={i} />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Closing statement */}
//                 <motion.div
//                     className="text-center mt-24 sm:mt-28 max-w-3xl mx-auto"
//                     initial={{ opacity: 0, y: 24 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <div className="relative rounded-3xl p-8 sm:p-12 bg-white/[0.04] backdrop-blur-md border border-white/10 overflow-hidden">
//                         <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl" />
//                         <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-violet-500/10 blur-3xl" />
//                         <p className="relative text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed italic">
//                             "We didn't scale by taking on everything. We scaled by turning down the work
//                             that didn't fit — and going deeper on the work that did."
//                         </p>
//                         <div className="relative mt-6 text-gray-500 font-semibold text-sm sm:text-base">
//                             — The Marktale World Team
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }
















'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useScroll,
    AnimatePresence,
} from 'framer-motion';
import { Sparkles, TrendingUp, Users, Award, Rocket, ArrowUpRight } from 'lucide-react';

// ─── Content ────────────────────────────────────────────────────────────────

const milestones = [
    { year: '2014', event: 'First Brand, First Bet', description: 'Took on our first client with nothing but conviction and a laptop.', accent: 'from-blue-500 to-cyan-400' },
    { year: '2017', event: 'Past the Tipping Point', description: 'Crossed our first ten brands and started saying no to the wrong ones.', accent: 'from-violet-500 to-purple-400' },
    { year: '2020', event: 'Beyond Borders', description: 'Took on clients across Canada, the US, and the UAE for the first time.', accent: 'from-emerald-500 to-teal-400' },
    { year: '2023', event: 'A Deliberate Reset', description: 'Rebuilt our process from scratch — fewer clients, deeper work.', accent: 'from-amber-500 to-orange-400' },
    { year: '2026', event: "What We're Building Now", description: 'Full-stack teams embedded in product, growth, and brand — not just campaigns.', accent: 'from-rose-500 to-pink-400' },
];

const achievements = [
    { icon: Users, number: '500K+', label: 'Audiences Reached', accent: 'from-blue-500 to-cyan-400' },
    { icon: Award, number: '30+', label: 'Brands Built', accent: 'from-violet-500 to-purple-400' },
    { icon: TrendingUp, number: '10M+', label: 'Impressions Generated', accent: 'from-emerald-500 to-teal-400' },
    { icon: Sparkles, number: '12', label: 'Years in Motion', accent: 'from-amber-500 to-orange-400' },
];

// ─── 3D tilt achievement card ────────────────────────────────────────────────

function AchievementCard({ item, index }: { item: (typeof achievements)[number]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 900 }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.04 }}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="group relative rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 p-6 sm:p-7 text-center shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300"
            >
                <div
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    style={{ transform: 'translateZ(-30px)' }}
                />
                <div
                    className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.accent} mb-4 shadow-lg`}
                    style={{ transform: 'translateZ(30px)' }}
                >
                    <item.icon size={22} className="text-white" />
                </div>
                <div className="relative text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1.5" style={{ transform: 'translateZ(20px)' }}>
                    {item.number}
                </div>
                <div className="relative text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium" style={{ transform: 'translateZ(20px)' }}>
                    {item.label}
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Editorial milestone row ─────────────────────────────────────────────────
// Big ghost numeral + card, no alternating sides — reads top to bottom like
// a magazine feature, with an IntersectionObserver driving the "active" state.

function MilestoneRow({
    milestone,
    index,
    total,
    onActive,
}: {
    milestone: (typeof milestones)[number];
    index: number;
    total: number;
    onActive: (i: number) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) onActive(index);
            },
            { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [index, onActive]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start gap-5 sm:gap-8 lg:gap-12 py-8 sm:py-10 border-b border-gray-100 last:border-b-0"
        >
            {/* Ghost numeral */}
            <div className="hidden sm:block relative shrink-0 w-24 lg:w-32 select-none">
                <span
                    className={`text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${milestone.accent} opacity-90`}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${milestone.accent} text-white text-xs font-bold shadow-sm`}
                    >
                        {milestone.year}
                    </span>
                    <span className="sm:hidden text-2xl font-extrabold text-gray-200">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2.5 leading-tight">
                    {milestone.event}
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
                    {milestone.description}
                </p>
            </div>

            {/* Progress marker */}
            <div className="hidden lg:flex flex-col items-center shrink-0 self-stretch">
                <ArrowUpRight size={16} className="text-gray-300" />
            </div>
        </motion.div>
    );
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function VisualJourneyHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start center', 'end center'],
    });
    const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />
                <motion.div
                    className="absolute -top-24 -right-24 w-[280px] sm:w-[460px] lg:w-[600px] h-[280px] sm:h-[460px] lg:h-[600px] rounded-full bg-gradient-to-br from-blue-200/30 via-violet-200/20 to-transparent blur-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-[220px] sm:w-[340px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-blue-100/20 to-transparent blur-2xl"
                    animate={{ scale: [1, 1.07, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Hero content */}
                <motion.div
                    className="text-center mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-full uppercase tracking-widest mb-7"
                    >
                        <Rocket size={14} />
                        12 Years of Building
                    </motion.span>

                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-7 leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        Every Brand Has<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400">
                            A Starting Point
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        This is ours — twelve years of client work, format shifts, and one deliberate
                        restart, distilled into the milestones that actually changed how we operate.
                    </motion.p>
                </motion.div>

                {/* Achievement cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-28">
                    {achievements.map((item, i) => (
                        <AchievementCard key={item.label} item={item} index={i} />
                    ))}
                </div>

                {/* ─── Editorial Timeline ─── */}
                <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
                    {/* Sticky side rail — desktop only */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-28">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                                The Timeline
                            </p>
                            <div className="relative pl-5">
                                <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-200" />
                                <motion.div
                                    className="absolute left-0 top-1 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400"
                                    style={{ height: railHeight }}
                                />
                                <div className="space-y-6">
                                    {milestones.map((m, i) => (
                                        <div key={m.year} className="relative">
                                            <span
                                                className={`absolute -left-[22px] top-1 w-2 h-2 rounded-full transition-colors duration-300 ${
                                                    i === activeIndex ? `bg-gradient-to-br ${m.accent}` : 'bg-gray-300'
                                                }`}
                                            />
                                            <p
                                                className={`text-sm font-bold transition-colors duration-300 ${
                                                    i === activeIndex ? 'text-gray-900' : 'text-gray-300'
                                                }`}
                                            >
                                                {m.year}
                                            </p>
                                            <AnimatePresence>
                                                {i === activeIndex && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="text-xs text-gray-500 mt-0.5 overflow-hidden"
                                                    >
                                                        {m.event}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestone list */}
                    <div ref={timelineRef}>
                        <div className="mb-8 lg:hidden">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                                The Timeline
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base">
                                Five moments that changed how we build brands.
                            </p>
                        </div>
                        {milestones.map((milestone, i) => (
                            <MilestoneRow
                                key={milestone.year}
                                milestone={milestone}
                                index={i}
                                total={milestones.length}
                                onActive={setActiveIndex}
                            />
                        ))}
                    </div>
                </div>

                {/* Closing statement */}
                <motion.div
                    className="text-center mt-24 sm:mt-28 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative rounded-3xl p-8 sm:p-12 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl shadow-blue-500/10 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-200/25 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-violet-200/20 blur-3xl" />
                        <p className="relative text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                            "We didn't scale by taking on everything. We scaled by turning down the work
                            that didn't fit — and going deeper on the work that did."
                        </p>
                        <div className="relative mt-6 text-gray-400 font-semibold text-sm sm:text-base">
                            — The Marktale World Team
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}