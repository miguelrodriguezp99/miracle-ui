import React, { useEffect } from "react";
import {
  InputRadius,
  InputSizes,
  InputTypes,
  InputVariants,
  InputWidth,
} from "./constants";
import styles from "./input.module.css";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import classNames from "classnames";

type Props = {
  placeholder?: string;
  text?: string;
  color?: SemanticColor;
  backgroundColor?: string;
  textColor?: string;
  labelColor?: string;
  placeholderColor?: string;
  underlineColor?: string;
  size?: InputSizes;
  variant?: InputVariants;
  width?: InputWidth;
  radius?: InputRadius;
  isDisabled?: boolean;
  type?: InputTypes;
  value?: string;
  readOnly?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
};

export const Input = ({
  color = semanticColors.default,
  backgroundColor,
  textColor,
  labelColor,
  placeholderColor,
  underlineColor,
  placeholder = "",
  size = "medium",
  width = "medium",
  radius = "medium",
  variant = "flat",
  isDisabled = false,
  type = "text",
  value = "",
  text = "Email",
  readOnly = false,
  name,
  onChange,
  onValueChange,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  useEffect(() => {
    if (placeholderColor) {
      document.documentElement.style.setProperty(
        "--custom-placeholder-color",
        placeholderColor
      );
    }
  }, [placeholderColor]);

  return (
    <div
      className={classNames(styles["input-container"], "input", color, {
        [styles[`width-${width}`]]: width,
        [styles[variant]]: variant,
        [styles["is-disabled"]]: isDisabled,
        [styles["is-read-only"]]: readOnly,
      })}
    >
      <input
        id="email"
        type={type}
        name={name}
        style={{
          backgroundColor,
          color: textColor,
        }}
        className={classNames(styles.input, styles[size], {
          [styles[`border-radius-${radius}`]]: radius,
          [styles["has-placeholder"]]: placeholder != "",
        })}
        placeholder={placeholder}
        disabled={isDisabled}
        defaultValue={value}
        onChange={handleChange}
      />
      <label
        style={{
          color: labelColor ? labelColor : textColor,
        }}
        htmlFor={name}
        className={classNames(styles.label, styles[`label-${size}`])}
      >
        {text}
      </label>
      {variant === "underlined" && (
        <div
          style={{
            backgroundColor: underlineColor,
          }}
          className={styles.underline}
        ></div>
      )}
    </div>
  );
};

export default Input;
