import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@components/circucularProgress/src";
import { semanticColors } from "@packages/core/system/src/colors";
import { sizes } from "@components/circucularProgress/src/constants";

const meta: Meta<typeof CircularProgress> = {
  title: "Components/CircularProgress",
  component: CircularProgress,
  argTypes: {
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Loading...",
  },
};
