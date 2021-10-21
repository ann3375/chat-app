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

const Wrapper: React.FC<IWrapper> = ({
  className,
  children,
  flex,
  row,
  align,
  column,
  ...props
}) => {
  const classProps = classNames({
    ['flex']: flex,
    ['flex_column']: column,
    ['flex_row']: row,
    [`flex_align_${align}`]: align,
    [`${className}`]: className,
  });
  return (
    <div className={classProps} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
