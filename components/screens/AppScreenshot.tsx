import Image from "next/image";
import { cn } from "@/lib/utils";

type AppScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  glow?: boolean;
};

/* App screenshot — transparent phone floating with a soft light effect */
export default function AppScreenshot({
  src,
  alt,
  className,
  sizes = "(max-width: 640px) 70vw, 320px",
  priority = false,
  glow = true,
}: AppScreenshotProps) {
  return (
    <div className={cn("relative", className)}>
      {glow ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grazify-primary/15 blur-3xl"
        />
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain drop-shadow-[0_28px_45px_rgba(16,25,20,0.22)]"
      />
    </div>
  );
}
