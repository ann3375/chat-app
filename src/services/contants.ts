import { IMessageToWS, WebSocketMessageType } from './types';

export const URL = 'http://109.194.37.212';
const WS_URL = 'ws://109.194.37.212';
export const HTTP_PORT = '93';
const WS_PORT = '2346';

export const URL_API = `${URL}:${HTTP_PORT}/api`;
export const WS_API = `${WS_URL}:${WS_PORT}`;

export const webSocketMessage = {
  fetchUserList: (messageToWS: IMessageToWS): void => {
    messageToWS(WebSocketMessageType.usersList);
  },

  fetchUserData: (messageToWS: IMessageToWS): void => {
    messageToWS(WebSocketMessageType.userData);
  },

  sendMessage: (messageToWS: IMessageToWS, text: string): void => {
    messageToWS(WebSocketMessageType.sendMessage, { text });
  },
};
