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
  Sparkles,
  TrendingUp,
  Award,
  Heart,
  Globe,
  CheckCircle,
} from "lucide-react";

const philosophies = [
  {
    title: "Strategic Approach",
    icon: Compass,
    description:
      "We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand.",
    stats: "95% Client Retention",
    statIcon: "📊",
    color: "blue",
  },
  {
    title: "Measurable Impact",
    icon: BarChart2,
    description:
      "Our services are designed to deliver measurable results, helping you track and optimize your marketing efforts for maximum impact.",
    stats: "200% Avg. Growth",
    statIcon: "📈",
    color: "yellow",
  },
  {
    title: "Seamless Integration",
    icon: Layers,
    description:
      "We seamlessly integrate traditional and digital marketing channels, ensuring a cohesive brand experience across all touchpoints.",
    stats: "10x ROI Delivered",
    statIcon: "⚡",
    color: "blue",
  },
];

const culturalValues = [
  {
    icon: Zap,
    title: "Smart Innovation",
    description:
      "Smart solutions that work efficiently — combining creativity with practicality.",
    color: "yellow",
  },
  {
    icon: Target,
    title: "Business Understanding",
    description:
      "Not just designers. Business partners who understand your profit goals.",
    color: "blue",
  },
  {
    icon: Rocket,
    title: "Scaling Mindset",
    description:
      "Whether you're starting small or dreaming big — we know how to scale.",
    color: "black",
  },
];

const trustStats = [
  { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
  { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
  { value: "98%", label: "Client Retention", icon: Heart, change: "Top 1%" },
  { value: "4.95", label: "Client Rating", icon: Award, change: "5★" },
];

export default function PhilosophySection() {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              OUR PHILOSOPHY
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
            More than just design —
            <span className="block text-blue-600 mt-2">
              We build business foundations
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
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
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Animated Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-blue-600/5 group-hover:to-transparent transition-all duration-500" />

              {/* Icon Container */}
              <div className="relative mb-6">
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${
                    item.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
                  } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon
                    className={`w-8 h-8 ${item.color === "yellow" ? "text-black" : "text-white"}`}
                  />
                </motion.div>

                {/* Decorative Ring */}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                    item.color === "blue" ? "bg-blue-100" : "bg-yellow-100"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>

              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Stat Badge */}
              <motion.div
                className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl">{item.statIcon}</span>
                <span
                  className={`text-sm font-semibold ${
                    item.color === "blue" ? "text-blue-600" : "text-yellow-600"
                  }`}
                >
                  {item.stats}
                </span>
              </motion.div>

              {/* Bottom Animated Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  item.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Cultural Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-4"
            >
              <Globe className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-700 text-sm font-semibold">
                GLOBAL MINDSET
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Indian roots.
              <span className="text-blue-600 block mt-1">
                World-class execution.
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturalValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className={`w-10 h-10 rounded-lg ${
                      value.color === "blue"
                        ? "bg-blue-600"
                        : value.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-black"
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon
                      className={`w-5 h-5 ${
                        value.color === "yellow" ? "text-black" : "text-white"
                      }`}
                    />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-black font-bold mb-1 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Bar - Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-10 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {trustStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors">
                  <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <p className="text-3xl font-bold text-black">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {stat.change}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Client Avatars and Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.svg
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500 cursor-pointer"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <div>
                <p className="text-black font-bold">4.95 Rating</p>
                <p className="text-gray-400 text-sm">Based on 500+ reviews</p>
              </div>
            </div>

            <div className="flex -space-x-2">
              {["AJ", "KS", "VR", "PS", "RV"].map((letter, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-700 shadow-sm"
                >
                  {letter}
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
              >
                +99
              </motion.div>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-xl font-bold text-black">150+</p>
                <p className="text-gray-500 text-xs">Brands Scaled</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <p className="text-xl font-bold text-black">10+</p>
                <p className="text-gray-500 text-xs">Industry Awards</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <p className="text-xl font-bold text-black">4+</p>
                <p className="text-gray-500 text-xs">Years Excellence</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"
        />
      </div>
    </section>
  );
}

// Import Briefcase if not already imported
import { Briefcase } from "lucide-react";
