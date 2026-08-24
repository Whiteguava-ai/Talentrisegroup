import Image from "next/image";
import Container from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

const metaFields = (project: Project) => [
  { label: "Client", value: project.client },
  { label: "Service", value: project.service },
  { label: "Purpose", value: project.purpose },
  { label: "Timeline", value: project.timeline },
];

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <section className="bg-white pb-16 pt-8 sm:pb-24">
        <Container>
          <Reveal className="rounded-[32px] border border-line bg-paper p-8 sm:p-12">
            <div className="grid grid-cols-2 gap-6 border-b border-line pb-8 sm:grid-cols-4">
              {metaFields(project).map((field) => (
                <div key={field.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {field.label}
                  </p>
                  <p className="mt-1.5 font-display font-bold text-ink">{field.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-lime">Live Website</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink hover:text-lime"
                >
                  View Website ↗
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mt-10 overflow-hidden rounded-[32px] border border-line">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={800}
              className="h-[280px] w-full object-cover sm:h-[460px]"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="mx-auto max-w-3xl space-y-14">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink">Project Goals</h2>
            <p className="mt-4 leading-relaxed text-muted">{project.goals}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-ink">Project Approach</h2>
            <ul className="mt-4 space-y-3">
              {project.approach.map((step) => (
                <li key={step} className="flex items-start gap-3 leading-relaxed text-muted">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                    <CheckIcon />
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-ink">Final Results</h2>
            <p className="mt-4 leading-relaxed text-muted">{project.results}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
