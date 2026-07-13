

// Aerovince\app\(main)\portfolio\[id]\page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import TeamCTA from "@/components/TeamCTA";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

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

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-white min-h-screen">
      <ProjectDetailClient project={project} prevProject={prevProject} nextProject={nextProject} />
      <TeamCTA />
    </div>
  );
}


