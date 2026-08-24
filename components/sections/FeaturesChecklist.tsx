import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";

const checklist = [
  "Expertise Across Multiple Industries",
  "Comprehensive Candidate Screening Process",
  "Proven Track Record of Successful Placements",
  "Personalized Recruitment Strategies",
];

const networkItems = [
  {
    title: "Extensive Network",
    description: "Expertise in finding talent across a variety of industries.",
  },
  {
    title: "Account Managers",
    description: "Assistance in onboarding new hires and providing training.",
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const barHeights = [55, 70, 35, 45, 50, 40];

export default function FeaturesChecklist() {
  return (
    <>
      {/* ── Section 1: Recruitment Solutions (white bg, text left / image right) ── */}
      <section className="bg-white py-24 sm:py-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionTag>Features</SectionTag>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Recruitment Solutions Tailored to Your Needs
            </h2>
            <p className="mt-5 text-muted">
              Whether you&apos;re looking for your next career opportunity or seeking top talent
              to join your team, our expert recruiters are here to guide you.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Try Recruitment Process
              </Button>
            </div>

            <ul className="mt-9 space-y-4 border-t border-line pt-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="https://framerusercontent.com/images/wzIWAhwjbK7Uomiffv6wTKO1dw.jpg"
                alt="Desk with growth planning documents"
                width={700}
                height={420}
                className="h-[300px] w-full object-cover sm:h-[340px]"
              />
            </div>
            <div className="absolute -top-6 right-4 w-56 rounded-2xl border border-line bg-white p-5 shadow-xl sm:right-8">
              <p className="font-display text-2xl font-bold text-ink">88,28%</p>
              <p className="text-xs text-muted">Growth Sales</p>
              <div className="mt-4 flex items-end justify-between gap-1.5">
                {months.map((month, i) => (
                  <div key={month} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="flex h-16 w-full items-end overflow-hidden rounded-full bg-paper">
                      <div
                        className={`w-full rounded-full ${i < 2 ? "bg-lime" : "bg-ink"}`}
                        style={{ height: `${barHeights[i]}%` }}
                      />
                    </div>
                    <span className="text-[9px] text-muted">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Section 2: Drive Revenue (paper bg, image left / text right) ── */}
      <section className="bg-paper py-24 sm:py-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="https://framerusercontent.com/images/WeNw1QZ7AyQUMOvjKIyY8MD4DUI.jpg"
                alt="Team presenting growth results"
                width={700}
                height={460}
                className="h-[320px] w-full object-cover sm:h-[360px]"
              />
            </div>
            <div className="absolute -bottom-8 left-6 w-64 rounded-2xl border border-line bg-white p-5 shadow-xl sm:left-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-muted">Smart Growth Tracking</p>
              </div>
              <p className="mt-1 font-display text-lg font-bold text-ink">$435,123</p>
              <p className="text-xs text-muted">Sales</p>
              <div className="relative mt-4 h-1.5 w-full rounded-full bg-paper">
                <div className="h-full w-[82%] rounded-full bg-lime" />
                <span className="absolute left-[82%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime bg-white" />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-muted">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="order-1 lg:order-2">
            <SectionTag>Drive Revenue</SectionTag>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Drive Revenue, Maximize Your Sales
            </h2>
            <p className="mt-5 text-muted">
              We are committed to providing companies with exceptional candidates who bring
              value, skill, and passion to every role.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline">
                Try Recruitment Process
              </Button>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 border-t border-line pt-8">
              {networkItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <p className="flex items-center gap-1.5 font-semibold text-ink">
                    <span className="text-ink">✦</span>
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
