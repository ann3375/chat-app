import React from 'react';
import classNames from 'classnames';
import { ButtonSize, ButtonType, ButtonVariant } from './types/types';

import './button.scss';
import { NavLink } from 'react-router-dom';
import { SCREENS } from '../../../router/endpoints';

export interface IButton {
  type: ButtonType;
  children: React.ReactNode;
  isDisabled?: boolean;
  isNavLink?: boolean;
  path?: SCREENS;
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
  path,
  isNavLink,
  onClick,
}) => {
  const classProps = classNames('button', {
    [`button_size_${size}`]: size,
    [`button_variant_${variant}`]: variant,
    [`${className}`]: className,
  });

  return (
    <button onClick={onClick} type={type} disabled={isDisabled} className={classProps}>
      {isNavLink && path ? <NavLink to={path}> {children}</NavLink> : children}
    </button>
  );
};
