import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import options, { paddingTypes } from "../constants";
import classNames from "classnames";

interface CardHeaderProps {
  padding?: paddingTypes; // Quiero que pueda recibir más de un tipo de padding a la vez
  children?: React.ReactNode;
}

export const CardHeader = ({ children, padding = "none" }: CardHeaderProps) => {
  return (
    <div className={classNames(styles["card-header"], {
      [styles[`padding-${padding}`]]: padding,
    })}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.oneOf(options.padding),
};

export default CardHeader;
