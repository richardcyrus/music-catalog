import React from 'react';
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
        <a
          href="../dashboard/index.html"
          className="w3-bar-item w3-button w3-padding-large"
        >
          HOME
        </a>
        <a
          href="../library/index.html"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          LIBRARY
        </a>
        <a
          href="../events/index.html"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          EVENTS
        </a>
        <a
          href="../settings/index.html"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          SETTINGS
        </a>
        <a
          href="../contact/index.html"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          CONTACT
        </a>
        <a
          href="#search"
          className="w3-padding-large w3-hover-red w3-hide-small w3-right"
        >
          <FontAwesomeIcon icon="search" />
        </a>
      </div>
    </div>
  );
}

export default PageHeader;
