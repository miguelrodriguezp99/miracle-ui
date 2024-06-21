import React, { useRef } from 'react';
import styles from './button.module.css';
import useRippleEffect from '../../hooks/useRippleEffect';
import { SemanticColor } from '../../lib/colors';
import classNames from 'classnames';
import { ButtonVariants, ButtonSizes, ButtonRadius } from './constants';

export type ButtonProps = {
  color?: SemanticColor;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  radius?: ButtonRadius;
  isClickable?: boolean;
  isDisabled?: boolean;
  disabledRipple?: boolean;
  label: string;
  startContent?: React.JSX.Element;
  endContent?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  label = "Button",
  disabledRipple = false,
  size = "medium",
  radius = "full",
  isClickable = true,
  isDisabled = false,
  color = "primary",
  variant = "solid",
  startContent,
  endContent,
  onClick,
}: ButtonProps) => {

  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  useRippleEffect({ disabledRipple, color, variant, ref: buttonRef });

  return (
    <a
      ref={buttonRef}
      className={classNames(styles.button, {
        [styles[`${color}`]]: color,
        [styles[`${size}`]]: size,
        [styles["is-clickable"]]: isClickable,
        [styles["button-active"]]: isClickable,
        [styles["is-disabled"]]: isDisabled,
        [styles[`radius-${radius}`]]: radius,
        [styles[`${variant}`]]: variant
      })}
      onClick={onClick}
    >
      {startContent}
      {label}
      {endContent}
    </a>
  );
};

export default Button
