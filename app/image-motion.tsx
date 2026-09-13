"use client";

import { useEffect } from "react";

const motionSelector = [
  ".section-heading", ".feature-card", ".story-photo", ".story-copy",
  ".page-hero__image-wrap", ".impact-image", ".experience-row",
  ".quote-card", ".info-card", ".place-card", ".journey-card",
  ".transport-card", ".landmark-card", ".contact-options article",
].join(",");

export function ImageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector))
      .filter((element) => !element.parentElement?.closest(motionSelector));
    let observer: IntersectionObserver | undefined;
    const reset = () => {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("motion-ready", "is-visible"));
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (element.contains(document.activeElement)) return;
          element.style.setProperty("--reveal-y", entry.boundingClientRect.top < 0 ? "-24px" : "24px");
          element.classList.toggle("is-visible", entry.isIntersecting);
        });
      }, { threshold: 0, rootMargin: "0px 0px -24px" });
      elements.forEach((element) => {
        const index = Array.from(element.parentElement?.children ?? []).indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 210)}ms`);
        const rect = element.getBoundingClientRect();
        element.classList.toggle("is-visible", rect.top < window.innerHeight && rect.bottom > 0);
        element.classList.add("motion-ready");
        observer?.observe(element);
      });
    };
    reset();
    preference.addEventListener("change", reset);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", reset);
      elements.forEach((element) => element.classList.remove("motion-ready", "is-visible"));
    };
  }, []);

  return null;
}
