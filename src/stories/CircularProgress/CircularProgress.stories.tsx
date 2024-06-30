import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "./CircularProgress";
import { semanticColors } from "../../lib/colors";
import { sizes } from "./constants";

const meta: Meta<typeof CircularProgress> = {
  title: "Components/CircularProgess",
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
