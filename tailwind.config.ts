import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand / interactive — bg-brand, bg-brand-hover, bg-brand-subtle
        brand: {
          DEFAULT: "var(--color-bg-primary)",
          hover: "var(--color-bg-primary-hover)",
          pressed: "var(--color-bg-primary-pressed)",
          subtle: "var(--color-bg-primary-subtle)"
        },
        // Surfaces — bg-surface, bg-surface-muted
        surface: {
          DEFAULT: "var(--color-bg-surface)",
          muted: "var(--color-bg-surface-muted)"
        },
        // Content / text — text-content, text-content-muted, text-content-inverse
        content: {
          DEFAULT: "var(--color-text-primary)",
          muted: "var(--color-text-secondary)",
          inverse: "var(--color-text-inverse)"
        },
        // Strokes / borders — border-stroke, border-stroke-strong
        stroke: {
          DEFAULT: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)"
        },
        // Status — text-danger, bg-danger, text-success, etc.
        danger: {
          DEFAULT: "var(--color-feedback-danger)"
        },
        info: {
          DEFAULT: "var(--color-feedback-info)"
        },
        success: {
          DEFAULT: "var(--color-feedback-success)"
        },
        warning: {
          DEFAULT: "var(--color-feedback-warning)"
        },
        // Disabled states — bg-disabled, text-disabled, border-disabled
        disabled: {
          bg: "var(--color-disabled-bg)",
          text: "var(--color-disabled-text)",
          border: "var(--color-disabled-border)"
        }
      },
      boxShadow: {
        // Elevation — shadow-elevation-1 … shadow-elevation-4
        "elevation-1": "var(--elevation-level-1)",
        "elevation-2": "var(--elevation-level-2)",
        "elevation-3": "var(--elevation-level-3)",
        "elevation-4": "var(--elevation-level-4)"
      }
    }
  },
  plugins: []
};

export default config;
