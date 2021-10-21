import React, { useRef } from 'react';
import Wrapper from '../../atoms/Wrapper';
import Header from '../../organism/Header';
import UserList from '../../organism/UserList';
import MainContainer from '../MainContainer';
import MessageForm from '../../organism/MessageForm';
import Dialog from '../../organism/Dialog';
import StatusBar from '../../organism/StatusBar';
import { Pages } from '../../../router/constants';

import './chatPageTemplate.scss';

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

      <Wrapper className="chat-container">
        <StatusBar
          isVisibleUserList={isVisibleUserList}
          handleVisibleUserList={handleVisibleUserList}
        />

        <Dialog />

        <MessageForm />
      </Wrapper>
    </MainContainer>
  );
};

export default ChatPageTemplate;
