import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
