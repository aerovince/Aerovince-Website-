"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Sparkles,
  Briefcase,
  TrendingUp,
  Users,
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
  },
];

const stats = [
  { number: "30+", label: "Brands Built", icon: Briefcase },
  { number: "10+", label: "Years of Legacy", icon: TrendingUp },
  { number: "500K+", label: "Lives Impacted", icon: Users },
  { number: "100%", label: "Passion Driven", icon: Heart },
];

export default function CreativeShowcase() {
  return (
    <section className="py-28 bg-white overflow-hidden" id="creative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Legacy Story Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              OUR JOURNEY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            A Legacy Reborn,
            <span className="relative ml-4 inline-block">
              <span className="relative text-blue-600">A Vision Renewed</span>
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Every great story has chapters of triumph and transformation. Ours
              began with a dream—to build brands that don't just exist, but{" "}
              <span className="font-bold text-black">
                inspire, connect, and dominate
              </span>
              .
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              After years of building 30+ brands and touching half a million
              lives, we faced a crossroads. But from that moment of reflection
              came something more powerful—
              <span className="font-bold text-blue-600">
                a restart fueled by passion, experience, and an unshakeable
                commitment to creativity
              </span>
              .
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Today, we don't just create content. We craft{" "}
              <span className="font-bold text-black">legacies</span>. We tell{" "}
              <span className="font-bold text-black">stories</span>. We build{" "}
              <span className="font-bold text-black">empires</span>.
            </p>
          </div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Creative Content Preview */}
        <div className="mb-12">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Creative Universe
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {creativeContent.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <Image
                  src={item.image}
                  alt={item.brand}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Simple Overlay - No glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm mb-2">
                      {item.brand}
                    </p>
                    <div className="flex items-center gap-4 text-white text-xs">
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={12} />
                        {item.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/projects">
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Full Journey
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </motion.button>
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            Dive into our visual journey, reels, articles, and influencer
            campaigns
          </p>
        </motion.div>
      </div>
    </section>
  );
}
