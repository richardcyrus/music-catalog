import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Home from './containers/Home';
import Library from './containers/Library';

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
    <AuthenticatedRoute
      path="/library"
      exact
      component={Library}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <Route component={NotFound} />
  </Switch>
);
