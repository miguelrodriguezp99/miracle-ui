import React from "react";
import { PaddingTypes } from "../constants";
interface CardBodyProps {
    children: React.ReactNode;
    padding?: PaddingTypes;
    relative?: boolean;
}
export declare const CardBody: ({ children, padding, relative, }: CardBodyProps) => React.JSX.Element;
export default CardBody;
