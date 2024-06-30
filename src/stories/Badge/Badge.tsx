import React from "react";
import { SemanticColor, semanticColors } from "../../lib/colors";
import {
  BadgeRadius,
  BadgePosition,
  positions,
  BadgeVariants,
  variants,
} from "./constants";
import styles from "./badge.module.css";
import classNames from "classnames";
import Avatar from "../Avatar";

type Props = {
  color: SemanticColor;
  variant: BadgeVariants;
  radius: BadgeRadius;
  position: BadgePosition;
  children: React.ReactNode;
  badgeContent: string | React.ReactNode;
  isCircular: boolean;
  bordered: boolean;
};

export const Badge = ({
  children = <Avatar radius="md" name="John" />,
  variant = variants.solid,
  color = semanticColors.danger,
  position = positions.tr,
  isCircular = false,
  badgeContent = "5",
  bordered = true,
}: Props) => {
  return (
    <div
      className={classNames(styles["badge-container"], {
        [color]: color,
      })}
    >
      {children}
      <span
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
