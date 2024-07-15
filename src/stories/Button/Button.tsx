import React, { useEffect, useRef } from "react";
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

export const Button = ({
  children = "Button",
  disabledRipple = false,
  size = sizes.md,
  radius = "full",
  isClickable = true,
  isDisabled = false,
  color = semanticColors.primary,
  customColor,
  customRippleColor,
  customHoverColor,
  variant = variants.solid,
  startContent,
  endContent,
  isIconOnly,
  blackText,
  whiteText,
  onClick,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  useRippleEffect({
    disabledRipple,
    color,
    variant,
    ref: buttonRef,
    blackText,
    customRippleColor,
  });

  const buttonStyles = {
    ...(customColor && { backgroundColor: customColor }),
  };

  useEffect(() => {
    if (customHoverColor) {
      document.documentElement.style.setProperty(
        "--custom-hover-color",
        customHoverColor
      );
    }
  }, [customHoverColor]);

  return (
    <a
      ref={buttonRef}
      className={classNames(
        "button",
        "has-hover",
        color,
        variant,
        styles.button,
        styles[size],
        styles[`radius-${radius}`],
        {
          [styles["is-clickable"]]: isClickable,
          [styles["black-text"]]: blackText,
          [styles["white-text"]]: whiteText,
          [styles["is-disabled"]]: isDisabled,
          [styles["is-icon-only"]]: isIconOnly,
          [styles["custom-hover-filter"]]: customColor && !customHoverColor,
          [styles["custom-hover-color"]]: customHoverColor,
        }
      )}
      style={buttonStyles}
      onClick={isClickable && !isDisabled ? onClick : undefined}
    >
      {startContent}
      {!isIconOnly && children}
      {isIconOnly && children}
      {endContent}
    </a>
  );
};

export default Button;
