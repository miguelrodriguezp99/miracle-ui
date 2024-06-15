import options from "./constants";
import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

// import { getClasses } from "../../helpers/styles";

interface CardWithImageProps {
    children?: React.ReactNode;
    imageRoute?: string;
}

export const CardWithImage = ({
    imageRoute,
}: CardWithImageProps) => {
    return (
        <>
            <CardHeader
                imageRoute={imageRoute ? imageRoute : ""}
                title="Daily Mix"
                subtitle="12 Tracks"
                description="Frontend Radio"
            />

            <CardBody padding="none">
                <img src="hero-card-complete.jpeg" alt="image" className={styles["card-image"]} />
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
