import React, { useRef } from "react";
import classNames from "classnames";
import styles from "./card.module.css";

import { CardWidthTypes, PaddingTypes } from "./constants";
import { SemanticColor, semanticColors } from "@miracle-ui/system";
import { useRippleEffect } from "@miracle-ui/ripple";

interface CardProps {
  children?: React.ReactNode;
  color?: SemanticColor;
  customColor?: string;
  customPadding?: string;
  customRippleColor?: string;
  customTextColor?: string;
  cardWidth?: CardWidthTypes;
  padding?: PaddingTypes;
  isClickable?: boolean;
  isDraggable?: boolean;
  disabledRipple?: boolean;
  disabledShadow?: boolean;
  customShadow?: string;
}

export const Card = ({
  children = "Children",
  color = semanticColors.default,
  customColor,
  customPadding,
  customRippleColor,
  customTextColor,
  cardWidth = "full",
  padding,
  isClickable = false,
  isDraggable = false,
  disabledRipple = false,
  disabledShadow,
  customShadow,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const cardStyles = {
    backgroundColor: customColor,
    padding: customPadding,
    color: customTextColor,
    boxShadow: customShadow,
  };

  useRippleEffect({
    disabledRipple,
    color,
    customRippleColor,
    isClickable,
    ref: cardRef,
  });
  return (
    <div
      ref={cardRef}
      style={cardStyles}
      className={classNames(styles.card, color, {
        [styles[`color-${color}`]]: color,
        [styles[`padding-${padding}`]]: padding,
        [styles["is-clickable"]]: isClickable,
        [styles["is-draggable"]]: isDraggable,
        [styles["card-active"]]: isClickable || isDraggable,
        [styles[`width-${cardWidth}`]]: cardWidth,
        [styles["shadow"]]: !disabledShadow,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
