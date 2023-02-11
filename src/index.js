import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>
);
