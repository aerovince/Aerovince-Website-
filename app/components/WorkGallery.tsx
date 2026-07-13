


// Aerovince\app\components\WorkGallery.tsx

"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Instagram,
  MapPin,
  Filter,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  handle?: string;
  category: string;
  location: string;
  tagline: string;
  website: string;
  image: string; // static screenshot path in /public/websiteimages
  accent: string;
  bgTint: string;
  followers?: string;
  posts?: string;
  services: string[];
  description: string;
}

const CATEGORIES = ["All", "Interior Design", "Travel", "Fitness", "Real Estate", "Food & Hospitality", "Technology"];

const PROJECTS: Project[] = [
  {
    id: "pari-interiors",
    title: "Pari Interiors & Constructions",
    handle: "@pari_interiors_constructions",
    category: "Interior Design",
    location: "India",
    tagline: "Designing Dreams, Creating Reality",
    website: "https://super-selkie-883c49.netlify.app/",
    image: "/websiteimages/interiorwebisteimage.jpeg",
    accent: "from-amber-500 to-orange-400",
    bgTint: "bg-amber-50",
    followers: "295",
    posts: "86",
    services: ["Website Design", "Portfolio Showcase"],
    description:
      "A registered interior design studio specializing in space planning and residential builds — given a clean, portfolio-first website to showcase completed projects.",
  },
  {
    id: "travel-hub-india",
    title: "Travel Hub India",
    handle: "@travelhubindia1",
    category: "Travel",
    location: "East of Kailash, Delhi",
    tagline: "Making Dreams Memorable",
    website: "https://www.travelhubindia.com/",
    image: "/websiteimages/travelwebisteimage.jpg",
    accent: "from-blue-500 to-cyan-400",
    bgTint: "bg-blue-50",
    followers: "2.7K",
    posts: "1.4K",
    services: ["Website Design", "Booking Presence"],
    description:
      "A full-service travel agency handling flights, hotels, taxis, and visas — built a site to match their scale as an established domestic and international travel operator.",
  },
  {
    id: "kiro-fitness",
    title: "The KIRO Fitness Sangvi",
    handle: "@the_kiro_fitness_sangvi",
    category: "Fitness",
    location: "New Sangavi, Pune",
    tagline: "4,500 sq ft of premium training space",
    website: "https://thekirofitness.com/",
    image: "/websiteimages/Gymwebsiteimage.jpg",
    accent: "from-emerald-500 to-teal-400",
    bgTint: "bg-emerald-50",
    followers: "303",
    posts: "235",
    services: ["Website Design", "Brand Presence"],
    description:
      "A premium fitness center at a prime Pune location — given a bold, energy-driven website to match its physical footprint and training programs.",
  },
  {
    id: "jk-real-estate",
    title: "JK Real Estate Agents",
    handle: "@jkrealestateagents",
    category: "Real Estate",
    location: "Ghatkopar East, Mumbai",
    tagline: "Serving buyers, sellers & investors since 1988",
    website: "http://jkrealestateagents.com",
    image: "/websiteimages/realstateimage.jpg",
    accent: "from-violet-500 to-purple-400",
    bgTint: "bg-violet-50",
    followers: "231",
    posts: "312",
    services: ["Website Design", "Listings Presence"],
    description:
      "A residential and commercial real estate agency with over three decades of local trust — brought online with a site built around buy, sell, rent, and investment listings.",
  },
  {
    id: "indian-coffee-house",
    title: "Indian Coffee House",
    category: "Food & Hospitality",
    location: "Thrissur, Kerala (Pan-India)",
    tagline: "A worker-cooperative institution with 1,200+ branches",
    website: "https://www.indiancoffeehouse.com/",
    image: "/websiteimages/cofeehouseimage.jpg",
    accent: "from-rose-500 to-red-400",
    bgTint: "bg-rose-50",
    services: ["Website Design", "Multi-Branch Directory"],
    description:
      "One of India's most historic restaurant cooperatives, with a legacy spanning decades of branches nationwide — given a structured site covering branch locations, news, and enquiries.",
  },
  {
    id: "rentora",
    title: "Rentora",
    handle: "@rentora",
    category: "Technology",
    location: "India",
    tagline: "Rent Anything. Own Less.",
    website: "https://rentora-coral.vercel.app/",
    image: "/websiteimages/Rentoraimage.jpeg",
    accent: "from-indigo-500 via-blue-500 to-cyan-400",
    bgTint: "bg-indigo-50",
    services: [
      "UI/UX Design",
      "Full-Stack Development",
      "Rental Marketplace",
      "Responsive Website",
    ],
    description:
      "A modern peer-to-peer rental marketplace enabling users to rent premium cameras, drones, laptops, bikes, gaming gear, audio equipment, lighting, and professional tools — built with a secure rental workflow and scalable marketplace architecture.",
  },
];

