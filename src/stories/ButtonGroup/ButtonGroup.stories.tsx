import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import Button from "../Button/Button";
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
        <Button label="One" radius="none" color="primary" size="medium" />
        <Button label="Two" radius="none" color="primary" size="medium" />
        <Button label="Three" radius="none" color="primary" size="medium" />
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
          size="medium"
        />
        <Button
          label="Two"
          radius="none"
          color="success"
          variant="bordered"
          size="medium"
        />
        <Button
          label="Three"
          radius="none"
          color="success"
          variant="bordered"
          size="medium"
        />
        <Button
          label="Four"
          radius="none"
          color="success"
          variant="bordered"
          size="medium"
        />
        <Button
          label="Five"
          radius="none"
          color="success"
          variant="bordered"
          size="medium"
        />
        <Button
          label="Six"
          radius="none"
          color="success"
          variant="bordered"
          size="medium"
        />
      </>
    ),
  },
};
