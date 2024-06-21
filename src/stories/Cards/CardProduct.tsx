import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import CardBody from "./components/CardBody";
import { Image } from "../Image/Image";
import { CardFooter } from "./components";
import { semanticColors } from "../../lib/colors";

// import { getClasses } from "../../helpers/styles";

interface CardProductProps {
    title?: string;
    price?: string;
    imgRoute?: string;
}

export const CardProduct = ({
    title = "Orange",
    price = "$10.00",
    imgRoute = "https://nextui.org/images/fruit-1.jpeg"
}: CardProductProps) => {
    return (
        <>

            <CardBody padding="none" relative>
                <Image
                    route={imgRoute}
                    alt="image"
                    width="180px"
                    height="140px"
                />
            </CardBody>
            <CardFooter padding="none">
                <div className={styles["product-container"]}>
                    <p className={styles["product-title"]}>{title}</p>
                    <p className={styles["product-price"]}>{price}</p>
                </div>
            </CardFooter>
        </>
    );
};

CardProduct.propTypes = {
    color: PropTypes.oneOf(Object.entries(semanticColors)),
    isClickable: PropTypes.bool,
    isDraggable: PropTypes.bool,
};

export default CardProduct;
