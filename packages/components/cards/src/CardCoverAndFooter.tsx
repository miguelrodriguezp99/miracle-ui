import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { Image } from "./Image";
import { CardFooter } from "./components";
import Button from "@miracle-ui/button/src/Button";

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
  onClick?: () => void;
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
  onClick,
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
          <div
            className={`${styles["card-footer-cover"]}
                        ${
                          darkMode
                            ? styles["card-footer-cover-dark"]
                            : styles["card-footer-cover-light"]
                        }`}
          >
            <div className={styles["card-footer-text-container"]}>
              <p>{footerText}</p>

              {secondFooterText && <p>{secondFooterText}</p>}
            </div>

            <div>
              <Button onClick={onClick} size="sm" radius="lg">
                {buttonText}
              </Button>
            </div>
          </div>
        </CardFooter>
      </CardBody>
    </>
  );
};

export default CardCoverAndFooter;
