import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter here
import App from './App.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your entire app with a single Router */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
