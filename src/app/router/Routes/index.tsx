import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReactRouteRegistry } from '@micra/react-route-registry';
import { Route as RouteDefinition } from '@micra/route-registry';

export interface RoutesProps {
  routes?: RouteDefinition<React.ComponentType<any>>[];
}

const Routes = ({ routes = use<ReactRouteRegistry>('router').all() }) => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        component={route.handler}
        exact={route.options.exact}
      />
    ))}
  </Switch>
);

export default memo(Routes);
