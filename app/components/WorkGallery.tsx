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
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
    image: "/Feature_logos/localride.jpg",
    tags: ["App Development", "Featured"],
    result: "100k+ Rides",
    growth: "300%",
    featured: true,
  },
  {
    id: "dee-cee-accessories",
    title: "Dee Cee Accessories",
    category: "Jewelry",
    description:
      "Digital setup from scratch. Products photography, SEO based listings on Amazon and Flipkart. Digital Social Media Accounts setup.",
    image: "/Feature_logos/deecee.jpg",
    tags: ["E-commerce", "Photography"],
    result: "10x Sales",
    growth: "900%",
    featured: false,
  },
  {
    id: "last-mile-care",
    title: "Last Mile Care",
    category: "NGO",
    description:
      "Supporting communities with compassionate care and digital outreach strategies to amplify their mission.",
    image: "https://www.marktaleworld.com/clients/lastmilecare.png",
    tags: ["Non-profit"],
    result: "50k+ Reached",
    growth: "200%",
    featured: false,
  },
  {
    id: "maggo-play-school",
    title: "Maggo Play School",
    category: "Education",
    description:
      "Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.",
    image: "/Feature_logos/maggo.png",
    tags: ["Education"],
    result: "300% Growth",
    growth: "300%",
    featured: false,
  },
  {
    id: "bg-foundation",
    title: "BG Foundation",
    category: "NGO - Canada",
    description:
      "Empowering change through digital transformation and community engagement initiatives across Canada.",
    image: "https://www.marktaleworld.com/clients/bgfoundation.png",
    tags: ["Non-profit"],
    result: "$2M+ Raised",
    growth: "400%",
    featured: false,
  },
  {
    id: "bg-foods",
    title: "BG Foods",
    category: "E-commerce - Canada/USA",
    description:
      "Everything from scratch. Building a thriving food e-commerce platform across North America.",
    image: "https://www.marktaleworld.com/clients/bgfoods.png",
    tags: ["E-commerce"],
    result: "50k+ Orders",
    growth: "1000%",
    featured: true,
  },
  {
    id: "promac-advisory",
    title: "Promac Advisory",
    category: "Real Estate - Jaipur",
    description:
      "Transforming real estate advisory with data-driven insights and premium digital presence.",
    image: "/Feature_logos/promac.png",
    tags: ["Real Estate"],
    result: "₹100Cr+ Deals",
    growth: "250%",
    featured: false,
  },
  {
    id: "cabtale",
    title: "CabTale",
    category: "Transportation",
    description:
      "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
    image: "/Feature_logos/cabtale.jpg",
    tags: ["Mobility", "App Development"],
    result: "1M+ Downloads",
    growth: "800%",
    featured: true,
  },
  {
    id: "astro-nexus",
    title: "Astro Nexus",
    category: "Astrology",
    description:
      "Bridging ancient wisdom with modern technology through engaging digital astrology experiences.",
    image: "/Feature_logos/astronexus.jpg",
    tags: ["Digital Media"],
    result: "500k+ Users",
    growth: "600%",
    featured: false,
  },
  {
    id: "biryani-bar",
    title: "Biryani Bar",
    category: "Hospitality",
    description:
      "Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.",
    image: "/Feature_logos/biryanibar.jpg",
    tags: ["Hospitality"],
    result: "200% Revenue",
    growth: "200%",
    featured: false,
  },
  {
    id: "read-abroad",
    title: "Read Abroad",
    category: "Education",
    description:
      "Connecting students with global educational opportunities through innovative digital platforms.",
    image: "https://www.marktaleworld.com/clients/readabroad.png",
    tags: ["Education"],
    result: "10k+ Students",
    growth: "400%",
    featured: false,
  },
  {
    id: "writing-rodgers",
    title: "Writing Rodgers",
    category: "Education",
    description:
      "Empowering writers and educators with comprehensive digital tools and content strategies.",
    image: "/Feature_logos/writing.png",
    tags: ["Education"],
    result: "5k+ Writers",
    growth: "250%",
    featured: false,
  },
];

const categories = [
  "All",
  "Hospitality",
  "App Development",
  "E-commerce",
  "Non-profit",
  "Education",
  "Real Estate",
];

export default function WorkGallery() {
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredItems =
    filter === "All"
      ? workItems
      : workItems.filter((item) => item.tags.includes(filter));

  const featuredItems = workItems.filter((item) => item.featured).slice(0, 3);

  const stats = [
    { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
    { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
    { value: "4.95", label: "Client Rating", icon: Star, change: "⭐ 5★" },
    { value: "98%", label: "Retention Rate", icon: Shield, change: "+8%" },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden" id="work">
      {/* Abstract Background Elements - Blue/Black/White only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header - Blue/Black/White only */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              PORTFOLIO SHOWCASE
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            Digital empires
            <span className="relative ml-4 inline-block">
              <span className="absolute -inset-1 bg-blue-600 blur-2xl opacity-20" />
              <span className="relative text-blue-600">built to last.</span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From concept to category leader — we've helped 150+ brands achieve
            unprecedented growth across 10+ industries.
          </p>
        </motion.div>

        {/* Stats Row - Blue/Black/White only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/25">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-black">{stat.value}</p>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects - Blue/Black/White only */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                  Featured Work
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black">
                Our most <span className="text-blue-600">impactful</span>{" "}
                projects
              </h3>
            </div>
            <Link
              href="/featured"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mt-4 md:mt-0 group"
            >
              Explore all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -12 }}
                  className="relative h-[480px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Featured Badge */}
                  <div className="absolute top-5 right-5">
                    <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-blue-400 stroke-blue-400" />
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-bold text-sm">
                          {item.growth}
                        </span>
                        <span className="text-xs text-white/50">growth</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Section - Blue/Black/White only */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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
                  className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Blue/Black/White only */}
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
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/projects/${item.id}`} className="block h-full">
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category and Growth Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-blue-600 text-white shadow-md">
                          {item.category.split(" - ")[0]}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <div className="px-2 py-1 bg-black text-white text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-md">
                          <BarChart3 className="w-2.5 h-2.5" />
                          {item.growth}
                        </div>
                      </div>

                      {/* Quick View on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                            <Eye className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-xs font-semibold text-blue-600">
                              Quick View
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                            <Award className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs font-medium text-gray-600">
                            {item.result}
                          </span>
                        </div>
                        <div className="flex items-center gap-0.5 text-blue-600">
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs font-bold">
                            {item.growth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
            className="text-center py-20 bg-white rounded-2xl border border-gray-100"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">
              No projects found in "{filter}" category.
            </p>
            <button
              onClick={() => setFilter("All")}
              className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold"
            >
              View all projects →
            </button>
          </motion.div>
        )}

        {/* CTA Section - Blue/Black/White only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 text-sm font-medium">
                  Ready to scale?
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's build your digital empire
              </h3>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Join 150+ successful brands that trusted us with their growth
                journey.
              </p>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300"
              >
                <Briefcase className="w-4 h-4" />
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-xs text-gray-400 mt-6">
                No retainer fees • Strategy-first approach • Data-driven results
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
