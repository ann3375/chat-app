import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatPageTemplate from '../components/templates/ChatPageTemplate';

import LoginPage from '../pages/LoginPage';
import { Paths } from './constants';

const AppRoute: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={Paths.currentChat} component={ChatPageTemplate} />
          <Route exact path={Paths.login} component={LoginPage} />
          <Route component={() => <>404: Page not found</>} />
        </Switch>
      </Router>
      {/* <LoginPageTemplate /> */}
    </div>
  );
};

export default AppRoute;
