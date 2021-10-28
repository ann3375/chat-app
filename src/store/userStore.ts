import { makeAutoObservable, runInAction } from 'mobx';
import { LOADING_STATE } from './types/types';

class UserStore {
  user = {
    username: '',
    isUserAuthenticate: false,
  };
  isLoading: LOADING_STATE = LOADING_STATE.NEVER;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(username: string) {
    this.user = {
      username,
      isUserAuthenticate: true,
    };
  }

  setLoadingState(loadingState: LOADING_STATE) {
    this.isLoading = loadingState;
  }
}

export const userStore = new UserStore();
