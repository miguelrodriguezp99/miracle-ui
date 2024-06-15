import options from "./constants";
import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { Image } from "../Image/Image";

// import { getClasses } from "../../helpers/styles";



export const CardWithImage = () => {
    return (
        <>
            <CardHeader>
                <div>
                    <h2 className={styles["title-with-desc"]}>Daily Mix</h2>
                    <p className={styles.subtitle}>12 Tracks</p>
                    <p className={styles.description}>Fontend Radio</p>
                </div>
            </CardHeader>
            <CardBody padding="none">
                <Image
                    route="hero-card-complete.jpeg"
                    alt="image"
                    width="100%"
                    height="177px"
                />
            </CardBody>
        </>
    );
};

CardWithImage.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDraggable: PropTypes.bool,
};

export default CardWithImage;
