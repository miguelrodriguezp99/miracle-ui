import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";
import Checkbox from "../checkbox/src/Checkbox";
import React from "react";
import { directions, gaps } from "./constants";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    direction: {
      options: Object.values(directions),
      control: { type: "select" },
    },
    gap: {
      options: Object.values(gaps),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Checkbox key={1} />,
      <Checkbox key={2} />,
      <Checkbox key={3} />,
    ],
  },
};

export const Horizontal: Story = {
  args: {
    children: [
      <Checkbox key={1} />,
      <Checkbox key={2} />,
      <Checkbox key={3} />,
    ],
    direction: directions.horizontal,
  },
};
