import type { Meta, StoryFn as Story } from "@storybook/react";
import { Input } from "./Input";
import {
  InputRadius,
  InputSizes,
  InputTypes,
  InputVariants,
  InputWidth,
  radius,
  sizes,
  variants,
  widths,
} from "./constants";
import { SemanticColor, semanticColors } from "../../../core/system";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    color: {
      options: Object.values(semanticColors),
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
    radius: {
      options: Object.values(radius),
      control: { type: "select" },
    },
    width: {
      options: Object.values(widths),
      control: { type: "select" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
};
export default meta;

type InputProps = React.ComponentProps<typeof Input>;

const Template: Story<InputProps> = (
  args: React.JSX.IntrinsicAttributes & {
    color?: SemanticColor;
    size?: InputSizes;
    variant?: InputVariants;
    width?: InputWidth;
    radius?: InputRadius;
    placeholder?: string;
    isDisabled?: boolean;
    type?: InputTypes;
    value?: string;
    text?: string;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValueChange?: (value: string) => void;
  }
) => {
  const [value, setValue] = useState("");

  return (
    <Input {...args} value={value} onValueChange={(value) => setValue(value)} />
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "flat",
  isDisabled: false,
  type: "text",
  text: "Email",
};

export const Placeholder: Story = Template.bind({});
Placeholder.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "flat",
  isDisabled: false,
  type: "text",
  text: "My Input",
  placeholder: "Enter your text here",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "flat",
  isDisabled: true,
  type: "text",
  text: "Disabled Input",
};

export const Password: Story = Template.bind({});
Password.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "flat",
  isDisabled: false,
  type: "password",
  text: "Password",
};

export const Faded: Story = Template.bind({});
Faded.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "faded",
  isDisabled: false,
  type: "text",
  text: "Faded Input",
};

export const Bordered: Story = Template.bind({});
Bordered.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "bordered",
  isDisabled: false,
  type: "text",
  text: "Bordered Input",
};

export const Underlined: Story = Template.bind({});
Underlined.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "underlined",
  isDisabled: false,
  type: "text",
  text: "Underlined Input",
};

export const ReadOnly: Story = Template.bind({});
ReadOnly.args = {
  color: semanticColors.default,
  size: "medium",
  width: "medium",
  radius: "medium",
  variant: "flat",
  isDisabled: false,
  type: "text",
  text: "Read Only Input",
  readOnly: true,
};
