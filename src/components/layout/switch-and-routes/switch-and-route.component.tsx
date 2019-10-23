import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import styled from 'styled-components/macro';
import Home from '../../page/home/home.page';
import NotFound404 from '../../page/not-found-404/not-found-404.page';

const SwithAndRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route component={NotFound404} />
    </Switch>
  );
};

export default SwithAndRoutes;
