"use client";

import React from "react";
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
  Star
} from "lucide-react";

export default function StartupFeature() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
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
                <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/images/startup-cafe.png"
                    alt="Startup Founder"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl mt-8 group">
                  <Image
                    src="/images/service-dev.png"
                    alt="Coding"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-bold">Growth Program</span>
                </div>
              </div>

              {/* Stats Card Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 hidden lg:block">
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
              </div>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
                For Ambitious Founders
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-6 leading-tight">
              Ready to scale?
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block mt-2">
                We build global brands.
              </span>
            </h2>

            {/* Subheading */}
            <h4 className="text-xl text-gray-600 font-medium mb-6">
              From startup to market leader — your growth journey starts here.
            </h4>

            {/* Description */}
            <p className="text-gray-600 font-body leading-relaxed mb-8">
              Born from Kestone Global's marketing DNA, The Kestone GTM
              Acceleration Program unlocks the power of proven strategies for
              ambitious consumer brands. Through our commitment to fostering
              growth and innovation, we aim to fuel the entrepreneurial spirit
              and help brands connect meaningfully with their audiences.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: Rocket,
                  title: "Rapid Scale",
                  desc: "10x growth in 6 months",
                },
                {
                  icon: Target,
                  title: "Proven Strategy",
                  desc: "Data-driven approach",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "Enter new markets",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Dedicated support",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <benefit.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">
                      {benefit.title}
                    </p>
                    <p className="text-xs text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg uppercase tracking-wider overflow-hidden rounded-xl text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Growth Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all rounded-xl text-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  >
                    F
                  </div>
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
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold text-black">4.95</span>
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
