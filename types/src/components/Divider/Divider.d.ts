import React from "react";
import { DividerDirection } from "./constants";
import { SemanticColor } from "../../lib/colors";
type Props = {
    direction?: DividerDirection;
    color?: SemanticColor;
    customColor?: string;
};
export declare const Divider: ({ color, direction, customColor, }: Props) => React.JSX.Element;
export default Divider;
