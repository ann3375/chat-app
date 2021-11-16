import { IWSAction } from '../../../../services/types';

export interface IMessageForm {
  WSAction: IWSAction;
}

export interface IFormInput {
  messageText: string;
  files: File;
}
