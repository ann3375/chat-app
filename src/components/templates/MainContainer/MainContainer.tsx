import classNames from 'classnames';
import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';

import './mainContainer.scss';

interface IMainContainer {
  children: React.ReactNode;
  page?: string;
  flex?: boolean;
  row?: boolean;
  column?: boolean;
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

  return (
    <Wrapper className={classProps} variant={WrapperTypes.main}>
      {children}
    </Wrapper>
  );
};

export default MainContainer;
