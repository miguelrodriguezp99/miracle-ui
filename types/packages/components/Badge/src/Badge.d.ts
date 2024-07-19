import React from "react";
import { SemanticColor } from "@mirakle-ui/system20";
import { BadgeRadius, BadgePosition, BadgeVariants } from "./constants";
type Props = {
    color?: SemanticColor;
    variant?: BadgeVariants;
    radius?: BadgeRadius;
    position?: BadgePosition;
    children: React.ReactNode;
    badgeContent?: string | React.ReactNode;
    isCircular?: boolean;
    bordered?: boolean;
    customColor?: string;
};
export declare const Badge: ({ children, variant, color, customColor, position, isCircular, badgeContent, bordered, }: Props) => React.JSX.Element;
export default Badge;
