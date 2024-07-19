import React from "react";
import styles from "./button.module.css";

interface ButtonGroupProps {
  children: React.ReactNode;
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className={styles.buttonGroup}>{children}</div>;
};

export default ButtonGroup;
