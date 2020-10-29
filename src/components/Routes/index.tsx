import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Suspense from '../Suspense';

import { ROUTES } from './constants';
import RouteItem from './components/RouteItem';

function Routes() {
  const user = 'testUser';

  return (
    <Router>
      <Container maxWidth="sm">
        <Suspense>
          <Switch>
            {ROUTES.map(({ redirectTo, path, ...config }) => (
              <RouteItem key={path} path={path} redirectTo={redirectTo?.(user)} {...config} />
            ))}
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default Routes;
