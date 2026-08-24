import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AboutStats from "@/components/sections/AboutStats";
import StoryTeaser from "@/components/sections/StoryTeaser";
import MetricsBand from "@/components/sections/MetricsBand";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "At TalentRiseGroup we are dedicated to connecting businesses with top-performing sales talent to accelerate growth and drive exceptional results.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Our Company"
        description="We take the time to understand your goals and match you with the perfect role, ensuring a smooth transition into your next opportunity."
      >
        <VideoTeaser />
      </PageHero>
      <AboutStats />
      <StoryTeaser primaryCta={{ label: "Get Started Now", href: "/pricing" }} />
      <MetricsBand />
      <FinalCTA />
    </>
  );
}

function VideoTeaser() {
  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-white/10">
      <div className="flex aspect-video items-center justify-center bg-white/5">
        <button
          type="button"
          aria-label="Play video"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-ink transition-transform hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
            <path d="M4 2.5v13l12-6.5-12-6.5z" />
          </svg>
        </button>
      </div>
      <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-lg">
        Play Video
      </span>
    </div>
  );
}
