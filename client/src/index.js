import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'w3-css/w3.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faBars, faSearch);

ReactDOM.render(<App />, document.getElementById('root'));
