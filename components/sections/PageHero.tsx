"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { ReactNode } from "react";

type CTA = { label: string; href: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-28 sm:pt-36">
      {/* Subtle grid lines at top — matches Recruitify */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
        aria-hidden
      />
      {/* Green glow at top — matches Recruitify */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-160px] h-[340px] w-[700px] -translate-x-1/2 rounded-full bg-lime/20 blur-[120px]"
        aria-hidden
      />

      <Container className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-balance mt-7 font-display text-5xl font-bold leading-[1.1] text-ink sm:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-balance mx-auto mt-6 max-w-xl text-muted"
          >
            {description}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <Button href={primaryCta.href} variant="secondary">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
