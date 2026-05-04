"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Color Schemes - Only Blue, Yellow, Black
const colorSchemes = {
  blue: {
    primary: "from-blue-600 via-blue-500 to-cyan-500",
    secondary: "from-blue-500 to-cyan-500",
    accent: "blue-500",
    text: "text-blue-600",
    bg: "bg-blue-600",
    tagline: "BLUE OCEAN STRATEGY",
    title: "Dominate the",
    highlight: "Digital Frontier",
    subtitle: "Where vision meets velocity",
    description:
      "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
    ctaPrimary: "Launch Vision",
    ctaSecondary: "Explore Strategy",
  },
  yellow: {
    primary: "from-yellow-500 via-amber-500 to-orange-500",
    secondary: "from-yellow-500 to-orange-500",
    accent: "yellow-500",
    text: "text-yellow-600",
    bg: "bg-yellow-500",
    tagline: "REBEL ECONOMICS",
    title: "Break the",
    highlight: "Status Quo",
    subtitle: "Bold moves create bold empires",
    description:
      "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
    ctaPrimary: "Start Rebellion",
    ctaSecondary: "Read Manifesto",
  },
  black: {
    primary: "from-gray-900 via-gray-800 to-gray-700",
    secondary: "from-gray-800 to-gray-700",
    accent: "gray-900",
    text: "text-gray-900",
    bg: "bg-gray-900",
    tagline: "PREMIUM LEGACY",
    title: "Build Your",
    highlight: "Immortal Empire",
    subtitle: "Premium brands demand premium execution",
    description:
      "Where sophistication meets strategy. Elite positioning for founders ready to lead.",
    ctaPrimary: "Claim Legacy",
    ctaSecondary: "View Work",
  },
};

// Founder card data - Only 3 founders (Blue, Yellow, Black)
const founderCards = [
  {
    id: 1,
    name: "Arjun Mehta",
    title: "Founder & CEO",
    quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
    colorScheme: colorSchemes.blue,
    stats: [
      { value: "10x", label: "Growth" },
      { value: "150+", label: "Brands" },
      { value: "98%", label: "Success" },
    ],
  },
  {
    id: 2,
    name: "Kavya Singh",
    title: "Chief Disruptor",
    quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=600&h=800&fit=crop",
    colorScheme: colorSchemes.yellow,
    stats: [
      { value: "15x", label: "ROI" },
      { value: "200+", label: "Campaigns" },
      { value: "45+", label: "Awards" },
    ],
  },
  {
    id: 3,
    name: "Vikram Rao",
    title: "Creative Director",
    quote: "True leaders don't follow trends. They set standards that last for generations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    colorScheme: colorSchemes.black,
    stats: [
      { value: "$2B+", label: "Value" },
      { value: "25+", label: "Years" },
      { value: "100%", label: "Success" },
    ],
  },
];

