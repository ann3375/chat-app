import React from 'react';
import classNames from 'classnames';
import Typography from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import Wrapper from '../../atoms/Wrapper';

import './dialogMessage.scss';

interface IDialogMessage {
  messageText: string;
  isCurrentUserMessage: boolean;
}

export const DialogMessage: React.FC<IDialogMessage> = ({ messageText, isCurrentUserMessage }) => {
  const classProps = classNames('message', {
    ['message_side_left']: !isCurrentUserMessage,
    ['message_side_right']: isCurrentUserMessage,
  });

  return (
    <Wrapper className={classProps}>
      <Typography variant={TypographyTypeStyle.p1}>{messageText}</Typography>
    </Wrapper>
  );
};

export default DialogMessage;
