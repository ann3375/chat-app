import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { FileInput } from '../../molecules/FileInput';
import { FormInput } from '../../molecules/FormInput';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { InputId, InputType } from '../../molecules/FormInput/types/types';

import './messageForm.scss';

export const MessageForm = React.memo(function MessageForm() {
  return (
    <form className="message-form">
      <Wrapper flex align="center" className="message-form__inner">
        <FileInput id={InputId.file} />

        <FormInput
          type={InputType.textarea}
          id={InputId.messageText}
          placeholder="Write something..."
        />

        <ButtonIcon
          iconName={IconName.sendMessage}
          type={ButtonType.submit}
          color={ColorType.primary}
          className="message-form__button"
        />
      </Wrapper>
    </form>
  );
});
