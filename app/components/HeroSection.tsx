"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Slides with horizontal circular motion images
const slides = [
  {
    id: 0,
    theme: "blue",
    tagline: "BLUE OCEAN STRATEGY",
    title: "Dominate the",
    highlight: "Digital Frontier",
    subtitle: "Where vision meets velocity. Scale without limits.",
    description:
      "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth. Your empire starts here.",
    ctaPrimary: "Launch Your Vision",
    ctaSecondary: "Explore Method",
    founderName: "Arjun Mehta",
    founderTitle: "Founder & CEO",
    founderQuote:
      "Great brands aren't built in comfort zones. They're forged in decisive action.",
    // Horizontal circular motion images
    circularImages: [
      "/images/horizontal/circular_1.jpg",
      "/images/horizontal/circular_2.jpg",
      "/images/horizontal/circular_3.jpg",
      "/images/horizontal/circular_4.jpg",
      "/images/horizontal/circular_5.jpg",
    ],
    stats: [
      { value: "10x", label: "Avg. Growth" },
      { value: "150+", label: "Brands Scaled" },
      { value: "98%", label: "Retention" },
    ],
    primary: "blue",
    primaryColor: "text-blue-600",
    primaryBg: "bg-blue-600",
    primaryLight: "bg-blue-50",
    primaryBorder: "border-blue-200",
    primaryHover: "hover:bg-blue-700",
    ringColor: "ring-blue-500",
  },
  {
    id: 1,
    theme: "yellow",
    tagline: "REBEL ECONOMICS",
    title: "Break the",
    highlight: "Status Quo",
    subtitle: "Bold moves create bold empires. No compromises.",
    description:
      "Disruptive strategies for founders who dare to be different. Bold colors, bolder results. Join the rebellion.",
    ctaPrimary: "Start Rebellion",
    ctaSecondary: "Read Manifesto",
    founderName: "Kavya Singh",
    founderTitle: "Chief Disruptor",
    founderQuote:
      "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
    circularImages: [
      "/images/horizontal/circular_yellow_1.jpg",
      "/images/horizontal/circular_yellow_2.jpg",
      "/images/horizontal/circular_yellow_3.jpg",
      "/images/horizontal/circular_yellow_4.jpg",
      "/images/horizontal/circular_yellow_5.jpg",
    ],
    stats: [
      { value: "15x", label: "ROI Avg." },
      { value: "200+", label: "Campaigns" },
      { value: "45+", label: "Awards" },
    ],
    primary: "yellow",
    primaryColor: "text-yellow-600",
    primaryBg: "bg-yellow-500",
    primaryLight: "bg-yellow-50",
    primaryBorder: "border-yellow-200",
    primaryHover: "hover:bg-yellow-600",
    ringColor: "ring-yellow-500",
  },
  {
    id: 2,
    theme: "dark",
    tagline: "PREMIUM LEGACY",
    title: "Build Your",
    highlight: "Immortal Empire",
    subtitle: "Premium brands demand premium execution.",
    description:
      "Where sophistication meets strategy. Elite positioning for founders ready to lead their industry into the future.",
    ctaPrimary: "Claim Legacy",
    ctaSecondary: "View Work",
    founderName: "Vikram Rao",
    founderTitle: "Creative Director",
    founderQuote:
      "True leaders don't follow trends. They set standards that last for generations.",
    circularImages: [
      "/images/horizontal/circular_dark_1.jpg",
      "/images/horizontal/circular_dark_2.jpg",
      "/images/horizontal/circular_dark_3.jpg",
      "/images/horizontal/circular_dark_4.jpg",
      "/images/horizontal/circular_dark_5.jpg",
    ],
    stats: [
      { value: "$2B+", label: "Client Value" },
      { value: "25+", label: "Years Exp." },
      { value: "100%", label: "Success Rate" },
    ],
    primary: "dark",
    primaryColor: "text-gray-900",
    primaryBg: "bg-gray-900",
    primaryLight: "bg-gray-50",
    primaryBorder: "border-gray-200",
    primaryHover: "hover:bg-gray-800",
    ringColor: "ring-gray-900",
  },
];

