



// app/(main)/portfolio/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import TeamCTA from "@/components/TeamCTA";
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
} from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  // Adjacent project navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const heroSrc = project.heroImage ?? project.image;

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      {/*
        min-h bumped to 480px (was 380px) to compensate for the navbar offset.
        The fixed Navbar sits at ~80px tall (py-6 logo row) + ~36px AnnouncementBar = ~116px.
        We add pt-28 (112px) so the back button and content start below the nav.
      */}
      <div className="relative h-[60vh] min-h-[480px] w-full overflow-hidden bg-gray-100 pt-28">
        <Image
          src={heroSrc}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Back link — top-28 clears fixed navbar + announcement bar */}
        <div className="absolute top-14 left-1 z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-semibold hover:bg-white/25 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-6xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
              {project.title}
            </h1>
            <p className="text-white/75 text-lg font-medium max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 sticky top-28 space-y-6">

              {/* Meta */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-3">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
                      <p className="text-sm font-semibold text-gray-800">{project.location}</p>
                    </div>
                  </div>
                  {project.year && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Year</p>
                        <p className="text-sm font-semibold text-gray-800">{project.year}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Result</p>
                      <p className="text-sm font-semibold text-gray-800">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Growth</p>
                      <p className="text-sm font-bold text-yellow-600">{project.growth}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
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
                <div>
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
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </aside>

          {/* ── Main content ──────────────────────────────────────────────── */}
          <main className="lg:col-span-8 space-y-14">

            {/* About */}
            <section>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                About the Client
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
            </section>

            {/* Challenge */}
            <section>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                The Challenge
              </span>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                What problem needed solving?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.challenge}</p>
            </section>

            {/* Solution */}
            <section>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                Our Strategy
              </span>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                What MarkTale did
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.solution}</p>
            </section>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  Project Gallery
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((src, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Outcome + Stats */}
            <section className="bg-gray-950 text-white rounded-2xl p-10">
              <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                The Outcome
              </span>
              <h2 className="text-2xl font-black mb-4">Results that matter</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                {project.outcome}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="block text-4xl font-black text-blue-400 mb-2">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
              <section className="relative bg-blue-50 border border-blue-100 rounded-2xl p-10">
                <Quote className="w-10 h-10 text-blue-200 absolute top-6 left-6" />
                <blockquote className="text-gray-700 text-lg italic leading-relaxed pl-4">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pl-4">
                  <p className="text-sm font-bold text-gray-900">
                    {project.testimonial.author}
                  </p>
                  <p className="text-xs text-gray-500">{project.testimonial.role}</p>
                </div>
              </section>
            )}

            {/* "What we proved" checklist */}
            <section>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                Key Takeaways
              </span>
              <ul className="space-y-3">
                {project.services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>

      {/* ── Project Navigation ───────────────────────────────────────────── */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="group flex items-center gap-4 text-left min-w-0"
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors duration-200 flex-shrink-0">
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
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="group flex items-center gap-4 text-right min-w-0"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next</p>
                  <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-200">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors duration-200 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      <TeamCTA />
    </div>
  );
}






