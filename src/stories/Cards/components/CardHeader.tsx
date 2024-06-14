import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";

interface CardHeaderProps {
  imageRoute: string;
  title: string;
  subtitle: string;
}

export const CardHeader = ({ imageRoute, title, subtitle }: CardHeaderProps) => {
  return (
    <div className={styles["card-header"]}>
      <img src={imageRoute} alt="image" className={styles["card-image"]} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  imageRoute: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CardHeader;
