import React from 'react';
import classNames from 'classnames';
import { WrapperType, WrapperTypes } from './types/types';

interface IWrapper {
  variant: WrapperTypes;
  children?: React.ReactNode;
  className?: string;
  flex?: boolean;
  column?: boolean;
  fullWidth?: boolean;
  align?: 'center' | 'flex-start';
}

const Wrapper: React.FC<IWrapper> = ({
  variant,
  className,
  children,
  flex,
  align,
  column,
  fullWidth,
  ...props
}) => {
  const Component = WrapperType[variant];
  const classProps = classNames({
    ['flex']: flex,
    ['flex_column']: column,
    [`flex_align_${align}`]: align,
    ['full-w']: fullWidth,
    [`${className}`]: className,
  });
  return (
    <Component className={classProps} {...props}>
      {children}
    </Component>
  );
};

export default Wrapper;
