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
    <Wrapper className="wrapper__input">
      <Label htmlFor={id} labelText={labelText} />

      <Input type={type} error={!!errorText} placeholder={placeholder} id={id} />

      {errorText && <Icon color={IconColor.error} name={IconName.inputError} />}

      <Label htmlFor={id} isError errorText={errorText} />
    </Wrapper>
  );
};

export default FormInput;
