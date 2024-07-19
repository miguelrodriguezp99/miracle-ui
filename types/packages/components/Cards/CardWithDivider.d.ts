import React from "react";
interface CardWithDividerProps {
    children?: React.ReactNode;
    imageRoute?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    linkText?: string;
    imgRoute?: string;
}
export declare const CardWithDivider: ({ children, title, subtitle, linkText, imgRoute, }: CardWithDividerProps) => React.JSX.Element;
export default CardWithDivider;
