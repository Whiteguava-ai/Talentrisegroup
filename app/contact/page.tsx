import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Sales",
  description:
    "Have questions or need assistance? Reach out to our team for any inquiries, support, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Our Experts"
        description="Have questions or need assistance? We're here to help! Reach out to our team for any inquiries, support, or collaboration opportunities."
      />
      <ContactSection />
    </>
  );
}
