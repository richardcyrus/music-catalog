import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Home from './containers/Home';
import Library from './containers/Library';
import Performances from './containers/Performances';
import Members from './containers/Members';
import Users from './containers/Users';
import AddUser from './containers/Users';

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
    <AuthenticatedRoute
      path="/library"
      exact
      component={Library}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/performances"
      exact
      component={Performances}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/members"
      exact
      component={Members}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/users/add"
      component={AddUser}
      props={childProps}
    />
    <AuthenticatedRoute path="/users" component={Users} props={childProps} />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <Route component={NotFound} />
  </Switch>
);
