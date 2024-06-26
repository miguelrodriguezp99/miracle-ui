import React from "react";
import { InputRadius, InputSizes, InputTypes, InputVariants, InputWidth } from "./constants";
import { SemanticColor } from "../../lib/colors";
type Props = {
    placeholder?: string;
    color?: SemanticColor;
    size?: InputSizes;
    variant?: InputVariants;
    width?: InputWidth;
    radius?: InputRadius;
    isDisabled?: boolean;
    type?: InputTypes;
};
export declare const Input: ({ color, placeholder, size, width, radius, variant, isDisabled, type, }: Props) => React.JSX.Element;
export default Input;
