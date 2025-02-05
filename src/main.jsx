import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react'; // Добавьте эту строку


import './index.css';
import App from './App.jsx';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
