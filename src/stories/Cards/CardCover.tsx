import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { Image } from "../Image/Image";
import { semanticColors } from "../../lib/colors";

// import { getClasses } from "../../helpers/styles";

interface CardCoverProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imgRoute?: string;
}

export const CardCover = ({
    title = "NEW ITEMS",
    subtitle = "Style your house properly!",
    imgRoute = "https://images.unsplash.com/photo-1718070477385-eed35e367ec8?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}: CardCoverProps) => {
    return (
        <>

            <CardBody padding="none" relative>
                <CardHeader padding="sm" absolute>
                    <div>
                        <h3 className={styles["title-cover"]}>{title}</h3>
                        <p className={styles["subtitle-cover"]}>{subtitle}</p>
                    </div>
                </CardHeader>
                <Image
                    route={imgRoute}
                    alt="image"
                    width="200px"
                    height="300px"
                />
            </CardBody>
        </>
    );
};

CardCover.propTypes = {
    color: PropTypes.oneOf(Object.entries(semanticColors)),
    isClickable: PropTypes.bool,
    isDraggable: PropTypes.bool,
};

export default CardCover;
