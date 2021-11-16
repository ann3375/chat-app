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
import { useWebsocket } from '../../hooks/useWebsocket';
import { UserGender } from '../../components/atoms/Avatar/types/types';
import { Modal } from '../../components/organism/Modal';

export const ChatPage = observer((): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = useState<boolean>(false);
  const { userListStore, dialogStore, userStore } = useContext(RootStoreContext);
  const currentUsername = userStore.userInfo.username;
  const currentGender = userStore.userInfo.gender;
  const messages = dialogStore.getDialogInfo();

  const [wsState, WSAction] = useWebsocket('test');

  const userListRef = useRef<HTMLDivElement>(null);
  const handleVisibleUserList = React.useCallback(() => {
    setIsVisibleUserList(!isVisibleUserList);
  }, [isVisibleUserList]);

  const setDialogInfo = React.useCallback(
    (username: string, lastseen: string, id: string, gender: UserGender) => {
      dialogStore.setCurrentDialogInfo(username, lastseen, id, gender);
    },

    [dialogStore]
  );

  useEffect(() => {
    if (wsState.isOpen) {
      WSAction.fetchUserData();
      WSAction.fetchUserList();
    }
  }, [WSAction, wsState.isOpen]);

  useEffect(() => {
    if (wsState.isOpen && currentUsername) {
      WSAction.sendUserJoinedInfo(currentUsername, currentGender);
    }
  }, [WSAction, wsState.isOpen, currentUsername, currentGender]);

  return (
    <>
      <ChatPageTemplate
        errorModal={wsState.error ? <Modal isError notificationText={wsState.error} /> : undefined}
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
            dialogInfo={dialogStore.currentDialogInfo.companion}
          />
        }
        dialog={
          <Dialog
            dialogMessages={messages?.dialogMessages}
            currentUsername={userStore.userInfo.username}
          />
        }
        messageForm={
          dialogStore.currentDialogId ? <MessageForm WSAction={WSAction} /> : <span>dsf</span>
        }
        notificationButton={
          <Button
            variant={ButtonVariant.notification}
            type={ButtonType.button}
            className="chat-page__button_notification"
            onClick={handleVisibleUserList}
          >
            Select a chat to start messaging
          </Button>
        }
      />
    </>
  );
});
