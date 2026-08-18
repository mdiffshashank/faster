/* eslint-disable react-refresh/only-export-components */
import type { Decorator, Preview } from "@storybook/react";

import { useEffect } from "react";
import "../src/index.css";

/**
 * ThemeDecorator — syncs the Storybook background selection
 * with Tailwind's `darkMode: "class"` by toggling `class="dark"` on <html>.
 */
function ThemeDecorator({
  Story,
  backgroundValue,
}: {
  Story: React.FC;
  backgroundValue: string | undefined;
}) {
  useEffect(() => {
    const isDark = backgroundValue === "#1F1F1F";
    document.documentElement.classList.toggle("dark", isDark);
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [backgroundValue]);

  return <Story />;
}

const withTheme: Decorator = (Story, context) => {
  const backgroundValue = context.globals?.backgrounds?.value as string | undefined;
  return <ThemeDecorator Story={Story} backgroundValue={backgroundValue} />;
};

const preview: Preview = {
  decorators: [withTheme],

  parameters: {
    layout: "centered",
    // Auto-wire all on* props to the Actions panel
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        // Auto-use a date picker for props ending in Date
        date: /Date$/,
      },
    },

    // Light + dark backgrounds — selecting dark toggles the .dark class via withTheme decorator
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#1F1F1F" },
        { name: "surface-muted", value: "#FAFAFA" },
      ],
    },

    // Global a11y config — WCAG 2.1 AA rules applied to every story
    a11y: {
      config: {
        rules: [
          // Enforce colour contrast at AA level
          { id: "color-contrast", enabled: true },
        ],
      },
    },

    docs: {
      // Show source code for every story
      source: { type: "auto" },
    },
  },

  // Apply autodocs to every story that opts in with tags: ["autodocs"]
  tags: ["autodocs"],
};

export default preview;
