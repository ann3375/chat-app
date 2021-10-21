import React from 'react';
import classNames from 'classnames';
import Typography from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import Wrapper from '../../atoms/Wrapper';

import './chatMessage.scss';

interface iChatMessage {
  messageText: string;
  isCurrentUserMessage: boolean;
}

const ChatMessage: React.FC<iChatMessage> = ({ messageText, isCurrentUserMessage }) => {
  const classProps = classNames('message-wrapper', {
    ['message-wrapper_side_left']: !isCurrentUserMessage,
    ['message-wrapper_side_right']: isCurrentUserMessage,
  });

  return (
    <Wrapper className={classProps}>
      <Typography variant={TypographyTypeStyle.p1}>{messageText}</Typography>
    </Wrapper>
  );
};

export default ChatMessage;
