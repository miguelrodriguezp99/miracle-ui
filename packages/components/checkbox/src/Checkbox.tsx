import React, { useState } from "react";
import {
  SemanticColorCheckbox,
  semanticColorsCheckbox,
} from "@miracle-ui/system";
import styles from "./checkbox.module.css";
import { CheckboxRadius, CheckboxSize } from "./constants";
import classNames from "classnames";

type Props = {
  color?: SemanticColorCheckbox;
  customColor?: string;
  textColor?: boolean;
  blackText?: boolean;
  size?: CheckboxSize;
  text?: string;
  radius?: CheckboxRadius;
  isDisabled?: boolean;
  isChecked?: boolean;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
};

export const Checkbox = ({
  color = semanticColorsCheckbox.none,
  customColor,
  textColor,
  blackText,
  radius = "sm",
  text = "Checkbox",
  size = "md",
  isDisabled = false,
  isChecked = false,
  name,
  value,
  onChange,
  onValueChange,
}: Props) => {
  const [checked, setChecked] = useState(isChecked);

  const checkboxStyles = {
    color:
      customColor && textColor ? customColor : textColor ? color : undefined,
  };

  const checkStyles = {
    backgroundColor: customColor && checked ? customColor : "",
    borderColor: customColor && checked ? customColor : "",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    if (onValueChange) {
      onValueChange(event.target.checked);
    }
    setChecked(event.target.checked);
  };

  return (
    <label
      style={checkboxStyles}
      className={classNames(styles["checkbox-label"], {
        [styles[`font-${size}`]]: size,
        [color]: color,
        [styles[`text-color`]]: textColor && !blackText,
        [styles[`text-black`]]: blackText,
        [styles["disabled"]]: isDisabled,
      })}
    >
      <input
        className={styles["checkbox-input"]}
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <span
        style={checkStyles}
        className={classNames(styles["input-check"], {
          [styles[size]]: size,
          [styles[`radius-${radius}`]]: radius,
        })}
      ></span>
      {text}
    </label>
  );
};

export default Checkbox;
