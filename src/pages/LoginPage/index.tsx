import React from 'react';
import { Header } from '../../components/organism/Header';
import { LoginForm } from '../../components/organism/LoginForm';
import { LoginPageTemplate } from '../../components/templates/LoginPageTemplate';

export const LoginPage = (): React.ReactElement => {
  return <LoginPageTemplate header={<Header isLoginPage />} loginForm={<LoginForm />} />;
};
