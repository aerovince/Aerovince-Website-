




"use client";

import React, { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Users,
  Shield,
  Heart,
  Clock,
  Star,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react";

// ─── Data (unchanged) ────────────────────────────────────────────────────────

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: process.env.NEXT_PUBLIC_CONTACT_PHONE!,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
    accent: "from-amber-500 to-yellow-400",
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    value: "Available 24/7",
    accent: "from-violet-500 to-purple-400",
  },
];

const stats = [
  { value: "24/7", label: "Support Available", icon: Clock, trend: "Always", accent: "from-blue-500 to-cyan-400" },
  { value: "100%", label: "Client Dedication", icon: Heart, trend: "Passion", accent: "from-rose-500 to-pink-400" },
  { value: "50+", label: "Team Members", icon: Users, trend: "Growing", accent: "from-emerald-500 to-teal-400" },
  { value: "98%", label: "Satisfaction Rate", icon: Star, trend: "Top Tier", accent: "from-amber-500 to-orange-400" },
];

const trustBadges = [
  { name: "Award Winning", icon: Award },
  { name: "Client Trusted", icon: Shield },
  { name: "Fast Growth", icon: TrendingUp },
  { name: "Quality Assured", icon: CheckCircle },
];

// ─── 3D tilt stat card ───────────────────────────────────────────────────────

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 p-5 sm:p-6 text-center shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300"
      >
        <div
          className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
          style={{ transform: "translateZ(-30px)" }}
        />
        <div
          className={`relative inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.accent} mb-3 shadow-md`}
          style={{ transform: "translateZ(20px)" }}
        >
          <stat.icon size={20} className="text-white" />
        </div>
        <div className="relative flex items-center justify-center gap-2 mb-1" style={{ transform: "translateZ(20px)" }}>
          <p className="text-xl sm:text-2xl font-extrabold text-gray-900">{stat.value}</p>
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r ${stat.accent} text-white`}
          >
            {stat.trend}
          </span>
        </div>
        <p className="relative text-xs sm:text-[13px] text-gray-500 font-medium" style={{ transform: "translateZ(20px)" }}>
          {stat.label}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Magnetic CTA button ─────────────────────────────────────────────────────

function MagneticButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.3);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    },
    [mouseX, mouseY]
  );
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const isPrimary = variant === "primary";

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-xl overflow-hidden transition-shadow duration-300 ${
          isPrimary
            ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20"
            : "bg-white text-gray-900 border border-gray-200 hover:border-gray-300"
        }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
        {isPrimary && (
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </Link>
    </motion.div>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function TeamCTA() {
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-blue-50/25 to-white overflow-hidden" id="contact">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-32 -right-32 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-3xl"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full bg-gradient-to-tr from-amber-100/25 via-orange-100/15 to-transparent blur-3xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles size={12} />
            Let's Work Together
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.12] tracking-tight mb-6">
            We're big enough to{" "}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              manage scale
            </span>
            <span className="block mt-1">& small enough to</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
              understand the care you need
            </span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you're an established enterprise with defined processes for almost everything,
            or a self-funded startup carving out a niche — we're built to work with you.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-14">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          {/* Contact Methods */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredMethod(i)}
                onMouseLeave={() => setHoveredMethod(null)}
                className="relative flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${method.accent} opacity-0`}
                  animate={{ opacity: hoveredMethod === i ? 0.08 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className={`relative w-9 h-9 rounded-full bg-gradient-to-br ${method.accent} flex items-center justify-center shrink-0 shadow-sm`}>
                  <method.icon size={15} className="text-white" />
                </div>
                <div className="relative text-left">
                  <p className="text-[10px] text-gray-400 font-medium leading-tight">{method.label}</p>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12">
            <MagneticButton href="/contact" variant="primary">
              Get In Touch
            </MagneticButton>
            <MagneticButton href="/projects" variant="secondary">
              View Our Work
            </MagneticButton>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-gray-100"
          >
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-50 hover:bg-white hover:shadow-sm rounded-full border border-gray-200 transition-all duration-300"
                >
                  <badge.icon size={13} className="text-blue-600" />
                  <span className="text-xs font-medium text-gray-600">{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Office Hours Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="text-xs text-gray-400 mt-8"
          >
            🚀 Ready to start? Get a free consultation within 24 hours
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom shimmer banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative mt-16 sm:mt-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-[length:200%_100%] animate-gradient-x py-3.5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:200%_100%] animate-shimmer" />
          <p className="relative z-10 text-center text-white/90 text-xs sm:text-sm font-medium">
            ⚡ Limited slots available for Q2 2024 · Book your free consultation now
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}