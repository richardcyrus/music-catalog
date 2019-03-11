import React, { Component } from 'react';
import API from './utils/API';
import CurrentCatalog from './components/CurrentCatalog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicCatalog: [],
      // Used to filter sheet music table
      attribute: '',
      value: '',
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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(`${name} : ${value}`);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let filteringConditions = {
      tableColumn: this.state.attribute,
      tableValue: this.state.value,
    };

    API.getFilteredCatalog(filteringConditions)
      .then((res) => this.setState({ musicCatalog: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <CurrentCatalog
        musicCatalog={this.state.musicCatalog}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
