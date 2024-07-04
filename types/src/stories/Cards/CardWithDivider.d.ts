import PropTypes from "prop-types";
import React from "react";
interface CardWithDividerProps {
    children?: React.ReactNode;
    imageRoute?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    linkText?: string;
}
export declare const CardWithDivider: {
    ({ children, title, subtitle, linkText, }: CardWithDividerProps): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<[string, "default" | "primary" | "secondary" | "success" | "warning" | "danger"]>;
        isClickable: PropTypes.Requireable<boolean>;
        isDraggable: PropTypes.Requireable<boolean>;
    };
};
export default CardWithDivider;
