import React, { useEffect, useRef } from "react";
import styles from "./button.module.css";
import { useRippleEffect } from "@mirakle-ui/ripple20";
import { semanticColors, SemanticColor } from "@mirakle-ui/system20";
import classNames from "classnames";
import {
  ButtonVariants,
  ButtonSizes,
  ButtonRadius,
  ButtonTypes,
  types,
  variants,
  sizes,
} from "./constants";

type ButtonProps = {
  color?: SemanticColor;
  customColor?: string;
  customRippleColor?: string;
  customHoverColor?: string;
  customWidth?: string;
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
  type?: ButtonTypes;
  onClick?: () => void;
};

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
  customWidth,
  variant = variants.solid,
  startContent,
  endContent,
  isIconOnly,
  blackText,
  whiteText,
  type = types.button,
  onClick,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
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
    ...(customWidth && { width: customWidth }),
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
    <button
      ref={buttonRef}
      type={type}
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
    </button>
  );
};

export default Button;
