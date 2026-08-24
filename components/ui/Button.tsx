import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  arrow?: boolean;
};

const variants = {
  primary:
    "bg-lime text-ink hover:bg-lime-2 shadow-[0_0_0_0_rgba(198,255,92,0)] hover:shadow-[0_8px_24px_-4px_rgba(198,255,92,0.55)]",
  secondary: "bg-ink text-white hover:bg-ink-2",
  outline: "border border-line-2 text-ink hover:border-ink hover:bg-white",
  ghost: "text-white/90 hover:text-lime",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  arrow = false,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 whitespace-nowrap",
    variants[variant],
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
