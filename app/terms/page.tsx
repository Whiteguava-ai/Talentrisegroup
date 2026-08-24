import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "By accessing or using TalentRiseGroup's services, you agree to comply with these Terms and Conditions.",
};

const sections = [
  {
    heading: "Introduction",
    body: "Welcome to TalentRiseGroup. By accessing or using our services, you agree to comply with these Terms and Conditions. Please read them carefully before proceeding.",
  },
  {
    heading: "Eligibility",
    body: "Our services are intended for individuals and businesses seeking recruitment solutions. By using TalentRiseGroup, you confirm that you meet all eligibility requirements.",
  },
  {
    heading: "Services Offered",
    body: "TalentRiseGroup provides recruitment services, including candidate sourcing, job matching, and consultancy. We reserve the right to modify or discontinue any service without prior notice.",
  },
  {
    heading: "User Responsibilities",
    body: "Users agree to provide accurate and complete information during registration or communication. Misrepresentation or misuse of our platform is strictly prohibited.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on TalentRiseGroup, including logos, text, and designs, is the intellectual property of TalentRiseGroup. Unauthorized reproduction or distribution is not permitted.",
  },
  {
    heading: "Contact Us",
    body: "For any questions or concerns regarding these Terms & Conditions, please contact us at hr@talentrisegroup.in.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="By accessing or using our services, you agree to comply with these Terms and Conditions."
      />
      <LegalContent sections={sections} />
    </>
  );
}
