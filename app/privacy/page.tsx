import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This Privacy Policy outlines how TalentRiseGroup collects, uses, and protects your personal information.",
};

const sections = [
  {
    heading: "Introduction",
    body: "At TalentRiseGroup, we prioritize the privacy of our clients, candidates, and visitors. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services.",
  },
  {
    heading: "Information We Collect",
    body: "We may collect personal details such as your name, contact information, resume, and professional history. Additionally, we may gather non-personal information like browser type, IP address, and cookies for website optimization.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to provide recruitment services, match candidates with job opportunities, communicate effectively, and improve our offerings. Non-personal data helps us enhance user experience.",
  },
  {
    heading: "Information Sharing",
    body: "We only share your information with employers and third-party service providers involved in the recruitment process. We ensure all parties uphold data confidentiality.",
  },
  {
    heading: "Changes to This Policy",
    body: "We reserve the right to update this Privacy Policy periodically. Any changes will be posted on this page with a revised date for transparency.",
  },
  {
    heading: "Contact Us",
    body: "For any questions or concerns regarding this Privacy Policy, please contact us at hr@talentrisegroup.in.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services."
      />
      <LegalContent sections={sections} />
    </>
  );
}
