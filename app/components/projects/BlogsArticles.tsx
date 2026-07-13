


'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────
// Evergreen, informative marketing content — not tied to unverified client
// results, so nothing here needs numbers you can't stand behind publicly.

interface Article {
    id: number;
    title: string;
    category: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    tags: string[];
}

const CATEGORIES = ['All', 'SEO', 'Paid Ads', 'Branding', 'Content', 'Strategy'];

const CATEGORY_ACCENT: Record<string, string> = {
    SEO: 'from-emerald-500 to-teal-400',
    'Paid Ads': 'from-amber-500 to-orange-400',
    Branding: 'from-violet-500 to-purple-400',
    Content: 'from-pink-500 to-rose-400',
    Strategy: 'from-blue-500 to-cyan-400',
};

const articles: Article[] = [
    {
        id: 1,
        title: 'Why Most SEO Strategies Fail in the First 90 Days',
        category: 'SEO',
        excerpt:
            'Most brands abandon SEO right before it starts working. Here\'s the realistic timeline, the early signals that actually matter, and what to fix before you write off organic search.',
        image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200&q=80',
        date: 'Jun 18, 2026',
        readTime: '7 min read',
        tags: ['Organic Growth', 'SEO Strategy'],
    },
    {
        id: 2,
        title: 'The Real Cost of a Bad Ad Account Structure',
        category: 'Paid Ads',
        excerpt:
            'Poor campaign architecture quietly inflates CPA more than any bidding strategy ever will. A breakdown of how to structure accounts so your budget actually finds your best customers.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        date: 'Jun 10, 2026',
        readTime: '9 min read',
        tags: ['Performance Marketing', 'Google Ads'],
    },
    {
        id: 3,
        title: 'Brand Positioning: The One Slide Every Founder Skips',
        category: 'Branding',
        excerpt:
            'Before logos or color palettes, every strong brand answers one uncomfortable question: who are you not for? A practical framework for positioning that actually differentiates.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
        date: 'Jun 3, 2026',
        readTime: '6 min read',
        tags: ['Brand Strategy', 'Positioning'],
    },
    {
        id: 4,
        title: 'Content That Converts vs. Content That Just Performs',
        category: 'Content',
        excerpt:
            'Views and engagement are vanity if they never touch revenue. How to build a content system that\'s judged on pipeline contribution, not just reach.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
        date: 'May 27, 2026',
        readTime: '8 min read',
        tags: ['Content Marketing', 'Conversion'],
    },
    {
        id: 5,
        title: 'How to Read a Marketing Dashboard Like an Operator',
        category: 'Strategy',
        excerpt:
            'Most dashboards report activity, not health. The handful of metrics that actually predict whether a growth engine is working — and the ones that just look good in a deck.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        date: 'May 19, 2026',
        readTime: '10 min read',
        tags: ['Analytics', 'Growth Strategy'],
    },
    {
        id: 6,
        title: 'Email Marketing Isn\'t Dead — Your List Hygiene Is the Problem',
        category: 'Content',
        excerpt:
            'Deliverability, not creativity, is why most email programs underperform. A practical audit checklist to fix sender reputation before you touch a single subject line.',
        image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80',
        date: 'May 12, 2026',
        readTime: '6 min read',
        tags: ['Email Marketing', 'Retention'],
    },
];

const featured = articles[0];
const rest = articles.slice(1);

// ─── Category switcher ──────────────────────────────────────────────────────

function CategorySwitcher({
    active,
    onSelect,
}: {
    active: string;
    onSelect: (c: string) => void;
}) {
    return (
        <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-1 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
                const isActive = cat === active;
                return (
                    <button
                        key={cat}
                        onClick={() => onSelect(cat)}
                        className="relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shrink-0"
                        style={{ color: isActive ? 'white' : '#6b7280' }}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="blog-cat-pill"
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-md shadow-blue-500/25"
                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                );
            })}
        </div>
    );
}

