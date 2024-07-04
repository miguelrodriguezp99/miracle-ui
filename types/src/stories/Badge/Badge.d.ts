import React from "react";
import { SemanticColor } from "../../lib/colors";
import { BadgeRadius, BadgePosition, BadgeVariants } from "./constants";
type Props = {
    color: SemanticColor;
    variant: BadgeVariants;
    radius: BadgeRadius;
    position: BadgePosition;
    children: React.ReactNode;
    badgeContent: string | React.ReactNode;
    isCircular: boolean;
    bordered: boolean;
};
export declare const Badge: ({ children, variant, color, position, isCircular, badgeContent, bordered, }: Props) => React.JSX.Element;
export default Badge;
