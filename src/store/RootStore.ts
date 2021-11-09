import { createContext } from 'react';
import { GenderListStore } from './genderListStore';
import { CurrentDialogStore } from './currentDialogStore';
import { UserListStore } from './userListStore';
import { UserStore } from './userStore';

export class RootStore {
  userStore = new UserStore(this);
  userListStore = new UserListStore(this);
  currentDialogStore = new CurrentDialogStore(this);
  genderListStore = new GenderListStore(this);

  constructor() {
    this.userStore = new UserStore(this);
    this.genderListStore = new GenderListStore(this);
    this.currentDialogStore = new CurrentDialogStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
