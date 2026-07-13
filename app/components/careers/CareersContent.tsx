'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle,
    X,
    Send,
    CheckCircle2,
    Loader2,
    TrendingUp,
    Globe,
    Users,
    ChevronDown,
    ChevronUp,
    Sparkles,
    MapPin,
    Clock,
    Zap,
    Star,
    Trophy,
    Target,
    Code2,
    PenTool,
    BarChart3,
    Megaphone,
    Play
} from 'lucide-react';

// ─── Animation Variants ────────────────────────────────────────────────────
import type { Variants } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: EASE }
    })
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' as const } }
};

const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: EASE }
    })
};

// ─── Counter Animation ─────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const heroStats = [
    { value: 150, suffix: '+', label: 'Brands Scaled' },
    { value: 98, suffix: '%', label: 'Client Retention' },
    { value: 50, suffix: '+', label: 'Team Members' },
    { value: 6, suffix: '+', label: 'Global Countries' },
];

const whyUs = [
    {
        icon: <TrendingUp size={20} />,
        title: 'Fast-Growing Studio',
        desc: 'Building across 150+ brand positions. The team is on an all-time high trajectory.',
        stat: '150+ brands',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: <Globe size={20} />,
        title: 'Remote-Friendly',
        desc: 'Work from anywhere on earth. Flexible roles, async culture, and your favourite setup.',
        stat: '6+ countries',
        color: 'bg-indigo-50 text-indigo-600',
    },
    {
        icon: <Trophy size={20} />,
        title: 'Real Brand Projects',
        desc: 'Work on live client accounts — no mock projects, no junior shadowing.',
        stat: '30+ brands',
        color: 'bg-sky-50 text-sky-600',
    },
    {
        icon: <BarChart3 size={20} />,
        title: 'Growth-Focused',
        desc: 'Learning, mentorship, and personal development are built into our culture by default.',
        stat: '200% avg growth',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: <Users size={20} />,
        title: 'Small Team, Big Impact',
        desc: 'No corporate inertia here. Every person meaningfully moves the direction of things.',
        stat: '50+ team',
        color: 'bg-slate-100 text-slate-700',
    },
    {
        icon: <Zap size={20} />,
        title: 'AI-First Workflow',
        desc: 'We use cutting-edge AI tools so you spend less time on grunt work and more on creative.',
        stat: 'AI powered',
        color: 'bg-indigo-50 text-indigo-600',
    },
];

const positions = [
    {
        icon: <TrendingUp size={18} />,
        title: 'Senior Growth Strategist',
        location: 'New Delhi / Remote',
        type: 'Full-time',
        dept: 'Growth',
        desc: 'Lead go-to-market strategies for our Series A clients. You live and breathe CAC, LTV, and retention metrics.',
    },
    {
        icon: <Code2 size={18} />,
        title: 'Full Stack Developer (Next.js)',
        location: 'Remote',
        type: 'Full-time',
        dept: 'Engineering',
        desc: 'Build pixel-perfect digital experiences. Mastery of React, Node.js, and modern CSS frameworks required.',
    },
    {
        icon: <Megaphone size={18} />,
        title: 'Content Marketing Lead',
        location: 'New Delhi',
        type: 'Hybrid',
        dept: 'Content',
        desc: 'Shape the voice of high-growth startups. Manage editorial calendars and lead a team of AI + Human writers.',
    },
    {
        icon: <Target size={18} />,
        title: 'Performance Marketing Executive',
        location: 'Remote',
        type: 'Full-time',
        dept: 'Performance',
        desc: 'Manage and optimise paid campaigns across Meta and Google. ROAS-obsessed mindset is a must.',
    },
    {
        icon: <Globe size={18} />,
        title: 'Content & Social Media Manager',
        location: 'New Delhi',
        type: 'Full-time',
        dept: 'Social',
        desc: 'Create compelling social-first content that builds communities and drives engagement at scale.',
    },
    {
        icon: <PenTool size={18} />,
        title: 'Motion Designer',
        location: 'Remote',
        type: 'Full-time',
        dept: 'Design',
        desc: 'Bring brands to life through motion. Proficiency in After Effects and Premiere Pro required.',
    },
    {
        icon: <Star size={18} />,
        title: 'Design Intern',
        location: 'New Delhi',
        type: 'Internship',
        dept: 'Design',
        desc: 'A 3-month hands-on stint working alongside senior designers on live brand projects.',
    },
];

