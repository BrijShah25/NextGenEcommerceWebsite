import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Toggle dark mode for testing
document.documentElement.classList.add('dark');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
