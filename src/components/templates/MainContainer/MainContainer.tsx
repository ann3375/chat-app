import React from 'react';
import classNames from 'classnames';
import { IWrapper } from '../../atoms/Wrapper/Wrapper';

import './mainContainer.scss';

interface IMainContainer extends Omit<IWrapper, 'className' | 'align'> {
  page?: string;
  grid?: boolean;
}

const MainContainer: React.FC<IMainContainer> = ({ children, page, flex, row, column, grid }) => {
  const classProps = classNames('main-container', {
    [`main-container-${page}`]: page,
    [`flex`]: flex,
    [`flex_row`]: row,
    [`flex_column`]: column,
  });

  return <main className={classProps}>{children}</main>;
};

export default MainContainer;
