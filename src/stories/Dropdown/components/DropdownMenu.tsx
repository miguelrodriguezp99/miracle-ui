import React, { useContext } from "react";
import classNames from "classnames";
import DropdownContext from "../DropdownContext";
import styles from "./../dropdown.module.css";
import { DropdownPositions, positions } from "../constants";

interface DropdownMenuProps {
  children: React.ReactNode;
  position?: DropdownPositions;
  offset?: number;
  width?: number;
  backgroundColor?: string;
  "aria-label"?: string;
}

const useDropdownStyle = ({
  position,
  offset,
  width,
  backgroundColor,
}: {
  position: DropdownPositions;
  offset: number;
  width: number;
  backgroundColor?: string;
}) => {
  const style: React.CSSProperties = { width: `${width}px`, backgroundColor };

  const marginOffset = `${offset}px`;

  switch (position) {
    case positions.bottom:
    case positions["bottom-start"]:
    case positions["bottom-end"]:
      style.marginTop = marginOffset;
      break;
    case positions.top:
    case positions["top-start"]:
    case positions["top-end"]:
      style.marginBottom = marginOffset;
      break;
    case positions.right:
    case positions["right-start"]:
    case positions["right-end"]:
      style.marginLeft = marginOffset;
      break;
    case positions.left:
    case positions["left-start"]:
    case positions["left-end"]:
      style.marginRight = marginOffset;
      break;
  }

  return style;
};

const DropdownMenu = ({
  children,
  position = positions.bottom,
  offset = 0,
  width = 200,
  backgroundColor,
}: DropdownMenuProps) => {
  const { isOpen } = useContext(DropdownContext);
  const style = useDropdownStyle({ position, offset, width, backgroundColor });

  return (
    <div
      style={style}
      className={classNames(styles.listWrapper, styles[position], {
        [styles.menuOpen]: isOpen,
        [styles["top-transform"]]:
          position === positions.top ||
          position === positions["top-start"] ||
          position === positions["top-end"],
        [styles["left-transform"]]:
          position === positions.left ||
          position === positions["left-start"] ||
          position === positions["left-end"],
        [styles["bottom-transform"]]:
          position === positions.bottom ||
          position === positions["bottom-start"] ||
          position === positions["bottom-end"],
        [styles["right-transform"]]:
          position === positions.right ||
          position === positions["right-start"] ||
          position === positions["right-end"],
      })}
    >
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default DropdownMenu;
