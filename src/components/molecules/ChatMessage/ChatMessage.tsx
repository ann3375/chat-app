import classNames from 'classnames';
import React from 'react';
import Typography from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import Wrapper from '../../atoms/Wrapper';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';

import './chatMessage.scss';

interface iChatMessage {
  id: number;
  messageText: string;
  isCurrentUserMessage: boolean;
}

const ChatMessage: React.FC<iChatMessage> = ({ id, messageText, isCurrentUserMessage }) => {
  const classProps = classNames('message-wrapper', {
    ['message-wrapper_side_left']: !isCurrentUserMessage,
    ['message-wrapper_side_right']: isCurrentUserMessage,
  });

  return (
    <Wrapper variant={WrapperTypes.div} className={classProps}>
      <Typography variant={TypographyTypeStyle.p1}>{messageText}</Typography>
    </Wrapper>
  );
};

export default ChatMessage;
