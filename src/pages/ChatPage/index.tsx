import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { Button } from '../../components/atoms/Button';
import { ButtonType, ButtonVariant } from '../../components/atoms/Button/types/types';
import { Dialog } from '../../components/organism/Dialog';
import { Header } from '../../components/organism/Header';
import { MessageForm } from '../../components/organism/MessageForm';
import { StatusBar } from '../../components/organism/StatusBar';
import { UserList } from '../../components/organism/UserList';
import { ChatPageTemplate } from '../../components/templates/ChatPageTemplate';
import { currentDialogStore } from '../../store/currentDialogStore';
import { LOADING_STATE } from '../../store/types/types';
import { userListStore } from '../../store/userListStore';

export const ChatPage = observer((): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = React.useState(false);
  const userListRef = useRef<HTMLDivElement>(null);

  const handleVisibleUserList = React.useCallback(() => {
    setIsVisibleUserList(!isVisibleUserList);
  }, [isVisibleUserList]);

  const setDialogInfo = (username: string, lastseen: string, id: string) => {
    currentDialogStore.setCurrentDialogInfo(username, lastseen, id);
  };

  const users = userListStore.userList;
  const loadingState = userListStore.loadingState;
  const dialogInfo = currentDialogStore.currentDialogInfo;
  const dialogMessages = currentDialogStore.dialogMessages;

  useEffect(() => {
    userListStore.fetchUserList();
  }, []);

  useEffect(() => {
    currentDialogStore.fetchDialogMessages(dialogInfo.id);
  }, [dialogInfo.id]);

  return (
    <ChatPageTemplate
      header={<Header isChatPage />}
      userList={
        <UserList
          setDialogInfo={setDialogInfo}
          users={users}
          isLoaded={loadingState === LOADING_STATE.LOADED}
          listRef={userListRef}
          handleVisibleUserList={handleVisibleUserList}
          isVisibleUserList={isVisibleUserList}
        />
      }
      statusBar={
        <StatusBar
          isVisibleUserList={isVisibleUserList}
          handleVisibleUserList={handleVisibleUserList}
          dialogInfo={dialogInfo}
        />
      }
      dialog={<Dialog dialogMessages={dialogMessages} />}
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
});
