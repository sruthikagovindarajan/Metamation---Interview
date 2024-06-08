// src/AddProduct.js
import React, { useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = new Product(name, category);
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    setName('');
    setCategory('');
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Link to="/list">Go to Product List</Link>
    </div>
  );
};

export default AddProduct;
