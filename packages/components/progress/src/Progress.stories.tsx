import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";
import { radii, sizes } from "./constants";
import { semanticColors } from "../../../core/system";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    radius: {
      options: Object.values(radii),
      control: { type: "select" },
    },
    value: {
      control: { type: "number" },
    },
    maxValue: {
      control: { type: "number" },
    },
    ariaLabel: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    valueLabel: {
      control: { type: "text" },
    },
    showPercentageLabel: {
      control: { type: "boolean" },
    },
    isIndeterminate: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    size: "sm",
    radius: "full",
    value: 20,
    maxValue: 100,
  },
};

export const WithLabel: Story = {
  args: {
    color: "primary",
    size: "sm",
    radius: "full",
    value: 20,
    maxValue: 100,
    label: "Loading...",
  },
};

export const WithValueLabel: Story = {
  args: {
    color: "primary",
    size: "sm",
    radius: "full",
    value: 18500,
    maxValue: 40000,
    label: "Monthly Sales",
    valueLabel: "40.000€",
  },
};

export const ShowPercentageLabel: Story = {
  args: {
    color: "primary",
    size: "sm",
    radius: "full",
    value: 18500,
    maxValue: 40000,
    label: "Monthly Sales",
    showPercentageLabel: true,
  },
};

export const ShowPercentageLabelWithValueLabel: Story = {
  args: {
    color: "primary",
    size: "sm",
    radius: "full",
    value: 18500,
    maxValue: 40000,
    label: "Monthly Sales",
    showPercentageLabel: true,
    valueLabel: "40.000€",
  },
};

export const IsIndeterminate: Story = {
  args: {
    color: "primary",
    size: "sm",
    radius: "full",
    isIndeterminate: true,
  },
};
