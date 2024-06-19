
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import styles from "./card.module.css";

import options, { ColorTypes, CardWidthTypes, PaddingTypes } from "./constants";
// import { getClasses } from "../../helpers/styles";

interface CardProps {
  children?: React.ReactNode;
  color?: ColorTypes;
  cardWidth?: CardWidthTypes;
  padding?: PaddingTypes;
  isClickable?: boolean;
  isDraggable?: boolean;
}

export const Card = ({
  children = "Children",
  color = "default",
  cardWidth = "full",
  padding,
  isClickable = false,
  isDraggable = false,
}: CardProps) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color, //just applies if the color exists
        [styles[`padding-${padding}`]]: padding,
        [styles["is-clickable"]]: isClickable,
        [styles["is-draggable"]]: isDraggable,
        [styles[`width-${cardWidth}`]]: cardWidth,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(options.colors),
  cardWidth: PropTypes.oneOf(options.cardWidth),
  padding: PropTypes.oneOf(options.padding),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default Card;

// const getStyles = getClasses(styles)({
//   color,
//   size,
// });

// return (
//   <div
//     className={getStyles("card", ["color", "size"], {
//       "is-clickable": isClickable,
//       "is-draggable": isDraggable,
//     })}
//   >
//     {children}
//   </div>
// );
