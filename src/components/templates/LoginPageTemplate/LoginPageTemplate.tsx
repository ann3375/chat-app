import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import MainContainer from '../MainContainer';
import { Pages } from '../../../router/constants';

import './loginPageTemplate.scss';

interface ILoginPageTemplate {
  header?: React.ReactElement;
  loginForm?: React.ReactElement;
}

const LoginPageTemplate: React.FC<ILoginPageTemplate> = ({
  header,
  loginForm,
}): React.ReactElement => {
  return (
    <MainContainer flex page={Pages.login}>
      <Wrapper flex column align={'center'} className="login-page__aside-form">
        <Wrapper className="container">
          {header}
          {loginForm}
        </Wrapper>
      </Wrapper>
      <Wrapper className="login-page__aside-image" />
    </MainContainer>
  );
};

export default LoginPageTemplate;
