"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Rocket,
  LineChart,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
  duration: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dig into your business, competitors, and audience to find exactly where the growth is hiding.",
    icon: Search,
    accent: "from-blue-500 to-cyan-400",
    duration: "Week 1",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A custom roadmap — channels, budgets, and messaging — built around your numbers, not a generic template.",
    icon: Target,
    accent: "from-amber-500 to-orange-400",
    duration: "Week 1-2",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Campaigns, content, and systems go live. No long onboarding — you see real work moving within days.",
    icon: Rocket,
    accent: "from-emerald-500 to-teal-400",
    duration: "Week 2-3",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We test, cut what's not working, and double down on what is — every week, not once a quarter.",
    icon: LineChart,
    accent: "from-violet-500 to-purple-400",
    duration: "Ongoing",
  },
  {
    number: "05",
    title: "Report",
    description:
      "Clear, honest reporting on what moved the needle — revenue, leads, and ROI — not vanity metrics.",
    icon: RefreshCw,
    accent: "from-pink-500 to-rose-400",
    duration: "Monthly",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative flex-1 min-w-[220px]"
    >
      {/* Ambient glow on hover */}
      <div
        className={`absolute -inset-4 bg-gradient-to-br ${step.accent} opacity-0 blur-2xl transition-opacity duration-500 rounded-3xl`}
        style={{ opacity: hovered ? 0.1 : 0 }}
      />

      <div className="relative h-full bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300">
        {/* Step number watermark */}
        <span
          className={`absolute top-3 right-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${step.accent} opacity-15 select-none`}
        >
          {step.number}
        </span>

        <div
          className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center mb-4 shadow-md transition-transform duration-300`}
          style={{ transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1)" }}
        >
          <step.icon size={20} className="text-white" />
        </div>

        <span
          className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r ${step.accent} text-white mb-2.5`}
        >
          {step.duration}
        </span>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

/** Animated horizontal connector line that draws in as the section scrolls into view (desktop only). */
function ConnectorLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="hidden lg:block absolute top-[88px] left-0 right-0 h-px px-12">
      <div className="relative h-px bg-gray-100 mx-6">
        <motion.div
          className="absolute inset-y-0 left-0 h-px bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: inView ? "100%" : "0%" }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function MarketingProcess() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden" id="process">
      {/* Background — consistent with the rest of the site */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <motion.div
          className="absolute -top-24 -left-24 w-[260px] sm:w-[400px] lg:w-[520px] h-[260px] sm:h-[400px] lg:h-[520px] rounded-full bg-gradient-to-br from-violet-200/20 via-blue-200/15 to-transparent blur-2xl will-change-transform"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            <Rocket size={14} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
              How We Work
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
            A process built for
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              results, not guesswork
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4">
            No bloated onboarding. No mystery reports. Just five clear steps that turn your
            marketing spend into measurable growth.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <ConnectorLine />
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-4">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-14 sm:mt-16"
        >
          <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
            <Link
              href="/contact"
              style={{ backgroundColor: "#111827" }}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-gray-900/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                See How We'd Approach Your Business
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