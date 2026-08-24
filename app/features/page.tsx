import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import EmpoweringCareers from "@/components/sections/EmpoweringCareers";
import FeaturesChecklist from "@/components/sections/FeaturesChecklist";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Features",
  description:
    "With an extensive network of companies and a passion for helping candidates succeed, we're dedicated to your journey.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Features You're Gonna Love"
        description="With an extensive network of companies and a passion for helping candidates succeed, we're dedicated to your journey."
        primaryCta={{ label: "Try Recruitment Process", href: "/contact" }}
      />
      <EmpoweringCareers />
      <FeaturesChecklist />
      <FinalCTA />
    </>
  );
}
