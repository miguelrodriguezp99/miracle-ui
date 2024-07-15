import React, { useContext } from "react";
import classNames from "classnames";
import DropdownContext from "../DropdownContext";
import styles from "./../dropdown.module.css";
import { DropdownPositions, positions } from "../constants";

interface DropdownMenuProps {
  children: React.ReactNode;
  position?: DropdownPositions;
  offset?: number;
  "aria-label"?: string;
}

const DropdownMenu = ({
  children,
  position = positions.bottom,
  offset = 0,
}: DropdownMenuProps) => {
  const { isOpen } = useContext(DropdownContext);

  return (
    <div
      style={{
        marginTop: position === positions.bottom ? `${offset}px` : undefined,
        marginBottom: position === positions.top ? `${offset}px` : undefined,
        marginLeft: position === positions.right ? `${offset}px` : undefined,
        marginRight: position === positions.left ? `${offset}px` : undefined,
      }}
      className={classNames(styles.listWrapper, styles[position], {
        [styles.menuOpen]: isOpen,
      })}
    >
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default DropdownMenu;
