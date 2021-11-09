import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { RootStoreContext } from '../store/RootStore';
import { webSocketMessage, WS_API } from './contants';
import { IWSAction, WebSocketMessageType } from './types';

type Result<T> = T | undefined;

interface IWSState<T> {
  result: Result<T>;
  error: string;
  isOpen: boolean;
  isClosed: boolean;
}

export const useWebsocket = <T = Record<string, unknown>>(): [IWSState<T>, IWSAction] => {
  const { userStore, userListStore } = useContext(RootStoreContext);
  const ws = useRef<WebSocket | null>();

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<Result<T>>();
  const [isClosed, setIsClosed] = useState(false);

  const accessToken = userStore.user.isUserAuthenticate;

  const params = '/?type=test&ws_id=';

  useEffect(() => {
    if (accessToken) {
      ws.current = new WebSocket(`${WS_API}${params}${accessToken}`);
    }

    return () => {
      ws.current?.close();
      setIsClosed(true);
    };
  }, [accessToken]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onopen = () => {
      setIsOpen(true);
    };

    ws.current.onerror = (event: Event) => {
      setError(event.type);
    };

    ws.current.onclose = () => {
      ws.current?.close();
      setIsClosed(true);
    };

    if (ws.current) {
      ws.current.onmessage = (event: MessageEvent) => {
        if (event.data.includes('wrong')) {
          setError(event.data);
        }
        const reverseData = event.data.replaceAll("'", '');
        const { type: eventType, ...wsResponse } = JSON.parse(reverseData);

        if (eventType === WebSocketMessageType.usersList) {
          userListStore.setUserList(wsResponse.data);
        }

        setResult(wsResponse.data);
      };
    }
  }, [userListStore]);

  const send = (messageType: WebSocketMessageType, data?: Record<string, unknown>) => {
    if (messageType === WebSocketMessageType.sendMessage) {
      return ws.current?.send(`'${JSON.stringify({ type: messageType, ...data })}'`);
    }

    return ws.current?.send(JSON.stringify({ type: messageType, ...data }));
  };

  const WSAction = useMemo(() => {
    const fetchUserList = () => webSocketMessage.fetchUserList(send);
    const fetchUserData = () => webSocketMessage.fetchUserData(send);
    const sendMessage = (text: string) => webSocketMessage.sendMessage(send, text);

    return { fetchUserList, fetchUserData, sendMessage };
  }, []);

  return [{ isOpen, error, result, isClosed }, WSAction];
};