const SUMMARY_STATS = [
  { label: "Live Client Sites", value: `${PROJECTS.length}`, icon: Layers },
  { label: "Industries Served", value: `${new Set(PROJECTS.map((p) => p.category)).size}`, icon: Sparkles },
  { label: "Custom Built", value: "100%", icon: ArrowUpRight },
  { label: "Full-Stack Delivery", value: "End-to-End", icon: Users },
];

// ─── Static thumbnail — real captured screenshots, no external service ─────

function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <Image
      src={project.image}
      alt={`${project.title} website preview`}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      priority={false}
    />
  );
}

// ─── 3D tilt project card ────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full touch-manipulation"
      >
        {/* Ambient glow — desktop hover only, skipped visually on touch via opacity-0 default */}
        <div
          className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500 hidden sm:block`}
          style={{ transform: "translateZ(-40px)" }}
        />

        <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-blue-500/10 overflow-hidden h-full flex flex-col transition-shadow duration-500">
          {/* Top gradient strip */}
          <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

          {/* Visual header — static screenshot */}
          <div className={`relative h-40 sm:h-44 md:h-48 ${project.bgTint} overflow-hidden`}>
            <ProjectThumbnail project={project} />

            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            <div
              className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-white bg-black/30 backdrop-blur-sm px-2 sm:px-2.5 py-1 rounded-full"
              style={{ transform: "translateZ(20px)" }}
            >
              <MapPin size={10} />
              <span className="truncate max-w-[140px] sm:max-w-none">{project.location}</span>
            </div>

            <div
              className={`absolute top-3 right-3 text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-sm`}
              style={{ transform: "translateZ(30px)" }}
            >
              {project.category}
            </div>

            {/* Hover overlay -> real link (also tappable on mobile) */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gray-900/65 backdrop-blur-[2px] flex items-center justify-center opacity-0 sm:group-hover:opacity-100 sm:opacity-0"
            >
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: hovered ? 1 : 0.85, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="flex items-center gap-2 bg-white text-gray-900 font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xl"
              >
                Visit Live Site <ExternalLink size={13} />
              </motion.a>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col flex-1" style={{ transform: "translateZ(10px)" }}>
            <div className="flex flex-wrap gap-1.5 mb-2.5 sm:mb-3">
              {project.services.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="text-[9px] sm:text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-1.5 sm:px-2 py-0.5 rounded-md"
                >
                  {s}
                </span>
              ))}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
              {project.title}
            </h3>
            {project.handle && (
              <p className="text-[11px] sm:text-xs text-gray-400 font-medium mb-2">{project.handle}</p>
            )}
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2 mb-3 sm:mb-4">
              {project.description}
            </p>

            {/* Social proof + link */}
            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
              {project.followers ? (
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Instagram size={12} />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{project.followers}</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400">followers</span>
                </div>
              ) : (
                <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium truncate max-w-[140px]">
                  {project.tagline}
                </span>
              )}
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r ${project.accent} group-hover:gap-1.5 transition-all shrink-0`}
              >
                Visit <ArrowUpRight size={12} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section ref={sectionRef} id="work" className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -top-48 right-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-gradient-to-bl from-blue-50/70 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-tr from-violet-50/50 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3 sm:px-3.5 py-1.5 rounded-full mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Client Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight">
              Real businesses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Real websites.
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              Across interiors, travel, fitness, real estate, and technology — here's a look
              at the brands we've brought online.
            </p>
          </motion.div>

          {/* Stats strip — 2 cols on mobile too, just tighter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:gap-4 shrink-0"
          >
            {SUMMARY_STATS.map((s) => (
              <div key={s.label} className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 min-w-[100px] sm:min-w-[120px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <s.icon size={11} className="text-blue-500 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-wide">{s.label}</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-gray-900">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Filter tabs — horizontally scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <Filter size={13} className="text-gray-400 mr-1 shrink-0" />
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileTap={{ scale: 0.95 }}
              className={`relative text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-full border transition-colors duration-200 overflow-hidden shrink-0 whitespace-nowrap ${
                activeFilter === cat ? "text-white border-transparent" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {activeFilter === cat && (
                <motion.span
                  layoutId="work-filter-bg"
                  className="absolute inset-0 bg-gray-900"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 sm:py-20 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <p className="text-gray-400 text-sm font-medium">No projects in this category yet.</p>
            <button onClick={() => setActiveFilter("All")} className="mt-3 text-blue-600 text-sm font-semibold hover:underline">
              View all projects
            </button>
          </motion.div>
        )}

        {/* Bottom CTA — stacks on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 pt-8 sm:pt-10 border-t border-gray-100"
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Showing {filtered.length} of {PROJECTS.length} projects
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition-all group"
            >
              View All Work
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 px-5 py-2.5 rounded-xl transition-all group shadow-sm"
            >
              Start Your Project
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}