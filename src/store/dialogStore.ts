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

  getDialogInfo(id: string): DialogType | undefined {
    return this.dialogsList.find((dialog) => dialog.dialogId === id);
  }

  setCurrentDialogInfo(username: string, lastSeen: string, id: string, gender: UserGender): void {
    this.currentDialogInfo.companion = {
      username,
      lastSeen,
      gender,
    };
    this.currentDialogId = id;
  }

  updateCurrentDialogMessages(message: MessageType): void {
    const id = [message.fromUser, message.forUser].sort().toString();
    const currentUsername = this.rootStore.userStore.userInfo.username;

    if (message.forUser === currentUsername || message.fromUser === currentUsername) {
      const currentDialog = this.getDialogInfo(id);

      if (!currentDialog) {
        const newDialog = {
          dialogId: id,
          dialogMessages: [message],
        };
        this.dialogsList.push(newDialog);
      }

      currentDialog?.dialogMessages.push(message);
    }
  }

  setError(error: string): void {
    this.currentDialogError = error;
  }

  clearError(): void {
    this.currentDialogError = '';
  }

  async sendMessageFile<R>(files: FormData, url: string): Promise<R | string | undefined> {
    runInAction(() => {
      this.loadingState = LOADING_STATE.PENDING;
    });
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
