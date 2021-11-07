import { makeAutoObservable, runInAction } from 'mobx';
import { URL_API } from '../services/contants';
import { RootStore } from './RootStore';
import { LOADING_STATE } from './types/types';

type Genders = {
  id: string;
  gender: string;
};

export class GenderListStore {
  rootStore: RootStore;
  genderList: Genders[] = [];
  genderListFetchError = '';
  loadingState = LOADING_STATE.NEVER;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setGenderList(genderList: Genders[]): void {
    this.genderListFetchError = '';
    this.genderList = genderList;
  }

  setError(error: string): void {
    this.genderListFetchError = error;
  }

  *fetchGenderList(): Generator<Promise<void>, void, Genders[]> {
    this.genderList = [];
    this.loadingState = LOADING_STATE.PENDING;

    try {
      yield fetch(`${URL_API}/auth`, {
        method: 'GET',
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((res) => {
            runInAction(() => {
              this.setGenderList(res.genders);
            });
          });
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
