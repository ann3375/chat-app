import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { DialogMessage } from '../../molecules/DialogMessage';

import './dialog.scss';

type Message = {
  id: number;
  messageText: string;
  isCurrentUserMessage: boolean;
};
type Text = Message[];

interface IDialog {
  dialogMessages: any;
}

export const Dialog: React.FC<IDialog> = ({ dialogMessages }) => {
  return (
    <Wrapper className="messages-area">
      {dialogMessages.map((item: any) => (
        <DialogMessage
          messageText={item.messageText}
          isCurrentUserMessage={item.from === 'user'}
          key={item.id}
        />
      ))}
    </Wrapper>
  );
};
