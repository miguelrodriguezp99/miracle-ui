import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@components/skeleton/src/Skeleton";
import React from "react";
import { Card } from "@components/index";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card cardWidth="sm" padding="md" customColor="#18181b">
      <Skeleton borderRadius="10px">
        <div
          style={{
            width: "100%",
            height: "75px",
            backgroundColor: "#27272a",
            borderRadius: "10px",
          }}
        />
      </Skeleton>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton borderRadius="10px" customWidth>
          <div
            style={{
              width: "120px",
              height: "12px",
              backgroundColor: "#27272a",
              borderRadius: "10px",
            }}
          />
        </Skeleton>

        <Skeleton borderRadius="10px" customWidth>
          <div
            style={{
              width: "140px",
              height: "12px",
              backgroundColor: "#27272a",
              borderRadius: "10px",
            }}
          />
        </Skeleton>
        <Skeleton borderRadius="10px" customWidth>
          <div
            style={{
              width: "80px",
              height: "12px",
              backgroundColor: "#27272a",
              borderRadius: "10px",
            }}
          />
        </Skeleton>
      </div>
    </Card>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Card cardWidth="xl" padding="md" customColor="#18181b">
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <Skeleton borderRadius="9999px" customWidth>
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#27272a",
              borderRadius: "9999px",
            }}
          />
        </Skeleton>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginLeft: "10px",
          }}
        >
          <Skeleton borderRadius="9999px" customWidth>
            <div
              style={{
                width: "160px",
                height: "10px",
                backgroundColor: "#27272a",
                borderRadius: "9999px",
              }}
            />
          </Skeleton>
          <Skeleton borderRadius="9999px" customWidth>
            <div
              style={{
                width: "200px",
                height: "10px",
                backgroundColor: "#27272a",
                borderRadius: "9999px",
              }}
            />
          </Skeleton>
        </div>
      </div>
    </Card>
  ),
};
