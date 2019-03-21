import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './routes';
import Api from './utils/api';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
// library.add(faBars, faSearch);

class App extends Component {
  constructor(props) {
    super(props);

    // Global Authentication Status
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    try {
      const token = sessionStorage.getItem('token');
      if (token) {
        Api.setAuthToken(token);
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      Api.setAuthToken(false);
      this.userHasAuthenticated(false);
    }
  }

  // Global handler for setting authentication status.
  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  // Global handler to logout.
  handleLogout = (event) => {
    sessionStorage.removeItem('token');
    Api.setAuthToken(false);

    this.userHasAuthenticated(false);

    // Set the redirect location.
    this.props.history.push('/login');
  };

  render() {
    // Collect the global handlers for authentication state.
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      handleLogout: this.handleLogout,
    };

    return (
      <React.Fragment>
        <Routes childProps={childProps} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
