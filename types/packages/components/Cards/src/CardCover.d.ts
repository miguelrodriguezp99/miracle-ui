import React from "react";
interface CardCoverProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imgRoute?: string;
}
export declare const CardCover: ({ title, subtitle, imgRoute, }: CardCoverProps) => React.JSX.Element;
export default CardCover;
