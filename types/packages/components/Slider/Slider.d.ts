import React from "react";
import { SliderDirection, SliderSizes } from "./constants";
import { SemanticColor } from "../../lib/colors";
type Props = {
    color?: SemanticColor;
    customColor?: string;
    customHoverColor?: string;
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
};
export declare const Slider: ({ name, isDisabled, label, blackText, direction, color, customColor, customHoverColor, size, showSteps, step, startContent, endContent, maxValue, value, maxWidth, onChange: setValue, }: Props) => React.JSX.Element;
export default Slider;