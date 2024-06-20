import React, { useRef } from 'react';
import styles from './button.module.css';
import useRippleEffect from '../../hooks/useRippleEffect';
import { SemanticColor } from '../../lib/colors';

interface ButtonProps {
  isClickable?: boolean;
  label: string;
  color?: SemanticColor;
}

export const Button = ({
  label = "SOY EL MEJOR BOTON!!",
  isClickable = true,
}: ButtonProps) => {

  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useRippleEffect({ isClickable, ref: buttonRef });

  return (
    <a
      ref={buttonRef}
      className={styles.button}
    >
      {label}
    </a>
  );
};

export default Button
