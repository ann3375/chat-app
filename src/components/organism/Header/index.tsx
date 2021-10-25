import React from 'react';
import classNames from 'classnames';
import Logo from '../../atoms/Logo';
import Typography from '../../atoms/Typography';
import ButtonIcon from '../../molecules/ButtonIcon';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { LogoSize } from '../../atoms/Logo/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { ButtonType } from '../../atoms/Button/types/types';

import './header.scss';
import { NavLink } from 'react-router-dom';
import { SCREENS } from '../../../router/endpoints';

interface IHeader {
  isLoginPage?: boolean;
  isChatPage?: boolean;
}

const Header: React.FC<IHeader> = ({ isLoginPage, isChatPage }) => {
  const classProps = classNames('header', {
    [`login-page__header`]: isLoginPage,
    [`chat-page__header`]: isChatPage,
  });
  return (
    <header className={classProps}>
      {isChatPage ? (
        <NavLink to={isChatPage ? SCREENS.SCREEN_DIALOGS : SCREENS.SCREEN_LOGIN}>
          <Logo size={LogoSize.large} className="header__logo" />
        </NavLink>
      ) : (
        <Logo size={LogoSize.large} className="header__logo" />
      )}

      {isLoginPage ? (
        <Typography variant={TypographyTypeStyle.h1} className="header__text">
          Wellcome to
          <Typography variant={TypographyTypeStyle.span} color={ColorType.primary}>
            {' '}
            Chatty
          </Typography>
          <Typography variant={TypographyTypeStyle.span} color={ColorType.mediumBlue}>
            !
          </Typography>
        </Typography>
      ) : (
        <ButtonIcon
          className="header__button"
          type={ButtonType.button}
          color={ColorType.primary}
          iconName={IconName.userIcon}
        />
      )}
    </header>
  );
};

export default React.memo(Header);
