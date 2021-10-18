import React from 'react';
import classNames from 'classnames';
import Logo from '../../atoms/Logo';
import StyledText from '../../atoms/StyledText';
import Typography from '../../atoms/Typography';
import Wrapper from '../../atoms/Wrapper';
import { ColorType } from '../../atoms/Icon/types/types';
import { LogoSize } from '../../atoms/Logo/types/types';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';

import './header.scss';

interface IHeader {
  isLoginPage?: boolean;
}

const Header: React.FC<IHeader> = ({ isLoginPage = true }) => {
  const classProps = classNames('header', {
    [`header-login-page`]: isLoginPage,
  });

  return (
    <Wrapper variant={WrapperTypes.header} className={classProps}>
      <Logo size={LogoSize.large} />

      {isLoginPage ? (
        <Typography variant={TypographyTypeStyle.h1}>
          Wellcome to
          <StyledText color={ColorType.primary}> Chatty</StyledText>
          <StyledText color={ColorType.lightblue}>!</StyledText>
        </Typography>
      ) : (
        'icon'
      )}
    </Wrapper>
  );
};

export default Header;
