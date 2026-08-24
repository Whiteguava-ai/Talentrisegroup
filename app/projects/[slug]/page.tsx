import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import ProjectDetail from "@/components/sections/ProjectDetail";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import FinalCTA from "@/components/sections/FinalCTA";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Case Study" title={project.title} description={project.summary} />
      <ProjectDetail project={project} />
      <FeaturedTestimonial />
      <FinalCTA />
    </>
  );
}
