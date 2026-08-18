import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("faster-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Manages the active theme (light / dark) for the Faster design system.
 *
 * - Reads the initial value from `localStorage` then falls back to the OS
 *   `prefers-color-scheme` media query.
 * - Writes `class="dark"` onto `<html>` so Tailwind's `darkMode: "class"`
 *   automatically propagates the theme to every component via CSS variables.
 * - Persists the user's preference to `localStorage` between sessions.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("faster-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  return { theme, toggleTheme, setLightTheme, setDarkTheme };
}
