import React from "react";
import "./../../styles/global.css";
import { DropdownVariants } from "../constants";
import { SemanticColor } from "../../../lib/colors";
interface DropdownItemProps {
    children: React.ReactNode;
    color?: SemanticColor;
    variant?: DropdownVariants;
    disabledRipple?: boolean;
}
declare const DropdownItem: ({ children, color, variant, }: DropdownItemProps) => React.JSX.Element;
export default DropdownItem;
