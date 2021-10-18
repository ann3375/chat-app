import React from 'react';
import classNames from 'classnames';
import { TypographyType, TypographyTypeStyle } from './types/types';

import './typographyStyle.scss';

interface ITypography {
  variant: TypographyTypeStyle;
  children: React.ReactNode;
}

const Typography: React.FC<ITypography> = ({ variant, children, ...props }) => {
  const Component = TypographyType[variant];
  return (
    <Component
      className={classNames({
        typography: true,
        [`typography_variant_${variant}`]: variant,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
