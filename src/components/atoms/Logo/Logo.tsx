import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import { IconName } from '../Icon/types/types';
import { LogoSize } from './types/types';
import { WrapperTypes } from '../Wrapper/types/types';

import './logo.scss';

interface ILogo {
  size: LogoSize;
}

const Logo: React.FC<ILogo> = ({ size }) => {
  const classProps = classNames('logo-wrapper', {
    [`logo-wrapper_${size}`]: size,
  });

  return (
    <Wrapper variant={WrapperTypes.div} className={classProps}>
      <Icon name={IconName.logo} height={`100%`} />
    </Wrapper>
  );
};

export default Logo;
