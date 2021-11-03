import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RootStoreContext } from '../../../store/RootStore';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { Wrapper } from '../../atoms/Wrapper';
import { CaptchaBlock } from '../../molecules/CaptchaBlock';
import { FormInput } from '../../molecules/FormInput';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import { InputId, InputSize, InputType } from '../../molecules/FormInput/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { SCREENS } from '../../../router/endpoints';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';

import './signUpForm.scss';
import { FormSelect } from '../../molecules/FormSelect';

interface IFormInput {
  username: string;
  password: string;
  captcha: string;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Your name must contain at least 2 letters')
    .max(25, 'Your name must be less than 50 letters')
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Only alphabets are allowed in your name ')
    .required('Please input your name'),
  password: yup.string().required('Please choose gender'),
});

export const SignUpForm = (): React.ReactElement => {
  const [username, setUsername] = useLocalStorageState(InputId.username, '');
  const rootStore = React.useContext(RootStoreContext);
  const [isUserAuthenticate, setIsUserAuthenticate] = useLocalStorageState(
    'isUserAuthenticate',
    ''
  );

  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    console.log(data.password);
  };

  const options = [
    { id: '1', gender: 'male' },
    { id: '2', gender: 'female' },
  ];

  return (
    <Wrapper className="form-login">
      <Typography className="form-login__text" variant={TypographyTypeStyle.h2}>
        Registration
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={InputId.password}
          control={control}
          render={() => (
            <FormSelect
              options={options}
              setValue={setValue}
              error={errors.password?.message}
              clearErrors={clearErrors}
            />
          )}
        />

        <button type="submit">sd</button>

        {/* <Controller
          name={InputId.username}
          control={control}
          render={({ field }) => (
            <FormInput
              placeholder={'Input user name'}
              type={InputType.text}
              labelText="Create user name"
              className="form-login__input"
              field={field}
              errorText={errors.username?.message}
            />
          )}
        /> */}

        {/*
        <Controller
          name={InputId.password}
          control={control}
          render={({ field }) => (
            <FormInput
              placeholder={'Create password'}
              type={InputType.password}
              labelText="Create password"
              className="form-login__input"
              field={field}
              errorText={errors.password?.message}
            />
          )}
        />

        <Controller
          name={InputId.password}
          control={control}
          render={({ field }) => (
            <FormInput
              placeholder={'Password confirmation'}
              type={InputType.password}
              labelText="Password confirmation"
              className="form-login__input"
              field={field}
              errorText={errors.password?.message}
            />
          )}
        />

        <Controller
          name={InputId.username}
          control={control}
          render={({ field }) => (
            <FormInput
              placeholder={'Nickname'}
              type={InputType.text}
              labelText="Nickname"
              className="form-login__input"
              field={field}
              errorText={errors.username?.message}
            />
          )}
        />

        <Wrapper flex className="form-login__security-code">
          <Controller
            name={InputId.captcha}
            control={control}
            render={({ field }) => (
              <FormInput
                placeholder={'Security code'}
                type={InputType.text}
                labelText="Security code"
                className="form-login__input"
                field={field}
                size={InputSize.medium}
                errorText={errors.captcha?.message}
              />
            )}
          />
          <CaptchaBlock />
        </Wrapper>

        <Wrapper flex className="form-login__buttons">
          <Button
            className="form-login__button"
            variant={ButtonVariant.primary}
            size={ButtonSize.medium}
            type={ButtonType.submit}
            isDisabled={!isValid}
          >
            Register
          </Button>

          <Button
            className="form-login__button"
            variant={ButtonVariant.outline}
            size={ButtonSize.medium}
            type={ButtonType.button}
            isNavLink
            path={SCREENS.SCREEN_SIGN_UP}
          >
            Log in
          </Button>
        </Wrapper> */}
      </form>
    </Wrapper>
  );
};
