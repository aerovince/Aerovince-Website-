"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Users, Zap, Shield } from "lucide-react";

export default function TeamCTA() {
  return (
    <section
      className="relative w-full overflow-hidden py-28 bg-gradient-to-b from-white to-gray-50"
      id="contact"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Let's Work Together
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            We are big enough to{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1  opacity-30" />
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                manage scale
              </span>
            </span>{" "}
            <br />& small enough to{" "}
            <span className="relative inline-block">
              <span className="relative text-blue-600">
                understand the care you need
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            You may be an established enterprise with defined processes for
            almost everything or a self-funded start-up looking to create a
            niche for itself, we are here for you to make things work.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { value: "24/7", label: "Support", icon: Zap },
              { value: "100%", label: "Dedication", icon: Shield },
              { value: "50+", label: "Team Members", icon: Users },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-bold text-black">{stat.value}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-black font-bold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </Link>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-100"
          >
            <p className="text-sm text-gray-400 mb-3">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {["VOLVO", "13SQFT", "KAMALRAJ", "DELHI059"].map((brand, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold text-gray-500 tracking-wider"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
