import React from "react";
import styles from "./spinner.module.css";
import classNames from "classnames";
import { SemanticColor, semanticColors } from "@miracle-ui/system";
import { SpinnerSizes, sizes } from "./constants";

type Props = {
  color: SemanticColor;
  customColor?: string;
  size?: SpinnerSizes;
  isDisabled?: boolean;
  label?: string;
  labelColor?: string;
};

export const Spinner = ({
  color = semanticColors.primary,
  customColor,
  size = sizes.sm,
  label,
  labelColor,
}: Props) => {
  const content = (
    <div
      className={classNames(styles.spinner, {
        [`${color}`]: color,
        [styles[size]]: size,
      })}
    >
      <i
        style={{
          borderBottomColor: customColor,
        }}
        className={styles.i1}
      ></i>
      <i
        style={{
          borderBottomColor: customColor,
        }}
        className={styles.i2}
      ></i>
    </div>
  );
  return label ? (
    <div
      className={classNames(styles["wrapper"], {
        [`${color}`]: color,
      })}
    >
      {content}
      <span
        style={{
          color: labelColor,
        }}
        className={styles["label"]}
      >
        {label}
      </span>
    </div>
  ) : (
    content
  );
};

export default Spinner;
