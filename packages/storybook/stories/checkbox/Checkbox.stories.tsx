import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@components/checkbox/src";
import { semanticColorsCheckbox } from "@packages/core/system/src/colors";
import { radii, sizes } from "@components/checkbox/src/constants";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: Object.values(semanticColorsCheckbox),
      control: { type: "select" },
    },
    textColor: {
      control: { type: "boolean" },
    },
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    radius: {
      options: Object.values(radii),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const DefaultSelected: Story = {
  args: {
    isChecked: true,
  },
};
