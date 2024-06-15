import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import { paddingTypes } from "../constants";
import classNames from "classnames";

interface CardHeaderProps {
  padding?: paddingTypes;
  children?: React.ReactNode;
}

export const CardHeader = ({ children, padding }: CardHeaderProps) => {
  return (
    <div className={classNames(styles["card-header"], {
      [styles[`padding-${padding}`]]: padding,
    })}>
      {children}
      {/* <div>
        <h2 className={description ? styles["title-with-desc"] : styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div> */}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.oneOf(["none", "sm", "md", "lg"]),
};

export default CardHeader;
