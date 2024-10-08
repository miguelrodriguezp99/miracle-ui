import React from "react";
import styles from "./circularProgress.module.css";
import classNames from "classnames";
import { SemanticColor, semanticColors } from "@miracle-ui/system";
import { CircularProgressSizes, sizes } from "./constants";

type Props = {
  color: SemanticColor;
  customColor?: string;
  size?: CircularProgressSizes;
  isDisabled?: boolean;
  label?: string;
  labelColor?: string;
  labelFontSize?: string;
};

export const CircularProgress = ({
  color = semanticColors.primary,
  customColor,
  size = sizes.sm,
  isDisabled,
  label,
  labelColor,
  labelFontSize,
}: Props) => {
  const content = (
    <div className={classNames(styles.progress)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="3"
        className={classNames(styles["svg"], {
          [styles[size]]: size,
          [`${color}`]: color,
          [styles["disabled"]]: isDisabled,
        })}
      >
        <circle
          cx="16"
          cy="16"
          r={size === "sm" ? "14" : "13"}
          role="presentation"
          strokeDasharray={
            size === "sm"
              ? "87.96459430051421 87.96459430051421"
              : "81.68140899333463 81.68140899333463"
          }
          strokeDashoffset="0"
          transform="rotate(-90 16 16)"
          strokeLinecap="round"
          className={styles["circle-1"]}
        ></circle>
        <circle
          cx="16"
          cy="16"
          r="13"
          role="presentation"
          strokeDasharray={
            size === "sm"
              ? "87.96459430051421 87.96459430051421"
              : "81.68140899333463 81.68140899333463"
          }
          strokeDashoffset={
            size === "sm" ? "65.97344572538566" : "61.26105674500097"
          }
          transform="rotate(-90 16 16)"
          strokeLinecap="round"
          stroke={customColor}
          className={classNames(styles["circle-2"], {
            [styles.strokeColor]: !customColor,
          })}
        ></circle>
      </svg>
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
          fontSize: labelFontSize,
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

export default CircularProgress;
