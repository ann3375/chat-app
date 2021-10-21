import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../atoms/Avatar';
import StyledText from '../../atoms/StyledText';
import Typography from '../../atoms/Typography';
import { UserGender, AvatarSize } from '../../atoms/Avatar/types/types';
import { ColorType } from '../../atoms/Icon/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { Paths } from '../../../router/constants';

import './userListItem.scss';

interface IUserListItem {
  username: string;
  userGender: UserGender;
  id: string;
  isCurrentUserLastMessage?: boolean;
  lastMessage?: string;
}

const UserListItem: React.FC<IUserListItem> = ({
  username,
  userGender,
  id,
  isCurrentUserLastMessage,
  lastMessage,
}) => {
  return (
    <NavLink
      to={`${Paths.chat}/${id}`}
      className="user-list__item"
      activeClassName="user-list__item_active"
    >
      <Avatar size={AvatarSize.medium} gender={userGender} />
      <div className={'item__inner'}>
        <Typography variant={TypographyTypeStyle.h4}>{username}</Typography>
        <Typography variant={TypographyTypeStyle.p2}>
          {isCurrentUserLastMessage && <StyledText color={ColorType.primary}>You: </StyledText>}
          {lastMessage}
        </Typography>
      </div>
    </NavLink>
  );
};

export default React.memo(UserListItem);
