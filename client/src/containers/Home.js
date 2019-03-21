import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';

export default class Home extends Component {
  render() {
    return (
      <SiteWrapper {...this.props}>
        <h1>Your Score</h1>
        <p>The simple way to track your music library</p>
      </SiteWrapper>
    );
  }
}
