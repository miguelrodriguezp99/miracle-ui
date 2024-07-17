/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import styles from "./accordion.module.css";
import classNames from "classnames";
import {
  AccordionSelectionModes,
  AccordionVariants,
  variants,
} from "./constants";

interface AccordionProps {
  children: React.ReactNode;
  variant?: AccordionVariants;
  backgroundColor?: string;
  selectionMode?: AccordionSelectionModes;
  isCompact?: boolean;
  initialOpenIndexes?: number[];
}

export default function Accordion({
  children,
  variant = variants.solid,
  selectionMode = "multiple",
  isCompact,
  initialOpenIndexes = [],
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState(initialOpenIndexes);

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

  const childrenArray = React.Children.toArray(children); // Convert children to an array
  const lastIndex = childrenArray.length - 1; // Get the index of the last child

  return (
    <div className={classNames(styles.accordion, styles[variant])}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          isOpen: openIndexes.includes(index),
          onClick: () => handleItemClick(index),
          isLastItem: index === lastIndex,
          isCompact,
        })
      )}
    </div>
  );
}
