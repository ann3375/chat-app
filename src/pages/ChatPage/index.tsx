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
import { useWebsocket } from '../../services/useWebsocket';
import { UserGender } from '../../components/atoms/Avatar/types/types';

export const ChatPage = observer((): React.ReactElement => {
  const [isVisibleUserList, setIsVisibleUserList] = useState(false);
  const { userListStore, currentDialogStore } = useContext(RootStoreContext);

  const [wsState, WSAction] = useWebsocket();

  const userListRef = useRef<HTMLDivElement>(null);
  const handleVisibleUserList = React.useCallback(() => {
    setIsVisibleUserList(!isVisibleUserList);
  }, [isVisibleUserList]);

  const setDialogInfo = React.useCallback(
    (username: string, lastseen: string, id: string, gender: UserGender) => {
      currentDialogStore.setCurrentDialogInfo(username, lastseen, id, gender);
    },
    [currentDialogStore]
  );

  useEffect(() => {
    wsState.isOpen && WSAction.fetchUserList();
  }, [WSAction, wsState.isOpen]);

  return (
    <>
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
        messageForm={<MessageForm WSAction={WSAction} />}
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
