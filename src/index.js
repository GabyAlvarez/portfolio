import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../src/assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';

const WhitRouter = () => <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(
  <React.StrictMode>
    <WhitRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
