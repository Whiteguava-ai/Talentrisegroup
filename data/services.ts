export type Service = {
  title: string;
  description: string;
  icon: "check" | "people" | "trophy" | "chart" | "search" | "document";
};

export const services: Service[] = [
  {
    title: "Talent Sourcing",
    description:
      "Identify, source, and attract the most qualified sales professionals across various industries and experience levels.",
    icon: "check",
  },
  {
    title: "Candidate Onboarding",
    description:
      "We provide full onboarding support to ensure your new hires are prepared for success from day one.",
    icon: "people",
  },
  {
    title: "Sales Leadership",
    description:
      "We specialize in placing high-impact sales leaders who can drive results and inspire teams to exceed targets.",
    icon: "trophy",
  },
  {
    title: "Market Insights",
    description:
      "Receive up-to-date insights and advice on the latest trends in sales recruitment and market compensation.",
    icon: "chart",
  },
  {
    title: "Executive Search",
    description:
      "Recruitment for senior leadership and executive roles, connecting you with top-tier professionals.",
    icon: "search",
  },
  {
    title: "Contract Staffing",
    description:
      "Workforce solutions to meet short-term or project-based needs, ensuring you always have the right talent.",
    icon: "document",
  },
];
