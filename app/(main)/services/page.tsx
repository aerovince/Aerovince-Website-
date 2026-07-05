// import PageHero from '@/components/ui/PageHero';
// import ServicesGrid from '@/components/services/ServicesGrid';
// import ProcessSteps from '@/components/services/ProcessSteps';
// import TeamCTA from '@/components/TeamCTA';
// import ServiceDeepDive from '@/components/services/ServiceDeepDive';

// export default function ServicesPage() {
//     return (
//         <div className="bg-white min-h-screen">
//             <PageHero
//                 title="Services"
//                 subtitle="What We Do"
//                 description="Comprehensive solutions to scale your business with AI-powered strategies and human creativity."
//             />
//             <ServicesGrid />
//             <ProcessSteps />
//             <ServiceDeepDive />
//             <TeamCTA />
//         </div>
//     );
// }















// Aerovince\app\(main)\services\page.tsx



"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Search,
  Megaphone,
  Palette,
  Globe,
  Bot,
  Share2,
  Check,
  Video,
  Target,
  BarChart3,
  Compass,
  Rocket,
  LineChart,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceItem {
  slug: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

interface DeepDive {
  subtitle: string;
  title: string;
  content: string;
  benefits: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
  {
    slug: "seo",
    title: "SEO",
    desc: "Rank where buyers are searching. Technical fixes, content strategy, and link building that compounds month over month.",
    icon: Search,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    slug: "paid-ads",
    title: "Paid Ads",
    desc: "Google, Meta, and LinkedIn campaigns built around revenue per click — not just clicks.",
    icon: Megaphone,
    accent: "from-amber-500 to-orange-400",
  },
  {
    slug: "branding",
    title: "Branding",
    desc: "Identity, positioning, and messaging that make your business instantly recognizable and easy to trust.",
    icon: Palette,
    accent: "from-violet-500 to-purple-400",
  },
  {
    slug: "websites",
    title: "Websites",
    desc: "Fast, conversion-focused websites — built to turn visitors into booked calls, not just look good.",
    icon: Globe,
    accent: "from-emerald-500 to-teal-400",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    desc: "Lead nurturing, follow-ups, and reporting that run themselves — so nothing falls through the cracks.",
    icon: Bot,
    accent: "from-cyan-500 to-blue-400",
  },
  {
    slug: "social-media",
    title: "Social Media",
    desc: "Content, community, and growth campaigns across the platforms your audience actually spends time on.",
    icon: Share2,
    accent: "from-pink-500 to-rose-400",
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    desc: "We dig into your business model, audit existing assets, and pinpoint exactly where growth is being left on the table.",
    icon: Compass,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "A custom roadmap — channel mix, budget, and messaging — built around your numbers, not a generic template.",
    icon: Target,
    accent: "from-amber-500 to-orange-400",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Campaigns, content, and code ship in fast sprints. You see real work moving within days, not months.",
    icon: Rocket,
    accent: "from-emerald-500 to-teal-400",
  },
  {
    number: "04",
    title: "Optimization",
    desc: "We track performance in real time and reallocate toward what's working — every week, not once a quarter.",
    icon: LineChart,
    accent: "from-violet-500 to-purple-400",
  },
];

const DEEP_DIVES: DeepDive[] = [
  {
    subtitle: "Video Content Creation",
    title: "Visuals that actually stop the scroll",
    content:
      "Video is the fastest way to earn attention and trust at the same time. Our team produces high-quality, story-led video content — reels, ads, and brand films — engineered to hold attention and drive action, not just look polished.",
    benefits: ["High-quality production", "Built to stop the scroll", "Brand storytelling", "Drives real engagement"],
    icon: Video,
    accent: "from-rose-500 to-pink-400",
  },
  {
    subtitle: "Market Research",
    title: "We understand your audience before we touch a campaign",
    content:
      "Every strategy starts with research, not assumptions: qualitative interviews to understand pain points and motivations, quantitative analysis of trends at scale, and observational study of how customers actually behave — not just what they say.",
    benefits: ["Audience pain points", "Statistically significant trends", "Real behavioral insight", "No guesswork"],
    icon: BarChart3,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    subtitle: "Marketing Plan Development",
    title: "Strategy before a single rupee gets spent",
    content:
      "We take a data-driven, strategy-first approach — blending traditional and digital channels into one customized plan. Every campaign decision ties back to insight and a clear growth objective, not a one-size-fits-all playbook.",
    benefits: ["Comprehensive planning", "Data-driven insights", "Creative ideation", "Fully customized"],
    icon: Target,
    accent: "from-violet-500 to-purple-400",
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Shared background (matches HeroSection / AboutPage) ───────────────────

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
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500"
          initial={{ width: "0%" }}
          animate={{ width: "20%" }}
          transition={{ duration: 1, delay: 0.5 }}
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

// ─── 1. Hero ─────────────────────────────────────────────────────────────────

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white py-24 sm:py-28 lg:py-32">
      <SectionBackground variant="dark" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7"
        >
          <Sparkles size={13} className="text-blue-400" />
          <span className="tracking-widest uppercase">What We Do</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.08] tracking-tight"
        >
          Services built to move
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            one number: revenue.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Comprehensive growth solutions — AI-powered strategy and human creativity working
          together, scoped around your goals, not a fixed package.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 2. Services grid ───────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <motion.div
        variants={itemVariants}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -5 }}
        className="group relative h-full flex flex-col bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      >
        <div
          className={`absolute -inset-8 bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition-opacity duration-500`}
          style={{ opacity: hovered ? 0.1 : 0 }}
        />
        <div
          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-md transition-transform duration-300`}
          style={{ transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1)" }}
        >
          <service.icon size={22} className="text-white" />
        </div>
        <h3 className="relative text-xl font-bold text-gray-900 mb-2.5">{service.title}</h3>
        <p className="relative text-sm text-gray-500 leading-relaxed flex-1">{service.desc}</p>
        <div
          className={`relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-5 text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}
        >
          Learn More
          <ArrowRight
            size={14}
            className="transition-transform duration-300"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0px)",
              color: "currentColor",
            }}
          />
        </div>
      </motion.div>
    </Link>
  );
}

