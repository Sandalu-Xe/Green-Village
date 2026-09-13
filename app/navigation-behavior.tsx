"use client";

import { useEffect } from "react";

/** Enhance the existing native details menu without changing its content. */
export function NavigationBehavior() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>(".mobile-nav");
    const toggle = menu?.querySelector("summary");
    const panel = menu?.querySelector("nav");
    if (!menu || !toggle || !panel) return;
    document.querySelectorAll<HTMLAnchorElement>(".site-header nav a").forEach((link) => {
      if (link.pathname === window.location.pathname) link.setAttribute("aria-current", "page");
    });
    const oldOverflow = document.body.style.overflow;
    const synchronize = () => {
      toggle.setAttribute("aria-expanded", String(menu.open));
      panel.inert = !menu.open;
      document.body.style.overflow = menu.open ? "hidden" : oldOverflow;
    };
    const close = () => { menu.open = false; synchronize(); };
    const keyboard = (event: KeyboardEvent) => {
      if (!menu.open) return;
      if (event.key === "Escape") { event.preventDefault(); close(); toggle.focus(); }
      if (event.key === "Tab") {
        const focusable = [toggle, ...panel.querySelectorAll<HTMLAnchorElement>("a")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !menu.contains(document.activeElement))) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !menu.contains(document.activeElement))) {
          event.preventDefault(); first.focus();
        }
      }
    };
    const outside = (event: PointerEvent) => {
      if (menu.open && event.target instanceof Node && !menu.contains(event.target)) close();
    };
    const desktop = window.matchMedia("(min-width: 1121px)");
    const resize = () => { if (desktop.matches) close(); };
    synchronize();
    menu.addEventListener("toggle", synchronize);
    panel.addEventListener("click", close);
    document.addEventListener("keydown", keyboard);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = oldOverflow;
      menu.removeEventListener("toggle", synchronize);
      panel.removeEventListener("click", close);
      document.removeEventListener("keydown", keyboard);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, []);
  return null;
}
