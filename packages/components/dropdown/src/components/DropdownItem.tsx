import React, { useContext } from "react";
import styles from "./../dropdown.module.css";
import DropdownContext from "../DropdownContext";
import { DropdownVariants, variants } from "../constants";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import classNames from "classnames";

interface DropdownItemProps {
  children: React.ReactNode;
  color?: SemanticColor;
  variant?: DropdownVariants;
  textColor?: string;
  fontSize?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick?: () => void;
}

export const DropdownItem = ({
  children,
  color = semanticColors.default,
  variant = variants.solid,
  textColor,
  startContent,
  endContent,
  fontSize,
  onClick,
}: DropdownItemProps) => {
  const { toggleMenu } = useContext(DropdownContext);

  const handleClick = () => {
    toggleMenu();
    onClick && onClick();
  };

  return (
    <li
      onClick={() => handleClick()}
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

      <span
        style={{
          color: textColor,
          fontSize,
        }}
        className={styles.span}
      >
        {children}
      </span>
      <div className={classNames(color, "icon", styles.startContent)}>
        {endContent}
      </div>
    </li>
  );
};

export default DropdownItem;
