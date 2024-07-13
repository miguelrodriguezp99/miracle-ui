import React from "react";
import PropTypes from "prop-types";
import { PaddingTypes } from "../constants";
interface CardHeaderProps {
    padding?: PaddingTypes;
    children?: React.ReactNode;
    absolute?: boolean;
}
export declare const CardHeader: {
    ({ children, padding, absolute }: CardHeaderProps): React.JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        padding: PropTypes.Requireable<"sm" | "md" | "lg" | "none" | "hsm" | "hmd" | "hlg" | "vsm" | "vmd" | "vlg">;
    };
};
export default CardHeader;
