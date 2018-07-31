import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter} from 'react-router-dom'
import './style/index.css';
import './style/main.css';
import './style/weather.css';

import App from './components/App';

ReactDOM.render(
    // <HashRouter>
      <App/>
    // </HashRouter>
  , document.getElementById('root')
);
