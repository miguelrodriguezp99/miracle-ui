import React from "react";
import { DropdownVariants } from "../constants";
import { SemanticColor } from "@mirakle-ui/system20";
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
export declare const DropdownItem: ({ children, color, variant, textColor, startContent, endContent, fontSize, onClick, }: DropdownItemProps) => React.JSX.Element;
export default DropdownItem;
