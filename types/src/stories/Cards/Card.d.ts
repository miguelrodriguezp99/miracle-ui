import PropTypes from "prop-types";
import React from "react";
import { CardWidthTypes, PaddingTypes } from "./constants";
import { SemanticColor } from "../../lib/colors";
interface CardProps {
    children?: React.ReactNode;
    color?: SemanticColor;
    cardWidth?: CardWidthTypes;
    padding?: PaddingTypes;
    isClickable?: boolean;
    isDraggable?: boolean;
    disabledRipple?: boolean;
}
export declare const Card: {
    ({ children, color, cardWidth, padding, isClickable, isDraggable, disabledRipple, }: CardProps): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<[string, "danger" | "default" | "primary" | "secondary" | "success" | "warning"]>;
        cardWidth: PropTypes.Requireable<"sm" | "md" | "lg" | "full" | "2xs" | "xs" | "xl" | "2xl" | "3xl">;
        padding: PropTypes.Requireable<"none" | "sm" | "md" | "lg" | "hsm" | "hmd" | "hlg" | "vsm" | "vmd" | "vlg">;
        isClickable: PropTypes.Requireable<boolean>;
        isDraggable: PropTypes.Requireable<boolean>;
    };
};
export default Card;
