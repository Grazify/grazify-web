"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ScrollDrawPathProps = {
  /** SVG path data (`d`). */
  d: string;
  /** viewBox matching the path's coordinate space, e.g. "0 0 840 80". */
  viewBox: string;
  /** Stroke width, in viewBox units. */
  strokeWidth?: number;
  className?: string;
};

/* A winding "snake" line that draws itself as the element scrolls through the
   viewport. The path is normalised with pathLength={1}, so progress simply maps
   to strokeDashoffset (1 = hidden → 0 = fully drawn). A glowing head dot rides
   the leading edge. Scroll work is rAF-throttled, and the whole effect is
   skipped (path shown fully drawn) when the user prefers reduced motion. */
export default function ScrollDrawPath({
  d,
  viewBox,
  strokeWidth = 3,
  className,
}: ScrollDrawPathProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const draw = drawRef.current;
    const dot = dotRef.current;
    if (!wrap || !draw) return;

    /* Reduced motion: reveal the full path, skip scroll binding entirely. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw.style.strokeDashoffset = "0";
      return;
    }

    const totalLength = draw.getTotalLength();
    let frame = 0;

    const render = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      /* Draw from when the element's top reaches 85% down the viewport to when
         its bottom passes 25% — a comfortable range that tracks the scroll. */
      const start = vh * 0.85;
      const end = vh * 0.25;
      const span = rect.height + (start - end);
      const progress = Math.min(1, Math.max(0, (start - rect.top) / span));

      draw.style.strokeDashoffset = String(1 - progress);

      if (dot) {
        const point = draw.getPointAtLength(totalLength * progress);
        dot.setAttribute("cx", String(point.x));
        dot.setAttribute("cy", String(point.y));
        dot.style.opacity = progress > 0.002 && progress < 0.998 ? "1" : "0";
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    /* Recompute when the page height changes (fonts/images settling after
       mount would otherwise leave the draw fixed at a stale position). */
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" className={cn("pointer-events-none", className)}>
      <svg
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        {/* Faint static track the line draws over. */}
        <path
          d={d}
          stroke="var(--grazify-border)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* The progressively drawn line. */}
        <path
          ref={drawRef}
          d={d}
          stroke="var(--grazify-primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
          style={{ filter: "drop-shadow(0 0 5px rgba(27, 138, 75, 0.45))" }}
        />
        {/* Glowing head that rides the leading edge. */}
        <circle
          ref={dotRef}
          r={strokeWidth * 1.5}
          fill="var(--grazify-primary)"
          style={{
            opacity: 0,
            filter: "drop-shadow(0 0 6px rgba(27, 138, 75, 0.7))",
            transition: "opacity 0.2s ease",
          }}
        />
      </svg>
    </div>
  );
}
