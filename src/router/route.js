import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';
import { useRegistr } from '../hooks/registrationProvider';

export default function PrivateRoute() {
  const user = useAuth();
  if (!user.token) {return <Navigate to="/login" />;}
  return <Outlet />;
}

export function SuccessRoute() {
  const user = useRegistr();
  if (!user.token) {return <Navigate to="/registration" />;}
  return <Outlet />;
}

