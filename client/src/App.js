import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <PageFooter />
      </div>
    );
  }
}

export default App;
