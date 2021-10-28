import { makeAutoObservable, runInAction } from 'mobx';
import { LOADING_STATE } from './types/types';

class CurrentDialogStore {
  currentDialogInfo = {
    username: '',
    lastSeen: '',
    id: '',
  };
  dialogMessages = [];
  loadingState: LOADING_STATE = LOADING_STATE.NEVER;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentDialogInfo(username: string, lastSeen: string, id: string) {
    this.currentDialogInfo = {
      username,
      lastSeen,
      id,
    };
  }

  async fetchDialogMessages(id: string) {
    this.dialogMessages = [];
    this.loadingState = LOADING_STATE.PENDING;
    try {
      const dialogMessages = await fetch(`http://localhost:3004/dialogs?id=${id}`).then((res) =>
        res.json()
      );
      runInAction(() => {
        this.dialogMessages = dialogMessages[0].messages;
        this.loadingState = LOADING_STATE.LOADED;
      });
    } catch (error) {
      runInAction(() => {
        this.loadingState = LOADING_STATE.ERROR;
      });
    }
  }
}

export const currentDialogStore = new CurrentDialogStore();
