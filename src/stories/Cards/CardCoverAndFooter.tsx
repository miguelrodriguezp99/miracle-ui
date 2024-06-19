import options from "./constants";
import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { Image } from "../Image/Image";
import { CardFooter } from "./components";

// import { getClasses } from "../../helpers/styles";

interface CardCoverAndFooterProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imgRoute?: string;
    darkMode?: boolean;
    imgWidth?: string;
    imgHeight?: string;
    footerText?: string;
    secondFooterText?: string;
    buttonText?: string;
}

export const CardCoverAndFooter = ({
    title = "NEW ITEMS",
    subtitle = "Style your house properly!",
    imgRoute = "https://images.unsplash.com/photo-1718070477385-eed35e367ec8?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    darkMode = false,
    imgWidth = "200px",
    imgHeight = "300px",
    footerText = "Available soon. Get notified.",
    secondFooterText,
    buttonText = "Notify Me",
}: CardCoverAndFooterProps) => {
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
                    width={imgWidth}
                    height={imgHeight}
                />
                <CardFooter absolute>
                    <div className={`${styles["card-footer-cover"]}
                        ${darkMode
                            ? styles["card-footer-cover-dark"]
                            : styles["card-footer-cover-light"]
                        }`}>
                        <div className={styles["card-footer-text-container"]}>
                            <p>{footerText}</p>

                            {secondFooterText && <p>{secondFooterText}</p>}
                        </div>
                        <button className={styles["test-button"]}>{buttonText}</button>
                    </div>
                </CardFooter>
            </CardBody>
        </>
    );
};

CardCoverAndFooter.propTypes = {
    color: PropTypes.oneOf(options.colors),
    isClickable: PropTypes.bool,
    isDraggable: PropTypes.bool,
};

export default CardCoverAndFooter;
