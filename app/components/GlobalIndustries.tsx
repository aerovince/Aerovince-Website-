"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Lightbulb,
  Sparkles,
  MapPin,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const locations = [
  "Canada",
  "USA",
  "UAE",
  "India",
  "New Zealand",
  "South Africa",
];

const industries = [
  "Healthcare",
  "B2B",
  "E-Commerce",
  "FMCG",
  "Finance",
  "Education",
  "SaaS",
  "Mobile Apps",
  "Fashion",
  "Hospitality",
];

export default function GlobalIndustries() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="global">
      {/* Abstract Background Elements - Matching theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              WORLDWIDE REACH
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            Global presence.
            <span className="relative ml-4 inline-block">
              <span className="absolute -inset-1 bg-blue-600 blur-2xl opacity-20" />
              <span className="relative text-blue-600">Local expertise.</span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We've helped businesses across 6+ countries and 10+ industries
            achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Global Presence */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8">
             
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/25">
                    <Globe className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    Global Presence
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Worked with clients across the globe, delivering excellence
                  without borders. Your business, our expertise — anywhere in
                  the world.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {locations.map((loc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2 group/loc"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover/loc:scale-150 transition-transform" />
                      <span className="text-gray-700 font-medium group-hover/loc:text-blue-600 transition-colors">
                        {loc}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats decoration */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-500">6+ Countries</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Industries Served */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8">
             
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/25">
                    <Lightbulb className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    Industries Served
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our expertise spans across diverse sectors, helping unique
                  challenges find unique solutions. No industry is too niche for
                  us.
                </p>

                <div className="flex flex-wrap gap-3">
                  {industries.map((ind, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm cursor-default transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-600/25"
                    >
                      {ind}
                    </motion.span>
                  ))}
                </div>

                {/* Stats decoration */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-500">
                      10+ Industries
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

  
      </div>
    </section>
  );
}
