import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from '../../atoms/Avatar';
import { Typography } from '../../atoms/Typography';
import { UserGender, AvatarSize } from '../../atoms/Avatar/types/types';
import { Wrapper } from '../../atoms/Wrapper';
import { ColorType } from '../../atoms/Icon/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { SCREENS } from '../../../router/endpoints';

import './userListItem.scss';

export interface IUserListItem {
  name: string;
  gender: UserGender;
  id: string;
  setDialogInfo: (username: string, lastseen: string, id: string, gender: UserGender) => void;
  isCurrentUserLastMessage?: boolean;
  lastMessage?: string;
}

export const UserListItem = React.memo(function UserListItem({
  name,
  gender,
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
      onClick={() => setDialogInfo(name, 'Last seen 3 seconds ago', id, gender)}
    >
      <Avatar size={AvatarSize.medium} gender={gender} className="link__avatar" />
      <Wrapper className="link__info">
        <Typography variant={TypographyTypeStyle.h4} className={'link__username'}>
          {name}
        </Typography>
        <Typography variant={TypographyTypeStyle.p2} className={'link__last-message'}>
          {isCurrentUserLastMessage && (
            <Typography variant={TypographyTypeStyle.span} color={ColorType.primary}>
              You:{' '}
            </Typography>
          )}
          {lastMessage}Last message from user
        </Typography>
      </Wrapper>
    </NavLink>
  );
});
