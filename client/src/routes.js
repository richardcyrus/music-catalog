import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LibraryPage from './pages/library';
import HomePage from './pages/home';

import {
  userIsAuthenticatedRedirect,
  userIsNotAuthenticatedRedirect,
} from './utils/authenticateRoutes';

const Login = userIsNotAuthenticatedRedirect(HomePage);
const Library = userIsAuthenticatedRedirect(LibraryPage);

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/library" component={Library} />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps)(Routes);
