import React, { useRef } from "react";
import "./../styles/global.css";
import styles from "./button.module.css";
import useRippleEffect from "../../hooks/useRippleEffect";
import { SemanticColor, semanticColors } from "../../lib/colors";
import classNames from "classnames";
import {
  ButtonVariants,
  ButtonSizes,
  ButtonRadius,
  variants,
  sizes,
} from "./constants";

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

export const Button = ({
  label = "Button",
  disabledRipple = false,
  size = sizes.medium,
  radius = "full",
  isClickable = true,
  isDisabled = false,
  color = semanticColors.primary,
  variant = variants.solid,
  startContent,
  endContent,
  isIconOnly,
  onClick,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  useRippleEffect({ disabledRipple, color, variant, ref: buttonRef });

  return (
    <a
      ref={buttonRef}
      className={classNames(styles.button, {
        [styles[`${color}`]]: color,
        [styles[`${size}`]]: size,
        [styles["is-clickable"]]: isClickable,
        [styles["button-active"]]: isClickable,
        [styles["is-disabled"]]: isDisabled,
        [styles[`radius-${radius}`]]: radius,
        [styles[`${variant}`]]: variant,
        [styles["is-icon-only"]]: isIconOnly,
      })}
      onClick={onClick}
    >
      {startContent}
      {label}
      {endContent}
    </a>
  );
};

export default Button;
