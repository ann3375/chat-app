import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { FileInput } from '../../molecules/FileInput';
import { FormInput } from '../../molecules/FormInput';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { InputId, InputType } from '../../molecules/FormInput/types/types';

import './messageForm.scss';

interface IFormInput {
  messageText: string;
}

const schema = yup.object().shape({
  messageText: yup.string().required(),
});

export const MessageForm = React.memo(function MessageForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      messageText: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
      <Wrapper flex align="center" className="message-form__inner">
        <FileInput id={InputId.file} />

        <Controller
          name={InputId.messageText}
          control={control}
          render={({ field }) => (
            <FormInput placeholder="Write something..." type={InputType.textarea} field={field} />
          )}
        />

        <ButtonIcon
          iconName={IconName.sendMessage}
          type={ButtonType.submit}
          color={ColorType.primary}
          className="message-form__button"
          isDisabled={!isValid}
        />
      </Wrapper>
    </form>
  );
});