function ServicesGrid() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden" id="services">
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
            <span className="tracking-widest uppercase">Our Services</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            Everything you need.
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Nothing you don't.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Process steps ───────────────────────────────────────────────────────

function ProcessStepsSection() {
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
            <Compass size={14} className="text-blue-400" />
            <span className="tracking-widest uppercase">Our Process</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight">
            How we deliver
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              results, not guesswork.
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center group"
              >
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gray-950 border-2 border-white/10 flex items-center justify-center mb-6 sm:mb-7 shadow-xl transition-all duration-300 group-hover:scale-105`}
                  style={{ borderColor: undefined }}
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <step.icon size={26} className="text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                  <span
                    className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-[10px] font-bold text-white shadow-md`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2.5">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Service deep dives ──────────────────────────────────────────────────
// Image panels swapped for icon-led gradient visual panels — no static
// image assets required, and they recolor per dive instead of being a
// generic photo crop.

function DeepDiveVisual({ dive }: { dive: DeepDive }) {
  return (
    <div className="relative flex-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[360px] rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${dive.accent}`} />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-2xl"
        >
          <dive.icon size={44} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
}

function DeepDiveRow({ dive, index }: { dive: DeepDive; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-14`}
    >
      <div className="flex-1 w-full">
        <span
          className={`text-[11px] font-bold tracking-widest uppercase mb-4 block text-transparent bg-clip-text bg-gradient-to-r ${dive.accent}`}
        >
          {dive.subtitle}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">{dive.title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm sm:text-base mb-7">{dive.content}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {dive.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${dive.accent} flex items-center justify-center shrink-0`}
              >
                <Check size={12} className="text-white" />
              </div>
              {benefit}
            </div>
          ))}
        </div>
      </div>
      <DeepDiveVisual dive={dive} />
    </motion.div>
  );
}

function ServiceDeepDive() {
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
            <Sparkles size={14} className="text-blue-600" />
            <span className="tracking-widest uppercase">Why It Works</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            We go deeper than
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              surface-level deliverables.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
            We understand the business mechanics behind marketing and technology — not just the
            tactics.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-24">
          {DEEP_DIVES.map((dive, i) => (
            <DeepDiveRow key={dive.subtitle} dive={dive} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Final CTA ───────────────────────────────────────────────────────────

function ServicesCTA() {
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
              Not sure which service fits your goals?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm sm:text-base">
              Tell us about your business — we&apos;ll recommend the right mix on a free strategy
              call.
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
      <ProcessStepsSection />
      <ServiceDeepDive />
      <ServicesCTA />
    </main>
  );
}