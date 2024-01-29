
//import {StrictMode} from 'react';
import './normalize.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { AuthProvider } from './hooks/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
