import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import logo from '../assets/Your-Score-vertical.svg';

export default class Home extends Component {
  render() {
    return (
      <SiteWrapper {...this.props}>
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#ddd',
            padding: '100px',
          }}
        >
          <img
            src={logo}
            alt="YourScore"
            style={{ minWidth: '200px', maxWidth: '600px' }}
          />
          <p
            style={{
              color: '#00a99d',
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '1.65rem',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            The simple way to track your music library
          </p>
        </div>
      </SiteWrapper>
    );
  }
}
