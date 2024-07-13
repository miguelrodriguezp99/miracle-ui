import React from "react";
import "./../../styles/global.css";
import { DropdownVariants } from "../constants";
import { SemanticColor } from "../../../lib/colors";
interface DropdownItemProps {
    children: React.ReactNode;
    color?: SemanticColor;
    variant?: DropdownVariants;
    disabledRipple?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    onClick?: () => void;
}
declare const DropdownItem: ({ children, color, variant, startContent, endContent, onClick, }: DropdownItemProps) => React.JSX.Element;
export default DropdownItem;
