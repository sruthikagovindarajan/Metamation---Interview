// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Product Manager</h1>
      <Link to="/add">Add Product</Link>
      <Link to="/list">List Products</Link>
    </div>
  );
};

export default App;
