import React from "react";
import styles from "./../dropdown.module.css";
import "./../../styles/global.css";

import { DropdownVariants, variants } from "../constants";
import { SemanticColor, semanticColors } from "../../../lib/colors";
import classNames from "classnames";

interface DropdownItemProps {
  children: React.ReactNode;
  color?: SemanticColor;
  variant?: DropdownVariants;
  disabledRipple?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const DropdownItem = ({
  children,
  color = semanticColors.default,
  variant = variants.solid,
  startContent,
  endContent,
}: DropdownItemProps) => {
  return (
    <li
      className={classNames(
        styles.listItem,
        "listItem",
        "has-hover",
        color,
        variant
      )}
    >
      {startContent && (
        <div className={classNames(color, "icon", styles.startContent)}>
          {startContent}
        </div>
      )}

      <span className={styles.span}>{children}</span>
      <div className={classNames(color, "icon", styles.startContent)}>
        {endContent}
      </div>
    </li>
  );
};

export default DropdownItem;
