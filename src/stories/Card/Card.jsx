import options from "./constants";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import styles from "./card.module.css";
// import { getClasses } from "../../helpers/styles";

export const Card = ({
  children = "Children",
  color = "primary",
  size = "md",
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color, //just applies if the color exists
        [styles[`size-${size}`]]: size,
        [styles["is-clickable"]]: isClickable,
        [styles["is-draggable"]]: isDraggable,
      })}
    >
      {children}
    </div>
  );

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
};

Card.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default Card;
