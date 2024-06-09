import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './components/CartContext';
import './Style/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [filterCategory, setFilterCategory] = useState('All');
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleAddToCart = (product, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [product.name]: (prevCart[product.name] || 0) + quantity
    }));
    alert(`${quantity} ${product.name} added to cart successfully!`);

  };

  const filteredProducts = products
    .filter(product =>
      filterCategory === 'All' || product.category === filterCategory
    )
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  return (
    <>
      <nav class="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', padding: '20px', justifyContent: 'flex-start', gap: '20px' }}>
        <h1>Product List</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="filter-sort-controls" style={{ gap: '20px' }}>
          <label>
            Filter by Category:
            <select value={filterCategory} onChange={handleFilterChange}>
              <option value="All">All</option>
              {Array.from(new Set(products.map(p => p.category))).map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </label>
          <label>
            Sort by:
            <select value={sortOption} onChange={handleSortChange}>
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>
        <a href="/cart" className="btn btn-primary" >Cart</a>
        <a href="/add" className="btn btn-primary" >Add New Product</a>

      </nav>
      <div className="list-products">
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <>
              <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                  <h5 class="card-title">Unavailable</h5>
                  <p class="card-text">Sorry. Product unavailable</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div >
    </>
  );
};

const ProductCard = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const onQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 1;
    setQuantity(newQuantity);
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.category}</p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={onQuantityChange}
          />
          <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default App;
