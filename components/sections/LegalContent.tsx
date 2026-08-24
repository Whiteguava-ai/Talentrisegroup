import Container from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  body: string;
};

export default function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="mx-auto max-w-3xl">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.05}>
              <h2 className="font-display text-2xl font-bold text-ink">{section.heading}</h2>
              <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
