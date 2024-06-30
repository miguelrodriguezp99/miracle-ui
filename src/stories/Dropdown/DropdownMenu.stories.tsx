import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
