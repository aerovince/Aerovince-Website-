"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Video,
  Search,
  FileText,
  Target,
  ShieldCheck,
  TrendingUp,
  BarChart,
  Globe,
  Smartphone,
  Zap,
  Rocket,
  Award,
  Users,
  Brain,
  Megaphone,
  LineChart,
  Code,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Android & iOS Development",
    icon: Smartphone,
    description:
      "High-performance mobile applications that users love. Native and cross-platform expertise.",
    badge: "Popular",
    color: "blue",
  },
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Scalable, fast, and secure websites that convert visitors into customers.",
    badge: "Essential",
    color: "cyan",
  },
  {
    title: "Market Research",
    icon: Search,
    description:
      "Deep insights into your market, competitors, and customers for data-driven decisions.",
    badge: "Strategic",
    color: "blue",
  },
  {
    title: "Marketing Strategy",
    icon: FileText,
    description:
      "Comprehensive growth plans with clear roadmaps and measurable KPIs.",
    badge: "Core",
    color: "purple",
  },
  {
    title: "Performance Marketing",
    icon: TrendingUp,
    description:
      "ROI-focused campaigns across Google, Meta, and emerging platforms.",
    badge: "High Impact",
    color: "blue",
  },
  {
    title: "SEO & Analytics",
    icon: BarChart,
    description:
      "Dominate search rankings with actionable data insights and continuous optimization.",
    badge: "Essential",
    color: "cyan",
  },
  {
    title: "Lead Generation",
    icon: Target,
    description:
      "Qualified leads delivered consistently through multi-channel strategies.",
    badge: "Growth",
    color: "purple",
  },
  {
    title: "Video Content",
    icon: Video,
    description:
      "Story-driven videos that capture attention and drive engagement.",
    badge: "Creative",
    color: "blue",
  },
  {
    title: "Reputation Management",
    icon: ShieldCheck,
    description:
      "Protect and enhance your brand image across all digital platforms.",
    badge: "Trust",
    color: "cyan",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      id="services"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-blue-600 font-body font-bold uppercase tracking-[0.2em] text-sm">
              What We Deliver
            </span>
            <div className="w-12 h-[1px] bg-blue-500" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4">
            Everything you need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block mt-2">
              scale your business
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            From strategy to execution — we provide end-to-end solutions that
            drive real, measurable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500" />

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-2.5 py-1 text-xs font-bold rounded-full bg-${service.color === "blue" ? "blue" : service.color === "cyan" ? "cyan" : service.color === "purple" ? "purple" : "blue"}-100 text-${service.color === "blue" ? "blue" : service.color === "cyan" ? "cyan" : service.color === "purple" ? "purple" : "blue"}-700`}
                >
                  {service.badge}
                </span>
              </div>

              {/* Icon Container */}
              <div className="p-6 pb-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-blue-600" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 font-body leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: Award, label: "Award Winning Agency", color: "blue" },
            { icon: Users, label: "150+ Happy Clients", color: "cyan" },
            { icon: Rocket, label: "200% Avg Growth", color: "purple" },
            { icon: Zap, label: "Fast Delivery", color: "blue" },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm"
            >
              <badge.icon className={`w-5 h-5 text-${badge.color}-500`} />
              <span className="text-sm font-semibold text-gray-700">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>

        
        {/* Floating Element */}
        <div className="absolute -z-10 top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
