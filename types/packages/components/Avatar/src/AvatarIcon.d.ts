import React from "react";
import { AvatarSizes } from "./constants";
import { SemanticColor } from "@mirakle-ui/system20";
export type AvatarIconProps = {
    size: AvatarSizes;
    color: SemanticColor;
};
export declare const AvatarIcon: ({ size, color }: AvatarIconProps) => React.JSX.Element;