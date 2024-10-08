import React from "react";
import styles from "./card.module.css";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import { Divider } from "@miracle-ui/divider";
import { Image } from "./Image";
import { CardFooter } from "./components/CardFooter";

interface CardWithDividerProps {
  children?: React.ReactNode;
  imageRoute?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  linkText?: string;
  imgRoute?: string;
}

export const CardWithDivider = ({
  children = "Make beautiful websites regardless of your design experience.",
  title = "Card with divider",
  subtitle = "Make beautiful websites regardless of your design experience.",
  linkText = "Visit source code on GitHub.",
  imgRoute = "https://nextui.org/images/hero-card-complete.jpeg",
}: CardWithDividerProps) => {
  return (
    <>
      <CardHeader padding="md">
        <Image route={imgRoute} alt="image" width="75px" height="75px" />

        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </CardHeader>

      <Divider color="default" />

      <CardBody padding="md">{children}</CardBody>

      <Divider color="default" />

      <CardFooter padding="md">
        <a href="#" className={styles.link}>
          {linkText}
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            className="flex mx-1 text-current self-center"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
            <path d="M15 3h6v6"></path>
            <path d="M10 14L21 3"></path>
          </svg>
        </a>
      </CardFooter>
    </>
  );
};

export default CardWithDivider;
