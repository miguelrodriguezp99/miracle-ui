import React from "react";
import "./../../styles/global.css";
import { DropdownVariants } from "../constants";
import { SemanticColor } from "../../../lib/colors";
interface DropdownItemProps {
    children: React.ReactNode;
    color?: SemanticColor;
    variant?: DropdownVariants;
    textColor?: string;
    fontSize?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    onClick?: () => void;
}
declare const DropdownItem: ({ children, color, variant, textColor, startContent, endContent, fontSize, onClick, }: DropdownItemProps) => React.JSX.Element;
export default DropdownItem;
