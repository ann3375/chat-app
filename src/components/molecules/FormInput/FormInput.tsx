import React from 'react';
import Label from '../../atoms/Label';
import Wrapper from '../../atoms/Wrapper';
import Input from '../../atoms/Input';
import { Icon } from '../../atoms/Icon';
import { IInput } from '../../atoms/Input';
import { ColorType, IconName } from '../../atoms/Icon/types/types';

import './formInput.scss';

interface IFormInput extends IInput {
  labelText?: string;
  errorText?: string;
}

const FormInput: React.FC<IFormInput> = ({ id, type, placeholder = '', labelText, errorText }) => {
  return (
    <Wrapper className="form-input">
      <Label htmlFor={id} labelText={labelText} className="form-input__label" />

      <Wrapper className="form-input__inner">
        <Input type={type} isError={!!errorText} placeholder={placeholder} id={id} />
        {errorText && (
          <Icon className="form-input__icon" color={ColorType.error} name={IconName.inputError} />
        )}
      </Wrapper>

      {errorText && (
        <Label htmlFor={id} isError errorText={errorText} className="form-input__label" />
      )}
    </Wrapper>
  );
};

export default FormInput;
