import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import './Styles/reset.scss';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);
