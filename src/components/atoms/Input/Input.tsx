import React from 'react';
import classNames from 'classnames';

import './input.scss';

export interface IInput {
  id: string;
  placeholder: string;
  type: string;
  required?: boolean;
  error?: boolean;
}

const Input: React.FC<IInput> = ({ id, placeholder, type, required = false, error }) => {
  const classProps = classNames('input', {
    [`input_error_active`]: error,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    console.log(target.value);
  };

  return (
    <input
      required={required}
      className={classProps}
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
    />
  );
};

export default Input;
