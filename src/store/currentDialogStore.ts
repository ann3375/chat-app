import { makeAutoObservable, runInAction } from 'mobx';
import { UserGender } from '../components/atoms/Avatar/types/types';
import { URL_API } from '../services/contants';
import { RootStore } from './RootStore';
import { CurrentDialogInfoType, DialogMessageType, LOADING_STATE } from './types/types';

export class CurrentDialogStore {
  rootStore: RootStore;
  dialogInfo: CurrentDialogInfoType = {
    username: '',
    gender: UserGender.noGender,
    lastSeen: '',
    id: '',
  };
  dialogMessages: DialogMessageType[] = [];
  dialogMessagesError = '';
  loadingState: LOADING_STATE = LOADING_STATE.NEVER;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setCurrentDialogInfo(username: string, lastSeen: string, id: string, gender: UserGender): void {
    runInAction(() => {
      this.dialogInfo = {
        username,
        lastSeen,
        id,
        gender,
      };
    });
  }

  setError(error: string): void {
    this.dialogMessagesError = error;
  }

  clearError(): void {
    this.dialogMessagesError = '';
  }

  async sendMessageFile<R>(files: FormData, url: string): Promise<R | string | undefined> {
    this.loadingState = LOADING_STATE.PENDING;

    try {
      return await fetch(`${URL_API}${url}`, {
        method: 'POST',
        body: files,
      }).then((response) => {
        if (response.status === 200) {
          if (this.dialogMessagesError) {
            runInAction(() => {
              this.clearError();
            });
          }
          return response.text();
        } else {
          response.text().then((error) => {
            runInAction(() => {
              this.setError(error);
            });
          });
        }
      });
    } catch (e) {
      runInAction(() => {
        this.setError((e as Error).message);
      });
    } finally {
      runInAction(() => {
        this.loadingState = LOADING_STATE.LOADED;
      });
    }
  }
}
