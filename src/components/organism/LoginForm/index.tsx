import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { Wrapper } from '../../atoms/Wrapper';
import { FormInput } from '../../molecules/FormInput';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import { InputId, InputType } from '../../molecules/FormInput/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

import './loginForm.scss';

interface IFormInput {
  username: InputId.username;
  password: InputId.password;
}

export const LoginForm = (): React.ReactElement => {
  const { handleSubmit, control, formState } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Wrapper className="form-login">
      <Typography className="form-login__text" variant={TypographyTypeStyle.h2}>
        Please, autorize yourself
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={InputId.username}
          control={control}
          defaultValue={undefined}
          rules={{ required: true }}
          render={({ field }) => (
            <FormInput
              id={InputId.username}
              placeholder={'User name'}
              type={InputType.text}
              labelText="User name"
              className="form-login__input"
              field={field}
              errorText={
                formState.errors.username?.type === 'required'
                  ? 'Something wrong with your name'
                  : ''
              }
            />
          )}
        />

        <FormInput
          id={InputId.password}
          placeholder={'Input password'}
          type={InputType.password}
          errorText={'Something wrong'}
          labelText="Password"
          className="form-login__input"
        />

        <Button
          className="form-login__button"
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
