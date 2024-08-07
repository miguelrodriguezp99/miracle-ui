import React, { useRef, useState } from "react";
import styles from "./modal.module.css";
import { ModalPlacements, placements } from "./constants";
import classNames from "classnames";

type ModalProps = {
  button: React.ReactElement;
  backgroundColor?: string;
  placement?: ModalPlacements;
  value?: boolean;
  children: (props: { closeModal: () => void }) => React.ReactNode;
  setValue?: (value: boolean) => void;
};

export const Modal = ({
  button,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  placement = placements.auto,
  value,
  setValue,
  children,
}: ModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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
  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  if (!isOpen) return <>{React.cloneElement(button, { onClick: openModal })}</>;

  return (
    <>
      {React.cloneElement(button, { onClick: openModal })}

      <div
        ref={modalRef}
        style={{
          backgroundColor,
        }}
        className={styles.modal}
        onClick={closeModal}
      >
        <div
          className={classNames(styles.modalContent, styles[placement])}
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

export default Modal;
