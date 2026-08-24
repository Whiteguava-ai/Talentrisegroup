import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container-px mx-auto w-full max-w-[1350px]", className)}>
      {children}
    </div>
  );
}
