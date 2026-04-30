"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { Sparkles, Award, CheckCircle } from "lucide-react";

const techs = [
  {
    name: "Google",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Meta",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    name: "X",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

const certifications = [
  "Google Partners",
  "Meta Business Partners",
  "LinkedIn Marketing",
  "AWS Certified",
];

export default function CertificationsSection() {
  return (
    <section
      className="relative py-16 bg-white overflow-hidden"
      id="certifications"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-100/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Trusted Technologies
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            Certified &{" "}
            <span className="text-blue-600">Industry-Recognized</span>
          </h3>
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100"
            >
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{cert}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Gradient Overlays - Clean version */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <Marquee className="[--duration:25s]">
            {techs.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="group mx-6 md:mx-8 flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  {/* Icon Container */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-md">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-8 md:h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-xs font-medium text-blue-600 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
