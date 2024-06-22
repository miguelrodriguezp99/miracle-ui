import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import options, { PaddingTypes } from "../constants";

interface CardBodyProps {
  children: React.ReactNode;
  padding?: PaddingTypes;
  relative?: boolean;
}

export const CardBody = ({ children, padding = "none", relative }: CardBodyProps) => {
  return <div className={classNames(styles["card-body"], {
    [styles[`padding-${padding}`]]: padding,
    [styles["relative"]]: relative
  })}>
    {children}
  </div>;
};

CardBody.propTypes = {
  children: PropTypes.node,
  package: PropTypes.oneOf(options.padding),
};

export default CardBody;
