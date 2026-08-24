"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-28 text-white sm:pt-32">
      {/* ── Diagonal large-cell grid (matches Recruitify's big diamond-cell bg) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(198,255,92,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,92,0.07) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
          transform: "rotate(-15deg) scale(1.5)",
          transformOrigin: "center center",
        }}
        aria-hidden
      />
      {/* Radial vignette so grid fades at edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #03151a 80%)",
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm"
          >
            <span className="inline-flex items-center gap-1.5 font-semibold text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Free Trial
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span className="text-white/70">Get you Next-Hiring with our Free Trial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-display text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-[4.5rem]"
          >
            <span className="block whitespace-nowrap">Connecting Top Talent with</span>
            <span className="block whitespace-nowrap">Leading Companies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-balance mx-auto mt-7 max-w-xl text-white/60"
          >
            Whether you&apos;re looking for your next career opportunity or seeking top talent
            to join your team, our expert recruiters are here to guide you every step of the
            way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9"
          >
            <Button href="/#service" arrow>
              Start Hiring Experts
            </Button>
          </motion.div>
        </div>

        {/* ── Bento Grid ── */}
        <RevealGroup
          once
          className="relative mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-template-rows:auto_auto]"
        >
          {/* Col 1 — Tall card: Unlock Your Potential */}
          <RevealItem className="col-span-2 flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:col-span-1 sm:row-span-2">
            <div className="flex -space-x-3">
              {["A", "B", "C"].map((l) => (
                <span
                  key={l}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-white/10 text-xs font-semibold"
                >
                  {l}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-lg font-bold sm:text-xl">
                Unlock Your Potential with Top Talent Solutions
              </p>
              <p className="mt-2 text-sm text-white/55">
                Connecting your businesses with exceptional candidates to drive success
                together.
              </p>
              <button className="mt-5 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition-colors hover:border-lime hover:text-lime">
                Learn More
              </button>
            </div>
          </RevealItem>

          {/* Col 2 Top — Active Applicants (lime bg) */}
          <RevealItem className="flex flex-col justify-between rounded-3xl bg-lime p-6 text-ink">
            <p className="text-sm font-semibold">Active Applicants</p>
            <div>
              <p className="font-display text-3xl font-bold">
                <Counter value={14879} />
              </p>
              <p className="mt-1 text-xs text-ink/70">
                Many applicants are still actively applying with the help of our platform.
              </p>
            </div>
          </RevealItem>

          {/* Col 2 Bottom — Team photo */}
          <RevealItem className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://framerusercontent.com/images/wzIWAhwjbK7Uomiffv6wTKO1dw.jpg"
              alt="Recruiter reviewing candidate documents"
              width={500}
              height={500}
              className="h-full min-h-[160px] w-full object-cover"
            />
          </RevealItem>

          {/* Col 3 — Tall: Professional portrait with world-map bg + Global Reach card overlay */}
          <RevealItem className="relative col-span-2 min-h-[340px] overflow-hidden rounded-3xl sm:col-span-1 sm:row-span-2">
            {/* World map as base tinted layer */}
            <div className="absolute inset-0">
              <Image
                src="https://framerusercontent.com/images/By5RUE9hZTlu3PGlIbwKxdTD2k.png"
                alt=""
                fill
                className="object-cover opacity-15 [filter:invert(1)]"
              />
            </div>
            {/* Professional portrait — bottom-aligned, fills height */}
            <Image
              src="https://framerusercontent.com/images/IQK0BXNDBwrHJM545pM6NFUtZWk.png"
              alt="Confident professional ready for a new role"
              fill
              className="object-cover object-top"
            />
            {/* Global Reach card at bottom */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/85 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                  <GlobeIcon />
                </span>
                <div>
                  <p className="font-semibold text-white">Global Reach</p>
                  <p className="text-xs text-white/60">
                    Find the best talent from around the world with our network.
                  </p>
                </div>
              </div>
            </div>
          </RevealItem>

          {/* Col 4 Top — Standing team photo */}
          <RevealItem className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://framerusercontent.com/images/wzIWAhwjbK7Uomiffv6wTKO1dw.jpg"
              alt="Team celebrating success"
              width={500}
              height={300}
              className="h-full min-h-[160px] w-full object-cover object-center"
            />
          </RevealItem>

          {/* Col 4 Bottom — Satisfied Customers dark card */}
          <RevealItem className="flex flex-col justify-between rounded-3xl bg-ink-3 p-6">
            <p className="text-sm font-semibold text-white">Satisfied Customers</p>
            <div>
              <p className="font-display text-3xl font-bold text-lime">
                <Counter value={15290} />
              </p>
              <p className="mt-1 text-xs text-white/60">
                Simplifies the sales hiring process so you can focus on driving growth.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3c0 0-4 3-4 9s4 9 4 9M12 3c0 0 4 3 4 9s-4 9-4 9M3 12h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
