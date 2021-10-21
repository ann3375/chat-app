import React from 'react';
import Avatar from '../../atoms/Avatar';
import Typography from '../../atoms/Typography';
import Wrapper from '../../atoms/Wrapper';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { AvatarSize, UserGender } from '../../atoms/Avatar/types/types';

import './userStatus.scss';

interface IUserStatus {
  username: string;
  userStatus: string;
  gender: UserGender;
}

const UserStatus: React.FC<IUserStatus> = ({ username, userStatus, gender }) => {
  return (
    <Wrapper flex row className="user-status">
      <Avatar size={AvatarSize.small} gender={gender} />
      <Wrapper flex column>
        <Typography variant={TypographyTypeStyle.h3}>{username}</Typography>
        <Typography variant={TypographyTypeStyle.p1}>{userStatus}</Typography>
      </Wrapper>
    </Wrapper>
  );
};

export default UserStatus;
