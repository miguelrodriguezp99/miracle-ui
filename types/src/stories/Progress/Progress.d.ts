import React from "react";
import "./../styles/global.css";
import { SemanticColor } from "../../lib/colors";
import { ProgressRadius, ProgressSizes } from "./constants";
interface ProgressProps {
    color?: SemanticColor;
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
export declare const Progress: ({ color, size, radius, label, valueLabel, value, maxValue, ariaLabel, showPercentageLabel, isIndeterminate, }: ProgressProps) => React.JSX.Element;
export default Progress;
