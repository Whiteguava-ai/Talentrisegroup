import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";

const bullets = [
  {
    title: "Accelerate your time to hire",
    description:
      "Providing companies with exceptional candidates who bring value, skill, and passion to every role.",
  },
  {
    title: "Flexible hiring models to fit your needs",
    description:
      "Our commitment remains unwavering: to empower you with the tools and expertise needed to navigate the complexities.",
  },
];

export default function EmpoweringCareers() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[32px]">
            <Image
              src="https://framerusercontent.com/images/m4K2VgUYbuxKvUwWnxBmmAo5uw.jpg"
              alt="Team reviewing hiring plans in the office"
              width={800}
              height={620}
              className="h-[420px] w-full object-cover sm:h-[460px]"
            />
          </div>
          <div className="absolute -bottom-8 left-6 w-64 rounded-2xl border border-line bg-white p-5 shadow-xl sm:left-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink">
                <DollarIcon />
              </span>
              <div>
                <p className="text-xs text-muted">Total Balance</p>
                <p className="font-display text-lg font-bold text-ink">$435,123</p>
              </div>
            </div>
            <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full">
              <div className="h-full w-[70%] bg-lime" />
              <div className="h-full w-[30%] bg-ink" />
            </div>
            <div className="mt-1.5 flex justify-between text-xs text-muted">
              <span>70%</span>
              <span>30%</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:pt-10">
          <SectionTag>Why TalentRiseGroup</SectionTag>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Empowering Careers, Building Futures
          </h2>
          <p className="mt-5 text-muted">
            We take the time to understand your goals and match you with the perfect role,
            ensuring a seamless transition into your next opportunity.
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="outline">
              Try Recruitment Process
            </Button>
          </div>

          <div className="mt-9 space-y-6 border-t border-line pt-8">
            {bullets.map((bullet) => (
              <div key={bullet.title} className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                  <ClockIcon />
                </span>
                <div>
                  <p className="font-semibold text-ink">{bullet.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{bullet.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function DollarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 3 5 3 5 1.1 5 3-2.2 3-5 3-5-1.1-5-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
