import React from "react";
import styles from "./accordion.module.css";
import classNames from "classnames";
import { AccordionVariants, variants } from "./constants";

interface AccordionProps {
  children: React.ReactNode;
  variant?: AccordionVariants;
  backgroundColor?: string;
}

export default function Accordion({
  children,
  variant = variants.solid,
}: AccordionProps) {
  return (
    <div className={classNames(styles.accordion, styles[variant])}>
      {children}
    </div>
  );
}
