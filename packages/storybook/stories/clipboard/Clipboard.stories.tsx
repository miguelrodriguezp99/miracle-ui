import type { Meta, StoryObj } from "@storybook/react";
import { Clipboard } from "@components/clipboard/src/";
import { semanticColors } from "@packages/core/system/src/colors";
import { sizes, variants } from "@components/clipboard/src/constants";
import React from "react";

const meta: Meta<typeof Clipboard> = {
  title: "Components/Clipboard",
  component: Clipboard,
  argTypes: {
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    variant: {
      options: Object.values(variants),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "npm install @miracle-ui/react",
  },
};

export const Multiline: Story = {
  args: {
    size: "md",
    children: (
      <>
        <span>npm install @miracle-ui/react</span>
        <span>npm install @miracle-ui/react</span>
        <span>npm install @miracle-ui/react</span>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    children: "npm install @miracle-ui/react",
    variant: "bordered",
    color: "primary",
  },
};

export const Solid: Story = {
  args: {
    children: "npm install @miracle-ui/react",
    variant: "solid",
    color: "success",
  },
};

export const Shadow: Story = {
  args: {
    children: "npm install @miracle-ui/react",
    variant: "shadow",
    color: "warning",
  },
};

export const CustomSymbol: Story = {
  args: {
    children: "npm install @miracle-ui/react",
    customSymbol: "🚀",
  },
};

export const HidedButton: Story = {
  args: {
    size: "md",
    children: "npm install @miracle-ui/react",
    hideButton: true,
  },
};

export const Custom: Story = {
  args: {
    size: "md",
    children: "npm install @miracle-ui/react",
    customPadding: "0.75rem",
    customTextColor: "black",
    customTextSize: "1rem",
    customBorderRadius: "999999px",
    customBackgroundColor: "orange",
    customRippleColor: "purple",
    customSymbol: "#",
  },
};
