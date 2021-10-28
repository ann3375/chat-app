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
};
