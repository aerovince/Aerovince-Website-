"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, ArrowRight, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
  accent: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────
// Each one targets a real pre-sale objection, not a generic "how it works"
// question — that's what actually moves someone from browsing to booking.

const FAQS: FAQItem[] = [
  {
    question: "How fast will I actually see results?",
    answer:
      "Most clients see early movement — more traffic, leads, or engagement — within the first 2-3 weeks of launch. Meaningful, compounding revenue impact typically shows up by month 2-3, depending on your industry and starting point. We'll give you a realistic timeline on the strategy call, not an inflated one.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "We don't take on projects we don't believe we can move the needle on — and we'll tell you that upfront, honestly, on the audit call. Once live, we track performance weekly and reallocate or pivot strategy if something underperforms for two weeks straight, instead of waiting out a quarter.",
    accent: "from-amber-500 to-orange-400",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. We work month-to-month after the initial setup period. Clients stay because the results keep coming — 98% retention — not because they're locked in. You can pause or leave with 30 days' notice, no penalties.",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer:
      "A freelancer is one person juggling one skill. We're a full team — strategist, designer, ad specialist, and copywriter — working from one coordinated plan. You get senior-level thinking across every channel instead of one person's bandwidth and blind spots.",
    accent: "from-violet-500 to-purple-400",
  },
  {
    question: "What size businesses do you actually work with?",
    answer:
      "Mostly growing SMBs and mid-market brands — restaurants, real estate, healthcare, D2C, and local service businesses — with marketing budgets from ₹50K to ₹10L+ per month. If you're pre-revenue or need a logo and nothing else, we're probably not the right fit, and we'll tell you that.",
    accent: "from-pink-500 to-rose-400",
  },
  {
    question: "How much does this cost?",
    answer:
      "It depends on scope — channels, ad spend, and how much we're running for you. Most engagements start in the ₹40K-₹1.5L/month range. We'll give you an exact number after understanding your goals on the free audit call, not a one-size price card.",
    accent: "from-blue-500 to-cyan-400",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen ? "border-transparent shadow-lg" : "border-gray-100 hover:border-gray-200"
      }`}
      style={
        isOpen
          ? { background: "white", boxShadow: "0 8px 30px -8px rgba(59,130,246,0.15)" }
          : { background: "white" }
      }
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.accent} flex items-center justify-center shrink-0 transition-transform duration-300`}
            style={{ transform: isOpen ? "scale(1.08)" : "scale(1)" }}
          >
            <MessageCircleQuestion size={15} className="text-white" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-gray-900 truncate sm:whitespace-normal">
            {item.question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-gray-400"
        >
          <ChevronDown size={18} />
        </motion.span>
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
            <p className="px-5 sm:px-6 pb-4 sm:pb-5 pl-[3.25rem] sm:pl-[3.75rem] text-sm text-gray-500 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden" id="faq">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[240px] sm:w-[380px] lg:w-[480px] h-[240px] sm:h-[380px] lg:h-[480px] rounded-full bg-gradient-to-tr from-violet-100/25 via-blue-100/15 to-transparent blur-2xl will-change-transform"
          animate={{ scale: [1, 1.06, 1] }}
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

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
              Common Questions
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-[1.12] tracking-tight">
            Before you
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              book the call
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base mt-4">
            The questions we get asked most — answered straight, no sales spin.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <FAQRow
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Soft CTA for anything not covered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-sm text-gray-500 mb-4">Still have a question we didn't cover?</p>
          <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-transparent hover:text-white transition-all duration-300 overflow-hidden text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ask Us Directly
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}