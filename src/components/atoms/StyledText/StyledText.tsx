import React from 'react';

interface IStyledText {
  children: React.ReactNode;
  color: string;
}

const StyledText: React.FC<IStyledText> = ({ children, color }) => {
  return <span style={{ color: color, fontFamily: 'inherit' }}>{children}</span>;
};

export default StyledText;
