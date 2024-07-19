import React from "react";
import styles from "./card.module.css";
import CardBody from "./components/CardBody";
import { Image } from "../Image/Image";
import { CardFooter } from "./components";

interface CardProductProps {
  title?: string;
  price?: string;
  imgRoute?: string;
  imgWidth?: string;
  imgHeight?: string;
}

export const CardProduct = ({
  title = "Orange",
  price = "$10.00",
  imgWidth = "180px",
  imgHeight = "140px",
  imgRoute = "https://nextui.org/images/fruit-1.jpeg",
}: CardProductProps) => {
  return (
    <>
      <CardBody padding="none" relative>
        <Image
          route={imgRoute}
          alt="image"
          width={imgWidth}
          height={imgHeight}
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

export default CardProduct;
