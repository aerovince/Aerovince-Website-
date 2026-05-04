"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Eye,
  BarChart3,
  Shield,
  Rocket,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";

const workItems = [
  {
    id: "delhi059",
    title: "Delhi059",
    category: "Restaurant - Canada",
    description:
      "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
    image: "/delhi059-logo.jpg",
    tags: ["Hospitality", "Featured"],
    result: "650+ Reviews",
    growth: "500%",
    featured: true,
  },
  {
    id: "local-ride",
    title: "Local Ride",
    category: "Transportation - Canada",
    description:
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse.",
    image: "/Feature_logos/localride.jpg",
    tags: ["App Development", "Featured"],
    result: "100k+ Rides",
    growth: "300%",
    featured: true,
  },
  {
    id: "bg-foods",
    title: "BG Foods",
    category: "E-commerce - Canada/USA",
    description:
      "Building a thriving food e-commerce platform across North America.",
    image: "https://www.marktaleworld.com/clients/bgfoods.png",
    tags: ["E-commerce", "Featured"],
    result: "50k+ Orders",
    growth: "1000%",
    featured: true,
  },
  {
    id: "dee-cee-accessories",
    title: "Dee Cee Accessories",
    category: "Jewelry",
    description:
      "Digital setup from scratch. Products photography, SEO based listings.",
    image: "/Feature_logos/deecee.jpg",
    tags: ["E-commerce"],
    result: "10x Sales",
    growth: "900%",
    featured: false,
  },
  {
    id: "cabtale",
    title: "CabTale",
    category: "Transportation",
    description:
      "Building the future of urban mobility with seamless booking experiences.",
    image: "/Feature_logos/cabtale.jpg",
    tags: ["Mobility", "App Development"],
    result: "1M+ Downloads",
    growth: "800%",
    featured: false,
  },
  {
    id: "last-mile-care",
    title: "Last Mile Care",
    category: "NGO",
    description: "Supporting communities with compassionate care.",
    image: "https://www.marktaleworld.com/clients/lastmilecare.png",
    tags: ["Non-profit"],
    result: "50k+ Reached",
    growth: "200%",
    featured: false,
  },
];

const categories = [
  "All",
  "Hospitality",
  "App Development",
  "E-commerce",
  "Non-profit",
];

export default function WorkGallery() {
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredItems =
    filter === "All"
      ? workItems
      : workItems.filter((item) => item.tags.includes(filter));

  const stats = [
    { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
    { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
    { value: "4.95", label: "Client Rating", icon: Star, change: "5★" },
    { value: "98%", label: "Retention", icon: Shield, change: "+8%" },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden" id="work">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full border border-blue-500/20 mb-6 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              OUR WORK
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            Digital empires
            <span className="relative ml-4 inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 blur-2xl opacity-30" />
              <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                built to last.
              </span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From concept to category leader — helping 150+ brands achieve
            unprecedented growth across industries.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-black">{stat.value}</p>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "text-white"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Modern Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={`/projects/${item.id}`} className="block h-full">
                  <motion.div
                    className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          hoveredCard === item.id ? "scale-110" : "scale-100"
                        }`}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-lg shadow-lg">
                          {item.category.split(" - ")[0]}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg border border-yellow-400 shadow-lg">
                            <div className="flex items-center gap-1">
                              <Zap className="w-3 h-3 text-yellow-500" />
                              <span className="text-xs font-bold text-yellow-600">
                                Featured
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Growth Badge on Hover */}
                      <motion.div
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredCard === item.id ? 1 : 0,
                          y: hoveredCard === item.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 flex items-center justify-between shadow-lg">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-bold text-gray-900">
                              Growth
                            </span>
                          </div>
                          <span className="text-sm font-bold text-blue-600">
                            {item.growth}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl font-bold text-black leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <motion.div
                          animate={{
                            x: hoveredCard === item.id ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                          </div>
                        </motion.div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {item.description}
                      </p>

                      {/* Result Badge */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                            <Award className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">
                            {item.result}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-bold text-blue-600">
                            {item.growth}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredCard === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/50" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-500 font-medium">
              No projects found in "{filter}" category.
            </p>
            <button
              onClick={() => setFilter("All")}
              className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1"
            >
              View all projects
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>
        )}

        {/* CTA Section - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 shadow-2xl">
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
              >
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 text-sm font-medium">
                  Ready to scale?
                </span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Let's build your
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2">
                  digital empire
                </span>
              </h3>

              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Join 150+ successful brands that trusted us with their growth
                journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Globe className="w-4 h-4" />
                    View Portfolio
                  </Link>
                </motion.div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <p className="text-xs text-gray-400">No retainer fees</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <p className="text-xs text-gray-400">
                    Strategy-first approach
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <p className="text-xs text-gray-400">Data-driven results</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
