import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { Typography } from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

import './dialogMessage.scss';

interface IDialogMessage {
  isCurrentUserMessage: boolean;
  messageText?: string;
}

export const DialogMessage: React.FC<IDialogMessage> = ({ isCurrentUserMessage, messageText }) => {
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
