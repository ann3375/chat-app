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
    [`flex_${row}`]: row,
    [`flex_${column}`]: column,
    [`grid`]: grid,
  });

  return <main className={classProps}>{children}</main>;
};

export default MainContainer;
