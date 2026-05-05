"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  TrendingUp,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  Star,
  Sparkles,
  CheckCircle,
  Briefcase,
  Award,
  Heart,
} from "lucide-react";

export default function StartupFeature() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Rocket,
      title: "Rapid Scale",
      desc: "10x growth in 6 months",
      color: "blue",
      stat: "+500%",
    },
    {
      icon: Target,
      title: "Proven Strategy",
      desc: "Data-driven approach",
      color: "yellow",
      stat: "95% Success",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Enter new markets",
      color: "blue",
      stat: "10+ Countries",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Dedicated support",
      color: "black",
      stat: "24/7 Support",
    },
  ];

  const stats = [
    { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
    { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
    { value: "98%", label: "Client Retention", icon: Heart, change: "Top 1%" },
    { value: "4.95", label: "Client Rating", icon: Star, change: "5★" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Images Column - Left Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/startup-cafe.png"
                    alt="Startup Founder"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay Text on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">
                        Success Story
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl mt-8 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Image
                    src="/images/service-dev.png"
                    alt="Coding"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay Text on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-semibold text-yellow-600">
                        Innovation
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-bold">Growth Program</span>
                </div>
              </motion.div>

              {/* Stats Card Overlay */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 hidden lg:block border border-gray-100"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">150+</p>
                    <p className="text-xs text-gray-500">Brands Scaled</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">200%</p>
                    <p className="text-xs text-gray-500">Avg. Growth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column - Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tagline */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
                For Ambitious Founders
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Ready to scale?
              <span className="block text-blue-600 mt-2">
                We build global brands.
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.h4
              className="text-xl text-gray-600 font-medium mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              From startup to market leader — your growth journey starts here.
            </motion.h4>

            {/* Description */}
            <motion.p
              className="text-gray-500 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Born from Kestone Global's marketing DNA, The Kestone GTM
              Acceleration Program unlocks the power of proven strategies for
              ambitious consumer brands. Through our commitment to fostering
              growth and innovation, we aim to fuel the entrepreneurial spirit
              and help brands connect meaningfully with their audiences.
            </motion.p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === idx
                          ? benefit.color === "blue"
                            ? "bg-blue-600"
                            : benefit.color === "yellow"
                              ? "bg-yellow-500"
                              : "bg-black"
                          : "bg-gray-100"
                      }`}
                      animate={{
                        scale: hoveredCard === idx ? 1.1 : 1,
                        rotate: hoveredCard === idx ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <benefit.icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          hoveredCard === idx
                            ? "text-white"
                            : benefit.color === "blue"
                              ? "text-blue-600"
                              : benefit.color === "yellow"
                                ? "text-yellow-600"
                                : "text-black"
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-bold text-black text-sm group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </p>
                      <p className="text-xs text-gray-500">{benefit.desc}</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredCard === idx ? 1 : 0,
                        scale: hoveredCard === idx ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-1.5 py-0.5 rounded bg-green-100">
                        <span className="text-[9px] font-bold text-green-600">
                          {benefit.stat}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom border animation */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                      benefit.color === "blue"
                        ? "bg-blue-600"
                        : benefit.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-black"
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.slice(0, 4).map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <p className="text-lg font-bold text-black">{stat.value}</p>
                  <p className="text-[10px] text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-3.5 bg-blue-600 text-white font-bold text-base uppercase tracking-wider overflow-hidden rounded-xl text-center inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Growth Journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-blue-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="px-8 py-3.5 bg-white border-2 border-blue-600 text-blue-600 font-bold text-base uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all rounded-xl text-center inline-flex items-center justify-center w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicator */}
            <motion.div
              className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className="flex -space-x-2">
                {["AJ", "KS", "VR", "PS"].map((letter, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-700 shadow-sm"
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-black">
                  Trusted by 150+ founders
                </p>
                <p className="text-xs text-gray-500">
                  Join the success stories
                </p>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-yellow-500 fill-yellow-500"
                  />
                ))}
                <span className="text-sm font-bold text-black ml-1">4.95</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
