import React, { useContext } from "react";
import DropdownContext from "../DropdownContext";
import styles from "./../dropdown.module.css";

interface DropdownMenuProps {
  children: React.ReactNode;
  "aria-label"?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  return (
    <div className={`${styles.listWrapper} ${isOpen ? styles.menuOpen : ""}`}>
      <ul className={`${styles.list}`}>{children}</ul>
    </div>
  );
};

export default DropdownMenu;
