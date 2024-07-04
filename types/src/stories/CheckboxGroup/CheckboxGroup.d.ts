import React from "react";
import { CheckboxDirection, CheckboxGap } from "./constants";
type Props = {
    children: React.ReactNode;
    direction?: CheckboxDirection;
    gap?: CheckboxGap;
};
export declare const CheckboxGroup: ({ children, gap, direction, }: Props) => React.JSX.Element;
export default CheckboxGroup;
