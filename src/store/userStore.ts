import { makeAutoObservable, runInAction } from 'mobx';
import { URL_API } from '../services/contants';
import { localStorageUtils } from '../utils/localStorageUtils';
import { RootStore } from './RootStore';
import { LOADING_STATE } from './types/types';

const username = localStorageUtils.getUsername();

export class UserStore {
  rootStore: RootStore;
  user = {
    username: username ? username : '',
    isUserAuthenticate: localStorageUtils.getAccessToken(),
  };
  loadingState: LOADING_STATE = LOADING_STATE.NEVER;
  userAuthDataError = '';

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setUserInfo(username: string, accessToken: string): void {
    this.user = {
      username,
      isUserAuthenticate: accessToken,
    };
    localStorageUtils.setAccessToken(accessToken);
    localStorageUtils.setUsername(username);
  }

  clearUserInfo(): void {
    localStorageUtils.clearLocalStorage();

    this.user = {
      username: '',
      isUserAuthenticate: null,
    };
  }

  setError(error: string): void {
    this.userAuthDataError = error;
  }

  clearError(): void {
    this.userAuthDataError = '';
  }

  setLoadingState(loadingState: LOADING_STATE): void {
    this.loadingState = loadingState;
  }

  async sendUserAuthData<R>(userData: FormData, url: string): Promise<R | undefined> {
    this.loadingState = LOADING_STATE.PENDING;

    try {
      return await fetch(`${URL_API}${url}`, {
        method: 'POST',
        body: userData,
      }).then((response) => {
        if (response.status === 200) {
          if (this.userAuthDataError) {
            runInAction(() => {
              this.clearError();
            });
          }
          return response.json();
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
      this.loadingState = LOADING_STATE.LOADED;
    }
  }
}
