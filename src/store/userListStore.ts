import { makeAutoObservable, runInAction } from 'mobx';
import { IUserListItem } from '../components/molecules/UserListItem';
import { LOADING_STATE } from './types/types';

class UserListStore {
  userList: IUserListItem[] = [];

  loadingState: LOADING_STATE = LOADING_STATE.NEVER;

  constructor() {
    makeAutoObservable(this);
  }

  setUserList(userList: IUserListItem[]) {
    this.userList = userList;
  }

  async fetchUserList() {
    this.userList = [];
    this.loadingState = LOADING_STATE.PENDING;
    try {
      const users = await fetch('http://localhost:3004/users').then((res) => res.json());
      runInAction(() => {
        this.userList = users;
        this.loadingState = LOADING_STATE.LOADED;
      });
    } catch (error) {
      runInAction(() => {
        this.loadingState = LOADING_STATE.ERROR;
      });
    }
  }
}

export const userListStore = new UserListStore();
