import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import React from "react";
import Button from "../Button";
import DropdownItem from "./components/DropdownItem";
import DropdownMenu from "./components/DropdownMenu";
import DropdownTrigger from "./components/DropdownTrigger";
import { DropdownPositions, positions } from "./constants";
import { NewFileIcon } from "../../Icons/NewFileIcon";
import { CopyLinkIcon } from "../../Icons/CopyLinkIcon";
import { EditFileIcon } from "../../Icons/EditFileIcon";
import { DeleteFileIcon } from "../../Icons/DeleteFileIcon";

interface DropdownArgs {
  isBlackBackground: boolean;
  position: DropdownPositions;
  offset: number;
  children: React.ReactNode;
}
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'args' implicitly has an 'any' type.
    offset: {
      control: { type: "number" },
    },
    position: {
      options: Object.values(positions),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<DropdownArgs>;

export const Primary: Story = {
  args: {
    isBlackBackground: true,
    offset: 0,
    position: positions.bottom,
  },
  render: ({ isBlackBackground, offset, position }) => (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            radius="md"
            variant="bordered"
            color="default"
            blackText={!isBlackBackground}
          >
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          position={position}
          offset={offset}
          aria-label="Static Actions"
        >
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" color="danger" variant="solid">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  ),
};

export const WithStarContent: Story = {
  args: {
    isBlackBackground: true,
    offset: 0,
    position: positions.bottom,
  },
  render: ({ isBlackBackground, offset, position }) => (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            radius="md"
            variant="bordered"
            color="default"
            blackText={!isBlackBackground}
          >
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          position={position}
          offset={offset}
          aria-label="Static Actions"
        >
          <DropdownItem
            startContent={<NewFileIcon />}
            color="primary"
            key="new"
          >
            New file
          </DropdownItem>
          <DropdownItem
            startContent={<CopyLinkIcon />}
            color="default"
            key="copy"
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            startContent={<EditFileIcon />}
            color="success"
            key="edit"
          >
            Edit file
          </DropdownItem>
          <DropdownItem
            startContent={<DeleteFileIcon />}
            key="delete"
            color="danger"
            variant="solid"
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  ),
};

export const WithEndContent: Story = {
  args: {
    isBlackBackground: true,
    offset: 0,
    position: positions.bottom,
  },
  render: ({ isBlackBackground, offset, position }) => (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            radius="md"
            variant="bordered"
            color="default"
            blackText={!isBlackBackground}
          >
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          position={position}
          offset={offset}
          aria-label="Static Actions"
        >
          <DropdownItem endContent={<NewFileIcon />} color="primary" key="new">
            New file
          </DropdownItem>
          <DropdownItem
            endContent={<CopyLinkIcon />}
            color="default"
            key="copy"
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            endContent={<EditFileIcon />}
            color="success"
            key="edit"
          >
            Edit file
          </DropdownItem>
          <DropdownItem
            endContent={<DeleteFileIcon />}
            key="delete"
            color="danger"
            variant="solid"
            onClick={() => alert("Delete file")}
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  ),
};
