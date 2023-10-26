import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">View Product 1</Link>
      <Link to="/register">View Product 2</Link>
      <Link to="/order">Go to Cart</Link>
    </div>
  ); 
}

export default Home;