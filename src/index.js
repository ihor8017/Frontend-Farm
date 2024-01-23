import React, {createContext} from 'react';
//import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import Store from './store/store';
import './normalize.css'
import './index.css'


const store = new Store();
export const Context = createContext({
  store,
});

const root = createRoot(
  document.getElementById('root'));
root.render(

  <Context.Provider value={
    { store}
  }
  >
    <App />
  </Context.Provider>

  ,
);
