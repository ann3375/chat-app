import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './router/AppRoute';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
  document.getElementById('root')
);
