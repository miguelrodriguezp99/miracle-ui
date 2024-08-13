import React from "react";
import styles from "./chip.module.css";
import classNames from "classnames";
import {
  ChipRadius,
  ChipSizes,
  ChipVariants,
  sizes,
  variants,
} from "./constants";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";

type ChipProps = {
  color?: SemanticColor;
  variant?: ChipVariants;
  children: React.ReactNode;
  size?: ChipSizes;
  radius?: ChipRadius;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  avatar?: React.ReactNode;
  customWidth?: string;
  customHeight?: string;
  customFontSize?: string;
  onClose?: () => void;
};

export const Chip = ({
  children = "Chip",
  size = sizes.md,
  color = semanticColors.default,
  variant = variants.solid,
  radius = "full",
  startContent,
  endContent,
  avatar,
  customWidth,
  customHeight,
  customFontSize,
  onClose,
}: ChipProps) => {
  return (
    <>
      <div
        style={{
          height: customHeight,
          width: customWidth,
        }}
        className={classNames(
          styles.chip,
          styles[size],
          styles[variant],
          styles[color],
          styles[`radius-${radius}`],
          color,
          variant
        )}
      >
        {startContent}
        {avatar && <div className={styles.avatar}>{avatar}</div>}
        <span
          style={{
            fontSize: customFontSize,
          }}
          className={classNames(styles.chipContent, styles[size])}
        >
          {children}
        </span>
        {onClose && (
          <span
            className={styles.onClose}
            role="button"
            tabIndex={0}
            onClick={() => onClose()}
          >
            <svg
              className={styles.closeIcon}
              aria-hidden="true"
              focusable="false"
              height="1em"
              role="presentation"
              viewBox="0 0 24 24"
              width="1em"
            >
              <path
                d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        )}
        {endContent}
      </div>
    </>
  );
};

export default Chip;
