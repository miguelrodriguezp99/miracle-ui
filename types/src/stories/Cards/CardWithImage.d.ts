import React from "react";
interface CardWithImageProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imgRoute?: string;
    customTextColor?: string;
}
export declare const CardWithImage: ({ title, subtitle, description, imgRoute, customTextColor, }: CardWithImageProps) => React.JSX.Element;
export default CardWithImage;
