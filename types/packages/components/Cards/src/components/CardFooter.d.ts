import React from "react";
import { PaddingTypes, MarginTypes } from "../constants";
type Props = {
    children: React.ReactNode;
    padding?: PaddingTypes;
    margin?: MarginTypes;
    absolute?: boolean;
    isBlurred?: boolean;
};
export declare const CardFooter: ({ children, padding, margin, absolute, isBlurred, }: Props) => React.JSX.Element;
export default CardFooter;
