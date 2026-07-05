// import Manifesto from "../../components/about/Manifesto";
// import PhilosophyGrid from "../../components/about/PhilosophyGrid";
// import FounderQuote from "../../components/about/FounderQuote";
// import TeamCTA from "../../components/TeamCTA";
// import TeamCulture from "../../components/about/TeamCulture";

// export default function AboutPage() {
//     return (
//         <main className="min-h-screen bg-white">
//             {/* Manifesto / Hero - The Hook */}
//             <Manifesto />

//             {/* The Methodology - Grid */}
//             <PhilosophyGrid />

//             {/* Team Culture */}
//             <TeamCulture />

//             {/* The Visionary - Editorial Quote */}
//             <FounderQuote />

//             {/* Team Call to Action - Keeping this as it fits the bold vibe */}
//             <TeamCTA />
//         </main>
//     );
// }






















"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Layers,
  Users,
  Code,
  PenTool,
  Search,
  Palette,
  Megaphone,
  Star,
  Quote,
  ShieldCheck,
  Heart,
} from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PhilosophyItem {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
  span: string;
}

interface Department {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

interface Founder {
  name: string;
  role: string;
  initials: string;
  accent: string;
  quote: string;
  bio: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────

const PHILOSOPHY: PhilosophyItem[] = [
  {
    title: "Strategy First",
    subtitle: "Plan before we spend a rupee",
    desc: "Every engagement starts with a deep diagnostic of your market, competitors, and funnel — not a media plan thrown together on day one.",
    icon: Target,
    accent: "from-blue-500 to-cyan-400",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Revenue, Not Reach",
    subtitle: "Numbers that matter",
    desc: "Likes and impressions are noise. We tie every campaign to leads, bookings, and revenue — the outcomes that actually grow your business.",
    icon: TrendingUp,
    accent: "from-emerald-500 to-teal-400",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Systems That Scale",
    subtitle: "Built once, compounding forever",
    desc: "We don't just run campaigns — we build marketing infrastructure: automated funnels, AI-assisted nurturing, and conversion paths that keep working long after launch.",
    icon: Layers,
    accent: "from-violet-500 to-purple-400",
    span: "md:col-span-3 lg:col-span-3",
  },
];

const DEPARTMENTS: Department[] = [
  { name: "Social Media Strategy", icon: Users, accent: "from-pink-500 to-rose-400" },
  { name: "Performance Marketing", icon: TrendingUp, accent: "from-amber-500 to-orange-400" },
  { name: "Creative & Design", icon: Palette, accent: "from-violet-500 to-purple-400" },
  { name: "Copy & Content", icon: PenTool, accent: "from-blue-500 to-cyan-400" },
  { name: "SEO & Analytics", icon: Search, accent: "from-emerald-500 to-teal-400" },
  { name: "Web Development", icon: Code, accent: "from-cyan-500 to-blue-400" },
  { name: "Brand Strategy", icon: Megaphone, accent: "from-rose-500 to-pink-400" },
  { name: "Client Success", icon: Star, accent: "from-amber-500 to-yellow-400" },
];

const FOUNDERS: Founder[] = [
  {
    name: "Abhishek Jamle",
    role: "Co-Founder",
    initials: "AJ",
    accent: "from-blue-500 to-cyan-400",
    quote:
      "Marketing isn't about shouting louder — it's about saying the right thing to the right person at the right moment. That's what we build for every client.",
    bio: "Leads strategy and client growth at Aerovince, turning market research into campaigns that are built to convert, not just impress.",
  },
  {
    name: "Shivam Chouhan",
    role: "Co-Founder",
    initials: "SC",
    accent: "from-violet-500 to-purple-400",
    quote:
      "We don't hand off a campaign and disappear. We stay in the numbers every week — if something isn't moving the needle, we change it, fast.",
    bio: "Leads execution and performance at Aerovince, making sure every strategy turns into measurable, trackable results.",
  },
];

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "No lock-in contracts", accent: "from-emerald-500 to-teal-400" },
  { icon: Heart, label: "Dedicated team, not freelancers", accent: "from-pink-500 to-rose-400" },
  { icon: TrendingUp, label: "Results reported weekly", accent: "from-blue-500 to-cyan-400" },
];

// ─── Animation variants ─────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Shared background (matches HeroSection) ───────────────────────────────

