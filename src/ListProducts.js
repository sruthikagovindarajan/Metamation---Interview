// src/ListProducts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListProducts.css'; // Ensure to create this CSS file for styling

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState({});

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => ({
      ...prevCart,
      [product.name]: (prevCart[product.name] || 0) + 1
    }));
  };

  const handleQuantityChange = (product, quantity) => {
    if (quantity < 1) return;
    setCart(prevCart => ({
      ...prevCart,
      [product.name]: quantity
    }));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <input
              type="number"
              min="1"
              value={cart[product.name] || 1}
              onChange={(e) => handleQuantityChange(product, parseInt(e.target.value))}
            />
          </div>
        ))}
      </div>
      <Link to="/add">Add New Product</Link>
    </div>
  );
};

export default ListProducts;
