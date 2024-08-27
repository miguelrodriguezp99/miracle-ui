// @ts-nocheck
import type { StorybookConfig } from "@storybook/react-vite";
import cssModules from "../config/cssModules";

const config: StorybookConfig = {
  stories: [
    "../packages/storybook/**/*.mdx",
    "../packages/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    "storybook-dark-mode",
    "./addons/m-switch",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  webpackFinal: cssModules(),
};
export default config;
