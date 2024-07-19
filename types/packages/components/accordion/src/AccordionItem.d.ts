import React from "react";
interface AccordionItemProps {
    title?: string;
    titleFontSize?: string;
    titleColor?: string;
    content?: string;
    contentFontSize?: string;
    contentColor?: string;
    label?: string;
    labelFontSize?: string;
    labelColor?: string;
    textBlack?: boolean;
    isLastItem?: boolean;
    backgroundColor?: string;
    isCompact?: boolean;
    isOpen?: boolean;
    onClick?: () => void;
}
export default function AccordionItem({ title, titleFontSize, titleColor, content, contentFontSize, contentColor, label, labelFontSize, labelColor, textBlack, isLastItem, backgroundColor, isOpen, isCompact, onClick, }: AccordionItemProps): React.JSX.Element;
export {};
