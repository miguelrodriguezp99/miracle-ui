import PropTypes from "prop-types";
import React from "react";
interface CardWithBlurredFooterProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imgRoute?: string;
}
export declare const CardWithBlurredFooter: {
    ({ imgRoute, }: CardWithBlurredFooterProps): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<[string, "default" | "primary" | "secondary" | "success" | "warning" | "danger"]>;
        isClickable: PropTypes.Requireable<boolean>;
        isDraggable: PropTypes.Requireable<boolean>;
    };
};
export default CardWithBlurredFooter;
