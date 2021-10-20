import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import Header from '../../organism/Header';
import LoginForm from '../../organism/LoginForm';
import MainContainer from '../MainContainer';
import { WrapperTypes } from '../../atoms/Wrapper/types/types';
import { Pages } from '../MainContainer/types/types';

import './loginPageTemplate.scss';

const LoginPageTemplate = (): React.ReactElement => {
  return (
    <MainContainer flex page={Pages.login}>
      <Wrapper
        variant={WrapperTypes.div}
        flex
        column
        align={'center'}
        fullWidth
        className="login-page__aside-form"
      >
        <Wrapper variant={WrapperTypes.div} className="container">
          <Header isLoginPage />
          <LoginForm />
        </Wrapper>
      </Wrapper>
      <Wrapper variant={WrapperTypes.div} fullWidth className="login-page__aside-image" />
    </MainContainer>
  );
};

export default LoginPageTemplate;
