import classNames from 'classnames';
import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';
import UserListItem from '../../molecules/UserListItem';
import { USERS } from './contants/constants';

import './userList.scss';

interface IUserList {
  isVisibleUserList: boolean;
  listRef: React.RefObject<HTMLDivElement>;
}

const UserList: React.FC<IUserList> = ({ isVisibleUserList, listRef }): React.ReactElement => {
  const classProps = classNames('user-list', {
    ['user-list_active']: isVisibleUserList,
  });

  return (
    <div ref={listRef} className={classProps}>
      {USERS.map((user) => (
        <UserListItem
          key={user.id}
          username={user.username}
          userGender={user.gender}
          lastMessage={user.lastMessage}
          isCurrentUserLastMessage={user.isCurrentUserLastMessage}
        />
      ))}
    </div>
  );
};

export default UserList;
