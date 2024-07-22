import React, { useContext, useEffect, useRef, useState } from "react";
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
    if (listWrapperRef.current) {
      const { offsetWidth, offsetHeight } = listWrapperRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [dimensions]);

  return (
    <div
      id="listWrapper"
      ref={listWrapperRef}
      style={{
        width: `${width}px`,
        backgroundColor: backgroundColor,
        marginBottom:
          position === positions.top ||
          position === positions["top-end"] ||
          position === positions["top-start"]
            ? `${offset}px`
            : "",
        marginRight:
          position === positions.left ||
          position === positions["left-end"] ||
          position === positions["left-start"]
            ? `${offset}px`
            : "",
        marginLeft:
          position === positions.right ||
          position === positions["right-end"] ||
          position === positions["right-start"]
            ? `${offset}px`
            : "",
        marginTop:
          position === positions.bottom ||
          position === positions["bottom-end"] ||
          position === positions["bottom-start"]
            ? `${offset}px`
            : "",

        transform:
          isOpen &&
          (position === positions["top-start"] ||
            position === positions["bottom-start"])
            ? `translateX(-${dimensions.width * 0.4}px) scale(1)`
            : isOpen &&
                (position === positions["top-end"] ||
                  position === positions["bottom-end"])
              ? `translateX(${-dimensions.width * 0.6}px) scale(1)`
              : isOpen &&
                  (position === positions["left-start"] ||
                    position === positions["right-start"])
                ? `translateY(-${dimensions.height * 0.4}px) scale(1)`
                : isOpen &&
                    (position === positions["left-end"] ||
                      position === positions["right-end"])
                  ? `translateY(${-dimensions.height * 0.6}px) scale(1)`
                  : "",

        left:
          position === positions["top-start"] ||
          position === positions["bottom-start"]
            ? dimensions.width * 0.4
            : "",

        right:
          position === positions["top-end"] ||
          position === positions["bottom-end"]
            ? -(dimensions.width * 0.6)
            : "",

        top:
          position === positions["left-start"] ||
          position === positions["right-start"]
            ? dimensions.height * 0.4
            : "",

        bottom:
          position === positions["left-end"] ||
          position === positions["right-end"]
            ? -dimensions.height * 0.6
            : "",
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
