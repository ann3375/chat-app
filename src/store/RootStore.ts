import { createContext } from 'react';
import { CurrentDialogStore } from './currentDialogStore';
import { UserListStore } from './userListStore';
import { UserStore } from './userStore';

export class RootStore {
  userStore = new UserStore(this);
  userListStore = new UserListStore(this);
  currentDialogStore = new CurrentDialogStore(this);

  constructor() {
    this.userStore = new UserStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
