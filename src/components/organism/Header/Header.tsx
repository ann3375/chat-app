import React from 'react';
import classNames from 'classnames';
import Logo from '../../atoms/Logo';
import StyledText from '../../atoms/StyledText';
import Typography from '../../atoms/Typography';
import ButtonIcon from '../../molecules/ButtonIcon';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { LogoSize } from '../../atoms/Logo/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { ButtonType } from '../../atoms/Button/types/types';

interface IHeader {
  isLoginPage?: boolean;
  isChatPage?: boolean;
}

const Header: React.FC<IHeader> = ({ isLoginPage, isChatPage }) => {
  const classProps = classNames('header', {
    [`header-login-page`]: isLoginPage,
    [`header-chat-page`]: isChatPage,
  });
  return (
    <header className={classProps}>
      <Logo size={LogoSize.large} />

      {isLoginPage ? (
        <Typography variant={TypographyTypeStyle.h1}>
          Wellcome to
          <StyledText color={ColorType.primary}> Chatty</StyledText>
          <StyledText color={ColorType.lightblue}>!</StyledText>
        </Typography>
      ) : (
        <ButtonIcon
          type={ButtonType.button}
          color={ColorType.primary}
          iconName={IconName.userIcon}
        />
      )}
    </header>
  );
};

export default React.memo(Header);
