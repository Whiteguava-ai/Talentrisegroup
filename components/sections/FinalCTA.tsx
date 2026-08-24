import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { reviewers } from "@/data/testimonials";

const avatarPool = reviewers.slice(0, 5);

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(198,255,92,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,92,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 100% 50%, black 30%, transparent 70%)",
        }}
        aria-hidden
      />
      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="max-w-lg font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            Expert Hiring Services to Drive Your Growth
          </h2>
          <p className="mt-6 max-w-md text-white/60">
            Whether you&apos;re looking for your next career opportunity or seeking top talent
            to join your team, our expert recruiters are here to guide you every step of the
            way.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="/pricing">Get Started Now</Button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarPool.map((r) => (
                  <Image
                    key={r.name}
                    src={r.image}
                    alt={r.name}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-ink object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-white/60">
                Over 15k+ Customers &amp; Companies Trust Us.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[32px] bg-lime">
            <Image
              src="https://framerusercontent.com/images/IQK0BXNDBwrHJM545pM6NFUtZWk.png"
              alt="Confident hire ready to start"
              fill
              className="object-cover mix-blend-luminosity opacity-90"
            />

            <div className="absolute left-5 top-6 w-52 rounded-2xl bg-white p-4 text-ink shadow-xl">
              <p className="text-xs font-semibold">Sales Perform Category</p>
              <div className="mt-2.5 flex gap-1.5 text-[10px]">
                <span className="rounded-full bg-ink px-2 py-1 font-semibold text-lime">All</span>
                <span className="rounded-full border border-line px-2 py-1 text-muted">Business</span>
                <span className="rounded-full border border-line px-2 py-1 text-muted">Health</span>
              </div>
              <div className="mt-3 space-y-2">
                {avatarPool.slice(0, 2).map((r) => (
                  <div key={r.name} className="flex items-center gap-2">
                    <Image
                      src={r.image}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <div className="h-1.5 flex-1 rounded-full bg-paper" />
                    <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-lime" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-5 top-1/2 w-40 -translate-y-1/2 space-y-3">
              <div className="rounded-xl bg-white p-3 text-ink shadow-xl">
                <p className="font-display text-sm font-bold">30,000+</p>
                <p className="text-[10px] text-muted">hires made</p>
              </div>
              <div className="rounded-xl bg-white p-3 text-ink shadow-xl">
                <p className="font-display text-sm font-bold">85%</p>
                <p className="text-[10px] text-muted">performance goal</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
