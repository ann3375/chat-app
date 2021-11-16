import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './RootStore';
import { UserGender } from '../components/atoms/Avatar/types/types';
import { URL_API } from '../services/contants';
import { CurrentDialogInfoType, DialogType, LOADING_STATE, MessageType } from './types/types';

export class DialogStore {
  rootStore: RootStore;
  dialogsList: DialogType[] = [];
  currentDialogInfo: CurrentDialogInfoType = {
    companion: {
      username: '',
      gender: UserGender.noGender,
      lastSeen: '',
    },
  };
  currentDialogId = '';
  currentDialogError = '';
  loadingState: LOADING_STATE = LOADING_STATE.NEVER;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  getDialogInfo(): DialogType | undefined {
    const currentDialog = this.dialogsList.find(
      (dialog) => dialog.dialogId === this.currentDialogId
    );
    return currentDialog;
  }

  addDialogToDialogList(): void {
    const currentDialog = this.getDialogInfo();

    if (!currentDialog) {
      const newDialog = {
        dialogId: this.currentDialogId,
        dialogMessages: [],
      };
      this.dialogsList.push(newDialog);
    }
  }

  setCurrentDialogInfo(username: string, lastSeen: string, id: string, gender: UserGender): void {
    runInAction(() => {
      this.currentDialogInfo.companion = {
        username,
        lastSeen,
        gender,
      };
      this.currentDialogId = id;
      this.addDialogToDialogList();
    });
  }

  updateCurrentDialogMessages(message: MessageType): void {
    const currentDialog = this.getDialogInfo();

    runInAction(() => {
      currentDialog?.dialogMessages.push(message);
    });
  }

  setError(error: string): void {
    this.currentDialogError = error;
  }

  clearError(): void {
    this.currentDialogError = '';
  }

  async sendMessageFile<R>(files: FormData, url: string): Promise<R | string | undefined> {
    this.loadingState = LOADING_STATE.PENDING;

    try {
      return await fetch(`${URL_API}${url}`, {
        method: 'POST',
        body: files,
      }).then((response) => {
        if (response.status === 200) {
          if (this.currentDialogError) {
            runInAction(() => {
              this.clearError();
            });
          }
          return response.text();
        } else {
          response.text().then((error) => {
            runInAction(() => {
              console.log('error', error);
              this.setError(error);
            });
          });
        }
      });
    } catch (e) {
      runInAction(() => {
        const error = (e as Error).message;
        this.setError(
          error === 'Failed to fetch'
            ? 'Возникла ошибка при отправке файла, попробуйте снова...'
            : error
        );
      });
    } finally {
      runInAction(() => {
        this.loadingState = LOADING_STATE.LOADED;
      });
    }
  }
}
