import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { metrics } from "@/data/process";

export default function MetricsBand() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <RevealItem
              key={metric.title}
              className="rounded-3xl border border-line bg-white p-8"
            >
              <p className="font-display text-4xl font-bold text-ink">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-2 font-semibold text-ink">{metric.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{metric.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
