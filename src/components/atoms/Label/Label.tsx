import classNames from 'classnames';
import React from 'react';

import './label.scss';

interface ILabel {
  htmlFor: string;
  labelText?: string;
  errorText?: string;
  isError?: boolean;
}

const Label: React.FC<ILabel> = ({ htmlFor, labelText, errorText, isError }) => {
  const classProps = classNames('label', {
    [`label_error`]: isError,
    [`label_error_active`]: errorText,
  });

  return (
    <label htmlFor={htmlFor} className={classProps}>
      {isError ? errorText : labelText}
    </label>
  );
};

export default Label;
