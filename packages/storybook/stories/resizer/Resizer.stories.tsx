import type { Meta, StoryObj } from "@storybook/react";
import { Resizer } from "@components/resizer/src/";
import React from "react";

const meta: Meta<typeof Resizer> = {
  title: "Components/Resizer",
  component: Resizer,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "30%",
        height: "30%",
        backgroundColor: "black",
        borderRadius: "10px",
        border: "1px solid #F7F5F7",
      }}
    >
      <Resizer resizeBarSize={1} defaultSize="50%">
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          Pane 1
        </div>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          Pane 2
        </div>
      </Resizer>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "30%",
        height: "30%",
        backgroundColor: "black",
        borderRadius: "10px",
        border: "1px solid #F7F5F7",
      }}
    >
      <Resizer direction="vertical" resizeBarSize={1} defaultSize="50%">
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          Pane 1
        </div>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          Pane 2
        </div>
      </Resizer>
    </div>
  ),
};

export const Custom: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "30%",
        height: "30%",
        backgroundColor: "black",
        borderRadius: "10px",
        border: "1px solid #F7F5F7",
      }}
    >
      <Resizer resizeBarSize={1} defaultSize="20%">
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          Pane 1
        </div>

        <Resizer direction="vertical" resizeBarSize={1}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100%",
              color: "white",
            }}
          >
            Pane 1
          </div>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100%",
              color: "white",
            }}
          >
            Pane 2
          </div>
        </Resizer>
      </Resizer>
    </div>
  ),
};
