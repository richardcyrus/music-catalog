import React, { Component } from 'react';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSearch);

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
