import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";

interface CardBodyProps {
  children: React.ReactNode;
}

export const CardBody = ({ children }: CardBodyProps) => {
  return <div className={styles["card-body"]}>{children}</div>;
};

CardBody.propTypes = {
  children: PropTypes.node,
};

export default CardBody;
