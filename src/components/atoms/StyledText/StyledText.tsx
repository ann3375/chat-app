import React from 'react';
import classNames from 'classnames';

interface IStyledText {
  children: React.ReactNode;
  color: string;
}

const StyledText: React.FC<IStyledText> = ({ children, color }) => {
  const classProps = classNames('typography', {
    [`typography_color_${color}`]: color,
  });
  return (
    <span className={classProps} style={{ fontFamily: 'inherit' }}>
      {children}
    </span>
  );
};

export default StyledText;
