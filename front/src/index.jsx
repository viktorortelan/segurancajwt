import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import TelaLogin from './pages/login';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


