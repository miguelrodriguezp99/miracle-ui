import React, { useState } from "react";
import styles from "./switch.module.css";
import classNames from "classnames";
import { SemanticColor, semanticColors } from "@miracle-ui/system";
import { SwitchSizes, sizes } from "./constants";

type Props = {
  width?: number;
  color?: SemanticColor;
  customBackgroundColor?: string;
  customCheckedColor?: string;
  customThumbColor?: string;
  isDisabled?: boolean;
  defaultSelected?: boolean;
  name?: string;
  value?: boolean;
  size?: SwitchSizes;
  setValue?: (value: boolean) => void;
  thumbIcon?: (props: {
    isChecked: boolean;
    className?: string;
  }) => React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  id?: string | number;
  children?: React.ReactNode;
  labelFontSize?: string;
  labelColor?: string;
};

export const Switch = ({
  width,
  color = semanticColors.primary,
  customBackgroundColor,
  customCheckedColor,
  customThumbColor,
  isDisabled,
  defaultSelected = false,
  name,
  value,
  size = sizes.lg,
  setValue,
  thumbIcon,
  startContent,
  endContent,
  id = "check",
  children,
  labelFontSize,
  labelColor,
}: Props) => {
  const [internalChecked, setInternalChecked] = useState(defaultSelected);

  const isChecked = value !== undefined ? value : internalChecked;
  const backgroundColor = !isChecked
    ? customBackgroundColor
    : customCheckedColor;
  const thumbColor = customThumbColor;

  const handleToggle = () => {
    if (setValue) {
      setValue(!isChecked);
    } else {
      setInternalChecked(!isChecked);
    }
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.disabled]: isDisabled,
      })}
    >
      <input
        name={name}
        type="checkbox"
        className={styles.checkbox}
        id={id.toString()}
        onChange={handleToggle}
        checked={isChecked}
      />
      <label
        style={
          {
            width: width && `${width}px`,
            height: width && `${width / 2}px`,
            backgroundColor: backgroundColor,
            "--custom-thumb-color": thumbColor,
          } as React.CSSProperties
        }
        htmlFor={id.toString()}
        className={classNames(styles.checkboxButton, color, styles[size], {
          [styles.customThumbColor]: customThumbColor,
        })}
      >
        <div
          className={classNames(styles.startContent, {
            [styles.startContentChecked]: isChecked,
          })}
        >
          {startContent}
        </div>
        <div
          className={classNames(styles.endContent, {
            [styles.endContentChecked]: isChecked,
          })}
        >
          {endContent}
        </div>
        <div className={styles.thumb}>
          {thumbIcon ? thumbIcon({ isChecked }) : null}
        </div>
      </label>
      <div
        style={{
          fontSize: labelFontSize,
          color: labelColor,
        }}
        className={styles.label}
      >
        {children}
      </div>
    </div>
  );
};

export default Switch;
