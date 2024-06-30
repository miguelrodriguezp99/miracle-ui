import React from "react";
import styles from "./../dropdown.module.css";

interface DropdownItemProps {
  children: React.ReactNode;
  key: string;
  className?: string;
  color?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className,
  color,
}) => {
  const itemClass = `${className ? className : ""} ${color === "danger" ? styles.danger : ""}`;
  return <li className={itemClass}>{children}</li>;
};

export default DropdownItem;
