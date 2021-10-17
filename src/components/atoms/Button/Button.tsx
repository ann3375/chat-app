import React from 'react';
import classNames from 'classnames';
import { ButtonSize, ButtonType, ButtonVariant } from './types/types';

import './button.scss';

interface IButton {
  type: ButtonType;
  children: React.ReactNode;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
}

const Button: React.FC<IButton> = ({ children, type, className, isDisabled, variant, size }) => {
  const classProps = classNames('button', {
    [`button_size_${size}`]: size,
    [`button_${variant}`]: variant,
    [`${className}`]: className,
  });

  return (
    <button type={type} disabled={isDisabled} className={classProps}>
      {children}
    </button>
  );
};

export default Button;
