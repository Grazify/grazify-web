import { cn } from "@/lib/utils";

type ScrollPathProps = {
  className?: string;
};

/* Animated farm-to-business path */
export default function ScrollPath({ className }: ScrollPathProps) {
  const path =
    "M10 40 C 120 40, 160 12, 280 12 S 440 68, 560 68 S 720 36, 830 36";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 840 80"
      fill="none"
      preserveAspectRatio="none"
      className={cn("h-20 w-full", className)}
    >
      <path
        d={path}
        stroke="#CDEBD8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={path}
        stroke="#1B8A4B"
        strokeWidth="3"
        strokeLinecap="round"
        className="animate-dash"
        opacity="0.7"
      />
      {[0, 1, 2].map((i) => (
        <circle key={i} r="5" fill="#1B8A4B">
          <animateMotion
            dur="3.6s"
            repeatCount="indefinite"
            path={path}
            begin={`${i * 1.2}s`}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur="3.6s"
            repeatCount="indefinite"
            begin={`${i * 1.2}s`}
          />
        </circle>
      ))}
    </svg>
  );
}
