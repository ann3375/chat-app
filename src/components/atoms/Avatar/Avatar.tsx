import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { IconName } from '../Icon/types/types';
import { UserGender, AvatarSize } from './types/types';

import './avatar.scss';

interface IAvatar {
  size: AvatarSize;
  gender?: UserGender;
  noUser?: boolean;
}

const Avatar: React.FC<IAvatar> = ({ size, gender, noUser }) => {
  const isMaleAvatar = gender === UserGender.male;

  const classProps = classNames('avatar', {
    [`avatar_${size}`]: size,
  });

  return (
    <Icon
      className={classProps}
      name={
        isMaleAvatar ? IconName.maleAvatar : noUser ? IconName.noUserAvatar : IconName.femaleAvatar
      }
    />
  );
};

export default Avatar;
