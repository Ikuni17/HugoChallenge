import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {Routes} from './routes';
import {Home} from '../views/Home';
import {Application} from '../views/Application';
import {NotFound} from '../views/NotFound';

export const Router: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={Routes.Home} component={Home} />
        <Route exact path={Routes.Application} component={Application} />
        <Route
          exact
          path={Routes.ApplicationWithParams}
          component={Application}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
