import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import EmpoweringCareers from "@/components/sections/EmpoweringCareers";
import FeaturesChecklist from "@/components/sections/FeaturesChecklist";
import StoryTeaser from "@/components/sections/StoryTeaser";
import MetricsBand from "@/components/sections/MetricsBand";
import CaseStudies from "@/components/sections/CaseStudies";
import ReviewersStrip from "@/components/sections/ReviewersStrip";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import Process from "@/components/sections/Process";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "TalentRiseGroup — Connecting Top Talent with Leading Companies",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <EmpoweringCareers />
      <FeaturesChecklist />
      <StoryTeaser />
      <MetricsBand />
      <CaseStudies />
      <ReviewersStrip />
      <FeaturedTestimonial />
      <Process />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
