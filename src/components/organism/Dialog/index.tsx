import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import { DialogMessage } from '../../molecules/DialogMessage';

import './dialog.scss';

type Message = {
  id: number;
  messageText: string;
  isCurrentUserMessage: boolean;
};
type Text = Message[];
const text: Text = [
  { id: 1, messageText: 'asdasdasdasd', isCurrentUserMessage: true },
  {
    id: 2,
    messageText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non modi voluptatem quidem dolore impedit porro dolorem consequatur officia harum dignissimos eligendi, aut saepe debitis nemo veniam eveniet quisquam, esse reprehenderit laboriosam, illo iure. Corporis debitis inventore voluptatibus velit ratione nobis provident maxime eligendi, dolorem impedit incidunt ullam laboriosam illum.',
    isCurrentUserMessage: true,
  },
  {
    id: 3,
    messageText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non modi voluptatem quidem dolore impedit porro dolorem consequatur officia harum dignissimos eligendi, aut saepe debitis nemo veniam eveniet quisquam, esse reprehenderit laboriosam, illo iure. Corporis debitis inventore voluptatibus velit ratione nobis provident maxime eligendi, dolorem impedit incidunt ullam laboriosam illum.',
    isCurrentUserMessage: false,
  },
  { id: 4, messageText: 'asdasdasdasd', isCurrentUserMessage: false },
  { id: 5, messageText: 'asdasdasdasd', isCurrentUserMessage: true },
  { id: 6, messageText: 'asdasdasdasd', isCurrentUserMessage: true },
  {
    id: 7,
    messageText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non modi voluptatem quidem dolore impedit porro dolorem consequatur officia harum dignissimos eligendi, aut saepe debitis nemo veniam eveniet quisquam, esse reprehenderit laboriosam, illo iure. Corporis debitis inventore voluptatibus velit ratione nobis provident maxime eligendi, dolorem impedit incidunt ullam laboriosam illum.',
    isCurrentUserMessage: false,
  },
];

const Dialog = (): React.ReactElement => {
  return (
    <Wrapper className="messages-area">
      {text.map((item) => (
        <DialogMessage
          messageText={item.messageText}
          isCurrentUserMessage={item.isCurrentUserMessage}
          key={item.id}
        />
      ))}
    </Wrapper>
  );
};

export default Dialog;
