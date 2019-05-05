import React from 'react';
import { Route, Switch } from 'react-router-dom';

// screens
import Home from './screens/Home';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Router;
