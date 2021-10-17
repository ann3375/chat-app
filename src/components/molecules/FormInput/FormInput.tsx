import React from 'react';
import Icon from '../../atoms/Icon';
import { IconColor, IconName } from '../../atoms/Icon/types/types';
import Input from '../../atoms/Input';
import { IInput } from '../../atoms/Input/Input';
import Label from '../../atoms/Label';
import Wrapper from '../../atoms/Wrapper';

import './formInput.scss';

interface IFormInput extends IInput {
  labelText?: string;
  errorText?: string;
}

const FormInput: React.FC<IFormInput> = ({ id, type, placeholder = '', labelText, errorText }) => {
  return (
    <Wrapper className="form-input">
      <Label htmlFor={id} labelText={labelText} />

      <Wrapper className="form-input__inner">
        <Input type={type} error={!!errorText} placeholder={placeholder} id={id} />
        {errorText && <Icon color={IconColor.error} name={IconName.inputError} />}
      </Wrapper>

      {errorText && <Label htmlFor={id} isError errorText={errorText} />}
    </Wrapper>
  );
};

export default FormInput;
