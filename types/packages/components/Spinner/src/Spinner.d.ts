import React from "react";
import { SemanticColor } from "@mirakle-ui/system20";
import { SpinnerSizes } from "./constants";
type Props = {
    color: SemanticColor;
    customColor?: string;
    size?: SpinnerSizes;
    isDisabled?: boolean;
    label?: string;
    labelColor?: string;
};
export declare const Spinner: ({ color, customColor, size, label, labelColor, }: Props) => React.JSX.Element;
export default Spinner;
