import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ThemeToggle from "./ThemeToggle";

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
} as Meta;

const Template: StoryFn = (args) => <ThemeToggle {...args} />;

export const Default = Template.bind({});
