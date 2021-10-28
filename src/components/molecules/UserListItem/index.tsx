import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from '../../atoms/Avatar';
import { Typography } from '../../atoms/Typography';
import { UserGender, AvatarSize } from '../../atoms/Avatar/types/types';
import { ColorType } from '../../atoms/Icon/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { SCREENS } from '../../../router/endpoints';

import './userListItem.scss';

export interface IUserListItem {
  username: string;
  userGender: UserGender;
  id: string;
  setDialogInfo: (username: string, lastseen: string, id: string) => void;
  isCurrentUserLastMessage?: boolean;
  lastMessage?: string;
}

export const UserListItem = React.memo(function UserListItem({
  username,
  userGender,
  id,
  isCurrentUserLastMessage,
  lastMessage,
  setDialogInfo,
}: IUserListItem) {
  return (
    <NavLink
      to={`${SCREENS.SCREEN_DIALOGS}/${id}`}
      className="user-list__link"
      activeClassName="user-list__link_active"
      onClick={() => setDialogInfo(username, 'asd', id)}
    >
      <Avatar size={AvatarSize.medium} gender={userGender} className="link__avatar" />
      <div>
        <Typography variant={TypographyTypeStyle.h4} className={'link__username'}>
          {username}
        </Typography>
        <Typography variant={TypographyTypeStyle.p2} className={'link__last-message'}>
          {isCurrentUserLastMessage && (
            <Typography variant={TypographyTypeStyle.span} color={ColorType.primary}>
              You:{' '}
            </Typography>
          )}
          {lastMessage}
        </Typography>
      </div>
    </NavLink>
  );
});
