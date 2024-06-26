import React from 'react';
import PropTypes from "prop-types";
import "./../styles/global.css";
import { SemanticColor } from '../../lib/colors';
import { ButtonVariants, ButtonSizes, ButtonRadius } from './constants';
interface ButtonProps {
    color?: SemanticColor;
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
    onClick?: () => void;
}
export declare const Button: {
    ({ label, disabledRipple, size, radius, isClickable, isDisabled, color, variant, startContent, endContent, isIconOnly, onClick, }: ButtonProps): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<[string, "default" | "primary" | "secondary" | "success" | "warning" | "danger"]>;
        variant: PropTypes.Requireable<[string, "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"]>;
        size: PropTypes.Requireable<[string, "small" | "medium" | "large"]>;
        radius: PropTypes.Requireable<[string, "small" | "medium" | "large" | "none" | "full"]>;
        isClickable: PropTypes.Requireable<boolean>;
        isDisabled: PropTypes.Requireable<boolean>;
        disabledRipple: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        startContent: PropTypes.Requireable<PropTypes.ReactElementLike>;
        endContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        isIconOnly: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default Button;
