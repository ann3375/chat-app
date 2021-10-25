import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SCREENS } from './endpoints';
import ChatPage from '../pages/ChatPage';
import LoginPage from '../pages/LoginPage';

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path={[SCREENS.SCREEN_DIALOGS, SCREENS.SCREEN_CURRENT_DIALOG]}
            component={ChatPage}
          />
          <Route exact path={SCREENS.SCREEN_LOGIN} component={LoginPage} />
          <Route component={() => <>404: Page not found</>} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
