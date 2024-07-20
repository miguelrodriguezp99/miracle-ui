import React from "react";
import { PaddingTypes } from "../constants";
interface CardHeaderProps {
    padding?: PaddingTypes;
    children?: React.ReactNode;
    absolute?: boolean;
}
export declare const CardHeader: ({ children, padding, absolute, }: CardHeaderProps) => React.JSX.Element;
export default CardHeader;
