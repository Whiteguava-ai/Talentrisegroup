import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services, type Service } from "@/data/services";

export default function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="service" className="bg-paper py-24 sm:py-32">
      <Container>
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionTag>Services</SectionTag>
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Expert Hiring Services to Drive Your Growth
            </h2>
            <p className="mt-5 text-muted">
              Your career is our priority. We take the time to understand your goals and match
              you with the perfect role.
            </p>
          </Reveal>
        )}

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.title}>
              <div className="group h-full rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(3,21,26,0.15)]">
                <ServiceIcon icon={service.icon} />
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                <Link
                  href="/service"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line-2 underline-offset-4 transition-colors group-hover:text-lime group-hover:decoration-lime"
                >
                  Get Started
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" as const };
  const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const icons: Record<Service["icon"], React.ReactNode> = {
    check: (
      <svg {...common} className="text-ink">
        <circle cx="12" cy="12" r="9" {...stroke} />
        <path d="M8.5 12.5l2.3 2.3L16 9.5" {...stroke} />
      </svg>
    ),
    people: (
      <svg {...common} className="text-ink">
        <circle cx="8.5" cy="8" r="2.6" {...stroke} />
        <circle cx="16" cy="9" r="2.1" {...stroke} />
        <path d="M3.5 19c.6-3 2.5-4.6 5-4.6s4.4 1.6 5 4.6" {...stroke} />
        <path d="M14.2 14.6c2.1.2 3.6 1.7 4.1 4.1" {...stroke} />
      </svg>
    ),
    trophy: (
      <svg {...common} className="text-ink">
        <path d="M7 4h10v4a5 5 0 01-10 0V4z" {...stroke} />
        <path d="M7 5H4.5A2.5 2.5 0 007 9.5M17 5h2.5A2.5 2.5 0 0117 9.5" {...stroke} />
        <path d="M12 13v3M9 20h6M9.5 20c0-2 .8-3.2 2.5-4 1.7.8 2.5 2 2.5 4" {...stroke} />
      </svg>
    ),
    chart: (
      <svg {...common} className="text-ink">
        <path d="M5 20V10M12 20V4M19 20v-7" {...stroke} />
      </svg>
    ),
    search: (
      <svg {...common} className="text-ink">
        <circle cx="10.5" cy="10.5" r="6.5" {...stroke} />
        <path d="M19.5 19.5L15 15" {...stroke} />
      </svg>
    ),
    document: (
      <svg {...common} className="text-ink">
        <path d="M7 3.5h7l3.5 3.5V20a.5.5 0 01-.5.5H7A.5.5 0 016.5 20V4a.5.5 0 01.5-.5z" {...stroke} />
        <path d="M9.5 12h5M9.5 15.5h5" {...stroke} />
      </svg>
    ),
  };

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-paper">
      {icons[icon]}
    </div>
  );
}
