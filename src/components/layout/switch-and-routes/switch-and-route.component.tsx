import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import styled from 'styled-components/macro';
import Home from '../../page/home/home.page';
import FormikBasic from '../../page/formik-basic/formic-basic.page';
import FormikReducingBoilerPlate from '../../page/formik-reducing-boilerplate/formik-reducing-boilerplate.page';

import NotFound404 from '../../page/not-found-404/not-found-404.page';

const SwithAndRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/formik-basic" component={FormikBasic} />
      <Route exact path="/formik-reducing-boilerplate" component={FormikReducingBoilerPlate} />

      <Route component={NotFound404} />
    </Switch>
  );
};

export default SwithAndRoutes;
