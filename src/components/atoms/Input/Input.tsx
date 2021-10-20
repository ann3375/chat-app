import React from 'react';
import classNames from 'classnames';

import './input.scss';
import { InputType } from './types/types';

export interface IInput {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
}

const Input: React.FC<IInput> = ({ id, type, placeholder = '', required = false, error }) => {
  const classProps = classNames('input', {
    [`input_error_active`]: error,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = event;
    console.log(target.value);
  };

  if (type === InputType.textarea) {
    return (
      <textarea
        required={required}
        className="textarea"
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }

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
