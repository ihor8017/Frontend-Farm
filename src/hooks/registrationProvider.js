import {useContext, createContext, useState} from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrContext = createContext();

function RegistrProvider({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const registerAction = () => {
    navigate('/success');
  };

  return (
    <RegistrContext.Provider  value ={token}>
      {children}
    </RegistrContext.Provider>
  );

}


export default RegistrProvider;

export const useRegistr = () => useContext(RegistrContext);
