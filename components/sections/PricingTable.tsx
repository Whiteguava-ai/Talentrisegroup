"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingTable() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative -mt-6 bg-ink pb-24 pt-4 text-white sm:pb-32">
      <Container>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5">
            <ToggleButton active={!yearly} onClick={() => setYearly(false)}>
              Monthly
            </ToggleButton>
            <ToggleButton active={yearly} onClick={() => setYearly(true)}>
              Yearly
              <span className="ml-1.5 rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold text-ink">
                Save 40%
              </span>
            </ToggleButton>
          </div>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <RevealItem
                key={plan.name}
                className={cn(
                  "flex h-full flex-col rounded-[28px] border p-8",
                  plan.featured
                    ? "border-lime bg-lime text-ink"
                    : "border-white/10 bg-white/[0.04] text-white"
                )}
              >
                <p className="font-display text-lg font-bold">{plan.name}</p>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.featured ? "text-ink/70" : "text-white/55"
                  )}
                >
                  {plan.tagline}
                </p>

                <div className="mt-8 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold">
                    {typeof price === "number" ? `$${price}` : price}
                  </span>
                  {typeof price === "number" && (
                    <span
                      className={cn(
                        "pb-1 text-sm",
                        plan.featured ? "text-ink/60" : "text-white/50"
                      )}
                    >
                      /month
                    </span>
                  )}
                </div>

                <Button
                  href="/contact"
                  variant={plan.featured ? "secondary" : "primary"}
                  className="mt-6 w-full"
                >
                  {typeof price === "number" ? "Get Started Now" : "Contact Sales"}
                </Button>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.featured ? "bg-ink text-lime" : "bg-lime text-ink"
                        )}
                      >
                        <CheckIcon />
                      </span>
                      <span className={plan.featured ? "text-ink/80" : "text-white/70"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mt-12 text-center text-sm text-white/50">
          You&apos;re in control. Cancel Anytime.
        </p>
      </Container>
    </section>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
        active ? "text-ink" : "text-white/60 hover:text-white"
      )}
    >
      {active && (
        <motion.span
          layoutId="pricing-toggle"
          className="absolute inset-0 rounded-full bg-lime"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
      <span className="relative flex items-center">{children}</span>
    </button>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
