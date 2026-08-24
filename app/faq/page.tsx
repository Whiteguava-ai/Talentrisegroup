import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Explore our frequently asked questions to learn more about our recruitment process, services, and how we can help you find the right talent.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Explore our frequently asked questions to learn more about our recruitment process, services, and how we can help you find the right talent."
        primaryCta={{ label: "Start Hiring Experts", href: "/contact" }}
      />
      <FAQSection showHeading={false} />
      <FinalCTA />
    </>
  );
}
