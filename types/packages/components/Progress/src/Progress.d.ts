import React from "react";
import { SemanticColor } from "@mirakle-ui/system20";
import { ProgressRadius, ProgressSizes } from "./constants";
interface ProgressProps {
    color?: SemanticColor;
    customColor?: string;
    size?: ProgressSizes;
    radius?: ProgressRadius;
    value?: number;
    maxValue?: number;
    label?: string;
    ariaLabel?: string;
    valueLabel?: string;
    showPercentageLabel?: boolean;
    isIndeterminate?: boolean;
}
export declare const Progress: ({ color, customColor, size, radius, label, valueLabel, value, maxValue, ariaLabel, showPercentageLabel, isIndeterminate, }: ProgressProps) => React.JSX.Element;
export default Progress;
