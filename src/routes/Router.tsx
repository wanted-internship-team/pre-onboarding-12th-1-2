import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Todo from '../pages/Todo';
import { TodoProvider } from '../context/TodoContext';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route
          path='/todo'
          element={
            <TodoProvider>
              <Todo />
            </TodoProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
