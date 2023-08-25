import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import SignUp from '../pages/auths/SignUp';
import SignIn from '../pages/auths/SignIn';
import Todo from '../pages/todo/Todo';
import PublicRoute from '../pages/authenticateds/PublicRoute';
import PrivateRoute from '../pages/authenticateds/PrivateRoute';
import { AuthProvider } from '../context/AuthContext';
import { TodoProvider } from '../context/TodoContext';

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<PublicRoute />}>
            <Route path='/' element={<Navigate to='/signin' />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Route>

          {/* Private */}
          <Route element={<PrivateRoute />}>
            <Route
              path='/todo'
              element={
                <TodoProvider>
                  <Todo />
                </TodoProvider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
