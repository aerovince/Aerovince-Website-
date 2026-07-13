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
                            — The Aerovince Team
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}