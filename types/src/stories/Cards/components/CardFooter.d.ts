import React from "react";
import PropTypes from "prop-types";
import { PaddingTypes, MarginTypes } from "../constants";
type Props = {
    children: React.ReactNode;
    padding?: PaddingTypes;
    margin?: MarginTypes;
    absolute?: boolean;
    isBlurred?: boolean;
};
export declare const CardFooter: {
    ({ children, padding, margin, absolute, isBlurred }: Props): React.JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        padding: PropTypes.Requireable<"sm" | "md" | "lg" | "none" | "hsm" | "hmd" | "hlg" | "vsm" | "vmd" | "vlg">;
    };
};
export default CardFooter;
