import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { Icon } from '../../atoms/Icon';
import { IconName } from '../../atoms/Icon/types/types';

import './spinner.scss';
import classNames from 'classnames';

interface ISpinner {
  className?: string;
}

export const Spinner: React.FC<ISpinner> = ({ className }) => {
  const classProps = classNames('spinner', {
    [`${className}`]: className,
  });
  return (
    <Wrapper className={classProps}>
      <Icon name={IconName.spiner} className="spinner__icon" />
    </Wrapper>
  );
};
