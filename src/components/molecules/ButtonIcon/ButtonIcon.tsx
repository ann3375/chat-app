import React from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';

interface IButtonIcon {
  iconName: IconName;
  type: ButtonType;
  color: ColorType;
  isDisabled?: boolean;
}

const ButtonIcon: React.FC<IButtonIcon> = ({ iconName, type, color, isDisabled }) => {
  return (
    <Button
      type={type}
      variant={ButtonVariant.icon}
      size={ButtonSize.small}
      isDisabled={isDisabled}
    >
      <Icon name={iconName} color={color} />
    </Button>
  );
};

export default ButtonIcon;
