// 'client';

// import React from 'react';
// import PageHero from '@/components/ui/PageHero';
// import AwardsGrid from '@/components/awards/AwardsGrid';
// import AwardsImpact from '@/components/awards/AwardsImpact';
// import TeamCTA from '@/components/TeamCTA';

// export default function AwardsPage() {
//     return (
//         <div className="bg-white min-h-screen">
//             <PageHero
//                 title="Awards & Recognition"
//                 subtitle="Excellence"
//                 description="Our journey is defined by the milestones we've crossed and the impact we've created for our partners."
//             />
//             <AwardsGrid />
//             <AwardsImpact />
//             <TeamCTA />
//         </div>
//     );
// }


















// app/(main)/awards/page.tsx  ← replace everything with this single file

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Trophy,
  Star,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Award,
  CheckCircle,
  Rocket,
  Target,
  BarChart3,
  Shield,
  Cpu,
  Search,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const MILESTONES = [
  {
    year: "2025",
    title: "Aerovince Launch",
    desc: "Founded Aerovince with a clear mandate: build the growth infrastructure ambitious brands need to scale — combining AI, performance marketing, and creative strategy under one roof.",
    icon: Rocket,
    accent: "from-blue-500 to-cyan-400",
    chartColor: "#3b82f6",
    impact: "Day One",
    metric: "0 → Infinity",
    tag: "Founding",
  },
  {
    year: "2024",
    title: "AI Automation Division",
    desc: "Launched a dedicated AI Automation practice — building lead nurturing pipelines, GPT-powered qualification bots, and workflow automations that helped clients recapture revenue slipping through manual processes.",
    icon: Cpu,
    accent: "from-cyan-500 to-blue-400",
    chartColor: "#06b6d4",
    impact: "3x Efficiency",
    metric: "+280% Pipeline",
    tag: "Innovation",
  },
  {
    year: "2024",
    title: "Performance Marketing Scale",
    desc: "Scaled paid media operations across Google, Meta, and LinkedIn — managing campaigns that consistently delivered 4–6x ROAS for clients across real estate, e-commerce, and professional services.",
    icon: TrendingUp,
    accent: "from-amber-500 to-orange-400",
    chartColor: "#f59e0b",
    impact: "4–6x ROAS",
    metric: "₹10Cr+ Managed",
    tag: "Growth",
  },
  {
    year: "2023",
    title: "Enterprise SEO Practice",
    desc: "Built out an enterprise SEO capability — delivering technical audits, content ecosystems, and link authority programs that moved clients from page 3 to position 1 for high-intent commercial keywords.",
    icon: Search,
    accent: "from-emerald-500 to-teal-400",
    chartColor: "#10b981",
    impact: "#1 Rankings",
    metric: "+340% Traffic",
    tag: "SEO",
  },
  {
    year: "2023",
    title: "Brand Identity Studio",
    desc: "Launched a full brand strategy and identity offering — positioning, messaging architecture, and visual identity systems for startups and growth-stage businesses entering competitive categories.",
    icon: Star,
    accent: "from-violet-500 to-purple-400",
    chartColor: "#8b5cf6",
    impact: "40+ Brands",
    metric: "100% Retention",
    tag: "Branding",
  },
  {
    year: "2022",
    title: "Web Development Wing",
    desc: "Formed a dedicated web development team building Next.js marketing sites and web apps — converting 2–3x more visitors than the industry average through conversion-first design and performance engineering.",
    icon: Globe,
    accent: "from-pink-500 to-rose-400",
    chartColor: "#ec4899",
    impact: "2–3x CVR",
    metric: "50+ Sites",
    tag: "Tech",
  },
];

const STATS = [
  { value: "4.9", suffix: "/5", label: "Client Rating", icon: Star, accent: "from-amber-400 to-yellow-500", trend: "150+ reviews" },
  { value: "98", suffix: "%", label: "Retention Rate", icon: Shield, accent: "from-emerald-400 to-teal-500", trend: "Year-on-year" },
  { value: "40", suffix: "+", label: "Businesses Scaled", icon: Rocket, accent: "from-blue-500 to-cyan-400", trend: "And counting" },
  { value: "10", suffix: "x", label: "Avg. ROAS Delivered", icon: BarChart3, accent: "from-violet-500 to-purple-400", trend: "Paid campaigns" },
];

