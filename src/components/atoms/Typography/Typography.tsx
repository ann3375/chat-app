import React from 'react';
import classNames from 'classnames';
import { TypographyType, TypographyTypeStyle } from './types/types';

import './typographyStyle.scss';

interface ITypography {
  variant: TypographyTypeStyle;
  children: React.ReactChild;
}

const Typography: React.FC<ITypography> = ({ variant, children, ...props }) => {
  const Component: any = TypographyType[variant];
  return (
    <Component
      className={classNames({
        typography: true,
        [`typography__variant_${variant}`]: variant,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
