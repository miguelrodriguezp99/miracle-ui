/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@components/divider/src";
import { directions } from "@components/divider/src/constants";
import { semanticColors } from "@mirakle-ui/system20";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    direction: {
      options: Object.values(directions),
      control: { type: "select" },
    },
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: directions.horizontal,
  },
};

export const Vertical: Story = {
  args: {
    direction: directions.vertical,
  },
};
