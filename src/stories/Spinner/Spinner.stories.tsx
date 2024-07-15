import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { semanticColors } from "../../lib/colors";
import { sizes } from "./constants";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
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
    labelColor: {
      control: { type: "color" },
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
