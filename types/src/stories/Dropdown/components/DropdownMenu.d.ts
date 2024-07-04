import React from "react";
import { DropdownPositions } from "../constants";
interface DropdownMenuProps {
    children: React.ReactNode;
    position?: DropdownPositions;
    offset?: number;
    "aria-label"?: string;
}
declare const DropdownMenu: ({ children, position, offset, }: DropdownMenuProps) => React.JSX.Element;
export default DropdownMenu;
