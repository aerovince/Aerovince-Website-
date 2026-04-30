"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Compass,
  BarChart2,
  Layers,
  Zap,
  Target,
  Rocket,
  Crown,
  Shield,
  Sparkles,
} from "lucide-react";

const philosophies = [
  {
    title: "Strategic Approach",
    icon: Compass,
    description:
      "We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand.",
    stats: "95% Client Retention",
    statIcon: "📊",
  },
  {
    title: "Measurable Impact",
    icon: BarChart2,
    description:
      "Our services are designed to deliver measurable results, helping you track and optimize your marketing efforts for maximum impact.",
    stats: "200% Avg. Growth",
    statIcon: "📈",
  },
  {
    title: "Seamless Integration",
    icon: Layers,
    description:
      "We seamlessly integrate traditional and digital marketing channels, ensuring a cohesive brand experience across all touchpoints.",
    stats: "10x ROI Delivered",
    statIcon: "⚡",
  },
];

// Additional cultural values
const culturalValues = [
  {
    icon: Zap,
    title: "Smart Innovation",
    description:
      "Smart solutions that work efficiently — combining creativity with practicality.",
  },
  {
    icon: Target,
    title: "Business Understanding",
    description:
      "Not just designers. Business partners who understand your profit goals.",
  },
  {
    icon: Rocket,
    title: "Scaling Mindset",
    description:
      "Whether you're starting small or dreaming big — we know how to scale.",
  },
];

export default function PhilosophySection() {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/5 via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-blue-400 font-body font-bold uppercase tracking-[0.2em] text-sm">
              Our Philosophy
            </span>
            <div className="w-12 h-[1px] bg-blue-500" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            More than just design —
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 block mt-2">
              We build business foundations
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
            A creative agency that truly understands your business. Strategy +
            Design + Results — all delivered together.
          </p>
        </motion.div>

        {/* Main Philosophy Cards */}
        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24"
        >
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500" />

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                {/* Decorative Line */}
                <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 font-body leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Stat Badge */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="text-xl">{item.statIcon}</span>
                <span className="text-sm font-semibold text-blue-400">
                  {item.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cultural Values Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">🌍</span>
              <span className="text-blue-400 text-sm uppercase tracking-wider font-semibold">
                Global Mindset
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Indian roots.{" "}
              <span className="text-blue-400">World-class execution.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Bar - Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⭐</span>
              <div>
                <p className="text-white font-bold">4.95 Rating</p>
                <p className="text-gray-500 text-sm">Based on 500+ reviews</p>
              </div>
            </div>

            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-black flex items-center justify-center text-xs font-bold text-white"
                >
                  F
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-black flex items-center justify-center text-xs font-bold text-blue-400">
                +99
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-gray-500 text-xs">Brands Scaled</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-gray-500 text-xs">Industry Awards</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-gray-500 text-xs">Years of Excellence</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-10 -right-10 hidden lg:block opacity-20"
        >
          <p className="text-6xl font-bold text-white/10 tracking-wider">
            BUILD
          </p>
        </motion.div>
      </div>
    </section>
  );
}
