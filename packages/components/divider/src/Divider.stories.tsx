import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { directions } from "./constants";
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
