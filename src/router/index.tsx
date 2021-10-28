import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { SCREENS } from './endpoints';
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { userStore } from '../store/userStore';

export const Routes: React.FC = observer(() => {
  const [username] = useLocalStorageState('username', '');

  const isUserAuthenticate = userStore.user.isUserAuthenticate;

  useEffect(() => {
    if (username) {
      userStore.setUser(username);
    }
  }, [username]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute
            component={ChatPage}
            exact
            path={[SCREENS.SCREEN_DIALOGS, SCREENS.SCREEN_CURRENT_DIALOG]}
            isUserAuthenticate={isUserAuthenticate}
            redirectPath={SCREENS.SCREEN_LOGIN}
          />

          <PrivateRoute
            component={LoginPage}
            exact
            path={[SCREENS.SCREEN_LOGIN, SCREENS.SCREEN_HOME]}
            isUserAuthenticate={!isUserAuthenticate}
            redirectPath={SCREENS.SCREEN_DIALOGS}
          />

          <Route component={() => <>404: Page not found</>} />
        </Switch>
      </Router>
    </>
  );
});
