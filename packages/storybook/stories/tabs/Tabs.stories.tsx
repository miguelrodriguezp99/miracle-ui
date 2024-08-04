import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "@components/tabs/src/";
import {
  sizes,
  TabsSizes,
  TabsVariants,
  variants,
} from "@components/tabs/src/constants";
import React from "react";
import { CameraIcon } from "@packages/icons/CameraIcon";
import { UserIcon } from "@packages/icons/UserIcon";
import { VolumeHighIcon } from "@packages/icons/VolumeHighIcon";
import { SemanticColor, semanticColors } from "@packages/core/system";

interface TabsArgs {
  size: TabsSizes;
  variant: TabsVariants;
  color: SemanticColor;
  isDisabled: boolean;
}

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    variant: {
      options: Object.values(variants),
      control: { type: "select" },
    },
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },

    children: {
      table: { disable: true },
    },
    contentWidth: {
      table: { disable: true },
    },
  },
};
export default meta;

meta.parameters = {
  __sb: {
    ac: "start",
    ai: "start",
    fd: "row",
    fw: "nowrap",
    jc: "flex-start",
  },
};

const contentStyles = {
  backgroundColor: "#18181b",
  color: "white",
  borderRadius: "10px",
  padding: "0.75rem",
  marginTop: "0.75rem",
  width: "fit-content",
};

type Story = StoryObj<TabsArgs>;

export const Default: Story = {
  args: {
    size: sizes.md,
    variant: variants.solid,
    color: semanticColors.default,
  },
  render: ({ size, variant, color }) => (
    <Tabs size={size} variant={variant} color={color}>
      <Tab title="Photos" key="photos"></Tab>
      <Tab title="N.Y" key="videos"></Tab>
      <Tab title="Links" key="links"></Tab>
    </Tabs>
  ),
};

export const WithContent: Story = {
  args: {
    size: sizes.md,
    variant: variants.solid,
    color: semanticColors.default,
  },
  render: ({ size, variant, color }) => (
    <Tabs size={size} variant={variant} color={color}>
      <Tab title="Photos" key="photos">
        <div style={contentStyles} className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </Tab>
      <Tab title="N.Y" key="videos">
        <div style={contentStyles} className="content">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </Tab>
      <Tab title="Links" key="links">
        <div style={contentStyles} className="content">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </div>
      </Tab>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  args: {
    size: sizes.md,
    variant: variants.solid,
    color: semanticColors.primary,
  },
  render: ({ size, variant, color }) => (
    <Tabs size={size} variant={variant} color={color}>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <CameraIcon />
            <span>Photos</span>
          </div>
        }
        key="photos"
      ></Tab>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",

              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <VolumeHighIcon />
            <span>Volumes</span>
          </div>
        }
        key="videos"
      ></Tab>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <UserIcon />
            <span>Users</span>
          </div>
        }
        key="links"
      ></Tab>
    </Tabs>
  ),
};

export const OnlyIcons: Story = {
  args: {
    size: sizes.md,
    variant: variants.solid,
    color: semanticColors.primary,
  },
  render: ({ size, variant, color }) => (
    <Tabs size={size} variant={variant} color={color}>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <CameraIcon />
          </div>
        }
        key="photos"
      ></Tab>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",

              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <VolumeHighIcon />
          </div>
        }
        key="videos"
      ></Tab>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <UserIcon />
          </div>
        }
        key="links"
      ></Tab>
    </Tabs>
  ),
};

export const Underlined: Story = {
  args: {
    size: sizes.md,
    variant: variants.underlined,
    color: semanticColors.secondary,
  },
  render: ({ size, variant, color }) => (
    <Tabs size={size} variant={variant} color={color}>
      <Tab title="Photos" key="photos"></Tab>
      <Tab title="N.Y" key="videos"></Tab>
      <Tab title="Links" key="links"></Tab>
    </Tabs>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: ({ isDisabled }) => (
    <Tabs isDisabled={isDisabled}>
      <Tab title="Photos" key="photos"></Tab>
      <Tab title="N.Y" key="videos"></Tab>
      <Tab title="Links" key="links"></Tab>
    </Tabs>
  ),
};
