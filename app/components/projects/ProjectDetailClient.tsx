"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle,
  Quote,
  Sparkles,
} from "lucide-react";

// ─── Live screenshot fallback for hero banner ───────────────────────────────
// If a project has a real `website` but no captured heroImage, pull a live
// screenshot instead of showing a static logo crop.

function HeroVisual({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const heroSrc = project.heroImage ?? project.image;
  const useScreenshot = !project.heroImage && project.website && !failed;

  if (useScreenshot) {
    return (
      <img
        src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.website!)}?w=1600&h=1000`}
        alt={project.title}
        onError={() => setFailed(true)}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    );
  }

  return <Image src={heroSrc} alt={project.title} fill className="object-cover" priority />;
}

// ─── 3D tilt wrapper for gallery images ─────────────────────────────────────

function TiltImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

// ─── 3D tilt sidebar card ────────────────────────────────────────────────────

function SidebarCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 24, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-lg shadow-blue-500/5 p-7 sticky top-28 space-y-6 overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/30 to-violet-200/20 blur-2xl pointer-events-none" />

      {/* Meta */}
      <div className="relative">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-3">
          Project Details
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
              <p className="text-sm font-semibold text-gray-800">{project.location}</p>
            </div>
          </div>
          {project.year && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Year</p>
                <p className="text-sm font-semibold text-gray-800">{project.year}</p>
              </div>
            </div>
          )}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Result</p>
              <p className="text-sm font-semibold text-gray-800">{project.result}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Growth</p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                {project.growth}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="relative">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
          Services Delivered
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="relative">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Live site CTA */}
      {project.website && (
        <motion.a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="relative flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl overflow-hidden group shadow-lg shadow-gray-900/20"
        >
          <span className="relative z-10 flex items-center gap-2">
            Visit Live Site
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      )}
    </motion.div>
  );
}

// ─── Main client component ───────────────────────────────────────────────────

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}) {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="relative h-[60vh] min-h-[480px] w-full overflow-hidden bg-gray-100 pt-28">
        <HeroVisual project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="absolute top-14 left-1 z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-semibold hover:bg-white/25 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-bold rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
              {project.title}
            </h1>
            <p className="text-white/75 text-lg font-medium max-w-2xl">{project.tagline}</p>
          </div>
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div className="relative container mx-auto max-w-6xl px-6 py-16 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-50 to-violet-50 blur-3xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <SidebarCard project={project} />
          </aside>

          {/* Main content */}
          <main className="lg:col-span-8 space-y-14">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                About the Client
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                The Challenge
              </span>
              <h2 className="text-2xl font-black text-gray-900 mb-4">What problem needed solving?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.challenge}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                Our Strategy
              </span>
              <h2 className="text-2xl font-black text-gray-900 mb-4">What we did</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.solution}</p>
            </motion.section>

            {/* Gallery with 3D tilt */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  Project Gallery
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((src, i) => (
                    <TiltImage key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
                  ))}
                </div>
              </section>
            )}

            {/* Outcome + Stats — light glass card, matched to site theme */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl p-10 overflow-hidden bg-white border border-gray-100 shadow-xl shadow-blue-500/5"
            >
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-violet-100/40 blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                  <Sparkles size={12} />
                  The Outcome
                </span>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Results that matter</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">{project.outcome}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                  {project.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <span className="block text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">
                        {stat.value}
                      </span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Testimonial */}
            {project.testimonial && (
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100 rounded-2xl p-10"
              >
                <Quote className="w-10 h-10 text-blue-200 absolute top-6 left-6" />
                <blockquote className="text-gray-700 text-lg italic leading-relaxed pl-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="mt-6 pl-4">
                  <p className="text-sm font-bold text-gray-900">{project.testimonial.author}</p>
                  <p className="text-xs text-gray-500">{project.testimonial.role}</p>
                </div>
              </motion.section>
            )}

            {/* Key takeaways */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                Key Takeaways
              </span>
              <ul className="space-y-3">
                {project.services.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </main>
        </div>
      </div>

      {/* ── Project Navigation ── */}
      <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center justify-between gap-6">
            {prevProject ? (
              <Link href={`/portfolio/${prevProject.id}`} className="group flex items-center gap-4 text-left min-w-0">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300 flex-shrink-0">
                  <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Previous</p>
                  <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-200">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/portfolio"
              className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link href={`/portfolio/${nextProject.id}`} className="group flex items-center gap-4 text-right min-w-0">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next</p>
                  <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-200">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
}