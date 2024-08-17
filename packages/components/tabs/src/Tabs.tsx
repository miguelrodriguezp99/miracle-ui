import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./tabs.module.css";
import { SemanticColor, semanticColors } from "@miracle-ui/system";
import classNames from "classnames";
import {
  sizes,
  TabsRadius,
  TabsSizes,
  TabsVariants,
  variants,
  radii,
  TabsDirections,
  directions,
} from "./constants";

interface TabsProps {
  children?: React.ReactNode;
  color?: SemanticColor;
  direction?: TabsDirections;
  variant?: TabsVariants;
  size?: TabsSizes;
  radius?: TabsRadius;
  disableShadow?: boolean;
  textColor?: string;
  selectedColor?: string;
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
  textColor = "white",
  selectedColor,
  direction = directions.horizontal,
  children,
  disableShadow = false,
  customBorderRadius,
  customIndicatorBorderRadius,
  centerTabs,
  isDisabled,
}: TabsProps) => {
  const numOfTabs = React.Children.count(children);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const indicator = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const updateIndicator = useCallback(() => {
    if (!indicator.current || !tabsRef.current[activeTab]) return;
    const currentTab = tabsRef.current[activeTab];
    const tabRect = currentTab.getBoundingClientRect();
    const tabListRect = currentTab.parentElement?.getBoundingClientRect();

    if (direction === "horizontal") {
      indicator.current.style.width =
        variant === variants.underlined
          ? `${tabRect.width * 0.8}px`
          : `${tabRect.width}px`;
      indicator.current.style.left =
        variant === variants.underlined
          ? `${tabRect.left + tabRect.width * 0.1 - (tabListRect?.left || 0)}px`
          : `${tabRect.left - (tabListRect?.left || 0)}px`;
    } else {
      indicator.current.style.height =
        variant === variants.underlined
          ? `${tabRect.height * 0.8}px`
          : `${tabRect.height}px`;
      indicator.current.style.top =
        variant === variants.underlined
          ? `${tabRect.top + tabRect.height * 0.1 - (tabListRect?.top || 0)}px`
          : `${tabRect.top - (tabListRect?.top || 0)}px`;
    }
  }, [activeTab, direction, variant]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator, direction]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div
        style={{
          borderRadius: customBorderRadius,
          gridTemplateColumns: `repeat(${numOfTabs}, 1fr)`,
          margin: centerTabs ? "auto" : "0",
          color: textColor,
          //@ts-expect-error - custom property
          "--selected-color": selectedColor,
        }}
        role="tablist"
        aria-label="tabs"
        className={classNames(
          styles.tablist,
          color,
          styles[color],
          styles[variant],
          styles[size],
          styles[direction],
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
          className={classNames(styles.indicator, color, styles[direction], {
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

      {React.Children.map(children, (child, index) => {
        return (
          <div
            role="tabpanel"
            id={`panel-${(child as React.ReactElement).key}`}
            aria-labelledby={`tab-${(child as React.ReactElement).key}`}
            tabIndex={index}
            className={classNames(styles.content, {
              [styles.notActive]: index !== activeTab,
            })}
          >
            {(child as React.ReactElement).props.children}
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
