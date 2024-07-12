import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { semanticColors } from "../../lib/colors";
import { sizes } from "./constants";
import { useState } from "react";
import React from "react";
import { VolumeLowIcon } from "../../Icons/VolumeLowIcon";
import { VolumeHighIcon } from "../../Icons/VolumeHighIcon";

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
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

//@ts-expect-error ts-migrate(7006) FIXME: Parameter 'args' implicitly has an 'any' type.
export const Default: Story = () => {
  // Utilizar useState para gestionar el estado del Slider
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  return (
    <Slider
      color={semanticColors.primary}
      size={sizes.md}
      isDisabled={false}
      label="Slider"
      value={sliderValue}
      onChange={handleChange}
    />
  );
};

//@ts-expect-error ts-migrate(7006) FIXME: Parameter 'args' implicitly has an 'any' type.
export const Vertical: Story = () => {
  // Utilizar useState para gestionar el estado del Slider
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  return (
    <Slider
      color={semanticColors.warning}
      size={sizes.md}
      isDisabled={false}
      direction="vertical"
      value={sliderValue}
      onChange={handleChange}
    />
  );
};

//@ts-expect-error ts-migrate(7006) FIXME: Parameter 'args' implicitly has an 'any' type.
export const WithLabel: Story = () => {
  // Utilizar useState para gestionar el estado del Slider
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  return (
    <Slider
      label="Percentage"
      color={semanticColors.secondary}
      size={sizes.md}
      isDisabled={false}
      direction="horizontal"
      value={sliderValue}
      onChange={handleChange}
    />
  );
};

//@ts-expect-error ts-migrate(7006) FIXME: Parameter 'args' implicitly has an 'any' type.
export const WithSteps: Story = () => {
  // Utilizar useState para gestionar el estado del Slider
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  return (
    <Slider
      label="Percentage"
      color={semanticColors.secondary}
      size={sizes.md}
      isDisabled={false}
      direction="horizontal"
      value={sliderValue}
      onChange={handleChange}
      showSteps
      step={20}
    />
  );
};

//@ts-expect-error ts-migrate(7006) FIXME: Parameter 'args' implicitly has an 'any' type.
export const WithIcons: Story = () => {
  // Utilizar useState para gestionar el estado del Slider
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  return (
    <Slider
      value={sliderValue}
      onChange={handleChange}
      startContent={<VolumeLowIcon />}
      endContent={<VolumeHighIcon />}
      size="md"
      direction="horizontal"
      color="primary"
      maxValue={100}
      showSteps
      step={20}
    />
  );
};
