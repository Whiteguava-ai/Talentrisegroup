import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ReviewersStrip from "@/components/sections/ReviewersStrip";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Don't just take our word for it — read the experiences of businesses and professionals who've trusted TalentRiseGroup to help them find the perfect match.",
};

export default function TestimonialPage() {
  return (
    <>
      <PageHero
        eyebrow="240+ Trusted Companies"
        title="Trusted by Leading Companies Worldwide"
        description="Don't just take our word for it — read the experiences of businesses and professionals who've trusted us to help them find the perfect match."
        primaryCta={{ label: "Try Recruitment Process", href: "/contact" }}
      />
      <ReviewersStrip />
      <FeaturedTestimonial showHeading={false} />
      <TestimonialsGrid />
      <FinalCTA />
    </>
  );
}
