import React, { useRef } from 'react';
import Dialog from '../../components/organism/Dialog';
import Header from '../../components/organism/Header';
import MessageForm from '../../components/organism/MessageForm';
import StatusBar from '../../components/organism/StatusBar';
import UserList from '../../components/organism/UserList';
import ChatPageTemplate from '../../components/templates/ChatPageTemplate';

const ChatPage = (): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = React.useState(false);
  const userListRef = useRef<HTMLDivElement>(null);

  const handle = React.useCallback(() => {
    setIsVisibleUserList(!isVisibleUserList);
  }, [isVisibleUserList]);

  return (
    <ChatPageTemplate
      header={<Header isChatPage />}
      userList={
        <UserList
          listRef={userListRef}
          handleVisibleUserList={handle}
          isVisibleUserList={isVisibleUserList}
        />
      }
      statusBar={<StatusBar isVisibleUserList={isVisibleUserList} handleVisibleUserList={handle} />}
      dialog={<Dialog />}
      messageForm={<MessageForm />}
    />
  );
};

export default ChatPage;
