import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ChatPage } from '../pages/ChatPage';
import { AuthPage } from '../pages/AuthPage';
import { PrivateRoute } from './PrivateRoute';
import { SCREENS } from './endpoints';
import { RootStoreContext } from '../store/RootStore';

export const Routes: React.FC = observer(() => {
  const {
    userStore: {
      user: { isUserAuthenticate },
    },
  } = useContext(RootStoreContext);

  return (
    <Router>
      <Switch>
        <PrivateRoute
          component={ChatPage}
          exact
          path={[SCREENS.SCREEN_DIALOGS, SCREENS.SCREEN_CURRENT_DIALOG]}
          isUserAuthenticate={!!isUserAuthenticate}
          redirectPath={SCREENS.SCREEN_LOGIN}
        />

        <PrivateRoute
          component={AuthPage}
          exact
          path={[SCREENS.SCREEN_LOGIN, SCREENS.SCREEN_SIGN_UP, SCREENS.SCREEN_HOME]}
          isUserAuthenticate={!isUserAuthenticate}
          redirectPath={SCREENS.SCREEN_DIALOGS}
        />
        <Route component={() => <>404: Page not found</>} />
      </Switch>
    </Router>
  );
});
