import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { paddingTypes } from "../constants";

interface CardBodyProps {
  children: React.ReactNode;
  padding?: paddingTypes;
}

export const CardBody = ({ children, padding = "md" }: CardBodyProps) => {
  return <div className={classNames(styles["card-body"], {
    [styles[`padding-${padding}`]]: padding,
  })}>
    {children}
  </div>;
};

CardBody.propTypes = {
  children: PropTypes.node,
};

export default CardBody;
