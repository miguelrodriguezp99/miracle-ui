import React from "react";
import styles from "./divider.module.css";
import { DividerDirection } from "./constants";
import classNames from "classnames";
import { SemanticColor, semanticColors } from "../../lib/colors";

type Props = {
  direction?: DividerDirection;
  color: SemanticColor;
};

export const Divider = ({
  color = semanticColors.default,
  direction = "horizontal",
}: Props) => {
  return (
    <div
      className={classNames(styles.divider, {
        [styles[direction]]: direction,
        [color]: color,
      })}
    />
  );
};

export default Divider;
