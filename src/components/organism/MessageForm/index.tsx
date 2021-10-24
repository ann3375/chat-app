import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import ButtonIcon from '../../molecules/ButtonIcon';
import FileInput from '../../molecules/FileInput';
import FormInput from '../../molecules/FormInput';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { InputId, InputType } from '../../atoms/Input/types/types';

import './messageForm.scss';

const MessageForm = (): React.ReactElement => {
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
        />
      </Wrapper>
    </form>
  );
};

export default React.memo(MessageForm);
