import React, { useState } from 'react';
import Product from './Product';
import '../Style/AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name.trim() === '' || category.trim() === '') {
      alert('Both fields are required.');
      return;
    }
  
    const newProduct = new Product(name, category);
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    setName('');
    setCategory('');
    alert('Product added successfully!');
  };
  
  return (
    <>
      <nav class="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', padding: '20px' }}>
        <h1>Add New Product</h1>
        <a href="/" className="btn btn-primary" style={{ marginLeft: '20px' }}>Products</a>

      </nav>
      <div className="add">
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errorMessage && name.trim() === '' ? 'input-error' : ''}
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={errorMessage && category.trim() === '' ? 'input-error' : ''}
            />
            <button className="btn btn-primary" type="submit">Done</button>
          </div>
        </form>
      </div>
    </>

  );
};

export default AddProduct;
