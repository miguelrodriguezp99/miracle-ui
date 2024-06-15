import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import { paddingTypes } from "../constants";
import classNames from "classnames";

interface CardHeaderProps {
  imageRoute: string;
  title: string;
  subtitle: string;
  description?: string;
  padding?: paddingTypes;
}

export const CardHeader = ({ imageRoute, title, subtitle, description, padding }: CardHeaderProps) => {
  return (
    <div className={classNames(styles["card-header"], {
      [styles[`padding-${padding}`]]: padding,
    })}>
      {imageRoute && <img src={imageRoute} alt="image" className={styles["card-image"]} />}
      <div>
        <h2 className={description ? styles["title-with-desc"] : styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  imageRoute: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default CardHeader;
