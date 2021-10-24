import React from 'react';
import classNames from 'classnames';
import { InputType } from './types/types';

import './input.scss';

export interface IInput {
  id: string;
  type: string;
  placeholder?: string;
  isRequired?: boolean;
  isError?: boolean;
}

export const Input: React.FC<IInput> = ({
  id,
  type,
  placeholder = '',
  isRequired = false,
  isError,
}) => {
  const classProps = classNames('input', {
    [`input_notification_error`]: isError,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = event;
    console.log(target.value);
  };

  if (type === InputType.textarea) {
    return (
      <textarea
        required={isRequired}
        className="textarea"
        id={id}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    );
  }

  return (
    <input
      required={isRequired}
      className={classProps}
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={handleInputChange}
    />
  );
};

export default Input;
