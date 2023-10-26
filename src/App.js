import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Home from '../src/component/Home/home';
import Login from '../src/component/Login/login';
import Register from '../src/component/Register/register';
import Order from '../src/component/Order/order';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/order"element={<Order/>} />
      </Routes>
    </Router>
  );
}

export default App;