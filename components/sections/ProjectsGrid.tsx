import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(3,21,26,0.35)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={520}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
                    {project.service}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Tag>{project.client}</Tag>
                    <Tag>{project.purpose}</Tag>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-lime">
                    View Case Study
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
