import React, { useRef, useState, ReactNode } from "react";
import styles from "./clipboard.module.css";
import classNames from "classnames";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import {
  ClipboardSizes,
  ClipboardVariants,
  variants,
  sizes,
} from "./constants";
import { useRippleEffect } from "@mirakle-ui/ripple20";

type Props = {
  children: React.ReactNode;
  size?: ClipboardSizes;
  color?: SemanticColor;
  variant?: ClipboardVariants;
  customRippleColor?: string;
  customPadding?: string;
  customTextColor?: string;
  customTextSize?: string;
  customBorderRadius?: string;
  customBackgroundColor?: string;
};

const extractText = (children: ReactNode): string => {
  let text = "";
  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      text += child;
    } else if (
      typeof child === "object" &&
      child !== null &&
      "props" in child &&
      child.props.children
    ) {
      text += extractText(child.props.children);
    }
  });
  return text;
};

export const Clipboard = ({
  children,
  size = sizes.sm,
  color = semanticColors.default,
  variant = variants.flat,
  customRippleColor,
  customPadding,
  customTextColor,
  customTextSize,
  customBorderRadius,
  customBackgroundColor,
}: Props) => {
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useRippleEffect({
    disabledRipple: false,
    color,
    variant,
    ref: buttonRef,
    blackText: false,
    customRippleColor,
  });

  const handleCopy = () => {
    if (!children) return;
    if (copied) return;

    const textToCopy = extractText(children);

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      style={{
        padding: customPadding,
        color: customTextColor,
        fontSize: customTextSize,
        borderRadius: customBorderRadius,
        backgroundColor: customBackgroundColor,
      }}
      className={classNames(
        styles.clipboard,
        styles[size],
        styles[variant],
        variant,
        color,
        styles[color]
      )}
    >
      <div>$</div>
      <div className={styles.children}>{children}</div>
      <div onClick={handleCopy}>
        <button ref={buttonRef} className={styles.button}>
          {copied ? (
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              role="presentation"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="1em"
              aria-copied={copied}
              className={styles.copiedIcon}
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              role="presentation"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              aria-copied={copied}
              className={styles.clipboardIcon}
            >
              <path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"></path>
              <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"></path>
              <path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Clipboard;
