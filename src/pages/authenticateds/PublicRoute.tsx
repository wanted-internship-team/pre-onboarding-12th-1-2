import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export default function PublicRoute() {
  const auth = useAuthContext();

  return auth.token ? <Navigate to='/todo' /> : <Outlet />;
}
