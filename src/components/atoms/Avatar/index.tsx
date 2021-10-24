import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types/types';
import { UserGender, AvatarSize } from './types/types';

import './avatar.scss';

interface IAvatar {
  size: AvatarSize;
  gender: UserGender;
  className?: string;
  isNoUser?: boolean;
}

export const Avatar: React.FC<IAvatar> = ({ size, gender, className, isNoUser }) => {
  const isMaleAvatar = gender === UserGender.male;

  const classProps = classNames('avatar', {
    [`avatar_size_${size}`]: size,
    [`${className}`]: className,
  });

  return (
    <Icon
      className={classProps}
      name={isMaleAvatar ? IconName.maleAvatar : IconName.femaleAvatar}
    />
  );
};

export default Avatar;
