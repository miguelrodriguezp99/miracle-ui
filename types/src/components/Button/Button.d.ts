import React from "react";
import "./../styles/global.css";
import { SemanticColor } from "../../lib/colors";
import { ButtonVariants, ButtonSizes, ButtonRadius } from "./constants";
interface ButtonProps {
    color?: SemanticColor;
    customColor?: string;
    customRippleColor?: string;
    customHoverColor?: string;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    radius?: ButtonRadius;
    isClickable?: boolean;
    isDisabled?: boolean;
    disabledRipple?: boolean;
    label?: string;
    startContent?: React.JSX.Element;
    endContent?: React.ReactNode;
    isIconOnly?: boolean;
    children?: React.ReactNode;
    blackText?: boolean;
    whiteText?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ children, disabledRipple, size, radius, isClickable, isDisabled, color, customColor, customRippleColor, customHoverColor, variant, startContent, endContent, isIconOnly, blackText, whiteText, onClick, }: ButtonProps) => React.JSX.Element;
export default Button;
