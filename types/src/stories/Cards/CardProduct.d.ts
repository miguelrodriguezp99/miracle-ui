import PropTypes from "prop-types";
import React from "react";
interface CardProductProps {
    title?: string;
    price?: string;
    imgRoute?: string;
    imgWidth?: string;
    imgHeight?: string;
}
export declare const CardProduct: {
    ({ title, price, imgWidth, imgHeight, imgRoute }: CardProductProps): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<[string, "default" | "primary" | "secondary" | "success" | "warning" | "danger"]>;
        isClickable: PropTypes.Requireable<boolean>;
        isDraggable: PropTypes.Requireable<boolean>;
    };
};
export default CardProduct;
