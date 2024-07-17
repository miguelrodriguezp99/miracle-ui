import React, { useState } from "react";
import DropdownContext from "./DropdownContext";
import styles from "./dropdown.module.css";

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggleMenu }}>
      <div className={styles.dropdown}>{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
