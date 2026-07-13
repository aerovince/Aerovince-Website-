"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Sparkles, Star, Quote, ArrowRight, MapPin } from "lucide-react";

export function TestimonialsSection() {
  return (
    <div className="relative min-h-[30rem] md:min-h-[40rem] flex flex-col antialiased bg-white items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Client Love
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
            What Our{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-30" />
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </span>
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Hear from those who&apos;ve experienced our work and transformed their
            businesses
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center items-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-bold text-black">4.95</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <span className="text-sm text-gray-500">150+ Happy Clients</span>
        </motion.div>

        {/* Infinite Moving Cards */}
        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 z-10 relative"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Aerovince+Indore"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-sm font-bold text-gray-700"
          >
            <span className="text-lg">⭐</span>
            Leave a Google Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-sm font-bold shadow-lg shadow-blue-600/25"
          >
            See Our Work
            <MapPin className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
            <Quote className="w-3 h-3 text-blue-600" />
            <span className="text-xs text-gray-500">
              Join 150+ businesses that trust us
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialsSection;

// NOTE: placeholder/test testimonials — replace with real Aerovince client
// reviews before this goes live.
const testimonials = [
  {
    quote: "Professional and supportive team. Great experience!",
    name: "Rohan Mehta",
    title: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "It has been a very good experience working with Aerovince. All the employees here are very supportive, and the founder too is very visionary and growth focused.",
    name: "Sanya Kapoor",
    title: "Client",
    rating: 5,
  },
  {
    quote: "Excellent service and results.",
    name: "Vikram Desai",
    title: "Client",
    rating: 5,
  },
  {
    quote: "Best and creative marketing team.",
    name: "Neha Reddy",
    title: "Client",
    rating: 5,
  },
  {
    quote:
      "Choosing Aerovince was the best decision for our brand launch! Their AI-powered marketing strategies helped us grow...",
    name: "Arjun Malhotra",
    title: "Client",
    rating: 5,
  },
  {
    quote:
      "Aerovince Private Limited transformed my small business into a local favorite! Their digital marketing strategies,...",
    name: "Priya Nair",
    title: "Client",
    rating: 5,
  },
];