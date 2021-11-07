import React, { useEffect, useRef, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../../components/atoms/Button';
import { Dialog } from '../../components/organism/Dialog';
import { Header } from '../../components/organism/Header';
import { MessageForm } from '../../components/organism/MessageForm';
import { StatusBar } from '../../components/organism/StatusBar';
import { UserList } from '../../components/organism/UserList';
import { ChatPageTemplate } from '../../components/templates/ChatPageTemplate';
import { RootStoreContext } from '../../store/RootStore';
import { LOADING_STATE } from '../../store/types/types';
import { ButtonType, ButtonVariant } from '../../components/atoms/Button/types/types';

export const ChatPage = observer((): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = useState(false);
  const { userListStore, currentDialogStore } = useContext(RootStoreContext);

  const userListRef = useRef<HTMLDivElement>(null);
  const handleVisibleUserList = React.useCallback(() => {
    setIsVisibleUserList(!isVisibleUserList);
  }, [isVisibleUserList]);

  const setDialogInfo = React.useCallback(
    (username: string, lastseen: string, id: string) => {
      currentDialogStore.setCurrentDialogInfo(username, lastseen, id);
    },
    [currentDialogStore]
  );

  useEffect(() => {
    userListStore.fetchUserList();
  }, [userListStore]);

  useEffect(() => {
    currentDialogStore.fetchDialogMessages(currentDialogStore.dialogInfo.id);
  }, [currentDialogStore]);

  return (
    <ChatPageTemplate
      header={<Header isChatPage />}
      userList={
        <UserList
          setDialogInfo={setDialogInfo}
          users={userListStore.userList}
          isLoaded={userListStore.loadingState === LOADING_STATE.LOADED}
          listRef={userListRef}
          handleVisibleUserList={handleVisibleUserList}
          isVisibleUserList={isVisibleUserList}
        />
      }
      statusBar={
        <StatusBar
          isVisibleUserList={isVisibleUserList}
          handleVisibleUserList={handleVisibleUserList}
          dialogInfo={currentDialogStore.dialogInfo}
        />
      }
      dialog={
        <Dialog
          dialogMessages={currentDialogStore.dialogMessages}
          isLoaded={currentDialogStore.loadingState === LOADING_STATE.LOADED}
        />
      }
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
