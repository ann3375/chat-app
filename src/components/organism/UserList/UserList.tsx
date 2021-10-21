import React from 'react';
import classNames from 'classnames';
import UserListItem from '../../molecules/UserListItem';
import { USERS } from './contants/constants';

import './userList.scss';

interface IUserList {
  isVisibleUserList: boolean;
  listRef: React.RefObject<HTMLDivElement>;
  handleVisibleUserList: () => void;
}

const UserList: React.FC<IUserList> = ({
  isVisibleUserList,
  listRef,
  handleVisibleUserList,
}): React.ReactElement => {
  const classProps = classNames('user-list', {
    ['user-list_active']: isVisibleUserList,
  });

  return (
    <div ref={listRef} className={classProps} onClick={handleVisibleUserList}>
      {USERS.map((user) => (
        <UserListItem
          key={user.id}
          id={user.id}
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
