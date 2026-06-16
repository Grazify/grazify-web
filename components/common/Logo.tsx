import BrandIcon from "@/components/common/BrandIcon";
import BrandWordmark from "@/components/common/BrandWordmark";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  subtitle?: boolean;
};

/* Brand lockup – app icon mark + Grazify wordmark (both inline SVG, crisp) */
export default function Logo({ className, subtitle = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandIcon className="h-8 w-auto shrink-0" />
      <span className="flex flex-col justify-center gap-1">
        <BrandWordmark className="h-5 w-auto" />
        {subtitle ? (
          <span className="text-[11px] font-medium uppercase leading-none tracking-[0.14em] text-muted/80">
            B2B Grocery Supply
          </span>
        ) : null}
      </span>
    </span>
  );
}
