import React from 'react';
import Icon from '../../atoms/Icon';
import { IconName } from '../../atoms/Icon/types/types';
import Wrapper from '../../atoms/Wrapper';

import './spinner.scss';

const Spinner = (): React.ReactElement => {
  return (
    <Wrapper className="spinner">
      <Icon name={IconName.spiner} />
    </Wrapper>
  );
};

export default Spinner;
