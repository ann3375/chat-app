import React from 'react';
import classNames from 'classnames';

import './label.scss';

interface ILabel {
  htmlFor: string;
  children?: React.ReactNode;
  labelText?: string;
  errorText?: string;
  isError?: boolean;
}

const Label: React.FC<ILabel> = ({ htmlFor, labelText, errorText, isError, children }) => {
  const classProps = classNames('label', {
    [`label_error`]: isError,
    [`label_error_active`]: errorText,
  });

  return (
    <label htmlFor={htmlFor} className={classProps}>
      {isError ? errorText : labelText}
      {children}
    </label>
  );
};

export default Label;
