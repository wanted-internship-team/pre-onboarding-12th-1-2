import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
