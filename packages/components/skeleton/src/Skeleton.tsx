import React from "react";

import styles from "./skeleton.module.css";
import classNames from "classnames";

type Props = {
  children?: React.ReactNode;
  borderRadius?: string;
  customWidth?: boolean;
};

export const Skeleton = ({
  borderRadius,
  children,
  customWidth = false,
}: Props) => {
  return (
    <div
      style={{
        borderRadius: borderRadius || "0px",
        width: customWidth ? "min-content" : "100%",
        height: customWidth ? "min-content" : "",
      }}
      className={classNames(styles["skeleton-container"], {})}
    >
      {children}
      <div className={styles.light}></div>
    </div>
  );
};

export default Skeleton;
