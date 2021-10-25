import React from 'react';
import classNames from 'classnames';

import './label.scss';

interface ILabel {
  htmlFor: string;
  children?: React.ReactNode;
  labelText?: string;
  errorText?: string;
  isError?: boolean;
  className?: string;
}

export const Label: React.FC<ILabel> = ({
  htmlFor,
  labelText,
  errorText,
  isError,
  children,
  className,
}) => {
  const classProps = classNames('label', {
    [`${className}`]: className,
    [`label_notification_error`]: isError,
  });

  return (
    <label htmlFor={htmlFor} className={classProps}>
      {isError ? errorText : labelText}
      {children}
    </label>
  );
};
