import React from "react";
import { CardWidthTypes, PaddingTypes } from "./constants";
import { SemanticColor } from "@mirakle-ui/system20";
interface CardProps {
    children?: React.ReactNode;
    color?: SemanticColor;
    customColor?: string;
    customPadding?: string;
    customRippleColor?: string;
    customTextColor?: string;
    cardWidth?: CardWidthTypes;
    padding?: PaddingTypes;
    isClickable?: boolean;
    isDraggable?: boolean;
    disabledRipple?: boolean;
}
export declare const Card: ({ children, color, customColor, customPadding, customRippleColor, customTextColor, cardWidth, padding, isClickable, isDraggable, disabledRipple, }: CardProps) => React.JSX.Element;
export default Card;
