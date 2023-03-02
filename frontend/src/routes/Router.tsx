import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import {Routes} from './routes';
import {Home} from '../views/Home';
import {Application} from '../views/Application';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.Home} component={Home} />
        <Route exact path={Routes.Application} component={Application} />
        <Route
          exact
          path={Routes.ApplicationWithParams}
          component={Application}
        />
        <Redirect to={Routes.Home} />
      </Switch>
    </BrowserRouter>
  );
};
