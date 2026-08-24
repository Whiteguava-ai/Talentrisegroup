import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Expert hiring services to drive your growth — talent sourcing, onboarding, sales leadership, market insights, executive search, and contract staffing.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Expert Hiring Services to Drive Your Growth"
        description="Your career is our priority. We take the time to understand your goals and match you with the perfect role."
        primaryCta={{ label: "View Our Pricing", href: "/pricing" }}
      />
      <ServicesGrid showHeading={false} />
      <FinalCTA />
    </>
  );
}
