import React from "react";
interface DropdownItemProps {
    children: React.ReactNode;
    key: string;
    className?: string;
    color?: string;
}
declare const DropdownItem: React.FC<DropdownItemProps>;
export default DropdownItem;
