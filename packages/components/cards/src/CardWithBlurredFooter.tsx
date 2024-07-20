import React from "react";
import CardBody from "./components/CardBody";
import { Image } from "./Image";
import { CardFooter } from "./components";
import styles from "./card.module.css";

interface CardWithBlurredFooterProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imgRoute?: string;
}

export const CardWithBlurredFooter = ({
  imgRoute = "https://nextui.org/images/hero-card-complete.jpeg",
}: CardWithBlurredFooterProps) => {
  return (
    <>
      <CardBody padding="none" relative>
        <Image route={imgRoute} alt="image" width="100%" height="200px" />

        <CardFooter padding="none" margin="vxs" absolute isBlurred>
          <div className={styles["blurred-footer-container"]}>
            <p>Available soon</p>
            <button>Notify me</button>
          </div>
        </CardFooter>
      </CardBody>
    </>
  );
};

export default CardWithBlurredFooter;
