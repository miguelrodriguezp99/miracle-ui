import classNames from "classnames";
import React from "react";
import styles from "./checkboxGroup.module.css";
import { CheckboxDirection, CheckboxGap, directions, gaps } from "./constants";

type Props = {
  children: React.ReactNode;
  direction?: CheckboxDirection;
  gap?: CheckboxGap;
};

export const CheckboxGroup = ({
  children,
  gap = gaps.sm,
  direction = directions.vertical,
}: Props) => {
  return (
    <div
      className={classNames(styles["checkbox-group"], {
        [styles[direction]]: direction,
        [styles[`gap-${gap}`]]: gap,
      })}
    >
      {children}
    </div>
  );
};

export default CheckboxGroup;
