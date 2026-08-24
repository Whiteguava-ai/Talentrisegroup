import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsGrid({
  eyebrow = "Testimonial",
  title = "More from our Customers",
  description = "Hear firsthand how we've helped businesses like yours achieve their goals and overcome challenges.",
  dark = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-ink py-24 text-white sm:py-32" : "bg-white py-24 sm:py-32"}>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionTag light={dark}>{eyebrow}</SectionTag>
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className={dark ? "mt-5 text-white/60" : "mt-5 text-muted"}>{description}</p>
        </Reveal>

        <RevealGroup className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((testimonial) => (
            <RevealItem
              key={testimonial.name + testimonial.role}
              className={
                dark
                  ? "rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  : "rounded-3xl border border-line bg-paper p-7"
              }
            >
              <div className="flex gap-1 text-lime">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className={dark ? "mt-4 text-sm leading-relaxed text-white/70" : "mt-4 text-sm leading-relaxed text-ink/80"}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-lime">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className={dark ? "text-sm font-semibold text-white" : "text-sm font-semibold text-ink"}>
                    {testimonial.name}
                  </p>
                  <p className={dark ? "text-xs text-white/50" : "text-xs text-muted"}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
    </svg>
  );
}
