import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/Store.js';

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
