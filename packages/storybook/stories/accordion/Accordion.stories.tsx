import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Accordion, AccordionItem } from "@components/accordion/src/";

import {
  AccordionSelectionModes,
  AccordionVariants,
  selectionModes,
  variants,
} from "@components/accordion/src/constants";

interface AccordionArgs {
  variant: AccordionVariants;
  selectionMode: AccordionSelectionModes;
  isCompact: boolean;
}
const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    variant: {
      options: Object.values(variants),
      control: { type: "select" },
    },
    selectionMode: {
      options: Object.values(selectionModes),
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<AccordionArgs>;

export const Primary: Story = {
  args: {
    variant: variants.solid,
    isCompact: false,
    selectionMode: selectionModes.multiple,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem title="Accordion 1" />
        <AccordionItem title="Accordion 2" />
        <AccordionItem title="Accordion 3" />
        <AccordionItem title="Accordion 4" />
      </Accordion>
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    variant: variants.solid,
    isCompact: false,
    selectionMode: selectionModes.multiple,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem label="Press here to open" />
        <AccordionItem label="Press here to open" />
        <AccordionItem label="Press here to open" />
        <AccordionItem label="Press here to open" />
      </Accordion>
    </div>
  ),
};

export const UniqueOpen: Story = {
  args: {
    variant: variants.solid,
    isCompact: false,
    selectionMode: selectionModes.unique,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem title="Accordion 1" />
        <AccordionItem title="Accordion 2" />
        <AccordionItem title="Accordion 3" />
        <AccordionItem title="Accordion 4" />
      </Accordion>
    </div>
  ),
};

export const Compact: Story = {
  args: {
    variant: variants.solid,
    isCompact: true,
    selectionMode: selectionModes.unique,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem title="Accordion 1" />
        <AccordionItem title="Accordion 2" />
        <AccordionItem title="Accordion 3" />
        <AccordionItem title="Accordion 4" />
      </Accordion>
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    variant: variants.bordered,
    isCompact: false,
    selectionMode: selectionModes.multiple,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem title="Accordion 1" />
        <AccordionItem title="Accordion 2" />
        <AccordionItem title="Accordion 3" />
        <AccordionItem title="Accordion 4" />
      </Accordion>
    </div>
  ),
};

export const Shadow: Story = {
  args: {
    variant: variants.shadow,
    isCompact: false,
    selectionMode: selectionModes.multiple,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem title="Accordion 1" />
        <AccordionItem title="Accordion 2" />
        <AccordionItem title="Accordion 3" />
        <AccordionItem title="Accordion 4" />
      </Accordion>
    </div>
  ),
};

export const Splitted: Story = {
  args: {
    variant: variants.splitted,
    isCompact: false,
    selectionMode: selectionModes.multiple,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
      >
        <AccordionItem title="Accordion 1" />
        <AccordionItem title="Accordion 2" />
        <AccordionItem title="Accordion 3" />
        <AccordionItem title="Accordion 4" />
      </Accordion>
    </div>
  ),
};

export const Custom: Story = {
  args: {
    variant: variants.splitted,
    isCompact: false,
    selectionMode: selectionModes.multiple,
  },
  render: ({ variant, isCompact, selectionMode }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Accordion
        variant={variant}
        selectionMode={selectionMode}
        isCompact={isCompact}
        initialOpenIndexes={[2, 3]}
      >
        <AccordionItem
          title="Accordion 1"
          backgroundColor="red"
          titleColor="white"
          contentColor="white"
        />
        <AccordionItem
          title="Accordion 2"
          titleColor="black"
          backgroundColor="orange"
        />
        <AccordionItem
          title="Accordion 3"
          backgroundColor="red"
          contentColor="black"
        />
        <AccordionItem
          title="Accordion 4"
          backgroundColor="lightgray"
          titleColor="blue"
          contentColor="black"
        />
      </Accordion>
    </div>
  ),
};
