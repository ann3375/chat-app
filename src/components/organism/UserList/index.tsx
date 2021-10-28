import React from 'react';
import classNames from 'classnames';
import { IUserListItem, UserListItem } from '../../molecules/UserListItem';
import { UserListNotification } from '../../molecules/UserListNotification';
import { Spinner } from '../../molecules/Spinner';

import './userList.scss';

interface IUserList {
  isVisibleUserList: boolean;
  listRef: React.RefObject<HTMLDivElement>;
  handleVisibleUserList: () => void;
  setDialogInfo: (username: string, lastseen: string, id: string) => void;
  users: IUserListItem[];
  isLoaded: boolean;
}

export const UserList: React.FC<IUserList> = ({
  isVisibleUserList,
  listRef,
  users,
  isLoaded,
  setDialogInfo,
  handleVisibleUserList,
}): React.ReactElement => {
  const classProps = classNames('user-list', {
    ['user-list_active']: isVisibleUserList,
  });

  return (
    <div ref={listRef} className={classProps} onClick={handleVisibleUserList}>
      {!isLoaded ? (
        <Spinner />
      ) : users.length ? (
        users.map((user) => (
          <UserListItem
            setDialogInfo={setDialogInfo}
            key={user.id}
            id={user.id}
            username={user.username}
            userGender={user.userGender}
            lastMessage={user.lastMessage}
            isCurrentUserLastMessage={user.isCurrentUserLastMessage}
          />
        ))
      ) : (
        <UserListNotification className="user-list__no-user-block" />
      )}
    </div>
  );
};
