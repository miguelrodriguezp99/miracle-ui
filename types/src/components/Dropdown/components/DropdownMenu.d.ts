import React from "react";
import { DropdownPositions } from "../constants";
interface DropdownMenuProps {
    children: React.ReactNode;
    position?: DropdownPositions;
    offset?: number;
    width?: number;
    backgroundColor?: string;
    "aria-label"?: string;
}
declare const DropdownMenu: ({ children, position, offset, width, backgroundColor, }: DropdownMenuProps) => React.JSX.Element;
export default DropdownMenu;
