import React, { useContext } from "react";
import DropdownContext from "../DropdownContext";

interface DropdownTriggerProps {
  children: React.ReactNode;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
}) => {
  const { toggleMenu } = useContext(DropdownContext);
  return (
    <div
      onClick={toggleMenu}
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default DropdownTrigger;
