import React from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Wrapper from '../../atoms/Wrapper';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';

import './buttonIcon.scss';

interface IButtonIcon {
  iconName: IconName;
  buttonType: ButtonType;
  ColorType: ColorType;
  isDisabled?: boolean;
}

const ButtonIcon: React.FC<IButtonIcon> = ({ iconName, buttonType, ColorType, isDisabled }) => {
  return (
    <Wrapper variant={WrapperTypes.div} className="button-icon-wrapper">
      <Button
        type={buttonType}
        variant={ButtonVariant.icon}
        size={ButtonSize.small}
        isDisabled={isDisabled}
      >
        <Icon name={iconName} color={ColorType} />
      </Button>
    </Wrapper>
  );
};

export default ButtonIcon;
