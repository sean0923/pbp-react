import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound404 from '../../page/not-found-404/not-found-404.page';
import { flattenedNavItems } from 'data/nav/nav.data';

const SwithAndRoutes: React.FC = () => {
  if (!flattenedNavItems) {
    return null;
  }

  return (
    <Switch>
      {flattenedNavItems.map(({ path, component }) => {
        return <Route exact key={path} path={path} component={component} />;
      })}

      <Route component={NotFound404} />
    </Switch>
  );
};

export default SwithAndRoutes;
