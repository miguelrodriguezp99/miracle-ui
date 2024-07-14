import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { Image } from "../Image/Image";
import { semanticColors } from "../../lib/colors";
import classNames from "classnames";

// import { getClasses } from "../../helpers/styles";

interface CardWithImageProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imgRoute?: string;
  customTextColor?: string;
}

export const CardWithImage = ({
  title = "Daily Mix",
  subtitle = "12 Tracks",
  description = "Frontend Radio",
  imgRoute = "https://nextui.org/images/hero-card-complete.jpeg",
  customTextColor,
}: CardWithImageProps) => {
  const cardStyles = {
    ...(customTextColor && { color: customTextColor }),
  };

  return (
    <>
      <CardHeader>
        <div>
          <h3 className={styles["title-with-desc"]}>{title}</h3>
          <p
            style={cardStyles}
            className={classNames(styles.subtitle, {
              [styles["custom-text"]]: customTextColor,
            })}
          >
            {subtitle}
          </p>
          <p style={cardStyles} className={styles.description}>
            {description}
          </p>
        </div>
      </CardHeader>
      <CardBody padding="none">
        <Image route={imgRoute} alt="image" width="100%" height="177px" />
      </CardBody>
    </>
  );
};

CardWithImage.propTypes = {
  color: PropTypes.oneOf(Object.entries(semanticColors)),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default CardWithImage;
