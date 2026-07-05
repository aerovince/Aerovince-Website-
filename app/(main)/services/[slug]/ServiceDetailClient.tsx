// app/(main)/services/[slug]/ServiceDetailClient.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Check, Plus, Minus, Sparkles,
  Search, Megaphone, Palette, Globe, Bot, Share2,
  type LucideIcon,
} from "lucide-react";
import type { ServiceData, ServiceSection, ServiceFAQ as FAQType } from "@/lib/servicesData";

// ─── Icon resolver ────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Megaphone,
  Palette,
  Globe,
  Bot,
  Share2,
};

function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Globe;
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Background ───────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function DetailHero({ service }: { service: ServiceData }) {
  const Icon = resolveIcon(service.iconName);

  return (
    <section className="relative overflow-hidden bg-gray-950 text-white py-24 sm:py-28 lg:py-32">
      <SectionBackground variant="dark" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
              <Icon size={15} className="text-blue-400" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white/80">
                Expertise
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              {service.tagline}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {service.heroDescription}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                style={{ backgroundColor: "#ffffff" }}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-gray-900 font-semibold rounded-xl overflow-hidden shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.accent} opacity-15 blur-3xl`} />
              <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center p-10 sm:p-14">
                <motion.div
                  className={`absolute inset-6 rounded-full bg-gradient-to-br ${service.accent} opacity-10`}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-2xl`}>
                  <Icon size={56} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Content Section ──────────────────────────────────────────────────────────

function ContentSection({ section }: { section: ServiceSection }) {
  const isDark = section.type === "highlight";
  const accent = section.accent ?? "from-blue-500 to-violet-500";

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden ${
        isDark
          ? "bg-gray-950 text-white"
          : section.type === "process"
          ? "bg-[#F8FAFC]"
          : "bg-white"
      }`}
    >
      {isDark && <SectionBackground variant="dark" />}
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {section.subtitle && (
            <span className={`block mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${accent}`}>
              {section.subtitle}
            </span>
          )}
          {section.title && (
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              {section.title}
            </h2>
          )}
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-500"}`}>
            {section.content}
          </p>

          {section.list && section.list.length > 0 && (
            <div className={`mt-8 sm:mt-10 ${section.type === "grid" ? "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" : "space-y-3.5"}`}>
              {section.list.map((item, listIdx) => (
                <motion.div
                  key={listIdx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: listIdx * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className={`shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center mt-0.5 shadow-sm`}>
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </div>
                  <p className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>{item}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function DetailCTA() {
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Ready to transform your business?
            </h3>
            <p className="text-gray-300 mb-7 max-w-xl mx-auto text-sm sm:text-base">
              Let&apos;s build something extraordinary together. Tell us about your project and
              we&apos;ll map out exactly how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-10 w-full sm:w-auto">
                <Link
                  href="/contact"
                  style={{ backgroundColor: "#ffffff" }}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-gray-900 font-semibold rounded-xl overflow-hidden shadow-lg w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-10 w-full sm:w-auto">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQRow({ faq, index, isOpen, onToggle }: {
  faq: FAQType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
        isOpen ? "border-transparent shadow-lg" : "border-gray-100 hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-sm sm:text-base font-bold ${isOpen ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600" : "text-gray-800"}`}>
          {faq.question}
        </span>
        <span className={`shrink-0 transition-colors ${isOpen ? "text-blue-600" : "text-gray-400"}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DetailFAQ({ faqs }: { faqs: FAQType[] | undefined }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative py-20 sm:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            <Sparkles size={13} className="text-blue-600" />
            <span className="tracking-widest uppercase">FAQ</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently asked
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              questions
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Everything you need to know about this service.
          </p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FAQRow
              key={faq.question}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  return (
    <main className="min-h-screen bg-white">
      <DetailHero service={service} />
      {service.sections.map((section, idx) => (
        <ContentSection key={idx} section={section} />
      ))}
      <DetailCTA />
      <DetailFAQ faqs={service.faqs} />
    </main>
  );
}