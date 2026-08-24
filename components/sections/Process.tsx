import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionTag light>Process</SectionTag>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Recruiting Talent That Drives <span className="text-lime">Your Business Forward</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <RevealItem
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <span className="font-display text-5xl font-bold text-white/20">{step.number}</span>
              <h3 className="mt-6 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
