import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  label = "SOY EL MEJOR BOTON!!",
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <a href="https://typing-web.vercel.app" target='_blank' rel='noopener noreferrer' >Miguel Page</a>
      {label}
    </button>
  );
};

export default Button
