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
}

const DropdownItem = ({
  children,
  color = semanticColors.default,
  variant = variants.solid,
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
      <span>{children}</span>
    </li>
  );
};

export default DropdownItem;
