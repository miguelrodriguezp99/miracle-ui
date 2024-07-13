import React from "react";
import PropTypes from "prop-types";
import { PaddingTypes } from "../constants";
interface CardBodyProps {
    children: React.ReactNode;
    padding?: PaddingTypes;
    relative?: boolean;
}
export declare const CardBody: {
    ({ children, padding, relative }: CardBodyProps): React.JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        package: PropTypes.Requireable<"sm" | "md" | "lg" | "none" | "hsm" | "hmd" | "hlg" | "vsm" | "vmd" | "vlg">;
    };
};
export default CardBody;
