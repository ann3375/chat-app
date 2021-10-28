import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { Icon } from '../../atoms/Icon';
import { IconName } from '../../atoms/Icon/types/types';

import './spinner.scss';

export const Spinner = (): React.ReactElement => {
  return (
    <Wrapper className="spinner">
      <Icon name={IconName.spiner} className="spinner__icon" />
    </Wrapper>
  );
};
