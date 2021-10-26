import React from 'react';
import classNames from 'classnames';
import { IUserListItem, UserListItem } from '../../molecules/UserListItem';
import { USERS } from './contants/constants';

import './userList.scss';
import { Avatar } from '../../atoms/Avatar';
import { AvatarSize, UserGender } from '../../atoms/Avatar/types/types';
import { Typography } from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

interface IUserList {
  isVisibleUserList: boolean;
  listRef: React.RefObject<HTMLDivElement>;
  handleVisibleUserList: () => void;
  users: IUserListItem[];
}

export const UserList: React.FC<IUserList> = ({
  isVisibleUserList,
  listRef,
  users,
  handleVisibleUserList,
}): React.ReactElement => {
  const classProps = classNames('user-list', {
    ['user-list_active']: isVisibleUserList,
  });

  return (
    <div ref={listRef} className={classProps} onClick={handleVisibleUserList}>
      {!users.length ? (
        USERS.map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            username={user.username}
            userGender={user.gender}
            lastMessage={user.lastMessage}
            isCurrentUserLastMessage={user.isCurrentUserLastMessage}
          />
        ))
      ) : (
        <div className="user-list__no-user-block">
          <Avatar size={AvatarSize.large} gender={UserGender.noGender} />
          <Typography variant={TypographyTypeStyle.p2} className="user-list__no-user-text">
            There is no other users yet
          </Typography>
        </div>
      )}
    </div>
  );
};
