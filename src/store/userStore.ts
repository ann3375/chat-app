import { makeAutoObservable } from 'mobx';

class UserStore {
  user = {
    username: '',
    isUserAuthenticate: false,
  };
  isLoading: null | boolean = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(username: string) {
    this.user = {
      username,
      isUserAuthenticate: true,
    };
  }
}

export const userStore = new UserStore();
