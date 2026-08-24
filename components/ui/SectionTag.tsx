import { cn } from "@/lib/utils";

export default function SectionTag({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
        light
          ? "border-white/15 bg-white/5 text-white/80"
          : "border-line-2 bg-white text-ink/70",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
      {children}
    </span>
  );
}
