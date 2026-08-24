import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function CaseStudies() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <SectionTag light>Case Studies</SectionTag>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Driven by Results, Powered by People
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-white/60">
              Your career is our priority. We take the time to understand your goals and match
              you with the perfect role, ensuring a seamless transition into your next
              opportunity.
            </p>
            <div className="mt-5">
              <Button href="/projects" arrow>
                View All Case Studies
              </Button>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14 text-center">
          <p className="font-display text-2xl font-bold sm:text-3xl">
            We Find Top <span className="text-lime">01%</span> Talent
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block h-80 overflow-hidden rounded-3xl"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={640}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-lg font-bold leading-snug">{project.title}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Tag>{project.client}</Tag>
          <Tag>{project.service}</Tag>
        </div>
      </div>
    </Link>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm">
      {children}
    </span>
  );
}
