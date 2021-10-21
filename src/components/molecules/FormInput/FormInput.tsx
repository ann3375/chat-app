import React from 'react';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';
import Wrapper from '../../atoms/Wrapper';
import Input from '../../atoms/Input';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { IInput } from '../../atoms/Input/Input';

import './formInput.scss';

interface IFormInput extends IInput {
  labelText?: string;
  errorText?: string;
}

const FormInput: React.FC<IFormInput> = ({ id, type, placeholder = '', labelText, errorText }) => {
  return (
    <Wrapper className="form-input-wrapper">
      <Label htmlFor={id} labelText={labelText} />

      <Wrapper className="form-input-wrapper__inner">
        <Input type={type} error={!!errorText} placeholder={placeholder} id={id} />
        {errorText && <Icon color={ColorType.error} name={IconName.inputError} />}
      </Wrapper>

      {errorText && <Label htmlFor={id} isError errorText={errorText} />}
    </Wrapper>
  );
};

export default FormInput;
