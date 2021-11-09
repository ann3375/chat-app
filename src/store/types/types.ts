import { UserGender } from '../../components/atoms/Avatar/types/types';

export enum LOADING_STATE {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  PENDING = 'PENDING',
}

export type DialogMessageType = {
  messageId: number;
  messageText: string;
  from: string;
};

export type CurrentDialogInfoType = {
  username: string;
  lastSeen: string;
  id: string;
  gender: UserGender;
};

export type GendersListType = {
  id: string;
  gender: string;
};

export type DialogResponseData = [
  {
    id: string;
    messages: DialogMessageType[];
  }
];
