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
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValueChange?: (value: string) => void;
};
export declare const Input: ({ color, placeholder, size, width, radius, variant, isDisabled, type, value, onChange, onValueChange, }: Props) => React.JSX.Element;
export default Input;
