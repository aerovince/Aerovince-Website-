








"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";

const CATEGORIES = [
  "All",
  "Mobility",
  "Marketing Agency",
  "EdTech",
  "Food & Delivery",
];

const CATEGORY_ACCENT: Record<string, string> = {
  Mobility: "from-amber-500 to-orange-400",
  "Marketing Agency": "from-blue-500 to-violet-500",
  EdTech: "from-emerald-500 to-teal-400",
  "Food & Delivery": "from-rose-500 to-pink-400",
};

function CategorySwitcher({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-1 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shrink-0"
            style={{ color: isActive ? "white" : "#6b7280" }}
          >
            {isActive && (
              <motion.span
                layoutId="project-cat-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-md shadow-blue-500/25"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

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
  }, [mouseX, mouseY]);

  const accent = CATEGORY_ACCENT[project.category] ?? "from-blue-500 to-violet-500";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <Link href={`/portfolio/${project.id}`} className="block group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.015 }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative rounded-2xl"
        >
          {/* Glow shadow beneath */}
          <div
            className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
            style={{ transform: "translateZ(-40px)" }}
          />

          <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-shadow duration-500">
            {/* Image */}
            <div className="relative h-56 sm:h-64 bg-gray-50 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                style={{ transform: "translateZ(20px) scale(1.02)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category badge */}
              <div
                className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white text-[10px] font-bold uppercase tracking-wide shadow-md`}
                style={{ transform: "translateZ(30px)" }}
              >
                {project.category}
              </div>

              {/* Location */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold"
                style={{ transform: "translateZ(30px)" }}
              >
                <MapPin size={10} />
                {project.location}
              </div>

              {/* Reveal-on-hover CTA */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold">
                  View Case Study
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="flex items-center gap-1 text-white/90 text-[11px] font-semibold bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  <TrendingUp size={10} />
                  {project.result}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6" style={{ transform: "translateZ(10px)" }}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                {project.year} · {project.client}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {project.tagline}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter(
            (p) => p.tags.includes(filter) || p.category === filter
          ),
    [filter]
  );

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden" id="work">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-cyan-200/20 via-blue-100/15 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            <Sparkles size={12} />
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08] mb-5">
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
              Deliver
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From ride-hailing apps to school platforms — real products, built end to end.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CategorySwitcher active={filter} onSelect={setFilter} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}