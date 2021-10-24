import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './router';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
  document.getElementById('root')
);
