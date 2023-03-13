import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

// renders my app.js to the root id in my main index.html
// imports all the styles in index.css
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);