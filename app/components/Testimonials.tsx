"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Sparkles,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote: "Awesome B2C Marketing Agency. Flawless Project Delivery.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    rating: 5,
    company: "TechStart",
  },
  {
    quote:
      "They transformed our digital presence completely. Best investment we ever made.",
    author: "Michael Chen",
    role: "Marketing Director",
    rating: 5,
    company: "GrowthX",
  },
  {
    quote:
      "The team's dedication and creativity is unmatched. Our ROI increased by 300%.",
    author: "Priya Sharma",
    role: "Founder",
    rating: 5,
    company: "EcoCart",
  },
];

const stats = [
  { value: "150+", label: "Happy Clients", icon: Users, change: "+42%" },
  { value: "98%", label: "Satisfaction", icon: Award, change: "+8%" },
  { value: "300%", label: "Avg. ROI", icon: TrendingUp, change: "+150%" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="relative py-28 bg-white overflow-hidden"
      id="testimonials"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/20 rounded-full blur-3xl" />
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
              CLIENT TESTIMONIALS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            Trusted by
            <span className="relative ml-4 inline-block">
              <span className="relative text-blue-600">industry leaders.</span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take our word for it — hear what our clients have to say
            about their transformation journey.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <Quote className="absolute -top-10 -right-10 text-white/10 w-40 h-40" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 border-4 border-white/5 rounded-full" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Animated Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Quote className="w-12 h-12 text-white/30 mb-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                    {testimonials[currentIndex].quote}
                  </h3>
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-white/60 text-sm">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8 relative z-10">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-6 relative z-10">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 h-2 bg-white rounded-full"
                        : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-6">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span className="text-blue-600 font-semibold text-xs tracking-wide uppercase">
                  Our Track Record
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Numbers that speak for themselves
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We've helped over 150 businesses achieve remarkable growth
                through data-driven strategies and creative excellence.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-black">
                        {stat.value}
                      </p>
                      <span className="text-xs font-semibold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 font-bold rounded-xl hover:bg-blue-600 transition-all duration-300"
              >
                View All Success Stories
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400">Join 150+ happy clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
