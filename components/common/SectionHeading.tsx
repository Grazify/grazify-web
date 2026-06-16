import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-grazify-border bg-grazify-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-grazify-dark",
            align === "center" && "mx-auto",
          )}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-grazify-primary"
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-balance text-[1.8rem] font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
