import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'w3-css/w3.css';
import './index.css';
import App from './App';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
