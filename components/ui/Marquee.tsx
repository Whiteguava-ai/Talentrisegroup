import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Marquee({
  children,
  className,
  reverse = false,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  fast?: boolean;
}) {
  return (
    <div className={cn("no-scrollbar relative flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-6",
          fast ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
