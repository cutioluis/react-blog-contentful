import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import './assets/styles/Fonts.css'
import GlobalStyles from './assets/styles/GlobalStyles'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
