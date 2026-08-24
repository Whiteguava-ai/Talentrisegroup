import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import ReviewersStrip from "@/components/sections/ReviewersStrip";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "See how TalentRiseGroup has helped agencies and businesses scale their hiring — real case studies, real results.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Driven by Results, Powered by People"
        description="They leverage the power of data-driven recruitment to craft visually stunning and effective hiring experiences."
        primaryCta={{ label: "Get Started Now", href: "/pricing" }}
      />
      <ProjectsGrid />
      <ReviewersStrip />
      <FeaturedTestimonial />
      <FinalCTA />
    </>
  );
}
