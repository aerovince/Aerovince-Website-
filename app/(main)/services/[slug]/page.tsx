// app/(main)/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/servicesData";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}