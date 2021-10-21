import React from 'react';
import Avatar from '../../atoms/Avatar';
import { AvatarSize, UserGender } from '../../atoms/Avatar/types/types';
import Typography from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import Wrapper from '../../atoms/Wrapper';

import './statusBar.scss';

interface IStatusBar {
  username: string;
  userStatus: string;
  gender: UserGender;
}

const StatusBar: React.FC<IStatusBar> = ({ username, userStatus, gender }) => {
  return (
    <Wrapper flex row className="status-bar">
      <Avatar size={AvatarSize.small} gender={gender} />
      <Wrapper flex column>
        <Typography variant={TypographyTypeStyle.h3}>{username}</Typography>
        <Typography variant={TypographyTypeStyle.p1}>{userStatus}</Typography>
      </Wrapper>
    </Wrapper>
  );
};

export default StatusBar;
