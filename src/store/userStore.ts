import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';
import { LOADING_STATE } from './types/types';

export class UserStore {
  rootStore: RootStore;
  user = {
    username: '',
    isUserAuthenticate: false,
  };
  isLoading: LOADING_STATE = LOADING_STATE.NEVER;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setUser(username: string): void {
    this.user = {
      username,
      isUserAuthenticate: true,
    };
  }

  setLoadingState(loadingState: LOADING_STATE): void {
    this.isLoading = loadingState;
  }
}
