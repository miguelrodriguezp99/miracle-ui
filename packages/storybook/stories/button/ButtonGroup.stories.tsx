import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "@components/button/src/ButtonGroup";
import Button from "@components/button/src/Button";
import React from "react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Button label="One" radius="none" color="primary" size="md" />
        <Button label="Two" radius="none" color="primary" size="md" />
        <Button label="Three" radius="none" color="primary" size="md" />
      </>
    ),
  },
};

export const BigGroup: Story = {
  args: {
    children: (
      <>
        <Button
          label="One"
          radius="none"
          color="success"
          variant="bordered"
          size="md"
        />
        <Button
          label="Two"
          radius="none"
          color="success"
          variant="bordered"
          size="md"
        />
        <Button
          label="Three"
          radius="none"
          color="success"
          variant="bordered"
          size="md"
        />
        <Button
          label="Four"
          radius="none"
          color="success"
          variant="bordered"
          size="md"
        />
        <Button
          label="Five"
          radius="none"
          color="success"
          variant="bordered"
          size="md"
        />
        <Button
          label="Six"
          radius="none"
          color="success"
          variant="bordered"
          size="md"
        />
      </>
    ),
  },
};
