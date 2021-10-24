import React, { useRef } from 'react';
import Button from '../../components/atoms/Button';
import { ButtonType, ButtonVariant } from '../../components/atoms/Button/types/types';
import Dialog from '../../components/organism/Dialog';
import Header from '../../components/organism/Header';
import MessageForm from '../../components/organism/MessageForm';
import StatusBar from '../../components/organism/StatusBar';
import UserList from '../../components/organism/UserList';
import ChatPageTemplate from '../../components/templates/ChatPageTemplate';

const ChatPage = (): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = React.useState(false);
  const userListRef = useRef<HTMLDivElement>(null);

  const handleVisibleUserList = React.useCallback(() => {
    setIsVisibleUserList(!isVisibleUserList);
  }, [isVisibleUserList]);

  return (
    <ChatPageTemplate
      header={<Header isChatPage />}
      userList={
        <UserList
          listRef={userListRef}
          handleVisibleUserList={handleVisibleUserList}
          isVisibleUserList={isVisibleUserList}
        />
      }
      statusBar={
        <StatusBar
          isVisibleUserList={isVisibleUserList}
          handleVisibleUserList={handleVisibleUserList}
        />
      }
      dialog={<Dialog />}
      messageForm={<MessageForm />}
      notificationButton={
        <Button
          variant={ButtonVariant.notification}
          type={ButtonType.button}
          className="chat-page__button_notification"
          onClick={handleVisibleUserList}
        >
          Select a chat to stary messaging
        </Button>
      }
    />
  );
};

export default ChatPage;
