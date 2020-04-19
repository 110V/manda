import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import './fonts/SCDream2.otf'

ReactDOM.render(
    <Routes/>,
  document.getElementById('root')
);
serviceWorker.unregister();