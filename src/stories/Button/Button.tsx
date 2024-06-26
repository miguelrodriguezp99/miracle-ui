import React, { useRef } from 'react';
import PropTypes from "prop-types";
import "./../styles/global.css";
import styles from './button.module.css';
import useRippleEffect from '../../hooks/useRippleEffect';
import { SemanticColor, semanticColors } from '../../lib/colors';
import classNames from 'classnames';
import { ButtonVariants, ButtonSizes, ButtonRadius, variants, sizes, radius } from './constants';



interface ButtonProps {
  color?: SemanticColor;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  radius?: ButtonRadius;
  isClickable?: boolean;
  isDisabled?: boolean;
  disabledRipple?: boolean;
  label?: string;
  startContent?: React.JSX.Element;
  endContent?: React.ReactNode;
  isIconOnly?: boolean;
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
  isIconOnly,
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
        [styles[`${variant}`]]: variant,
        [styles["is-icon-only"]]: isIconOnly,
      })}
      onClick={onClick}
    >
      {startContent}
      {label}
      {endContent}
    </a>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(Object.entries(semanticColors)),
  variant: PropTypes.oneOf(Object.entries(variants)),
  size: PropTypes.oneOf(Object.entries(sizes)),
  radius: PropTypes.oneOf(Object.entries(radius)),
  isClickable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  disabledRipple: PropTypes.bool,
  label: PropTypes.string,
  startContent: PropTypes.element,
  endContent: PropTypes.node,
  isIconOnly: PropTypes.bool,
  onClick: PropTypes.func,
};


export default Button
