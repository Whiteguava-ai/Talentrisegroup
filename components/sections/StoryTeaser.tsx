import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";

export default function StoryTeaser({
  primaryCta = { label: "Explore Our Services", href: "/service" },
}: {
  primaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionTag>About Us</SectionTag>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Building Careers, Strengthening Businesses
          </h2>
          <p className="mt-5 text-muted">
            At TalentRiseGroup we are dedicated to connecting businesses with top-performing
            sales talent to accelerate growth and drive exceptional results. Our mission is
            simple: to help you build a sales team that consistently exceeds expectations.
          </p>
          <p className="mt-4 text-muted">
            With over 10 years of experience in the recruitment industry, we&apos;ve developed a
            data-driven approach to finding sales talent that fits.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant="secondary">
              {primaryCta.label}
            </Button>
            <Button href="/contact" variant="outline">
              Contact Sales
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://framerusercontent.com/images/5XmsbD1PXqhzEHTzB7uOH18Fg.jpg"
              alt="Recruiter handing over an offer letter"
              width={400}
              height={400}
              className="h-[180px] w-full object-cover sm:h-[220px]"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://framerusercontent.com/images/AIVLQpuvUdM6EeJBXrVRoVqsumQ.jpg"
              alt="Team meeting to plan a placement"
              width={400}
              height={400}
              className="h-[180px] w-full object-cover sm:h-[220px]"
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl">
            <Image
              src="https://framerusercontent.com/images/eAWR0zYGPS9SXJ8XbKumjzX8no.jpg"
              alt="Team collaborating together"
              width={800}
              height={300}
              className="h-[160px] w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
