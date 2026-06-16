import { cn } from "@/lib/utils";

type IconTileProps = {
  children: React.ReactNode;
  /** Soft mint tile (secondary) or brand gradient tile (primary emphasis). */
  variant?: "soft" | "gradient";
  /** Corner radius utility – smaller tiles read better with rounded-xl. */
  rounded?: string;
  /** Size and any extra utilities (caller sets the tile dimensions). */
  className?: string;
};

const VARIANTS = {
  soft: "bg-grazify-light text-grazify-dark",
  gradient: "bg-grazify-gradient text-white shadow-float",
} as const;

/* One consistent rounded container for every icon / emoji tile on the site,
   so the tile shape and the two colour treatments stay in sync everywhere. */
export default function IconTile({
  children,
  variant = "soft",
  rounded = "rounded-2xl",
  className,
}: IconTileProps) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center",
        rounded,
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
