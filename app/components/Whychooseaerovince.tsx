"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  IndianRupee,
  Clock,
  Users2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProofPoint {
  stat: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
  proof: string; // the "reframed as proof, not philosophy" line
}

interface Differentiator {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────
// Every line here is a claim backed by a number, not an abstract value
// statement — that's the "reframed as proof, not philosophy" instruction.

const PROOF_POINTS: ProofPoint[] = [
  {
    stat: "₹80L+",
    label: "Generated in leads",
    icon: IndianRupee,
    accent: "from-emerald-500 to-teal-400",
    proof: "for a single real estate client in 90 days",
  },
  {
    stat: "14 days",
    label: "Average time to launch",
    icon: Clock,
    accent: "from-blue-500 to-cyan-400",
    proof: "from kickoff call to live campaigns",
  },
  {
    stat: "40+",
    label: "Businesses scaled",
    icon: Users2,
    accent: "from-violet-500 to-purple-400",
    proof: "across food, real estate, healthcare & retail",
  },
  {
    stat: "98%",
    label: "Client retention",
    icon: ShieldCheck,
    accent: "from-amber-500 to-orange-400",
    proof: "clients stay because the numbers keep moving",
  },
];

const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "We report revenue, not reach",
    description:
      "Impressions don't pay your bills. Every report we send ties back to leads, sales, or revenue — the numbers you actually care about.",
    icon: IndianRupee,
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "One team, not a rotating cast",
    description:
      "The strategist who scopes your project is the same person who runs it. No handoffs, no re-explaining your business every month.",
    icon: Users2,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "We kill what isn't working",
    description:
      "If a channel or campaign underperforms for two weeks straight, we cut it and reallocate — instead of riding it out to protect a retainer.",
    icon: ShieldCheck,
    accent: "from-violet-500 to-purple-400",
  },
  {
    title: "Built on 10+ years, 30+ brands",
    description:
      "We're not guessing. Every strategy is informed by a decade of what's actually worked — and failed — across dozens of industries.",
    icon: Sparkles,
    accent: "from-amber-500 to-orange-400",
  },
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
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProofCard({ point, index, start }: { point: ProofPoint; index: number; start: boolean }) {
  // Only the purely-numeric stats count up; "14 days" stays static text.
  const numericMatch = point.stat.match(/^[₹]?([\d.]+)([A-Za-z%+]*)$/);
  const numeric = numericMatch ? parseFloat(numericMatch[1]) : null;
  const suffix = numericMatch ? numericMatch[2] : "";
  const prefix = point.stat.startsWith("₹") ? "₹" : "";
  const count = useAnimatedCounter(numeric ?? 0, 1500, start && numeric !== null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div
        className={`absolute -inset-8 bg-gradient-to-br ${point.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`}
      />
      <div
        className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${point.accent} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
      >
        <point.icon size={19} className="text-white" />
      </div>
      <p className="relative text-2xl sm:text-3xl font-extrabold text-gray-900 tabular-nums">
        {numeric !== null ? `${prefix}${count}${suffix}` : point.stat}
      </p>
      <p className="relative text-sm font-semibold text-gray-700 mt-1">{point.label}</p>
      <p className="relative text-xs text-gray-400 mt-1.5 leading-relaxed">{point.proof}</p>
    </motion.div>
  );
}

function DifferentiatorRow({ item, index }: { item: Differentiator; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4 }}
      className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-transparent hover:bg-white hover:shadow-md transition-all duration-300"
    >
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center shrink-0 shadow-md`}
      >
        <item.icon size={18} className="text-white" />
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function WhyChooseAerovince() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden" id="why-aerovince">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <motion.div
          className="absolute -top-24 -right-24 w-[260px] sm:w-[420px] lg:w-[560px] h-[260px] sm:h-[420px] lg:h-[560px] rounded-full bg-gradient-to-br from-emerald-100/25 via-blue-100/15 to-transparent blur-2xl will-change-transform"
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

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
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
              Why Aerovince
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
            We don't talk philosophy.
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              We talk results.
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4">
            No one hires an agency for its mission statement. Here's what 10+ years and 40+
            businesses scaled actually looks like in numbers.
          </p>
        </motion.div>

        {/* Proof points */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-16 sm:mb-20">
          {PROOF_POINTS.map((point, i) => (
            <ProofCard key={point.label} point={point} index={i} start={statsVisible} />
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto mb-14 sm:mb-16">
          {DIFFERENTIATORS.map((item, i) => (
            <DifferentiatorRow key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Closing line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <span>No lock-in contracts. No vague KPIs. Just measurable growth, on record.</span>
          </div>

          <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
            <Link
              href="/contact"
              style={{ backgroundColor: "#111827" }}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-gray-900/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Free Growth Audit
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}