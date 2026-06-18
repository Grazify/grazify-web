"use client";

import { useEffect } from "react";

const getTarget = (hash: string) => {
  if (!hash || hash === "#") return null;

  let id: string;

  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return null;
  }

  return document.getElementById(id);
};

const scrollToHash = (hash: string, behavior: ScrollBehavior) => {
  const target = getTarget(hash);

  if (!target) return false;

  target.scrollIntoView({ block: "start", behavior });
  document.documentElement.removeAttribute("data-hash-scroll");
  return true;
};

export default function HashScroll() {
  useEffect(() => {
    const prefersReducedMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const settleHash = () => {
      window.requestAnimationFrame(() => {
        scrollToHash(window.location.hash, "auto");
      });
    };

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link || link.hash === "#main-content") return;

      event.preventDefault();

      const behavior = prefersReducedMotion() ? "auto" : "smooth";
      if (scrollToHash(link.hash, behavior)) {
        history.pushState(null, "", link.hash);
      }
    };

    settleHash();
    window.addEventListener("hashchange", settleHash);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", settleHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
