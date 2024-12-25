import React from 'react';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Protected from './components/Protected';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Logout from './components/Logout';

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/pricing" element={<Protected Component={Pricing} />} />
        <Route path="/features" element={<Protected Component={Features} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
