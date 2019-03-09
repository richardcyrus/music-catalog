import React, { Component } from 'react';
import API from './utils/API';
import CurrentCatalog from './components/CurrentCatalog';

class App extends Component {
  constructor(props) {
    super(props);
    // this.filterCatalog = this.filterCatalog.bind(this);
    this.state = {
      musicCatalog: [],
      search: '',
    };
  }

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
  filterCatalog = (element) => {
    API.getFilteredCatalog()
      .then((res) => this.setState({ musicCatalog: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <CurrentCatalog
        musicCatalog={this.state.musicCatalog}
        filterCatalog={this.filterCatalog}
      />
    );
  }
}

export default App;
