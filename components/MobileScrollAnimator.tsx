"use client";

import { useEffect } from "react";

const MOBILE_REVEAL_SELECTOR = [
  ".skills-section",
  ".skill-item",
  ".projects-section",
  ".project-card",
  ".about-card",
  ".stat-item",
  ".footer",
  ".contact-list > *",
  ".social-links > *",
  ".site-footnote"
].join(", ");

export function MobileScrollAnimator() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");
    const root = document.documentElement;
    let observer: IntersectionObserver | null = null;

    const cleanup = () => {
      observer?.disconnect();
      observer = null;
      root.classList.remove("mobile-scroll-ready");
      document.querySelectorAll<HTMLElement>(MOBILE_REVEAL_SELECTOR).forEach((element) => {
        element.classList.remove("mobile-scroll-reveal", "is-mobile-visible");
        element.style.removeProperty("--mobile-reveal-delay");
      });
    };

    const setup = () => {
      cleanup();

      if (!mediaQuery.matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const elements = Array.from(document.querySelectorAll<HTMLElement>(MOBILE_REVEAL_SELECTOR));

      root.classList.add("mobile-scroll-ready");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-mobile-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -14% 0px",
          threshold: 0.16
        }
      );

      elements.forEach((element, index) => {
        element.classList.add("mobile-scroll-reveal");
        element.style.setProperty("--mobile-reveal-delay", `${Math.min((index % 8) * 45, 240)}ms`);
        observer?.observe(element);
      });
    };

    setup();
    mediaQuery.addEventListener("change", setup);

    return () => {
      mediaQuery.removeEventListener("change", setup);
      cleanup();
    };
  }, []);

  return null;
}
