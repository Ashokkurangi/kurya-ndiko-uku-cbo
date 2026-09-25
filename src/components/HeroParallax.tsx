"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Hero wrapper that feeds the scroll position to its children as the CSS variable --sy (px).
 * Layers with the `hero-depth` class use it so the photo moves a little slower than the page.
 * Only reacts to scrolling, so the hero is still once its entrance animation has finished.
 * Switched off for reduced-motion users and on small screens.
 */
export function HeroParallax({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tablet = window.matchMedia("(min-width: 768px)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    let frame = 0;

    const tick = () => {
      frame = 0;
      const k = reduce.matches || !tablet.matches ? 0 : desktop.matches ? 1 : 0.5;
      const sy = Math.min(Math.max(window.scrollY, 0), el.offsetHeight);
      el.style.setProperty("--sy", (sy * k).toFixed(1));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    reduce.addEventListener("change", request);
    request();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      reduce.removeEventListener("change", request);
    };
  }, []);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
