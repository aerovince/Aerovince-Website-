"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Star,
  Mic,
  Briefcase,
  Video,
  Sparkles,
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "Founder & Scale",
    desc: "Successfully founded and scaled MarkTale, launching multiple brands including Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge.",
    year: "2024",
    impact: "4 Brands",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Trophy,
    title: "Volvo Cars India",
    desc: "Led high-impact digital marketing for Volvo Cars India, driving campaigns across web, SEO/SEM, email, social media, and display channels.",
    year: "2023",
    impact: "300% ROI",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Briefcase,
    title: "13SQFT.COM",
    desc: "Spearheaded marketing for 13SQFT.COM (AMS and Procurement Partnership Model), improving product visibility and engagement through structured go-to-market strategies.",
    year: "2022",
    impact: "2x Growth",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Award,
    title: "Kamalraj Group",
    desc: "Headed marketing for Kamalraj Group (residential and commercial), increasing client subscriptions and activating new societies through performance-driven digital campaigns.",
    year: "2021",
    impact: "50+ Societies",
    color: "from-indigo-600 to-purple-600",
  },
  {
    icon: Mic,
    title: "Mindwise Media Research",
    desc: "Managed election surveys and a 120-member field team as Senior Zonal Coordinator at Mindwise Media Research Unit (India News), handling large-scale data collection and reporting.",
    year: "2019",
    impact: "120 Members",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Video,
    title: "Commercial Direction",
    desc: "Directed and filmed commercial and promotional content, including a chroma ad for Unique Builders, promotional planning for eBay.in, and ad direction for Square Animation Company.",
    year: "2018",
    impact: "10+ Ads",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Star,
    title: "National Theatre Actor",
    desc: "Represented Delhi at the national level as a theatre actor, demonstrating recognized performance skills and national-level visibility.",
    year: "2017",
    impact: "National Level",
    color: "from-blue-600 to-indigo-700",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence", icon: TrendingUp },
  { value: "50+", label: "Major Campaigns", icon: Globe },
  { value: "150+", label: "Brands Impacted", icon: Users },
];

export default function AwardsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      id="achievements"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Modern Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700 font-semibold text-sm tracking-wide">
              THE PATH TO EXCELLENCE
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
            Milestones that
            <span className="relative ml-4 inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-30" />
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                define us.
              </span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A decade of turning challenges into achievements
          </p>
        </motion.div>

        {/* Stats Row - Modern Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-black">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modern Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* Timeline Connector Line */}
              {index < achievements.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              )}

              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? "transform -translate-y-2" : ""
                }`}
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : ""
                  }`}
                  style={{ padding: "2px", borderRadius: "1rem" }}
                />

                <div className="relative bg-white rounded-2xl overflow-hidden">
                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`relative w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <item.icon size={20} className="text-white" />
                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 via-white/20 to-white/0" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                        <span className="text-xs font-medium text-blue-600 mt-1">
                          {item.impact}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black mb-2 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Animated Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <button className="flex items-center gap-2 text-blue-600 text-sm font-semibold group">
                        Read Case Study
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </motion.div>
                  </div>

                  {/* Year Timeline Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent">
                    <div
                      className={`h-full w-0 bg-gradient-to-r ${item.color} transition-all duration-700 ${
                        hoveredIndex === index ? "w-full" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-20" />
            <button className="relative group px-8 py-4 bg-black text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-900 transition-all duration-300">
              View Complete Journey
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            From 2017 to Present — Every milestone tells a story
          </p>
        </motion.div>
      </div>
    </section>
  );
}
