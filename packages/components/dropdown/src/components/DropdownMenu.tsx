import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import DropdownContext from "../DropdownContext";
import styles from "./../dropdown.module.css";
import { DropdownPositions, positions } from "../constants";
import {
  getAlignmentStyles,
  getOffsetStyles,
  getTransformStyles,
} from "../utils/stylesFunctions";

interface DropdownMenuProps {
  children: React.ReactNode;
  position?: DropdownPositions;
  offset?: number;
  width?: number;
  backgroundColor?: string;
  "aria-label"?: string;
}

export const DropdownMenu = ({
  children,
  position = positions.bottom,
  offset = 10,
  width = 200,
  backgroundColor,
}: DropdownMenuProps) => {
  const { isOpen } = useContext(DropdownContext);
  const listWrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { offsetWidth = 0, offsetHeight = 0 } = listWrapperRef.current || {};
    setDimensions({ width: offsetWidth, height: offsetHeight });
  }, []);

  const transformStyles = getTransformStyles(isOpen, position, dimensions);
  const offsetStyles = getOffsetStyles(position, offset);
  const alignmentStyles = getAlignmentStyles(position, dimensions);

  return (
    <div
      id="listWrapper"
      ref={listWrapperRef}
      style={{
        width: `${width}px`,
        backgroundColor: backgroundColor,
        ...offsetStyles,
        ...transformStyles,
        ...alignmentStyles,
      }}
      className={classNames(styles.listWrapper, styles[position], {
        [styles.menuOpen]: isOpen,
        [styles["vertical-transform"]]:
          position === positions.top || position === positions.bottom,
        [styles["horizontal-transform"]]:
          position === positions.left || position === positions.right,
      })}
    >
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default DropdownMenu;
