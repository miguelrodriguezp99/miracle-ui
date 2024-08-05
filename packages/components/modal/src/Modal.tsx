import React, { useRef, useState } from "react";
import styles from "./modal.module.css";

type ModalProps = {
  button: React.ReactElement;
  children: (props: { closeModal: () => void }) => React.ReactNode;
  value?: boolean;
  setValue?: (value: boolean) => void;
  backgroundColor?: string;
};

export const Modal = ({
  button,
  children,
  value,
  setValue,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
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
      }, 200);
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
        <div className={styles.modalContent} onClick={stopPropagation}>
          {children({ closeModal })}
        </div>
      </div>
    </>
  );
};

export default Modal;
