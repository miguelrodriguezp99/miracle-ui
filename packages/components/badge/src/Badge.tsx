import React from "react";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import {
  BadgeRadius,
  BadgePosition,
  positions,
  BadgeVariants,
  variants,
} from "./constants";
import styles from "./badge.module.css";
import classNames from "classnames";

type Props = {
  color?: SemanticColor;
  variant?: BadgeVariants;
  radius?: BadgeRadius;
  position?: BadgePosition;
  children: React.ReactNode;
  badgeContent?: string | React.ReactNode;
  isCircular?: boolean;
  bordered?: boolean;
  customColor?: string;
};

export const Badge = ({
  children,
  variant = variants.solid,
  color = semanticColors.danger,
  customColor,
  position = positions["top-right"],
  isCircular = false,
  badgeContent = "5",
  bordered = true,
}: Props) => {
  const badgeStyles = {
    ...(customColor && { backgroundColor: customColor }),
  };
  return (
    <div
      className={classNames(styles["badge-container"], {
        [color]: color,
      })}
    >
      {children}
      <span
        style={badgeStyles}
        className={classNames(styles.badge, {
          [styles.square]: !isCircular,
          [styles.circular]: isCircular,
          [styles.bordered]: bordered,
          [styles[position]]: position,
          [color]: color,
          [styles[variant]]: variant,
        })}
      >
        {badgeContent}
      </span>
    </div>
  );
};

export default Badge;
