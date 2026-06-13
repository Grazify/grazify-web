import BrandIcon from "@/components/common/BrandIcon";
import BrandWordmark from "@/components/common/BrandWordmark";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  subtitle?: boolean;
};

/* Brand lockup — app icon mark + Grazify wordmark (both inline SVG, crisp) */
export default function Logo({ className, subtitle = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandIcon className="h-9 w-auto shrink-0" />
      <span className="flex flex-col justify-center">
        <BrandWordmark className="h-[22px] w-auto" />
        {subtitle ? (
          <span className="mt-1 text-xs font-medium leading-none text-muted">
            B2B Grocery Supply
          </span>
        ) : null}
      </span>
    </span>
  );
}
