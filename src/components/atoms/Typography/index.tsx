import React from 'react';
import classNames from 'classnames';
import { TypographyType, TypographyTypeStyle } from './types/types';
import { ColorType } from '../Icon/types/types';

import './typographyStyle.scss';

interface ITypography {
  variant: TypographyTypeStyle;
  children: React.ReactNode;
  color?: ColorType;
}

const Typography: React.FC<ITypography> = ({ variant, children, color, ...props }) => {
  const Component = TypographyType[variant];
  return (
    <Component
      className={classNames('typography', {
        [`typography_variant_${variant}`]: variant,
        [`typography_color_${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
