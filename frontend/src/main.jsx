import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the application with StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
