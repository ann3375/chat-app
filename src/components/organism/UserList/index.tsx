import React from 'react';
import classNames from 'classnames';
import { IUserListItem, UserListItem } from '../../molecules/UserListItem';
import { UserListNotification } from '../../molecules/UserListNotification';
import { Spinner } from '../../molecules/Spinner';
import { UserGender } from '../../atoms/Avatar/types/types';

import './userList.scss';

interface IUserList {
  isVisibleUserList: boolean;
  listRef: React.RefObject<HTMLDivElement>;
  users: IUserListItem[];
  isLoaded: boolean;
  handleVisibleUserList: () => void;
  setDialogInfo: (username: string, lastseen: string, id: string, gender: UserGender) => void;
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
      {isLoaded ? (
        users.length ? (
          users.map((user, index) => (
            <UserListItem
              setDialogInfo={setDialogInfo}
              key={`${user.name}_${index}`}
              id={`${user.name}_${index}`}
              name={user.name}
              gender={user.gender}
              lastMessage={user.lastMessage}
              isCurrentUserLastMessage={user.isCurrentUserLastMessage}
            />
          ))
        ) : (
          <UserListNotification className="user-list__no-user-block" />
        )
      ) : (
        <Spinner className="user-list__spinner" />
      )}
    </div>
  );
};
