import options from "./constants";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import Divider from "../Divider/Divider";
// import { getClasses } from "../../helpers/styles";

export const CardWithDivider = ({
  children = "Make beautiful websites regardless of your design experience.",
  imageRoute = "https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  color = "primary",
  size = "md",
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      className={classNames(styles["card"], {
        [styles[`color-${color}`]]: color, //just applies if the color exists
        [styles[`size-${size}`]]: size,
        [styles["is-clickable"]]: isClickable,
        [styles["is-draggable"]]: isDraggable,
      })}
    >
      <CardHeader
        imageRoute={imageRoute}
        title="Card with divider"
        subtitle="Make beautiful websites regardless of your design experience."
      />

      <Divider />

      <CardBody>{children}</CardBody>

      <Divider />

      <div className={styles["card-footer"]}>
        <a href="#" className={styles.link}>
          Visit source code on GitHub.
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="1em"
            class="flex mx-1 text-current self-center"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
            <path d="M15 3h6v6"></path>
            <path d="M10 14L21 3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

CardWithDivider.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default CardWithDivider;
