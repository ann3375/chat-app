import classNames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import Input from '../../atoms/Input';
import { InputId, InputType } from '../../atoms/Input/types/types';
import Wrapper from '../../atoms/Wrapper';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';
import ButtonIcon from '../../molecules/ButtonIcon';
import ChatMessage from '../../molecules/ChatMessage';
import FileInput from '../../molecules/FileInput';
import Header from '../../organism/Header';
import UserList from '../../organism/UserList';
import MainContainer from '../MainContainer';
import { Pages } from '../MainContainer/types/types';

import './chatPageTemplate.scss';

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

const ChatPageTemplate = (): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = React.useState(false);

  const userListRef = useRef<HTMLDivElement>(null);

  const handleOutsideClickUserList = useCallback(
    (event: MouseEvent) => {
      if (userListRef.current && !userListRef.current?.contains(event.target as Node)) {
        isVisibleUserList && setIsVisibleUserList(!isVisibleUserList);
      }
    },
    [isVisibleUserList]
  );

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClickUserList);

    return () => {
      document.body.removeEventListener('click', handleOutsideClickUserList);
      isVisibleUserList && setIsVisibleUserList(false);
    };
  }, [handleOutsideClickUserList, isVisibleUserList]);

  return (
    <MainContainer grid page={Pages.chat}>
      <Header isChatPage />

      <UserList listRef={userListRef} isVisibleUserList={isVisibleUserList} />

      <div className="chat">
        <div className="chat__header">
          <button
            className={classNames('button', {
              ['button_active']: isVisibleUserList,
            })}
            onClick={() => setIsVisibleUserList(!isVisibleUserList)}
          >
            open
          </button>
          header-chat s
        </div>
        <div className="chat__message-area">
          {text.map((item) => (
            <ChatMessage
              messageText={item.messageText}
              id={item.id}
              isCurrentUserMessage={item.isCurrentUserMessage}
              key={item.id}
            />
          ))}
        </div>
        <form>
          <Wrapper variant={WrapperTypes.div} flex align="center" className="chat__footer">
            <FileInput />
            <Input
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
      </div>
    </MainContainer>
  );
};

export default ChatPageTemplate;
