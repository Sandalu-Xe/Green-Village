"use client";

import { useEffect } from "react";

const imageSelector = ".story-photo, .page-hero__image-wrap, .impact-image";
const cardSelector = ".feature-card, .experience-row, .quote-card, .info-card, .place-card, .journey-card, .transport-card, .landmark-card, .contact-options article, .timeline li";
const motionSelector = [
  imageSelector, cardSelector,
  ".section-heading > *, .section-heading--row > div > *",
  ".story-copy > *, .page-hero__copy > *, .prose > *",
  ".closing-cta__inner > div > *, .closing-cta__inner > .button",
  ".location-card, .plan-card, .gallery-stage, .gallery-more",
].join(",");

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
        element.dataset.motion = element.matches(imageSelector) ? "image"
          : element.matches(cardSelector) ? "card"
          : element.matches("h1, h2, h3") ? "heading" : "text";
        element.style.setProperty("--reveal-delay", `${Math.min(index * 75, 225)}ms`);
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

  return <span className="reading-progress" aria-hidden="true" />;
}