const perks = [
    'Remote-first culture',
    'Equity packages',
    'Annual learning budget ₹25k',
    'Mental health support',
    'Global team retreats',
    'Latest tech equipment',
    'Flexible work hours',
    'Health insurance',
];

const typeBadge: Record<string, string> = {
    'Full-time': 'bg-blue-100 text-blue-700 border border-blue-200',
    Hybrid: 'bg-purple-100 text-purple-700 border border-purple-200',
    Internship: 'bg-amber-100 text-amber-700 border border-amber-200',
};

// ─── Apply Modal ───────────────────────────────────────────────────────────
function ApplyModal({ isOpen, onClose, jobTitle }: { isOpen: boolean; onClose: () => void; jobTitle: string }) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', portfolioUrl: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    }

    async function handleSubmit() {
        if (!form.name || !form.email || !form.phone) { setErrorMsg('Name, email and phone are required.'); return; }
        setStatus('submitting'); setErrorMsg('');
        try {
            const res = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, role: jobTitle }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error || 'Something went wrong');
            setStatus('success');
            setForm({ name: '', email: '', phone: '', portfolioUrl: '', message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    }

    function handleClose() { setStatus('idle'); setErrorMsg(''); onClose(); }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 30 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={e => e.stopPropagation()}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
                    >
                        {/* Gradient header */}
                        <div className="bg-gradient-to-br from-black via-gray-900 to-blue-950 px-7 py-6 flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Applying for</p>
                                </div>
                                <h3 className="text-white text-xl font-extrabold leading-tight">{jobTitle}</h3>
                                <p className="text-gray-400 text-sm mt-1">We&apos;ll get back within 24 hours</p>
                            </div>
                            <button onClick={handleClose} className="text-white/50 hover:text-white transition-colors mt-1">
                                <X size={22} />
                            </button>
                        </div>

                        <div className="p-7">
                            {status === 'success' ? (
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center text-center py-8">
                                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                                        <CheckCircle2 className="text-blue-600" size={42} />
                                    </div>
                                    <h4 className="text-2xl font-extrabold text-black mb-2">Application Sent! 🎉</h4>
                                    <p className="text-gray-500 text-sm mb-7 leading-relaxed">
                                        Thanks for applying to <strong className="text-black">{jobTitle}</strong>. Our team will review your profile and reach out within 24 hours.
                                    </p>
                                    <button onClick={handleClose}
                                        className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300">
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone *</label>
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Portfolio / LinkedIn / Resume Link</label>
                                        <input type="url" name="portfolioUrl" value={form.portfolioUrl} onChange={handleChange} placeholder="https://yourportfolio.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Why are you a great fit?</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                                            placeholder="Tell us what excites you about this role and what you'd bring to the team..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium resize-none" />
                                    </div>
                                    {(status === 'error' || errorMsg) && (
                                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errorMsg}</p>
                                    )}
                                    <button onClick={handleSubmit} disabled={status === 'submitting'}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-200">
                                        {status === 'submitting'
                                            ? <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                                            : <><Send size={16} /> Submit Application</>}
                                    </button>
                                    <p className="text-center text-xs text-gray-400">Your information is 100% secure. No spam, ever.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────
export default function CareersContent() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [expandedJob, setExpandedJob] = useState<string | null>(null);
    const [formRole, setFormRole] = useState('');
    const [bottomForm, setBottomForm] = useState({ name: '', email: '', portfolioUrl: '', message: '' });
    const [bottomStatus, setBottomStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [bottomError, setBottomError] = useState('');

    const heroRef = useRef<HTMLElement | null>(null);
    const applyFormRef = useRef<HTMLElement | null>(null);
    const openRolesRef = useRef<HTMLElement | null>(null);

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 80]);
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

    function scrollToForm(role?: string) {
        if (role) setFormRole(role);
        applyFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function scrollToRoles() {
        openRolesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleBottomChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setBottomForm(p => ({ ...p, [e.target.name]: e.target.value }));
    }

    async function handleBottomSubmit() {
        if (!bottomForm.name || !bottomForm.email || !formRole) {
            setBottomError('Name, email and role selection are required.');
            return;
        }
        setBottomStatus('submitting'); setBottomError('');
        try {
            const res = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: bottomForm.name, email: bottomForm.email, phone: '—', role: formRole, portfolioUrl: bottomForm.portfolioUrl, message: bottomForm.message }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error || 'Something went wrong');
            setBottomStatus('success');
            setBottomForm({ name: '', email: '', portfolioUrl: '', message: '' });
            setFormRole('');
        } catch (err) {
            setBottomStatus('error');
            setBottomError(err instanceof Error ? err.message : 'Something went wrong.');
        }
    }

    return (
        <>
            {/* ════════════════════════════════════════
                HERO — BLACK
            ════════════════════════════════════════ */}
            <section ref={heroRef} className="relative bg-black overflow-hidden min-h-[92vh] flex flex-col justify-center">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
                {/* Blue glow orbs */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-800/15 rounded-full blur-[100px] pointer-events-none" />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
                                className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm text-white text-xs font-bold px-5 py-2 rounded-full mb-8 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Aerovince is Hiring
                            </motion.div>

                            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
                                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                                Join the team<br />
                                building{' '}
                                <span className="relative inline-block">
                                    <span className="text-blue-500">digital</span>
                                </span>
                                <br />
                                <span className="text-blue-500">empires.</span>
                            </motion.h1>

                            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
                                className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10">
                                We&apos;re Aerovince — an AI-powered creative agency. Remote-first, growth-obsessed, and looking for designers, developers, and creators who build things that actually matter.
                            </motion.p>

                            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
                                className="flex flex-wrap gap-4">
                                <button onClick={scrollToRoles}
                                    className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg">
                                    View Open Roles
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button onClick={() => scrollToForm()}
                                    className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25">
                                    <Play size={14} fill="white" />
                                    Apply Now
                                </button>
                            </motion.div>
                        </div>

                        {/* Right — Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {heroStats.map((s, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
                                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-blue-500/40 transition-all duration-300">
                                    <p className="text-4xl font-extrabold text-white mb-1">
                                        <AnimatedCounter target={s.value} suffix={s.suffix} />
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">{s.label}</p>
                                    <div className="mt-3 h-[2px] w-8 bg-blue-600 rounded group-hover:w-14 transition-all duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom metrics strip */}
                    <motion.div variants={fadeIn} initial="hidden" animate="visible"
                        className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            { n: 50, s: '+', l: 'Team Sessions' },
                            { n: 200, s: '%', l: 'Avg. Growth' },
                            { n: 4, s: '+', l: 'Awards & Excellence' },
                            { n: 10, s: '+', l: 'Industry Awards' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-extrabold text-white">
                                    <AnimatedCounter target={item.n} suffix={item.s} />
                                </p>
                                <p className="text-gray-600 text-xs uppercase tracking-widest mt-1 font-medium">{item.l}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════
                WHY JOIN US — WHITE
            ════════════════════════════════════════ */}
            <section className="bg-white py-28">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Why Join Us</span>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                                A place to build<br />
                                <span className="text-gray-400">your career.</span>
                            </h2>
                            <p className="text-gray-500 max-w-sm leading-relaxed">
                                Small team. Big clients. Real impact. This is where your work actually gets seen — and felt.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUs.map((card, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                                className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 cursor-default">
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${card.color} transition-transform group-hover:scale-110 duration-300`}>
                                    {card.icon}
                                </div>
                                <h3 className="font-extrabold text-black text-base mb-2">{card.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{card.desc}</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-[2px] w-6 bg-blue-600 rounded" />
                                    <span className="text-blue-600 font-bold text-sm">{card.stat}</span>
                                </div>
                                {/* Hover accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                PERKS STRIP — BLACK
            ════════════════════════════════════════ */}
            <section className="bg-black py-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-x-10 gap-y-4 items-center justify-center">
                        {perks.map((perk, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1] as const,
                                }}
                                className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                                {perk}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                OPEN POSITIONS — WHITE/LIGHT
            ════════════════════════════════════════ */}
            <section ref={openRolesRef} className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Open Positions</span>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                                Find{' '}
                                <span className="relative">
                                    <span className="text-blue-600">your role.</span>
                                    <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4">
                                        <motion.path d="M0 2 Q100 4 200 2" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round"
                                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.22, 1, 0.36, 1] as const,
                                            }} />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-gray-500 max-w-xs leading-relaxed">Click any role to expand and see what you&apos;ll be working on.</p>
                        </div>
                    </motion.div>

                    <div className="space-y-3">
                        {positions.map((job, i) => {
                            const isOpen = expandedJob === job.title;
                            return (
                                <motion.div key={i} variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-blue-300 shadow-lg shadow-blue-50' : 'border-gray-200 hover:border-blue-200 hover:shadow-md'}`}>
                                    <div
                                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                                        onClick={() => setExpandedJob(isOpen ? null : job.title)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                                {job.icon}
                                            </div>
                                            <div className="text-left">
                                                <p className="font-extrabold text-black text-base leading-tight">{job.title}</p>
                                                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                                                        <MapPin size={11} />{job.location}
                                                    </span>
                                                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${typeBadge[job.type] ?? 'bg-gray-100 text-gray-600'}`}>
                                                        {job.type}
                                                    </span>
                                                    <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full font-medium">
                                                        {job.dept}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <div onClick={e => { e.stopPropagation(); setSelectedJob(job.title); }}
                                                className="hidden sm:flex items-center gap-2 px-5 py-2 bg-black text-white text-xs font-bold rounded-full hover:bg-blue-600 transition-all duration-300">
                                                Apply <ArrowRight size={13} />
                                            </div>
                                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-200 text-gray-400'}`}>
                                                {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }} transition={{
                                                    duration: 0.3,
                                                    ease: [0.22, 1, 0.36, 1] as const,
                                                }}
                                                className="overflow-hidden">
                                                <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-1 h-full min-h-[3rem] bg-blue-600 rounded-full flex-shrink-0 mt-1" />
                                                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{job.desc}</p>
                                                    </div>
                                                    <button onClick={() => setSelectedJob(job.title)}
                                                        className="sm:hidden flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all w-fit">
                                                        Apply Now <ArrowRight size={14} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                APPLY FORM — BLUE GRADIENT + WHITE
            ════════════════════════════════════════ */}
            <section ref={applyFormRef} className="relative bg-white py-28 overflow-hidden">
                {/* Blue accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700" />
                {/* Subtle blue bg blob */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                                <Sparkles size={12} /> Apply Now
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
                                Let&apos;s talk.
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                Send us a quick intro and we&apos;ll get back to you within 48 hours with a custom response — not a template.
                            </p>
                        </motion.div>

                        {bottomStatus === 'success' ? (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-16 bg-blue-50 rounded-3xl border border-blue-100">
                                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                                    <CheckCircle2 className="text-blue-600" size={42} />
                                </div>
                                <h4 className="text-2xl font-extrabold text-black mb-2">Application Sent! 🎉</h4>
                                <p className="text-gray-500 mb-7">Our team will review and reach out soon.</p>
                                <button onClick={() => setBottomStatus('idle')}
                                    className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-blue-600 transition-all">
                                    Submit Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-100/80 space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Name *</label>
                                        <input type="text" name="name" value={bottomForm.name} onChange={handleBottomChange} placeholder="Alex Johnson"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address *</label>
                                        <input type="email" name="email" value={bottomForm.email} onChange={handleBottomChange} placeholder="alex@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Role You&apos;re Applying For *</label>
                                    <div className="relative">
                                        <select value={formRole} onChange={e => setFormRole(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium text-gray-700 appearance-none">
                                            <option value="">Select a role...</option>
                                            {positions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Portfolio / Reference Link</label>
                                    <input type="url" name="portfolioUrl" value={bottomForm.portfolioUrl} onChange={handleBottomChange} placeholder="https://yourportfolio.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">A Short Message</label>
                                    <textarea name="message" value={bottomForm.message} onChange={handleBottomChange} rows={4}
                                        placeholder="Tell us what excites you about this role..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all text-sm font-medium resize-none" />
                                </div>

                                {bottomError && (
                                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{bottomError}</p>
                                )}

                                <button onClick={handleBottomSubmit} disabled={bottomStatus === 'submitting'}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-200 text-base">
                                    {bottomStatus === 'submitting'
                                        ? <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                                        : <><Send size={16} /> Submit Application — Free & Fast</>}
                                </button>

                                <div className="flex items-center justify-center gap-6 pt-2">
                                    {[
                                        { icon: <Clock size={13} />, text: '24hr response' },
                                        { icon: <CheckCircle size={13} />, text: '100% secure' },
                                        { icon: <Zap size={13} />, text: 'No spam ever' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                            <span className="text-blue-500">{item.icon}</span> {item.text}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ApplyModal isOpen={selectedJob !== null} onClose={() => setSelectedJob(null)} jobTitle={selectedJob ?? ''} />
        </>
    );
}