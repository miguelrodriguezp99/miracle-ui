import React from "react";
import { SemanticColor } from "../../lib/colors";
import { CircularProgressSizes } from "./constants";
type Props = {
    color: SemanticColor;
    size?: CircularProgressSizes;
    isDisabled?: boolean;
    label?: string;
};
export declare const CircularProgress: ({ color, size, isDisabled, label, }: Props) => React.JSX.Element;
export default CircularProgress;
