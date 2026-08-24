export type PricingPlan = {
  name: string;
  tagline: string;
  monthly: number | "Custom";
  yearly: number | "Custom";
  featured?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Unleash the full potential of TalentRiseGroup for growing teams.",
    monthly: 49,
    yearly: 29,
    features: [
      "Up to 10 hires per month",
      "Standard job postings",
      "Recruitment metrics",
    ],
  },
  {
    name: "Premium",
    tagline: "Unleash the full potential of TalentRiseGroup for scaling companies.",
    monthly: 129,
    yearly: 77,
    featured: true,
    features: [
      "Up to 10 hires per month",
      "Standard job postings",
      "Recruitment metrics",
      "Dedicated recruitment team",
      "Custom job postings",
    ],
  },
  {
    name: "Studio",
    tagline: "Unleash the full potential of TalentRiseGroup for high-volume hiring.",
    monthly: 199,
    yearly: 119,
    features: [
      "Up to 10 hires per month",
      "Standard job postings",
      "Recruitment metrics",
      "Dedicated recruitment team",
      "Custom job postings",
      "Applicant tracking",
      "24/7 recruitment support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Unleash the full potential of TalentRiseGroup at enterprise scale.",
    monthly: "Custom",
    yearly: "Custom",
    features: [
      "Up to 10 hires per month",
      "Standard job postings",
      "Recruitment metrics",
      "Dedicated recruitment team",
      "Custom job postings",
      "Applicant tracking",
      "24/7 recruitment support",
      "High-volume hiring",
    ],
  },
];
