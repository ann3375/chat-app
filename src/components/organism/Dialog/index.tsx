import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { Spinner } from '../../molecules/Spinner';
import { DialogMessage } from '../../molecules/DialogMessage';
import { DialogMessageType } from '../../../store/types/types';

import './dialog.scss';

interface IDialog {
  dialogMessages: DialogMessageType[];
  isLoaded: boolean;
}

export const Dialog: React.FC<IDialog> = ({ dialogMessages, isLoaded }) => {
  return (
    <>
      <Wrapper className="messages-area">
        {isLoaded ? (
          dialogMessages.map((item) => (
            <DialogMessage
              messageText={item.messageText}
              isCurrentUserMessage={item.from === 'user'}
              key={item.messageId}
            />
          ))
        ) : (
          <Spinner className="messages-area__spinner" />
        )}
      </Wrapper>
    </>
  );
};
