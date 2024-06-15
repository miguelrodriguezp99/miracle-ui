import options from "./constants";
import PropTypes from "prop-types";
import React from "react";
// import classNames from "classnames";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import Divider from "../Divider/Divider";
import { Image } from "../Image/Image";
// import { getClasses } from "../../helpers/styles";

interface CardWithDividerProps {
  children?: React.ReactNode;
  imageRoute?: string;
}

export const CardWithDivider = ({
  children = "Make beautiful websites regardless of your design experience.",
}: CardWithDividerProps) => {
  return (
    <>
      <CardHeader
        padding="sm"
      >
        <Image
          route="hero-card-complete.jpeg"
          alt="image"
          width="75px"
          height="75px"
        />

        <div>
          <h2 className={styles.title}>Card with divider</h2>
          <p className={styles.subtitle}>Make beautiful websites regardless of your design experience.</p>
        </div>


      </CardHeader>

      <Divider />

      <CardBody padding="sm">{children}</CardBody>

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
            className="flex mx-1 text-current self-center"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
            <path d="M15 3h6v6"></path>
            <path d="M10 14L21 3"></path>
          </svg>
        </a>
      </div>
    </>
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
