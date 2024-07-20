import React from "react";
import styles from "./../card.module.css";
import classNames from "classnames";
import { PaddingTypes } from "../constants";

interface CardBodyProps {
  children: React.ReactNode;
  padding?: PaddingTypes;
  relative?: boolean;
}

export const CardBody = ({
  children,
  padding = "none",
  relative,
}: CardBodyProps) => {
  return (
    <div
      className={classNames(styles["card-body"], {
        [styles[`padding-${padding}`]]: padding,
        [styles["relative"]]: relative,
      })}
    >
      {children}
    </div>
  );
};

export default CardBody;
