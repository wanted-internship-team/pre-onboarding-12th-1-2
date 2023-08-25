import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import SignUp from '../pages/auth/SignUp';
import SignIn from '../pages/auth/SignIn';
import Todo from '../pages/todos/Todo';
import PublicRoute from '../pages/authenticated/PublicRoute';
import PrivateRoute from '../pages/authenticated/PrivateRoute';
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
