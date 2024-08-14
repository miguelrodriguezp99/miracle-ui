import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@components/chip/src/Chip";
import { variants, radius, sizes } from "@components/chip/src/constants";
import { semanticColors } from "@packages/core/system/src/colors";
import React from "react";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    radius: {
      options: Object.values(radius),
      control: { type: "select" },
    },
    variant: {
      options: Object.values(variants),
      control: { type: "select" },
    },
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
