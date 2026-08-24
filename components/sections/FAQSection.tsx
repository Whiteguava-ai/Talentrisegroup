import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/data/faq";

export default function FAQSection({
  showHeading = true,
  description = "Our dedicated team of experts is committed to understanding your unique needs and objectives, working closely with you to develop and execute the right hiring strategy.",
  ctaLabel = "Try Recruitment Process",
  ctaHref = "/contact",
}: {
  showHeading?: boolean;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        {showHeading && (
          <Reveal className="flex flex-col justify-between gap-8 border-b border-line pb-12 lg:flex-row lg:items-end">
            <div>
              <SectionTag>FAQ</SectionTag>
              <h2 className="mt-6 max-w-md font-display text-4xl font-bold leading-tight sm:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-muted">{description}</p>
              <div className="mt-5">
                <Button href={ctaHref} variant="secondary">
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1} className={showHeading ? "mt-12" : ""}>
          <Accordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
