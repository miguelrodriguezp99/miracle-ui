import React, { useRef } from "react";
import classNames from "classnames";
import styles from "./card.module.css";

import { CardWidthTypes, PaddingTypes } from "./constants";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import { useRippleEffect } from "@mirakle-ui/ripple20";

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
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const cardStyles = {
    ...(customColor && { backgroundColor: customColor }),
    ...(customPadding && { padding: customPadding }),
    ...(customTextColor && { color: customTextColor }),
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
      })}
    >
      {children}
    </div>
  );
};

export default Card;