const TRUST_PILLARS = [
  {
    icon: Target,
    title: "Revenue-first strategy",
    desc: "Every service we offer — SEO, ads, branding, automation — is scoped around one number: what it returns to your bottom line.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Speed without corners cut",
    desc: "Campaigns go live in days, not months. Our systems are built for speed — but every decision is grounded in data and strategy.",
    accent: "from-amber-500 to-orange-400",
  },
  {
    icon: Users,
    title: "One team, full stack",
    desc: "Strategy, creative, media buying, tech, and automation — all under one roof. No coordination overhead. No finger-pointing.",
    accent: "from-violet-500 to-purple-400",
  },
  {
    icon: CheckCircle,
    title: "Transparent reporting",
    desc: "Live dashboards and plain-English monthly reports. You always know where your investment is going and what it's producing.",
    accent: "from-emerald-500 to-teal-400",
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

// ─── Background (matches HeroSection / ServicesPage) ──────────────────────────

function SectionBackground({ variant = "light" }: { variant?: "light" | "dark" }) {
  if (variant === "dark") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-950" />
        <motion.div
          className="absolute -top-24 -right-24 w-[300px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[500px] lg:h-[650px] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/15 to-transparent blur-3xl will-change-transform"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[260px] sm:w-[400px] lg:w-[500px] h-[260px] sm:h-[400px] lg:h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl will-change-transform"
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
        className="absolute -top-20 -right-20 w-[240px] sm:w-[400px] lg:w-[520px] h-[240px] sm:h-[400px] lg:h-[520px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-2xl will-change-transform"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
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

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function AwardsHero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32">
      <SectionBackground variant="dark" />

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 via-violet-500 to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: "60%" }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7"
        >
          <Sparkles size={12} className="text-blue-400" />
          <span className="tracking-widest uppercase">Our Journey</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.07] tracking-tight"
        >
          Built on proof,
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            not promises.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Every milestone below is a real outcome — a channel built, a revenue target cleared, 
          a business transformed. This is the record we're proud of.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "4.9 / 5 Rating", color: "text-amber-400" },
            { label: "98% Retention", color: "text-emerald-400" },
            { label: "40+ Brands", color: "text-blue-400" },
            { label: "10x Avg ROAS", color: "text-violet-400" },
          ].map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${pill.color.replace("text-", "bg-")}`} />
              <span className={pill.color}>{pill.label}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Stats row ─────────────────────────────────────────────────────────────

function StatsRow() {
  return (
    <section className="relative py-14 sm:py-16 bg-white overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute -inset-6 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500`} />
              <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={18} className="text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 tabular-nums">
                {stat.value}<span className="text-xl">{stat.suffix}</span>
              </p>
              <p className="text-sm font-semibold text-gray-700 mt-0.5">{stat.label}</p>
              <p className="text-[11px] text-gray-400 mt-1">{stat.trend}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Timeline (milestone cards) ───────────────────────────────────────────

function MilestoneCard({ item, index }: { item: typeof MILESTONES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-14`}
    >
      {/* Content card */}
      <div className="flex-1 w-full">
        <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className={`absolute -inset-8 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.07] blur-2xl transition-opacity duration-500`} />

          {/* Tag + year */}
          <div className="flex items-center justify-between mb-5">
            <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white shadow-sm`}>
              {item.tag}
            </span>
            <span className="text-xs font-bold text-gray-400 tabular-nums">{item.year}</span>
          </div>

          {/* Icon */}
          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 shadow-md transition-transform duration-300`}
            style={{ transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)" }}
          >
            <Icon size={22} className="text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{item.desc}</p>

          {/* Metrics */}
          <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-50">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center`}>
                <Zap size={11} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">{item.impact}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp size={12} className="text-emerald-500" />
              <span className="text-xs font-bold text-emerald-600">{item.metric}</span>
            </div>
          </div>

          {/* Hover bottom accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
        </div>
      </div>

      {/* Visual panel — matches DeepDiveVisual from ServicesPage */}
      <div className="flex-1 w-full">
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[280px] rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-2xl"
            >
              <Icon size={40} className="text-white" />
            </motion.div>
            <div className="text-center">
              <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">{item.year}</p>
              <p className="text-white font-extrabold text-xl mt-1">{item.metric}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MilestonesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Trophy size={13} className="text-blue-600" />
            <span className="tracking-widest uppercase">Milestones</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            The chapters that
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              define our work.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
            Not a history of trophies — a record of outcomes built for real businesses.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-24">
          {MILESTONES.map((item, i) => (
            <MilestoneCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Trust pillars ────────────────────────────────────────────────────────

function TrustPillars() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-gray-950 text-white overflow-hidden">
      <SectionBackground variant="dark" />
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Award size={13} className="text-blue-400" />
            <span className="tracking-widest uppercase">Why It Matters</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight">
            What every milestone
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              was built on.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
        >
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden hover:bg-white/8 transition-colors duration-300"
              >
                <div className={`absolute -inset-6 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${pillar.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. CTA ──────────────────────────────────────────────────────────────────

function AwardsCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-10 lg:p-14 text-center shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
          <motion.div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 text-[11px] font-semibold px-3 py-1.5 rounded-full mb-6">
              <Sparkles size={11} className="text-blue-400" />
              <span className="tracking-widest uppercase">Your turn</span>
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-white leading-tight mb-4">
              Ready to become our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                next success story?
              </span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Tell us where your business is and where you want it to go. We'll build the exact 
              growth infrastructure to get you there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  style={{ backgroundColor: "#ffffff" }}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gray-900 font-semibold rounded-xl shadow-lg w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AwardsHero />
      <StatsRow />
      <MilestonesSection />
      <TrustPillars />
      <AwardsCTA />
    </main>
  );
}