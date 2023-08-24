import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