// Card Component
const FounderCard = ({ card, isCenter, onClick }: { card: any; isCenter: boolean; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scheme = card.colorScheme;

  return (
    <motion.div
      className={`
        relative cursor-pointer transition-all duration-500 flex-shrink-0
        ${isCenter ? "w-72 md:w-80 lg:w-88" : "w-56 md:w-64"}
      `}
      animate={{
        scale: isCenter ? 1 : 0.85,
        opacity: isCenter ? 1 : 0.5,
        zIndex: isCenter ? 20 : 10,
      }}
      whileHover={{ scale: isCenter ? 1.02 : 0.87 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`
          relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500
          ${isCenter ? "h-[440px] md:h-[500px]" : "h-[360px] md:h-[420px]"}
          ${isCenter ? `ring-2 ring-offset-2 ring-${scheme.accent}` : ""}
        `}
      >
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, 350px"
          priority={isCenter}
        />

        {/* Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
          animate={{
            opacity: isHovered ? 0.9 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-5 text-white"
          animate={{
            y: isHovered ? -15 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-1.5">
            <motion.div
              className="flex items-center gap-2"
              animate={{ x: isHovered ? 8 : 0 }}
            >
              <div className="w-6 h-0.5 bg-white/80" />
              <span className="text-[10px] font-semibold tracking-wider uppercase">
                Founder
              </span>
            </motion.div>

            <motion.h3
              className="text-lg md:text-xl font-bold"
              animate={{ x: isHovered ? 8 : 0 }}
            >
              {card.name}
            </motion.h3>

            <motion.p
              className="text-xs text-white/70 font-medium"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              {card.title}
            </motion.p>

            <motion.button
              className="mt-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg text-xs font-semibold w-fit"
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 15,
              }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Profile
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Particle Component
const Particles = ({ accent }: { accent: string }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-0.5 h-0.5 bg-${accent} rounded-full`}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            y: [null, -100, -200],
            x: [null, Math.random() * 80 - 40, Math.random() * 150 - 75],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function ModernHeroSection() {
  const [centerIndex, setCenterIndex] = useState(1); // Start with yellow in center
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  const currentCard = founderCards[centerIndex];
  const currentScheme = currentCard.colorScheme;

  // Auto-play carousel
  useEffect(() => {
    if (!mounted) return;
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextCard();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, mounted, centerIndex]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextCard = () => {
    setCenterIndex((prev) => (prev + 1) % founderCards.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevCard = () => {
    setCenterIndex((prev) => (prev - 1 + founderCards.length) % founderCards.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (centerIndex + i + founderCards.length) % founderCards.length;
      cards.push({
        ...founderCards[index],
        isCenter: i === 0,
        position: i,
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  if (!mounted) {
    return (
      <div className="relative min-h-screen w-full bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-h-screen flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        key={`bg-${centerIndex}`}
        className={`absolute inset-0 bg-gradient-to-br ${currentScheme.primary} opacity-[0.03]`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <Particles accent={currentScheme.accent} />

      {/* Gradient Orbs */}
      <motion.div
        key={`orb1-${centerIndex}`}
        className={`absolute top-32 left-10 w-72 h-72 rounded-full bg-gradient-to-r ${currentScheme.primary} opacity-[0.08] blur-3xl`}
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        key={`orb2-${centerIndex}`}
        className={`absolute bottom-32 right-10 w-96 h-96 rounded-full bg-gradient-to-r ${currentScheme.secondary} opacity-[0.08] blur-3xl`}
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main Content - Added pt-24 to account for fixed navbar */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24 lg:pt-28">
        <div className="min-h-[calc(100vh-120px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column - Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${centerIndex}`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex"
                >
                  <div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentScheme.primary} bg-opacity-10 backdrop-blur-sm border border-${currentScheme.accent}/20`}
                  >
                    <span
                      className={`text-[11px] font-semibold tracking-wider bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
                    >
                      {currentScheme.tagline}
                    </span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight"
                >
                  <span className="text-gray-900">{currentScheme.title}</span>
                  <br />
                  <span
                    className={`bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
                  >
                    {currentScheme.highlight}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-base md:text-lg font-medium bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
                >
                  {currentScheme.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-gray-500 text-sm md:text-base leading-relaxed"
                >
                  {currentScheme.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-8 pt-2"
                >
                  {currentCard.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="text-left"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p
                        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-wrap gap-3 pt-2"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r ${currentScheme.primary} text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all gap-2 text-sm`}
                    >
                      {currentScheme.ctaPrimary}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/work"
                      className={`inline-flex items-center justify-center px-5 py-2.5 bg-white border-2 border-${currentScheme.accent}/20 text-${currentScheme.accent} font-semibold rounded-full shadow-sm hover:shadow-md transition-all gap-2 text-sm`}
                    >
                      {currentScheme.ctaSecondary}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`pt-3 border-t border-${currentScheme.accent}/10`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentScheme.primary} flex items-center justify-center flex-shrink-0`}
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs italic leading-relaxed">
                        "{currentCard.quote}"
                      </p>
                      <p className="font-semibold text-gray-800 text-xs mt-1">
                        {currentCard.name}
                        <span className={`text-${currentScheme.accent} text-[10px] font-normal ml-1.5`}>
                          {currentCard.title}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative flex items-center justify-center min-h-[520px]">
                <div className="relative flex items-center justify-center gap-3 md:gap-5">
                  {visibleCards.map((card) => (
                    <FounderCard
                      key={`${card.id}-${centerIndex}`}
                      card={card}
                      isCenter={card.isCenter}
                      onClick={() => {
                        const newIndex = founderCards.findIndex(c => c.id === card.id);
                        setCenterIndex(newIndex);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 8000);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevCard}
                  className="w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all flex items-center justify-center group"
                >
                  <svg className="w-4 h-4 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-1.5 items-center">
                  {founderCards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCenterIndex(idx);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 8000);
                      }}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === centerIndex
                          ? `w-5 bg-${currentScheme.accent}`
                          : "w-1 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCard}
                  className="w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all flex items-center justify-center group"
                >
                  <svg className="w-4 h-4 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}