import React from 'react';
import classNames from 'classnames';
import { ButtonTSize, ButtonType } from './types/types';

import './button.scss';

interface IButton {
  type: ButtonType;
  isDisabled: boolean;
  children: React.ReactNode;
  className?: string;
  size?: ButtonTSize;
}

const Button: React.FC<IButton> = ({ className, type, isDisabled, children, size }) => {
  const classProps = classNames('button', {
    [`button_size_${size}`]: size,
  });

  return (
    <button type={type} disabled={isDisabled} className={classProps}>
      {children}
    </button>
  );
};

export default Button;
