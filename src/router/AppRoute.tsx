import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Paths } from './constants';
import ChatPage from '../pages/ChatPage';
import LoginPage from '../pages/LoginPage';

const AppRoute: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={Paths.dialogs} component={ChatPage} />
          <Route exact path={Paths.login} component={LoginPage} />
          <Route component={() => <>404: Page not found</>} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoute;
