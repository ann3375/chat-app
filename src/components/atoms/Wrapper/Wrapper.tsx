import React from 'react';
import classNames from 'classnames';
import { WrapperType, WrapperTypes } from './types/types';

interface IWrapper {
  variant: WrapperTypes;
  children?: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<IWrapper> = ({ variant, className, children, ...props }) => {
  const Component = WrapperType[variant];
  const classProps = classNames({
    [`${className}`]: className,
  });
  return (
    <Component className={classProps} {...props}>
      {children}
    </Component>
  );
};

export default Wrapper;
