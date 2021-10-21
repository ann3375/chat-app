import React from 'react';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import Wrapper from '../../atoms/Wrapper';
import FormInput from '../../molecules/FormInput';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import { InputId, InputType } from '../../atoms/Input/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

import './loginForm.scss';

const LoginForm = (): React.ReactElement => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Wrapper className={'form-login-wrapper'}>
      <Typography variant={TypographyTypeStyle.h2}>Please, autorize yourself</Typography>

      <form onSubmit={handleSubmit}>
        <FormInput
          id={InputId.username}
          placeholder={'User name'}
          type={InputType.text}
          labelText="User password"
        />

        <FormInput
          id={InputId.password}
          placeholder={'Input password'}
          type={InputType.password}
          errorText={'Something wrong'}
          labelText="Password"
        />

        <Button
          variant={ButtonVariant.primary}
          size={ButtonSize.medium}
          type={ButtonType.submit}
          isDisabled={false}
        >
          Log in
        </Button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
