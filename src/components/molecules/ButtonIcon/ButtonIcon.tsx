import React from 'react';
import Button from '../../atoms/Button';
import { ButtonSize, ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import Icon from '../../atoms/Icon';
import { IconColor, IconName } from '../../atoms/Icon/types/types';
import Wrapper from '../../atoms/Wrapper';

import './buttonIcon.scss';

interface IButtonIcon {
  iconName: IconName;
  buttonType: ButtonType;
  iconColor: IconColor;
  isDisabled?: boolean;
}

const ButtonIcon: React.FC<IButtonIcon> = ({ iconName, buttonType, iconColor, isDisabled }) => {
  return (
    <Wrapper className="button-icon-wrapper">
      <Button
        type={buttonType}
        variant={ButtonVariant.icon}
        size={ButtonSize.small}
        isDisabled={isDisabled}
      >
        <Icon name={iconName} color={iconColor} />
      </Button>
    </Wrapper>
  );
};

export default ButtonIcon;
