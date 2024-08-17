import React from "react";
import styles from "./divider.module.css";
import { DividerDirection, directions } from "./constants";
import classNames from "classnames";
import { SemanticColor, semanticColors } from "@miracle-ui/system";

type Props = {
  direction?: DividerDirection;
  color?: SemanticColor;
  customColor?: string;
};

export const Divider = ({
  color = semanticColors.default,
  direction = directions.horizontal,
  customColor,
}: Props) => {
  return (
    <div
      style={{
        background: customColor,
      }}
      className={classNames(styles.divider, {
        [styles[direction]]: direction,
        [color]: color,
      })}
    />
  );
};

export default Divider;
