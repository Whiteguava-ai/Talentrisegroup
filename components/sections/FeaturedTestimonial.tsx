"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials as more, featuredTestimonial } from "@/data/testimonials";

const slides = [featuredTestimonial, ...more.slice(0, 2)];
const photo = "https://framerusercontent.com/images/rctYhlyNAvPDoHrghhddkKDnI.jpg";

const logos = ["Northwind", "Vantage", "Brightpath", "Solace Co."];

export default function FeaturedTestimonial({
  eyebrow = "Testimonial",
  title = "Trusted by Leading Companies Worldwide",
  description = "Hear firsthand how we've helped businesses like yours achieve their goals and overcome challenges.",
  showHeading = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  showHeading?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const active = slides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        {showHeading && (
          <Reveal className="max-w-xl">
            <SectionTag>{eyebrow}</SectionTag>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-muted">{description}</p>
          </Reveal>
        )}

        <Reveal delay={0.15} className="mt-14">
          <div className="grid grid-cols-1 overflow-hidden rounded-[32px] border border-line sm:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col justify-center p-10 sm:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-balance font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <p className="mt-8 font-semibold text-ink">{active.name}</p>
                  <p className="text-sm text-muted">{active.role}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-ink" : "w-2 bg-line-2"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="relative h-56 sm:h-auto">
              <Image src={photo} alt="TalentRiseGroup client" fill className="object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
          {logos.map((logo) => (
            <span key={logo} className="font-display text-lg font-bold text-ink">
              {logo}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
