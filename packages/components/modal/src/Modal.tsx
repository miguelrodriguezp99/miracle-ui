import React, { useEffect, useRef, useState } from "react";
import styles from "./modal.module.css";
import {
  backdrops,
  ModalBackdrops,
  ModalPlacements,
  ModalSizes,
  placements,
  sizes,
} from "./constants";
import classNames from "classnames";

type ModalProps = {
  button: React.ReactElement;
  backgroundColor?: string;
  blur?: number;
  placement?: ModalPlacements;
  size?: ModalSizes;
  customBorderRadius?: string;
  value?: boolean;
  backdrop?: ModalBackdrops;
  children: (props: { closeModal: () => void }) => React.ReactNode;
  setValue?: (value: boolean) => void;
};

export const Modal = ({
  button,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  customBorderRadius,
  size = sizes.md,
  blur = 5,
  placement = placements.auto,
  backdrop = backdrops.opaque,
  value,
  setValue,
  children,
}: ModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const isOpen = value !== undefined ? value : internalOpen;
  const handleOpen = (boolean: boolean) => {
    if (setValue) {
      setValue(boolean);
    } else {
      setInternalOpen(boolean);
    }
  };

  const openModal = () => handleOpen(true);
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add(styles.modalClosing);
      setTimeout(() => {
        handleOpen(false);
        modalRef.current?.classList.remove(styles.modalClosing);
      }, 350);
    }
  };

  useEffect(() => {
    if (backdrop === backdrops.blur && backdropRef.current) {
      backdropRef.current.style.display = "none";
      backdropRef.current.offsetHeight;
      backdropRef.current.style.display = "";
      backdropRef.current.classList.add(styles.blur);
    }
  }, [backdrop, isOpen]);

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  const backdropStyle = {
    backgroundColor:
      backdrop === backdrops.opaque
        ? backgroundColor
        : backdrop === backdrops.blur
          ? backgroundColor
          : "transparent",
  };

  if (!isOpen) return <>{React.cloneElement(button, { onClick: openModal })}</>;

  return (
    <>
      {React.cloneElement(button, { onClick: openModal })}

      <div
        ref={modalRef}
        className={classNames(styles.modal, {
          [styles.blur]: backdrop === backdrops.blur,
          [styles.notBlur]: backdrop !== backdrops.blur,
        })}
        style={{
          //@ts-expect-error - custom property
          "--blur": `${blur}px`,
        }}
        onClick={closeModal}
      >
        <div
          ref={backdropRef}
          className={styles.modalBackdrop}
          style={backdropStyle}
        />

        <div
          style={{
            borderRadius: customBorderRadius,
          }}
          className={classNames(styles.modalContent, styles[placement], {
            [styles.blur]: backdrop === backdrops.blur,
            [styles[size]]: size,
          })}
          onClick={stopPropagation}
        >
          {children({ closeModal })}
          <button className={styles.closeButton} onClick={closeModal}>
            <svg
              aria-hidden="true"
              fill="white"
              focusable="false"
              height="1em"
              role="presentation"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="1em"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
