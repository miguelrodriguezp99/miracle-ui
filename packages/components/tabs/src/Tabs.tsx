import React, { useEffect, useRef, useState } from "react";
import styles from "./tabs.module.css";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import classNames from "classnames";
import {
  sizes,
  TabsRadius,
  TabsSizes,
  TabsVariants,
  variants,
  radii,
} from "./constants";

interface TabsProps {
  children?: React.ReactNode;
  color?: SemanticColor;
  variant?: TabsVariants;
  size?: TabsSizes;
  radius?: TabsRadius;
  disableShadow?: boolean;
  contentWidth?: string;
  customIndicatorColor?: string;
  customBorderRadius?: string;
  customIndicatorBorderRadius?: string;
  centerTabs?: boolean;
  isDisabled?: boolean;
}

export const Tabs = ({
  color = semanticColors.default,
  variant = variants.solid,
  size = sizes.md,
  radius = radii.md,
  customIndicatorColor,
  children,
  disableShadow = false,
  contentWidth = "100%",
  customBorderRadius,
  customIndicatorBorderRadius,
  centerTabs,
  isDisabled,
}: TabsProps) => {
  const numOfTabs = React.Children.count(children);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const indicator = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const updateIndicator = () => {
      if (indicator.current && tabsRef.current[activeTab]) {
        const currentTab = tabsRef.current[activeTab];
        if (currentTab) {
          const tabRect = currentTab.getBoundingClientRect();
          const tabListRect = currentTab.parentElement?.getBoundingClientRect();

          indicator.current.style.width =
            variant === variants.underlined
              ? tabRect.width * 0.8 + "px"
              : tabRect.width + "px";
          indicator.current.style.left =
            variant === variants.underlined
              ? tabRect.left +
                tabRect.width * 0.1 -
                (tabListRect?.left || 0) +
                "px"
              : tabRect.left - (tabListRect?.left || 0) + "px";
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab, numOfTabs, variant]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      style={{
        width: contentWidth,
      }}
      className={styles.wrapper}
    >
      <div
        style={{
          borderRadius: customBorderRadius,
          gridTemplateColumns: `repeat(${numOfTabs}, 1fr)`,
          margin: centerTabs ? "auto" : "0",
        }}
        role="tablist"
        aria-label="tabs"
        className={classNames(
          styles.tablist,
          color,
          styles[color],
          styles[variant],
          styles[size],

          {
            [styles.disabled]: isDisabled,
            [styles.shadow]: !disableShadow,
            [styles[`radius-${radius}`]]: radius,
          }
        )}
      >
        <div
          ref={indicator}
          style={{
            backgroundColor: customIndicatorColor,
            borderRadius: customIndicatorBorderRadius
              ? customIndicatorBorderRadius
              : customBorderRadius,
          }}
          className={classNames(styles.indicator, color, {
            [styles.shadow]: !disableShadow,
            [styles[`radius-${radius}`]]: radius,
          })}
        ></div>

        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            ref: (el: HTMLButtonElement) => (tabsRef.current[index] = el),
            tabIndex: index === 0 ? 0 : -1,
            borderRadius: customBorderRadius,
            onClick: () => handleTabClick(index),
            className: classNames({
              [styles.active]: index === activeTab,
            }),
          });
        })}
      </div>

      <div
        style={{
          borderRadius: customBorderRadius,
        }}
        className={styles.contentContainer}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <div
              role="tabpanel"
              id={`panel-${(child as React.ReactElement).key}`}
              aria-labelledby={`tab-${(child as React.ReactElement).key}`}
              tabIndex={0}
              className={classNames(styles.content, {
                [styles.notActive]: index !== activeTab,
              })}
            >
              {(child as React.ReactElement).props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
