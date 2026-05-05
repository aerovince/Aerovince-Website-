"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Sparkles,
  Briefcase,
  TrendingUp,
  Users,
  Eye,
  Zap,
  Award,
  Star,
  Play,
  Clock,
  Share2,
} from "lucide-react";

const creativeContent = [
  {
    type: "post" as const,
    image: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
    thumbnail: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
    brand: "Delhi059",
    likes: "2.4k",
    comments: "156",
    views: "",
    duration: "",
    link: "https://www.instagram.com/p/DBjCxUbuKge/",
    category: "Food & Beverage",
  },
  {
    type: "post" as const,
    thumbnail: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
    image: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
    brand: "Local Ride",
    views: "",
    duration: "",
    likes: "3.1k",
    comments: "203",
    link: "https://www.instagram.com/p/DSGIHDZgcQm/",
    category: "Transportation",
  },
  {
    type: "post" as const,
    image: "/creatives/promaccreatives.png",
    thumbnail: "/creatives/promaccreatives.png",
    brand: "Promac Advisory",
    likes: "1.9k",
    comments: "124",
    views: "",
    duration: "",
    link: undefined,
    category: "Real Estate",
  },
  {
    type: "post" as const,
    thumbnail: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
    image: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
    brand: "Astro Nexus",
    views: "",
    duration: "",
    likes: "1.8k",
    comments: "89",
    link: "https://www.instagram.com/p/DTSxqv6iNh5/",
    category: "Astrology",
  },
  {
    type: "post" as const,
    image: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
    thumbnail: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
    brand: "Dee Cee Accessories",
    likes: "2.2k",
    comments: "167",
    views: "",
    duration: "",
    link: "https://www.instagram.com/p/DHIHRiZSdrU/",
    category: "Jewelry",
  },
  {
    type: "post" as const,
    thumbnail: "/creatives/biryanibar.jpg",
    image: "/creatives/biryanibar.jpg",
    brand: "Biryani Bar",
    views: "",
    duration: "",
    likes: "3.5k",
    comments: "234",
    link: undefined,
    category: "Hospitality",
  },
];

const stats = [
  { number: "30+", label: "Brands Built", icon: Briefcase, color: "blue" },
  {
    number: "10+",
    label: "Years of Legacy",
    icon: TrendingUp,
    color: "yellow",
  },
  { number: "500K+", label: "Lives Impacted", icon: Users, color: "blue" },
  { number: "100%", label: "Passion Driven", icon: Heart, color: "black" },
];

const categories = [
  "All",
  "Food & Beverage",
  "Transportation",
  "Real Estate",
  "Jewelry",
  "Hospitality",
];

export default function CreativeShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredContent =
    selectedCategory === "All"
      ? creativeContent
      : creativeContent.filter((item) => item.category === selectedCategory);

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="creative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Legacy Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              OUR JOURNEY
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
            A Legacy Reborn,
            <span className="block text-blue-600 mt-2">A Vision Renewed</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mt-6">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Every great story has chapters of triumph and transformation. Ours
              began with a dream—to build brands that don't just exist, but{" "}
              <span className="font-bold text-black">
                inspire, connect, and dominate
              </span>
              .
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              After years of building 30+ brands and touching half a million
              lives, we faced a crossroads. But from that moment of reflection
              came something more powerful—
              <span className="font-bold text-blue-600">
                a restart fueled by passion, experience, and an unshakeable
                commitment to creativity
              </span>
              .
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Today, we don't just create content. We craft{" "}
              <span className="font-bold text-black">legacies</span>. We tell{" "}
              <span className="font-bold text-black">stories</span>. We build{" "}
              <span className="font-bold text-black">empires</span>.
            </p>
          </div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div
                className={`w-12 h-12 rounded-xl ${
                  stat.color === "blue"
                    ? "bg-blue-600"
                    : stat.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-black"
                } flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon
                  className={`w-5 h-5 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Creative Content Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredContent.map((item, idx) => (
                <motion.div
                  key={item.brand}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={item.image}
                    alt={item.brand}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredCard === idx ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
                      hoveredCard === idx ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Brand Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-lg">
                      {item.brand}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Engagement Metrics Overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                      hoveredCard === idx ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs">
                          <Heart size={12} className="text-red-400" />
                          {item.likes}
                        </span>
                        <span className="flex items-center gap-1 text-xs">
                          <MessageCircle size={12} />
                          {item.comments}
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Eye size={12} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${
                      hoveredCard === idx ? "ring-2 ring-blue-500/50" : ""
                    }`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Zap, label: "10M+ Reach", color: "yellow" },
            { icon: Award, label: "Award Winning", color: "blue" },
            { icon: Clock, label: "24/7 Support", color: "black" },
            { icon: Share2, label: "Viral Campaigns", color: "blue" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md transition-all"
            >
              <item.icon
                className={`w-3 h-3 ${
                  item.color === "yellow"
                    ? "text-yellow-500"
                    : item.color === "blue"
                      ? "text-blue-600"
                      : "text-black"
                }`}
              />
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
            >
              Explore Our Full Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <p className="mt-3 text-gray-400 text-xs">
            Dive into our visual journey, reels, articles, and influencer
            campaigns
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to create your success story?
              </h3>
              <p className="text-gray-300 mb-5 max-w-md mx-auto text-sm">
                Let's create something extraordinary together
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
                >
                  Start Your Journey
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
