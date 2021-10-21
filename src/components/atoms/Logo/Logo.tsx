import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import { IconName } from '../Icon/types/types';
import { LogoSize } from './types/types';

import './logo.scss';

interface ILogo {
  size: LogoSize;
}

const Logo: React.FC<ILogo> = ({ size }) => {
  const classProps = classNames('logo-wrapper', {
    [`logo-wrapper_${size}`]: size,
  });

  return (
    <Wrapper flex className={classProps}>
      <Icon name={IconName.logo} />
    </Wrapper>
  );
};

export default Logo;
