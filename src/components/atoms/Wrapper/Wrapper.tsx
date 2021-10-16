import classNames from 'classnames';
import React from 'react';

import './wrapper.scss';

interface IWrapper {
  children: React.ReactNode;
  className?: string;
  flex?: 'column' | 'row';
  fullWidth?: boolean;
}

const Wrapper: React.FC<IWrapper> = ({ children, flex, fullWidth, className }) => {
  const classProps = classNames('wrapper', {
    [`wrapper_flex_${flex}`]: flex,
    [`wrapper_${fullWidth}`]: fullWidth,
    [`${className}`]: className,
  });
  return <div className={classProps}>{children}</div>;
};

export default Wrapper;
