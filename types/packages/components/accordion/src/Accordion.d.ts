import React from "react";
import { AccordionSelectionModes, AccordionVariants } from "./constants";
interface AccordionProps {
    children: React.ReactNode;
    variant?: AccordionVariants;
    backgroundColor?: string;
    selectionMode?: AccordionSelectionModes;
    isCompact?: boolean;
    initialOpenIndexes?: number[];
}
export default function Accordion({ children, variant, selectionMode, isCompact, initialOpenIndexes, }: AccordionProps): React.JSX.Element;
export {};
