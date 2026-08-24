export type Project = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  service: string;
  purpose: string;
  timeline: string;
  liveUrl: string;
  image: string;
  goals: string;
  approach: string[];
  results: string;
};

export const projects: Project[] = [
  {
    slug: "scaling-temporary-workforce-for-manufacturing-clients",
    title: "Scaling Temporary Workforce for Manufacturing Clients",
    summary:
      "ProRecruit aimed to meet the urgent needs of a manufacturing client by providing temporary staff quickly and efficiently.",
    client: "ProRecruit",
    service: "Temporary Staffing",
    purpose: "On-demand workforce",
    timeline: "4 months",
    liveUrl: "https://talentrisegroup.in",
    image: "https://framerusercontent.com/images/903tZkXssAoQ0WQyzeikBgOqPWA.jpg",
    goals:
      "Enhance the recruitment agency's visibility among top-tier employers by establishing the agency as a trusted partner for hiring needs.",
    approach: [
      "Conduct market research to identify industries and employers needing recruitment services.",
      "Develop a content marketing strategy, including blog posts, case studies, and social media campaigns showcasing the agency's success stories.",
      "Host a webinar or networking event featuring recruitment trends and insights to attract employers.",
      "Collaborate with satisfied employers to create video testimonials and feature them on the agency's website.",
    ],
    results:
      "The campaign generated increased inbound inquiries from employers, established the agency as an industry thought leader, and resulted in partnerships with five new high-profile employers within six months.",
  },
  {
    slug: "transforming-high-volume-hiring-for-seasonal-campaigns",
    title: "Transforming High-Volume Hiring for Seasonal Campaigns",
    summary:
      "TalentWave needed a solution to handle high-volume hiring for a seasonal project with fluctuating demand.",
    client: "TalentWave",
    service: "Staffing Solutions",
    purpose: "Rapid hiring",
    timeline: "2 months",
    liveUrl: "https://talentrisegroup.in",
    image: "https://framerusercontent.com/images/AIVLQpuvUdM6EeJBXrVRoVqsumQ.jpg",
    goals:
      "Streamline the candidate journey to improve satisfaction, engagement, and conversion rates from initial contact to successful placement.",
    approach: [
      "Audit the current recruitment process and identify bottlenecks or pain points for candidates.",
      "Implement an intuitive online portal for job applications, tracking, and communication.",
      "Train recruiters on delivering empathetic and personalized candidate experiences.",
      "Introduce regular candidate feedback surveys to gather insights and refine the process.",
    ],
    results:
      "The optimized candidate experience reduces application drop-off rates by 30%, increases positive feedback scores, and results in a 20% boost in successful placements within three months.",
  },
  {
    slug: "optimizing-executive-recruitment-for-fortune-500-clients",
    title: "Optimizing Executive Recruitment for Fortune 500 Clients",
    summary:
      "RecruitElite aimed to streamline its executive search process to meet the demands of high-profile clients in a shorter time.",
    client: "RecruitElite",
    service: "Executive Search",
    purpose: "Executive recruitment",
    timeline: "3 months",
    liveUrl: "https://talentrisegroup.in",
    image: "https://framerusercontent.com/images/oz3JdfEBWWqpS68r0uqzX0e7GEI.jpg",
    goals:
      "Build a niche talent pool for a high-demand industry, such as technology, healthcare, or finance, to enable faster and more targeted placements.",
    approach: [
      "Partner with universities, professional organizations, and job boards in the targeted industry to attract candidates.",
      "Develop a specialized section on the agency's website dedicated to industry-specific roles and career advice.",
      "Host virtual job fairs and webinars to engage with professionals in the industry.",
      "Leverage data analytics to track candidate skills and match them to relevant job openings quickly.",
    ],
    results:
      "The agency establishes a robust talent pool of 500 qualified candidates within six months, reducing time-to-hire for clients in the niche industry by 40%.",
  },
  {
    slug: "enhancing-candidate-screening-efficiency",
    title: "Enhancing Candidate Screening Efficiency",
    summary:
      "TalentMatch Solutions aimed to improve the screening process for its recruitment teams. By using automated tools, they reduced time spent per candidate while ensuring high-quality matches.",
    client: "TalentMatch Solutions",
    service: "Recruitment Services",
    purpose: "Streamlining hiring",
    timeline: "1-2 months",
    liveUrl: "https://talentrisegroup.in",
    image: "https://framerusercontent.com/images/lqdBAen36Wi381N2V3fyEEWnDpE.jpg",
    goals:
      "Expand the agency's reach and attract top talent using innovative and engaging social media campaigns.",
    approach: [
      "Create and execute a content calendar focused on job openings, career tips, and success stories on platforms like LinkedIn, Instagram, and Twitter.",
      "Utilize targeted ads to reach passive candidates in desired industries or locations.",
      "Host live Q&A sessions with recruiters to build trust and encourage applications.",
      "Monitor campaign performance and optimize based on engagement metrics.",
    ],
    results:
      "The social media drive boosts the agency's followers by 50% within three months, increases website traffic by 35%, and results in 100 new qualified applications per month.",
  },
];
