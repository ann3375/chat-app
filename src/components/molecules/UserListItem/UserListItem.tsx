import React from 'react';
import Avatar from '../../atoms/Avatar';
import StyledText from '../../atoms/StyledText';
import Typography from '../../atoms/Typography';
import { UserGender, AvatarSize } from '../../atoms/Avatar/types/types';
import { ColorType } from '../../atoms/Icon/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

import './userListItem.scss';
import Wrapper from '../../atoms/Wrapper';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';

interface IUserListItem {
  username: string;
  userGender: UserGender;
  isCurrentUserLastMessage?: boolean;
  lastMessage?: string;
}

const UserListItem: React.FC<IUserListItem> = ({
  username,
  userGender,
  isCurrentUserLastMessage,
  lastMessage,
}) => {
  return (
    <Wrapper variant={WrapperTypes.div} flex align="center" className="user-list__item">
      <Avatar size={AvatarSize.medium} gender={userGender} />
      <div className={'item__inner'}>
        <Typography variant={TypographyTypeStyle.h4}>{username}</Typography>
        <Typography variant={TypographyTypeStyle.p2}>
          {isCurrentUserLastMessage && <StyledText color={ColorType.primary}>You: </StyledText>}
          {lastMessage}
        </Typography>
      </div>
    </Wrapper>
  );
};

export default UserListItem;