function SectionBackground({ variant = "light" }: { variant?: "light" | "dark" }) {
  if (variant === "dark") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-950" />
        <motion.div
          className="absolute -top-24 -right-24 w-[300px] sm:w-[480px] lg:w-[600px] h-[300px] sm:h-[480px] lg:h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/15 to-transparent blur-3xl will-change-transform"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[260px] sm:w-[380px] lg:w-[460px] h-[260px] sm:h-[380px] lg:h-[460px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl will-change-transform"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
      <motion.div
        className="absolute -top-24 -right-24 w-[260px] sm:w-[420px] lg:w-[560px] h-[260px] sm:h-[420px] lg:h-[560px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-2xl will-change-transform"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[220px] sm:w-[340px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-amber-100/25 via-orange-100/15 to-transparent blur-2xl will-change-transform"
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
  );
}

// ─── 1. Hero / manifesto ────────────────────────────────────────────────────

function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden bg-gray-950 text-white py-24 sm:py-28 lg:py-32"
    >
      <SectionBackground variant="dark" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7"
        >
          <Sparkles size={13} className="text-blue-400" />
          <span className="tracking-widest uppercase">Who We Are</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.08] tracking-tight"
        >
          We don&apos;t market louder.
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            We market smarter.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Aerovince is a full-service growth partner for ambitious brands — strategy,
          performance marketing, content, and web, all built around one goal: measurable
          revenue, not vanity metrics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            className="w-1 h-16 sm:h-20 rounded-full bg-gradient-to-b from-blue-500 to-violet-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 2. Philosophy grid ─────────────────────────────────────────────────────

function PhilosophyCard({ item, index }: { item: PhilosophyItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      className={`${item.span} relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
    >
      <div
        className={`absolute -inset-8 bg-gradient-to-br ${item.accent} opacity-0 blur-2xl transition-opacity duration-500`}
        style={{ opacity: hovered ? 0.08 : 0 }}
      />
      <div
        className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 shadow-md transition-transform duration-300`}
        style={{ transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1)" }}
      >
        <item.icon size={20} className="text-white" />
      </div>
      <p
        className={`relative text-[11px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${item.accent} mb-1.5`}
      >
        {item.title}
      </p>
      <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
        {item.subtitle}
      </h3>
      <p className="relative text-sm text-gray-500 leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

function PhilosophySection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles size={14} className="text-blue-600" />
            <span className="tracking-widest uppercase">How We Think</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            Built on principles,
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              not guesswork.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr"
        >
          {PHILOSOPHY.map((item, i) => (
            <PhilosophyCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Team / departments ──────────────────────────────────────────────────

function TeamCulture() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Users size={14} className="text-blue-600" />
            <span className="tracking-widest uppercase">Team & Culture</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            One team. Every
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              discipline you need.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            No outsourcing, no rotating freelancers — specialists across every channel,
            working from one strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {DEPARTMENTS.map((dept) => (
            <motion.div
              key={dept.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute -inset-8 bg-gradient-to-br ${dept.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`}
              />
              <div
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${dept.accent} flex items-center justify-center mx-auto mb-3.5 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <dept.icon size={20} className="text-white" />
              </div>
              <h3 className="relative text-sm font-bold text-gray-900 leading-snug">{dept.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Founders ─────────────────────────────────────────────────────────────
// No photos — animated initial avatars instead, which is more flexible to
// maintain and reads as more deliberate/branded than a portrait crop.

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-7 sm:p-8"
    >
      {/* Ambient glow */}
      <div
        className={`absolute -inset-10 bg-gradient-to-br ${founder.accent} opacity-0 blur-3xl transition-opacity duration-500`}
        style={{ opacity: hovered ? 0.1 : 0 }}
      />

      <div className="relative flex items-center gap-4 mb-6">
        {/* Animated initials avatar — replaces a static photo */}
        <motion.div
          className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${founder.accent} flex items-center justify-center shrink-0 shadow-lg overflow-hidden`}
          animate={{ rotate: hovered ? [0, -2, 2, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white font-extrabold text-xl sm:text-2xl tracking-tight">
            {founder.initials}
          </span>
          {/* Subtle animated sheen sweeping across the avatar */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            style={{ width: "60%" }}
          />
        </motion.div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{founder.name}</h3>
          <span
            className={`inline-block mt-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r ${founder.accent} text-white`}
          >
            {founder.role}
          </span>
        </div>
      </div>

      <div className="relative">
        <Quote size={28} className="text-gray-100 mb-2" />
        <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed mb-4">
          &ldquo;{founder.quote}&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
          {founder.bio}
        </p>
      </div>
    </motion.div>
  );
}

function FoundersSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles size={14} className="text-blue-600" />
            <span className="tracking-widest uppercase">Leadership</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            Built and run by people
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              who answer the phone.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {FOUNDERS.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-10 sm:mt-12"
        >
          {TRUST_POINTS.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-2 px-3.5 py-2 bg-gray-50 rounded-full border border-gray-100"
            >
              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${point.accent} flex items-center justify-center shrink-0`}>
                <point.icon size={11} className="text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{point.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Final CTA ───────────────────────────────────────────────────────────

function AboutCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-10 lg:p-12 text-center shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-56 sm:w-64 h-56 sm:h-64 bg-blue-600/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 sm:w-64 h-56 sm:h-64 bg-violet-600/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Want to work with the team behind this?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm sm:text-base">
              Tell us about your business — we&apos;ll map out a growth strategy on a free call.
            </p>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
              <Link
                href="/contact"
                style={{ backgroundColor: "#ffffff" }}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-gray-900 font-semibold rounded-xl overflow-hidden shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Strategy Call
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main export ────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <PhilosophySection />
      <TeamCulture />
      <FoundersSection />
      <AboutCTA />
    </main>
  );
}