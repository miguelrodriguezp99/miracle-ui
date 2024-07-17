/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import styles from "./accordion.module.css";
import classNames from "classnames";
import { AccordionVariants, variants } from "./constants";

interface AccordionProps {
  children: React.ReactNode;
  variant?: AccordionVariants;
  backgroundColor?: string;
  selectionMode?: "unique" | "multiple"; // Nueva prop
}

export default function Accordion({
  children,
  variant = variants.solid,
  selectionMode = "multiple",
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    if (selectionMode === "unique") {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    } else {
      setOpenIndexes(
        openIndexes.includes(index)
          ? openIndexes.filter((i) => i !== index) // Remove index
          : [...openIndexes, index] // Add index
      );
    }
  };

  console.log(openIndexes);

  return (
    <div className={classNames(styles.accordion, styles[variant])}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          isOpen: openIndexes.includes(index),
          onClick: () => handleItemClick(index),
        })
      )}
    </div>
  );
}
