import React from "react";
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
export declare const CardCoverAndFooter: ({ title, subtitle, imgRoute, darkMode, imgWidth, imgHeight, footerText, secondFooterText, buttonText, onClick, }: CardCoverAndFooterProps) => React.JSX.Element;
export default CardCoverAndFooter;
