// @ts-nocheck
import type { StorybookConfig } from "@storybook/react-vite";
const cssModules = require("../config/cssModules");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  webpackFinal: cssModules(),
};
export default config;
