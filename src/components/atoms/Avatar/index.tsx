import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { UserGender, AvatarSize } from './types/types';
import { checkUserAvatar } from '../../../utils/checkUserAvatar';

import './avatar.scss';

interface IAvatar {
  size: AvatarSize;
  gender: UserGender;
  className?: string;
  isNoUser?: boolean;
}

export const Avatar: React.FC<IAvatar> = ({ size, gender, className, isNoUser }) => {
  const classProps = classNames('avatar', {
    [`avatar_size_${size}`]: size,
    [`${className}`]: className,
  });
  return <Icon className={classProps} name={checkUserAvatar(gender)} />;
};
