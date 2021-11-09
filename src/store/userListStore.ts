import { makeAutoObservable } from 'mobx';
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
    this.loadingState = LOADING_STATE.LOADED;
  }
}
