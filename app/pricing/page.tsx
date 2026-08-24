import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PricingTable from "@/components/sections/PricingTable";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the perfect plan for your sales growth — flexible packages designed to fit your unique hiring needs.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Choose the Perfect Plan for Your Sales Growth"
        description="Our pricing is designed to fit your unique hiring needs, offering flexible packages that ensure you get the best value for your investment."
      />
      <PricingTable />
      <TestimonialsGrid
        title="Trusted by Over 3580+ Clients Worldwide"
        description="Hear firsthand how we've helped businesses like yours achieve their goals and overcome challenges."
      />
      <FAQSection
        description="Explore our frequently asked questions to learn more about our recruitment process, services, and how we can help you find the right talent."
        ctaLabel="Start Hiring Experts"
      />
      <FinalCTA />
    </>
  );
}
