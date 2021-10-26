import { makeAutoObservable } from 'mobx';
import { UserGender } from '../components/atoms/Avatar/types/types';
import { IUserListItem } from '../components/molecules/UserListItem';

class UserListStore {
  userList: IUserListItem[] = [
    {
      id: '1',
      userGender: UserGender.male,
      username: 'John BobBobBobBobBobBobBob',
      lastMessage: 'Real Eyes realize real ricericericericericerice',
    },
    {
      id: '12',
      userGender: UserGender.male,
      username: 'John Bobinsky',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '13',
      userGender: UserGender.noGender,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '14',
      userGender: UserGender.male,
      username: 'John Bobuladfsdf',
      lastMessage: 'Real Eyes realize real rice',
      isCurrentUserLastMessage: true,
    },
    {
      id: '15',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '16',
      userGender: UserGender.female,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '17',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '18',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '19',
      userGender: UserGender.male,
      username: 'John Bobsdfsdfsdf',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '111',
      userGender: UserGender.female,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '112',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '113',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '114',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },

    {
      id: '115',
      userGender: UserGender.female,
      username: 'John Bob',
      isCurrentUserLastMessage: true,
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '116',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '117',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
    {
      id: '118',
      userGender: UserGender.male,
      username: 'John Bob',
      lastMessage: 'Real Eyes realize real rice',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setUserList(userList: IUserListItem[]) {
    this.userList = userList;
  }
}

export const userListStore = new UserListStore();
