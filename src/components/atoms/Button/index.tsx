import React from 'react';
import classNames from 'classnames';
import { ButtonSize, ButtonType, ButtonVariant } from './types/types';

import './button.scss';

export interface IButton {
  type: ButtonType;
  children: React.ReactNode;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  children,
  type,
  isDisabled,
  variant,
  className,
  size,
  onClick,
}) => {
  const classProps = classNames('button', {
    [`button_size_${size}`]: size,
    [`button_variant_${variant}`]: variant,
    [`${className}`]: className,
  });

  return (
    <button onClick={onClick} type={type} disabled={isDisabled} className={classProps}>
      {children}
    </button>
  );
};
