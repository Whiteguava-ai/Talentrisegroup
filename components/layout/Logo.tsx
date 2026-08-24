import { cn } from "@/lib/utils";

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display text-xl font-bold", className)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <circle cx="12" cy="12" r="10" stroke="var(--color-lime)" strokeWidth="1.6" />
        <path
          d="M7 14l2.5-4 2.5 3 3-5.5"
          stroke="var(--color-lime)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18 4l.6 1.4L20 6l-1.4.6L18 8l-.6-1.4L16 6l1.4-.6z" fill="var(--color-lime)" />
      </svg>
      <span className={dark ? "text-white" : "text-ink"}>
        TalentRise<span className="text-lime">Group</span>
      </span>
    </span>
  );
}
