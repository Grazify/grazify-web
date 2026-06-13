import { cn } from "@/lib/utils";

type PlatformBadgeProps = {
  label?: string;
  className?: string;
};

/* Coming Soon badge */
export default function PlatformBadge({
  label = "Coming Soon",
  className,
}: PlatformBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-grazify-border bg-grazify-mint px-3 py-1 text-xs font-semibold text-grazify-dark",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-grazify-primary animate-pulse-ring" />
      {label}
    </span>
  );
}
