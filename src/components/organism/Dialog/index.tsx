import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { DialogMessage } from '../../molecules/DialogMessage';
import { MessageType } from '../../../store/types/types';

import './dialog.scss';

interface IDialog {
  dialogMessages: MessageType[] | undefined;
  currentUsername: string;
}

export const Dialog: React.FC<IDialog> = ({ currentUsername, dialogMessages }) => {
  return (
    <>
      {dialogMessages?.length ? (
        <Wrapper className="messages-area">
          {dialogMessages.map((item) => (
            <DialogMessage
              messageText={item.text}
              isCurrentUserMessage={item.fromUser === currentUsername}
              key={item.createdAt}
            />
          ))}
        </Wrapper>
      ) : (
        'сообщений нет'
      )}
    </>
  );
};
