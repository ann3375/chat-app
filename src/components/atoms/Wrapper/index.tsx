import React from 'react';
import classNames from 'classnames';

export interface IWrapper {
  children?: React.ReactNode;
  className?: string;
  flex?: boolean;
  column?: boolean;
  row?: boolean;
  align?: 'center' | 'flex-start';
}

export const Wrapper: React.FC<IWrapper> = ({
  className,
  children,
  flex,
  row,
  align,
  column,
  ...props
}) => {
  const classProps = classNames('', {
    ['wrapper_flex']: flex,
    ['wrapper_flex_column']: column,
    ['wrapper_flex_row']: row,
    [`wrapper_flex_align_${align}`]: align,
    [`${className}`]: className,
  });
  return (
    <div className={classProps} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;