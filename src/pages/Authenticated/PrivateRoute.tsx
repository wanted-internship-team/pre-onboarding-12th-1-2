import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export default function PrivateRoute() {
  const auth = useAuthContext();

  return !auth.token ? (
    <>
      {alert('로그인이 필요합니다.')}
      <Navigate to='/signin' />
    </>
  ) : (
    <Outlet />
  );
}