// Horizontal Circular Motion Carousel Component
const HorizontalCircularCarousel = ({
  images,
  themeColor,
  primaryLight,
  slideId,
  isActive,
}: {
  images: string[];
  themeColor: string;
  primaryLight: string;
  slideId: number;
  isActive: boolean;
}) => {
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const dragSpring = useSpring(dragX, { damping: 30, stiffness: 200 });

  // Auto-rotate images in circular motion when active
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  // Get visible images in circular order
  const getVisibleImages = () => {
    const total = images.length;
    const visible = [];
    // Show 5 images with center being current
    for (let i = -2; i <= 2; i++) {
      const idx = (((rotation + i) % total) + total) % total;
      visible.push({ img: images[idx], originalIndex: idx, offset: i });
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <div ref={containerRef} className="relative w-full overflow-visible py-8">
      {/* Parallax background circles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full ${primaryLight} opacity-30 blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${primaryLight} opacity-20 blur-3xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main circular motion container */}
      <div className="relative flex items-center justify-center min-h-[400px]">
        <motion.div
          className="relative flex items-center justify-center"
          style={{ x: dragSpring }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x > 50) {
              setRotation((prev) => (prev - 1 + images.length) % images.length);
            } else if (info.offset.x < -50) {
              setRotation((prev) => (prev + 1) % images.length);
            }
          }}
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((item, idx) => {
              // Calculate scale based on position: center largest, edges smallest
              const positionScale = 1 - Math.abs(item.offset) * 0.2;
              const zIndex = 10 - Math.abs(item.offset);
              const opacity = 1 - Math.abs(item.offset) * 0.3;
              const xOffset = item.offset * 120;
              const rotationY = item.offset * 15;

              return (
                <motion.div
                  key={`${slideId}-${item.originalIndex}-${rotation}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: xOffset * 1.5 }}
                  animate={{
                    opacity: opacity,
                    scale: positionScale,
                    x: xOffset,
                    rotateY: rotationY,
                    zIndex: zIndex,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    x: xOffset * 1.5,
                    transition: { duration: 0.3 },
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute cursor-grab active:cursor-grabbing"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ${
                      item.offset === 0
                        ? `w-72 h-96 md:w-80 md:h-[420px] ring-4 ring-offset-4`
                        : `w-56 h-80 md:w-64 md:h-88`
                    }`}
                    style={{
                      ringColor: item.offset === 0 ? themeColor : "transparent",
                      boxShadow:
                        item.offset === 0
                          ? `0 30px 50px -15px ${themeColor}60`
                          : "0 15px 30px -10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={`Circular visual ${idx}`}
                      fill
                      className="object-cover"
                      priority={item.offset === 0}
                    />
                    {/* Parallax inner gradient that moves on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                    {item.offset === 0 && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-white text-xs font-medium tracking-wider">
                          FEATURED
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation dots for circular rotation */}
      <div className="flex justify-center gap-2 mt-12">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setRotation(idx)}
            className="group transition-all duration-300"
            aria-label={`View image ${idx + 1}`}
          >
            <motion.div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === rotation
                  ? `w-8 ${themeColor.replace("text-", "bg-")}`
                  : "w-1.5 bg-gray-300 group-hover:bg-gray-400"
              }`}
              whileHover={{ scaleY: 1.5 }}
            />
          </button>
        ))}
      </div>

      {/* Left/Right swipe indicators */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
        <motion.div
          className={`flex items-center gap-1 px-2 py-1 ${primaryLight} rounded-full opacity-60`}
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-[10px] font-medium text-gray-500">DRAG</span>
        </motion.div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
        <motion.div
          className={`flex items-center gap-1 px-2 py-1 ${primaryLight} rounded-full opacity-60`}
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-[10px] font-medium text-gray-500">DRAG</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scroll effects
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const carouselParallax = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scaleParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const current = slides[currentSlide];

  const getBgFromTextColor = (textColor: string): string => {
    const colorMap: Record<string, string> = {
      "text-blue-600": "bg-blue-600",
      "text-yellow-600": "bg-yellow-500",
      "text-gray-900": "bg-gray-900",
    };
    return colorMap[textColor] || "bg-gray-900";
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      {/* Animated Background Pattern with Parallax */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <motion.svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ y: textParallax }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </motion.svg>
      </div>

      {/* Floating Parallax Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400/5 blur-2xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-yellow-400/5 blur-2xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gray-900/3 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navigation Arrows with Parallax */}
      <motion.button
        onClick={prevSlide}
        style={{ y: textParallax }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hidden lg:flex items-center justify-center group backdrop-blur-sm bg-white/80"
        aria-label="Previous"
      >
        <svg
          className={`w-5 h-5 text-gray-600 group-hover:${current.primaryColor} transition-colors`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        style={{ y: textParallax }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hidden lg:flex items-center justify-center group backdrop-blur-sm bg-white/80"
        aria-label="Next"
      >
        <svg
          className={`w-5 h-5 text-gray-600 group-hover:${current.primaryColor} transition-colors`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Main Content */}
      <motion.div
        style={{ opacity: heroOpacity, scale: scaleParallax }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-h-screen flex items-center"
      >
        <div className="w-full py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN - TEXT CONTENT with Parallax */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current.id}`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ y: textParallax }}
                className="space-y-6"
              >
                {/* Tagline */}
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={`w-8 h-0.5 ${current.primaryBg}`} />
                  <span
                    className={`text-xs font-semibold tracking-wider ${current.primaryColor} uppercase`}
                  >
                    {current.tagline}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.15] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {current.title}{" "}
                  <span className={current.primaryColor}>
                    {current.highlight}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className={`text-lg md:text-xl font-medium ${current.primaryColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {current.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {current.description}
                </motion.p>

                {/* Stats Section with Parallax on each stat */}
                <motion.div
                  className="flex gap-8 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {current.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="text-left"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p
                        className={`text-2xl md:text-3xl font-bold ${current.primaryColor}`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center px-6 py-3 ${current.primaryBg} ${current.primaryHover} text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg gap-2 group`}
                  >
                    {current.ctaPrimary}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/work"
                    className={`inline-flex items-center justify-center px-6 py-3 bg-white border-2 ${current.primaryBorder} ${current.primaryColor} font-semibold rounded-xl transition-all duration-300 hover:shadow-md gap-2`}
                  >
                    {current.ctaSecondary}
                  </Link>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  className="flex items-center gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Trusted by 500+ founders
                    </p>
                    <p className="text-xs text-gray-500">
                      From Mumbai to Manhattan
                    </p>
                  </div>
                </motion.div>

                {/* Founder Quote - Integrated */}
                <motion.div
                  className={`mt-6 pt-4 border-t ${current.primaryBorder} flex items-start gap-3`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${current.primaryLight} flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className={`w-4 h-4 ${current.primaryColor}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs italic">
                      "{current.founderQuote}"
                    </p>
                    <p className="text-xs font-medium text-gray-900 mt-1">
                      {current.founderName} •{" "}
                      <span className={current.primaryColor}>
                        {current.founderTitle}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT COLUMN - HORIZONTAL CIRCULAR MOTION CAROUSEL with Parallax */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`carousel-${current.id}`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ y: carouselParallax }}
                className="relative"
              >
                <HorizontalCircularCarousel
                  images={current.circularImages}
                  themeColor={getBgFromTextColor(current.primaryColor)}
                  primaryLight={current.primaryLight}
                  slideId={current.id}
                  isActive={true}
                />

                {/* Circular motion decorative ring */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 ${current.primaryBorder} opacity-30 -z-10`}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full border ${current.primaryBorder} opacity-20 -z-10`}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Slide Navigation - Vertical Dots with Parallax */}
      <motion.div
        style={{ y: textParallax }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Slide ${index + 1}`}
          >
            <motion.div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? `${slide.primaryBg} scale-125 ring-2 ${slide.ringColor} ring-offset-2`
                  : "bg-gray-300 group-hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.3 }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs font-medium text-gray-700 bg-white shadow-md rounded-lg px-2 py-1">
              {slide.tagline}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Progress Bar */}
        <div className="h-0.5 bg-gray-100">
          <motion.div
            className={`h-full ${current.primaryBg}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
            key={currentSlide}
          />
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-sm border-t border-gray-100">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? `w-6 h-1.5 ${slide.primaryBg}`
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-mono">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {isAutoPlaying ? "⏸" : "▶"}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Parallax */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[8px] text-gray-400 tracking-[0.2em] uppercase font-medium">
            SCROLL
          </span>
          <motion.div
            className={`w-px h-6 ${current.primaryBg} opacity-50`}
            animate={{ height: [6, 24, 6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
