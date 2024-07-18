import React from "react";
import { SemanticColor } from "../../lib/colors";
import { CircularProgressSizes } from "./constants";
type Props = {
    color: SemanticColor;
    customColor?: string;
    size?: CircularProgressSizes;
    isDisabled?: boolean;
    label?: string;
};
export declare const CircularProgress: ({ color, customColor, size, isDisabled, label, }: Props) => React.JSX.Element;
export default CircularProgress;
