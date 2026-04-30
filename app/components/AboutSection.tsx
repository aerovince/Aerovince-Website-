"use client";

import React from "react";
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
} from "lucide-react";

const stats = [
  { label: "Brands Scaled", value: "30+", icon: TrendingUp, change: "+150%" },
  { label: "Years of Growth", value: "1.5", icon: Zap, change: "Fastest" },
  { label: "Client Retention", value: "95%", icon: Shield, change: "+8%" },
  {
    label: "Projects Delivered",
    value: "50+",
    icon: Globe,
    change: "Completed",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="about">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              More Than Just An Agency.
              <span className="relative ml-3 inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-30" />
                <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Your Growth Partners.
                </span>
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                MarkTale – Powered by AI is a full-service startup building,
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

            {/* Feature List */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "AI-Powered Solutions",
                "Global Reach",
                "Data-Driven Results",
              ].map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Grid - Modern Cards */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Value */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-black">
                        {stat.value}
                      </h3>
                      <span className="text-xs font-semibold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                        {stat.change}
                      </span>
                    </div>

                    {/* Label */}
                    <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                      {stat.label}
                    </p>

                    {/* Hover Border Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">
                  Join <span className="font-bold text-black">150+</span>{" "}
                  satisfied brands
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
