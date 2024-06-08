import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AddProduct from './AddProduct';
import ListProducts from './ListProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/list" element={<ListProducts />} />
      </Routes>
    </Router>
);
