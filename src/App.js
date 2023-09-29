import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Listing from './components/Listing';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <div className="/">
        
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/listing" element={<Listing/>} />
          <Route path="/user/:userName" element={<User/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
