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

  // Responsible for retrieving all music from sheet_music table
  loadCatalog = () => {
    API.getCatalog()
      .then((res) => this.setState({ musicCatalog: res.data }))
      .catch((err) => console.log(err));
  };

  // Responsible for filtering based on user input
  propFunction = (component) => {
    console.log(`${component}`);
  };

  render() {
    return (
      <CurrentCatalog
        musicCatalog={this.state.musicCatalog}
        // propFunction={this.propFunction}
      />
    );
  }
}

export default App;
