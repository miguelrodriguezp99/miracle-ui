import React from "react";
import {
  SemanticColorCheckbox,
  semanticColorsCheckbox,
} from "../../lib/colors";
import styles from "./checkbox.module.css";
import { CheckboxRadius, CheckboxSize } from "./constants";
import classNames from "classnames";

type Props = {
  color: SemanticColorCheckbox;
  textColor?: boolean;
  size: CheckboxSize;
  text: string;
  radius: CheckboxRadius;
  isDisabled?: boolean;
  isChecked?: boolean;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
};

export const Checkbox = ({
  color = semanticColorsCheckbox.none,
  textColor,
  radius = "md",
  text = "Checkbox",
  size = "lg",
  isDisabled = false,
  isChecked = false,
  name,
  value,
  onChange,
  onValueChange,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    if (onValueChange) {
      onValueChange(event.target.checked);
    }
  };
  return (
    <label
      className={classNames(styles["checkbox-label"], {
        [styles[`font-${size}`]]: size,
        [color]: color,
        [styles[`text-color`]]: textColor,
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
