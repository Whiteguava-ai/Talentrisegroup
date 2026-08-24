import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { aboutStats } from "@/data/process";

export default function AboutStats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-6 rounded-[32px] border border-line bg-paper p-8 sm:grid-cols-4 sm:p-10">
          {aboutStats.map((stat) => (
            <RevealItem key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
