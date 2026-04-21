"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);

    const timer = window.setTimeout(() => {
      setTheme(preferredTheme);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      onClick={() => {
        applyTheme(nextTheme);
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
        setTheme(nextTheme);
      }}
    >
      <span className="theme-toggle-orb" aria-hidden="true" />
      <span>{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
