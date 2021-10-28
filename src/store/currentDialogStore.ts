import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './RootStore';
import { CurrentDialogInfoType, DialogMessageType, LOADING_STATE } from './types/types';

type DialogResponseData = [
  {
    id: string;
    messages: DialogMessageType[];
  }
];

export class CurrentDialogStore {
  rootStore: RootStore;
  dialogInfo: CurrentDialogInfoType = {
    username: '',
    lastSeen: '',
    id: '',
  };
  dialogMessages: DialogMessageType[] = [];
  loadingState: LOADING_STATE = LOADING_STATE.NEVER;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setCurrentDialogInfo(username: string, lastSeen: string, id: string): void {
    runInAction(() => {
      this.dialogInfo = {
        username,
        lastSeen,
        id,
      };
    });
  }

  *fetchDialogMessages(id: string): Generator<Promise<void>, void, DialogResponseData> {
    this.dialogMessages = [];
    this.loadingState = LOADING_STATE.PENDING;

    try {
      const dialogMessages = yield fetch(`http://localhost:3004/dialogs?id=${id}`).then((res) =>
        res.json()
      );
      this.dialogMessages = dialogMessages[0].messages;
      this.loadingState = LOADING_STATE.LOADED;
    } catch (error) {
      this.loadingState = LOADING_STATE.ERROR;
    }
  }
}
