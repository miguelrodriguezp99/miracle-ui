import React from "react";
interface CardProductProps {
    title?: string;
    price?: string;
    imgRoute?: string;
    imgWidth?: string;
    imgHeight?: string;
}
export declare const CardProduct: ({ title, price, imgWidth, imgHeight, imgRoute, }: CardProductProps) => React.JSX.Element;
export default CardProduct;
