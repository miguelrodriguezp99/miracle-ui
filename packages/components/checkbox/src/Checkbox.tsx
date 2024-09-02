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
  textSize?: string;
  blackText?: boolean;
  size?: CheckboxSize;
  text?: string;
  radius?: CheckboxRadius;
  isDisabled?: boolean;
  isChecked?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
  customChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  externalState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; // Estado externo opcional
};

export const Checkbox = ({
  color = semanticColorsCheckbox.none,
  customColor,
  textColor,
  textSize,
  blackText,
  radius = "sm",
  text = "Checkbox",
  size = "md",
  isDisabled = false,
  isChecked = false,
  name,
  onChange,
  onValueChange,
  customChange,
  externalState,
}: Props) => {
  const [internalChecked, setInternalChecked] = useState(isChecked);
  const [checked, setChecked] = externalState || [
    internalChecked,
    setInternalChecked,
  ];

  const checkboxStyles = {
    color:
      customColor && textColor ? customColor : textColor ? color : undefined,
    fontSize: textSize,
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
    if (customChange) {
      customChange(event);
      return;
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
        checked={checked}
        onChange={handleChange}
        disabled={isDisabled} // Asegúrate de que el checkbox respete la prop isDisabled
      />
      <span
        style={checkStyles}
        className={classNames(styles["input-check"], {
          [styles[color]]: color,
          [styles[size]]: size,
          [styles[`radius-${radius}`]]: radius,
        })}
      ></span>
      {text}
    </label>
  );
};

export default Checkbox;
