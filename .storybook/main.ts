import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: configType === "PRODUCTION" ? "/faster/" : "/"
    });
  }
};

export default config;