// ─── Featured Article (glass hero card) ─────────────────────────────────────

function FeaturedArticle({ article }: { article: Article }) {
    const accent = CATEGORY_ACCENT[article.category] ?? 'from-blue-500 to-violet-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link href={`/blogs/${article.id}`}>
                <div className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/60 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/15 transition-shadow duration-500">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative aspect-[16/11] md:aspect-auto overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/5" />
                            <div className={`absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-gradient-to-r ${accent} text-white text-[11px] font-bold uppercase tracking-wide shadow-md`}>
                                Featured
                            </div>
                        </div>

                        <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                            <span className={`inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${accent} bg-opacity-10 text-xs font-bold uppercase tracking-wide mb-4`}
                                style={{ color: 'white', background: undefined }}
                            >
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white`}>
                                    {article.category}
                                </span>
                            </span>

                            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                                {article.title}
                            </h3>

                            <p className="text-gray-500 text-base leading-relaxed mb-6">
                                {article.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-medium mb-6">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={13} />
                                    {article.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={13} />
                                    {article.readTime}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm group-hover:gap-3.5 transition-all duration-300">
                                Read Full Article
                                <ArrowRight size={16} className="text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// ─── 3D Tilt Article Card ────────────────────────────────────────────────────

function ArticleCard({ article, index }: { article: Article; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

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

    const accent = CATEGORY_ACCENT[article.category] ?? 'from-blue-500 to-violet-500';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1200 }}
        >
            <Link href={`/blogs/${article.id}`} className="block group h-full">
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.015 }}
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    className="relative h-full rounded-2xl"
                >
                    <div
                        className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500`}
                        style={{ transform: 'translateZ(-40px)' }}
                    />

                    <div className="relative h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-shadow duration-500">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ transform: 'translateZ(20px) scale(1.02)' }}
                            />
                            <div
                                className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white text-[10px] font-bold uppercase tracking-wide shadow-md`}
                                style={{ transform: 'translateZ(30px)' }}
                            >
                                {article.category}
                            </div>
                        </div>

                        <div className="p-5 sm:p-6 flex-1 flex flex-col" style={{ transform: 'translateZ(10px)' }}>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 leading-snug line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                                {article.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                                {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium mb-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={12} />
                                    {article.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={12} />
                                    {article.readTime}
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 group-hover:gap-2.5 transition-all duration-300">
                                Read More
                                <ArrowRight size={14} className="text-blue-600" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function BlogsArticles() {
    const [filter, setFilter] = useState('All');

    const filteredRest = useMemo(
        () => (filter === 'All' ? rest : rest.filter((a) => a.category === filter)),
        [filter]
    );

    const showFeatured = filter === 'All' || filter === featured.category;

    return (
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/25 to-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-cyan-200/20 via-blue-100/15 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                        <BookOpen size={12} />
                        Knowledge Hub
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08] mb-5">
                        Insights That{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                            Move Metrics
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Practical breakdowns on SEO, paid media, branding, and growth strategy —
                        written for operators, not algorithms.
                    </p>
                </motion.div>

                {/* Category switcher */}
                <motion.div
                    className="mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <CategorySwitcher active={filter} onSelect={setFilter} />
                </motion.div>

                {/* Featured */}
                <AnimatePresence mode="wait">
                    {showFeatured && (
                        <div className="mb-10 sm:mb-14">
                            <FeaturedArticle article={featured} />
                        </div>
                    )}
                </AnimatePresence>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredRest.map((article, i) => (
                            <ArticleCard key={article.id} article={article} index={i} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All CTA */}
                <motion.div
                    className="text-center mt-14 sm:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/blogs">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center gap-2.5 bg-gray-900 text-white font-semibold text-sm px-7 py-4 rounded-xl overflow-hidden group shadow-lg shadow-gray-900/20"
                        >
                            <span className="relative z-10 flex items-center gap-2.5">
                                View All Articles
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}