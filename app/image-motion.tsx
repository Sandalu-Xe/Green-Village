"use client";

import { useEffect } from "react";

const cardSelector = ".feature-card, .experience-row, .info-card, .place-card, .journey-card, .transport-card, .landmark-card";
const motionSelector = `${cardSelector}, .story-grid, .quote-grid, .prose`;

export function ImageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector))
      .filter((element) => !element.parentElement?.closest(motionSelector));
    let observer: IntersectionObserver | undefined;
    const reveal = (element: HTMLElement) => {
      element.classList.add("is-visible");
      observer?.unobserve(element);
    };
    const clear = () => elements.forEach((element) => {
      element.classList.remove("motion-ready", "is-visible");
      delete element.dataset.motion;
      element.style.removeProperty("--reveal-delay");
    });
    const reset = () => {
      observer?.disconnect();
      clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        });
      }, { threshold: 0, rootMargin: "0px 0px -32px" });
      elements.forEach((element) => {
        const siblings = Array.from(element.parentElement?.children ?? []);
        const index = siblings.indexOf(element);
        element.style.setProperty("--reveal-delay", `${element.matches(cardSelector) ? Math.min(index * 50, 100) : 0}ms`);
        // Keep restored scroll positions and anything already read immediately visible.
        if (element.getBoundingClientRect().top < window.innerHeight * .85) reveal(element);
        element.classList.add("motion-ready");
        if (!element.classList.contains("is-visible")) observer?.observe(element);
      });
    };
    const onFocus = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>(".motion-ready");
      if (element) reveal(element);
    };
    reset();
    preference.addEventListener("change", reset);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", reset);
      document.removeEventListener("focusin", onFocus);
      clear();
    };
  }, []);

  return null;
}
