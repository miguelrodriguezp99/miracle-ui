import React, { forwardRef } from "react";
import styles from "./tabs.module.css";

interface TabProps {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  key?: string;
  tabIndex?: number;
  borderRadius?: string;
  onClick?: () => void;
  className?: string;
  indicator?: React.ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ title, tabIndex, borderRadius, onClick, className, indicator }, ref) => {
    return (
      <button
        role="tab"
        aria-selected="true"
        aria-controls={`panel-${title}`}
        id={`tab-${title}`}
        tabIndex={tabIndex}
        className={`${styles.tab} ${className}`}
        style={{
          borderRadius: borderRadius,
        }}
        onClick={onClick}
        ref={ref}
      >
        {indicator}
        <span className={styles.title}>{title}</span>
      </button>
    );
  }
);

export default Tab;
