import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import React from "react";
import Button from "../Button";
import DropdownItem from "./components/DropdownItem";
import DropdownMenu from "./components/DropdownMenu";
import DropdownTrigger from "./components/DropdownTrigger";

interface DropdownArgs {
  isBlackBackground: boolean;
  children: React.ReactNode;
}

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};
export default meta;

type Story = StoryObj<DropdownArgs>;

export const Primary: Story = {
  args: {
    isBlackBackground: false,
  },
  render: (args) => (
    <>
      <DropdownTrigger>
        <Button
          radius="md"
          variant="bordered"
          color="default"
          blackText={!args.isBlackBackground}
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" color="danger" variant="solid">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </>
  ),
};
