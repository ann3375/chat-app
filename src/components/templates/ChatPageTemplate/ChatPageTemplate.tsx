import React, { useRef } from 'react';
import Input from '../../atoms/Input';
import Wrapper from '../../atoms/Wrapper';
import ButtonIcon from '../../molecules/ButtonIcon';
import ChatMessage from '../../molecules/ChatMessage';
import FileInput from '../../molecules/FileInput';
import StatusBar from '../../molecules/StatusBar';
import Header from '../../organism/Header';
import UserList from '../../organism/UserList';
import MainContainer from '../MainContainer';
import { Pages } from '../../../router/constants';
import { UserGender } from '../../atoms/Avatar/types/types';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { InputId, InputType } from '../../atoms/Input/types/types';

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

  const handleVisibleUserList = () => {
    setIsVisibleUserList(!isVisibleUserList);
  };

  return (
    <MainContainer grid page={Pages.chat}>
      <Header isChatPage />

      <UserList
        listRef={userListRef}
        handleVisibleUserList={handleVisibleUserList}
        isVisibleUserList={isVisibleUserList}
      />

      <div className="chat">
        <Wrapper flex align="center" className="chat__header">
          <ButtonIcon
            iconName={isVisibleUserList ? IconName.closeIcon : IconName.userList}
            type={ButtonType.button}
            color={ColorType.primary}
            onClick={handleVisibleUserList}
            className={isVisibleUserList ? 'button_icon_transform' : ''}
          />
          <StatusBar
            username="User BobUser BobUser BobUser BobUser BobUser Bob"
            userStatus="last seen 3 min ago"
            gender={UserGender.male}
          />
        </Wrapper>
        <div className="chat__message-area">
          {text.map((item) => (
            <ChatMessage
              messageText={item.messageText}
              isCurrentUserMessage={item.isCurrentUserMessage}
              key={item.id}
            />
          ))}
        </div>

        <form>
          <Wrapper flex align="center" className="chat__footer">
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
