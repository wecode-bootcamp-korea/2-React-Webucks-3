<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../src/styles/reset.css';
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Router from "./Routes";

// Global CSS
import "./Styles/reset.scss";
>>>>>>> c585eff (fix: eslint & prettier 설정, 초기설정 폴더구조 변경)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
