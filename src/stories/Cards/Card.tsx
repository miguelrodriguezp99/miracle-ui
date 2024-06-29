import PropTypes from "prop-types";
import React, { useRef } from "react";
import classNames from "classnames";
import styles from "./card.module.css";

import options, { CardWidthTypes, PaddingTypes } from "./constants";
import { semanticColors, SemanticColor } from "../../lib/colors";
import useRippleEffect from "../../hooks/useRippleEffect";
// import { getClasses } from "../../helpers/styles";

interface CardProps {
  children?: React.ReactNode;
  color?: SemanticColor;
  cardWidth?: CardWidthTypes;
  padding?: PaddingTypes;
  isClickable?: boolean;
  isDraggable?: boolean;
  disabledRipple?: boolean;
}

export const Card = ({
  children = "Children",
  color = "default",
  cardWidth = "full",
  padding,
  isClickable = false,
  isDraggable = false,
  disabledRipple = false,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useRippleEffect({ disabledRipple, color, isClickable, ref: cardRef });
  return (
    <div
      ref={cardRef}
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color, //just applies if the color exists
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

Card.propTypes = {
  color: PropTypes.oneOf(Object.entries(semanticColors)),
  cardWidth: PropTypes.oneOf(options.cardWidth),
  padding: PropTypes.oneOf(options.padding),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default Card;
