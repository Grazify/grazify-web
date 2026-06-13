import { cn } from "@/lib/utils";

type DottedPatternProps = {
  className?: string;
};

/* Decorative dotted texture */
export default function DottedPattern({ className }: DottedPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{
        backgroundImage: "radial-gradient(#1B8A4B 1.4px, transparent 1.4px)",
        backgroundSize: "18px 18px",
        opacity: 0.12,
      }}
    />
  );
}
