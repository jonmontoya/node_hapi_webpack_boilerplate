import React from 'react';
import ReactDOM from 'react-dom';

require('babel-polyfill');
require('./scss/app.scss');

const app = document.getElementById('app'); // eslint-disable-line no-undef

ReactDOM.render(<h1>Hello, world!</h1>, app);
