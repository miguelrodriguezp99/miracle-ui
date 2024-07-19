import React from "react";
import styles from "./accordion.module.css";
import classNames from "classnames";
import Divider from "@mirakle-ui/divider";

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

export default function AccordionItem({
  title = "Accordion 1",
  titleFontSize = "18px",
  titleColor,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  contentFontSize = "16px",
  contentColor,
  label,
  labelFontSize = "14px",
  labelColor,
  textBlack = false,
  isLastItem = false,
  backgroundColor,
  isOpen = false,
  isCompact = false,
  onClick,
}: AccordionItemProps) {
  return (
    <div
      style={{
        backgroundColor,
      }}
      className={styles.accordionItem}
    >
      <button onClick={onClick} className={classNames(styles.accordionButton)}>
        <div
          style={{
            padding: isCompact ? "8px 0px" : "16px 0px",
          }}
          className={classNames(styles.accordionButtonContent, {
            [styles.textBlack]: textBlack,
          })}
        >
          <div
            style={{
              fontSize: titleFontSize,
              color: titleColor,
            }}
          >
            {title}
          </div>
          {label && (
            <span
              style={{
                fontSize: labelFontSize,
                color: labelColor,
              }}
              className={classNames(styles.label, {
                [styles.textBlack]: textBlack,
              })}
            >
              {label}
            </span>
          )}
        </div>

        <div
          className={classNames(styles.accordionButtonIcon, {
            [styles.rotate]: isOpen,
          })}
        >
          <svg
            aria-hidden={isOpen}
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path
              d="M15.5 19l-7-7 7-7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </button>
      <section
        aria-hidden={isOpen}
        className={classNames(styles.accordionContent)}
      >
        <div>
          <div
            style={{
              color: contentColor,
              padding: "8px 0",
              fontSize: contentFontSize,
            }}
            className={classNames(styles.content, {
              [styles.textBlack]: textBlack,
            })}
          >
            {content}
          </div>
        </div>
      </section>

      {!isLastItem && (
        <div className={styles.divider}>
          <Divider />
        </div>
      )}
    </div>
  );
}
