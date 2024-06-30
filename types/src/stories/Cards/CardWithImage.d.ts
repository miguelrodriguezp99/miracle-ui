import PropTypes from "prop-types";
import React from "react";
interface CardWithImageProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imgRoute?: string;
}
export declare const CardWithImage: {
    ({ title, subtitle, description, imgRoute, }: CardWithImageProps): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<[string, "danger" | "default" | "primary" | "secondary" | "success" | "warning"]>;
        isClickable: PropTypes.Requireable<boolean>;
        isDraggable: PropTypes.Requireable<boolean>;
    };
};
export default CardWithImage;
