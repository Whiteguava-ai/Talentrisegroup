import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const staticRoutes = [
  "",
  "about",
  "service",
  "pricing",
  "testimonial",
  "features",
  "faq",
  "projects",
  "contact",
  "privacy",
  "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://talentrisegroup.in";

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}/${route}`.replace(/\/$/, "") || base,
    lastModified: new Date(),
  }));

  const projectEntries = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...projectEntries];
}
