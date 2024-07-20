import React, { useState } from "react";
import type { Meta, StoryFn as Story } from "@storybook/react";
import { Slider } from "./Slider";
import { SemanticColor, semanticColors } from "../../../core/system";
import { sizes, SliderDirection, SliderSizes } from "./constants";
import { VolumeLowIcon } from "../../../icons/VolumeLowIcon";
import { VolumeHighIcon } from "../../../icons/VolumeHighIcon";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    maxValue: {
      control: { type: "number" },
    },
    showSteps: {
      control: { type: "boolean" },
    },
    step: {
      control: { type: "number" },
    },
    direction: {
      control: { type: "radio", options: ["horizontal", "vertical"] },
    },
    label: {
      control: { type: "text" },
    },
    maxWidth: {
      control: { type: "number" },
    },
  },
};
export default meta;

type SliderProps = React.ComponentProps<typeof Slider>;

const Template: Story<SliderProps> = (
  args: React.JSX.IntrinsicAttributes & {
    color?: SemanticColor;
    size?: SliderSizes;
    label?: string;
    isDisabled?: boolean;
    direction?: SliderDirection;
    name?: string;
    blackText?: boolean;
    showSteps?: boolean;
    step?: number;
    maxValue?: number;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    value: number;
    maxWidth?: number;
    onChange: (value: number) => void;
  }
) => {
  const [sliderValue, setSliderValue] = useState(0.4);

  return <Slider {...args} value={sliderValue} onChange={setSliderValue} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: semanticColors.primary,
  size: sizes.md,
  isDisabled: false,
  value: 0.5,
  onChange: () => {},
};

export const Vertical = Template.bind({});
Vertical.args = {
  color: semanticColors.secondary,
  size: sizes.md,
  direction: "vertical",
  value: 0.5,
  onChange: () => {},
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  color: semanticColors.primary,
  size: sizes.md,
  label: "Volume",
  value: 0.5,
  showSteps: true,
  maxValue: 1,
  step: 10,
  onChange: () => {},
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  color: semanticColors.primary,
  size: sizes.md,
  startContent: <VolumeLowIcon />,
  endContent: <VolumeHighIcon />,
  value: 0.5,
  onChange: () => {},
};

export const WithSteps = Template.bind({});
WithSteps.args = {
  color: semanticColors.primary,
  size: sizes.md,
  showSteps: true,
  step: 20,
  value: 0.5,
  onChange: () => {},
};

export const WithIconsSteps = Template.bind({});
WithIconsSteps.args = {
  color: semanticColors.primary,
  size: sizes.md,
  startContent: <VolumeLowIcon />,
  endContent: <VolumeHighIcon />,
  showSteps: true,
  maxValue: 1,
  step: 20,
  value: 0.4,
  onChange: () => {},
};

export const WithIconsStepsVertical = Template.bind({});
WithIconsStepsVertical.args = {
  color: semanticColors.primary,
  size: sizes.md,
  direction: "vertical",
  startContent: <VolumeLowIcon />,
  endContent: <VolumeHighIcon />,
  showSteps: true,
  maxValue: 1,
  step: 20,
  value: 0.5,
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: semanticColors.primary,
  size: sizes.md,
  isDisabled: true,
  value: 0.5,
  onChange: () => {},
};
