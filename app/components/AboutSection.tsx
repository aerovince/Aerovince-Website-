


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Heart,
  Award,
  Clock,
  CheckCircle,
  Rocket,
  Target,
  Lightbulb,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    label: "Brands Scaled",
    value: "30+",
    icon: TrendingUp,
    change: "+150%",
    color: "blue",
  },
  {
    label: "Years of Growth",
    value: "1.5",
    icon: Rocket,
    change: "Fastest",
    color: "yellow",
  },
  {
    label: "Client Retention",
    value: "95%",
    icon: Heart,
    change: "+8%",
    color: "blue",
  },
  {
    label: "Projects Delivered",
    value: "50+",
    icon: Globe,
    change: "Completed",
    color: "black",
  },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "AI-powered solutions for modern challenges",
    color: "blue",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Data-backed strategies that deliver",
    color: "yellow",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your growth is our priority",
    color: "black",
  },
];

const achievements = [
  { value: "6+", label: "Countries", icon: Globe },
  { value: "10+", label: "Industries", icon: Briefcase },
  { value: "98%", label: "Success Rate", icon: Award },
];

export default function AboutSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="about"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
                WHO WE ARE
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-[1.2] tracking-tight">
              More Than Just An Agency.
              <span className="block text-blue-600 mt-2">
                Your Growth Partners.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Aerovince – Powered by AI is a full-service startup building,
                branding, marketing, and technology company. We work as a growth
                partner, not a vendor — combining AI tools, human creativity,
                and execution clarity to deliver real business outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In just 1.5 years, we've built and scaled 30+ brands across
                India and international markets including Canada and the USA. We
                leverage cutting-edge technology to solve complex business
                challenges.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${
                      value.color === "blue"
                        ? "bg-blue-100"
                        : value.color === "yellow"
                          ? "bg-yellow-100"
                          : "bg-gray-200"
                    } flex items-center justify-center`}
                  >
                    <value.icon
                      className={`w-4 h-4 ${
                        value.color === "blue"
                          ? "text-blue-600"
                          : value.color === "yellow"
                            ? "text-yellow-600"
                            : "text-black"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">
                      {value.title}
                    </p>
                    <p className="text-xs text-gray-500">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "AI-Powered Solutions",
                "Global Reach",
                "Data-Driven Results",
              ].map((feature, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full cursor-pointer"
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Grid - Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-5 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl ${
                        stat.color === "blue"
                          ? "bg-blue-100 group-hover:bg-blue-600"
                          : stat.color === "yellow"
                            ? "bg-yellow-100 group-hover:bg-yellow-500"
                            : "bg-gray-100 group-hover:bg-black"
                      } flex items-center justify-center mb-3 transition-all duration-300`}
                    >
                      <stat.icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          stat.color === "blue"
                            ? "text-blue-600 group-hover:text-white"
                            : stat.color === "yellow"
                              ? "text-yellow-600 group-hover:text-black"
                              : "text-black group-hover:text-white"
                        }`}
                      />
                    </div>

                    {/* Value */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-3xl font-bold text-black">
                        {stat.value}
                      </h3>
                      <motion.span
                        className={`text-xs font-semibold px-1.5 py-0.5 rounded transition-all duration-300 ${
                          hoveredStat === index
                            ? stat.color === "blue"
                              ? "bg-blue-600 text-white"
                              : stat.color === "yellow"
                                ? "bg-yellow-500 text-black"
                                : "bg-black text-white"
                            : stat.color === "blue"
                              ? "bg-blue-100 text-blue-700"
                              : stat.color === "yellow"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                        animate={{
                          scale: hoveredStat === index ? 1.05 : 1,
                        }}
                      >
                        {stat.change}
                      </motion.span>
                    </div>

                    {/* Label */}
                    <p className="text-gray-500 text-sm uppercase tracking-wide">
                      {stat.label}
                    </p>

                    {/* Bottom Border Effect */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                        stat.color === "blue"
                          ? "bg-blue-600"
                          : stat.color === "yellow"
                            ? "bg-yellow-500"
                            : "bg-black"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                  whileHover={{ y: -3 }}
                  className="text-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-lg font-bold text-black">{item.value}</p>
                  <p className="text-[10px] text-gray-500">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl text-center border border-gray-100"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  {["AJ", "KS", "VR", "PS"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-700"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Join <span className="font-bold text-black">150+</span>{" "}
                  satisfied brands
                </span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center"
            >
              <p className="text-xs text-gray-400 italic">
                "Building brands that matter, with people who care."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}