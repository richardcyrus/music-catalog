import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Routes from './routes';

library.add(faBars, faSearch);

const App = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
