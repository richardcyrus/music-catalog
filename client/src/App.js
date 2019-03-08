import React, { Component } from 'react';
import API from './utils/API';
import CurrentCatalog from './components/CurrentCatalog';

class App extends Component {
  state = {
    musicCatalog: [],
  };

  componentDidMount() {
    this.loadCatalog();
  }

  loadCatalog = () => {
    API.getCatalog()
      .then((res) => this.setState({ musicCatalog: res.data }))
      .catch((err) => console.log(err));
  };

  propFunction(component) {
    console.log(`${component} has been clicked!`);
  }

  render() {
    return (
      <CurrentCatalog
        musicCatalog={this.state.musicCatalog}
        passingFunction={this.propFunction}
      />
    );
  }
}

export default App;
