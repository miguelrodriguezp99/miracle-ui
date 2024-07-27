import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@components/switch/src/";
import { semanticColors } from "@mirakle-ui/system20";
import { sizes } from "@components/switch/src/constants";
import SunIcon from "@packages/icons/SunIcon";
import MoonIcon from "@packages/icons/MoonIcon";
import React from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
    name: {
      table: { disable: true },
    },
    defaultSelected: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
    setValue: {
      table: { disable: true },
    },
    thumbIcon: {
      table: { disable: true },
    },
    startContent: {
      table: { disable: true },
    },
    endContent: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const DefaultSelected: Story = {
  args: {
    defaultSelected: true,
    color: "secondary",
    customBackgroundColor: "green",
  },
};

export const CustomThumbIcon: Story = {
  args: {
    thumbIcon: ({ isChecked }) => (isChecked ? <SunIcon /> : <MoonIcon />),
  },
};

export const StartAndEndContent: Story = {
  args: {
    startContent: <SunIcon />,
    endContent: <MoonIcon />,
  },
};

export const WithLabel: Story = {
  args: {
    children: "Label",
  },
};

export const WithCustomLabel: Story = {
  args: {
    children: "Custom label",
    labelFontSize: "20px",
    labelColor: "purple",
    customBackgroundColor: "#E073F9",
    customCheckedColor: "#6C237D",
    customThumbColor: "black",
    startContent: <SunIcon />,
    endContent: <MoonIcon />,
  },
};

export const Custom: Story = {
  args: {
    customBackgroundColor: "lightgreen",
    customCheckedColor: "#F85D5D",
    customThumbColor: "black",
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {Object.values(sizes).map((size, index) => (
        <Switch id={index} key={size} size={size} />
      ))}
    </div>
  ),
};

export const SecondCustom: Story = {
  args: {
    children: "Custom label",
    labelFontSize: "20px",
    labelColor: "purple",
    customBackgroundColor: "#E073F9",
    customCheckedColor: "#6C237D",
    customThumbColor: "black",
    thumbIcon: ({ isChecked }) =>
      isChecked ? <SunIcon color="#6C237D" /> : <MoonIcon color="#E073F9" />,
  },
};
