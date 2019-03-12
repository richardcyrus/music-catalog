import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/YourScore-logo-white-02.png';

function PageHeader() {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        <img src={logo} alt="logo" height="125" width="420" />
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
          href="#toggle"
          title="Toggle Navigation Menu"
        >
          <FontAwesomeIcon icon="bars" />
        </a>
        <a href="/dashboard" className="w3-bar-item w3-button w3-padding-large">
          HOME
        </a>
        <NavLink
          to="/library"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          LIBRARY
        </NavLink>
        <a
          href="/events"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          EVENTS
        </a>
        <a
          href="/settings"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          SETTINGS
        </a>
      </div>
    </div>
  );
}

export default PageHeader;
