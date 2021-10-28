import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { Wrapper } from '../../atoms/Wrapper';
import { FormInput } from '../../molecules/FormInput';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import { InputId, InputType } from '../../molecules/FormInput/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';
import { userStore } from '../../../store/userStore';

import './loginForm.scss';

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Your name must contain at least 2 letters')
    .max(25, 'Your name must be less than 25 letters')
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Only alphabets are allowed in your name ')
    .required('Please input your name'),
  password: yup
    .string()
    .min(4, ' Password must contain at least 4 symbols')
    .max(20, 'Password must be less than 20 symbols')
    .required('Please input your password'),
});

export const LoginForm = (): React.ReactElement => {
  const [username, setUsername] = useLocalStorageState(InputId.username, '');

  // eslint-disable-next-line
  const [isUserAuthenticate, setIsUserAuthenticate] = useLocalStorageState(
    'isUserAuthenticate',
    ''
  );

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      username,
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setUsername(data.username);
    setIsUserAuthenticate('true');
    userStore.setUser(data.username);
  };

  return (
    <Wrapper className="form-login">
      <Typography className="form-login__text" variant={TypographyTypeStyle.h2}>
        Please, autorize yourself
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={InputId.username}
          control={control}
          render={({ field }) => (
            <FormInput
              placeholder={'User name'}
              type={InputType.text}
              labelText="User name"
              className="form-login__input"
              field={field}
              errorText={errors.username?.message}
            />
          )}
        />

        <Controller
          name={InputId.password}
          control={control}
          render={({ field }) => (
            <FormInput
              placeholder={'Input password'}
              type={InputType.password}
              labelText="Password"
              className="form-login__input"
              field={field}
              errorText={errors.password?.message}
            />
          )}
        />

        <Button
          className="form-login__button"
          variant={ButtonVariant.primary}
          size={ButtonSize.medium}
          type={ButtonType.submit}
          isDisabled={!isValid}
        >
          Log in
        </Button>
      </form>
    </Wrapper>
  );
};
