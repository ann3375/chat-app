import { makeAutoObservable, runInAction } from 'mobx';
import { IUserListItem } from '../components/molecules/UserListItem';
import { RootStore } from './RootStore';
import { LOADING_STATE } from './types/types';

export class UserListStore {
  rootStore: RootStore;
  userList: IUserListItem[] = [];

  loadingState: LOADING_STATE = LOADING_STATE.NEVER;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setUserList(userList: IUserListItem[]): void {
    this.userList = userList;
  }

  async fetchUserList(): Promise<void> {
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
