import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store, persistor  } from './store/Store.js';
import { PersistGate } from 'redux-persist/integration/react'; 

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
