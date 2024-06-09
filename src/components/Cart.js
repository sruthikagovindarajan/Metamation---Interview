import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import '../Style/Cart.css';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [editQuantities, setEditQuantities] = useState({});

    const handleRemoveFromCart = (productName) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };
            delete updatedCart[productName];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
        alert(`${productName} removed successfully`);
    };

    const handleQuantityChange = (productName, quantity) => {
        setEditQuantities({
            ...editQuantities,
            [productName]: parseInt(quantity) || 1
        });
    };

    const handleSaveQuantity = (productName) => {
        setCart(prevCart => ({
            ...prevCart,
            [productName]: editQuantities[productName]
        }));
        setEditQuantities(prevEditQuantities => {
            const updatedEditQuantities = { ...prevEditQuantities };
            delete updatedEditQuantities[productName];
            return updatedEditQuantities;
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <>
            <nav class="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', padding: '20px' }}>
                <h1>Shopping Cart</h1>
                <a href="/" className="btn btn-primary" style={{ marginLeft: '20px' }}>Back to Products</a>
            </nav>
            <div className="cart-page">
                {Object.keys(cart).length === 0 ? (
                    <h2>No items in cart</h2>
                ) : (
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(cart).map(([name, quantity]) => (
                                <tr key={name}>
                                    <td><h5>{name}</h5></td>
                                    <td>
                                        {editQuantities[name] !== undefined ? (
                                            <input
                                                type="number"
                                                min="1"
                                                value={editQuantities[name]}
                                                onChange={(e) => handleQuantityChange(name, e.target.value)}
                                                className="quantity-input"
                                            />
                                        ) : (
                                            <span><h5>{quantity}</h5></span>
                                        )}
                                    </td>
                                    <td>
                                        {editQuantities[name] !== undefined ? (
                                             <button type="button" class="btn btn-danger" onClick={() => handleSaveQuantity(name)}>Save</button>
                                        ) : (
                                            <button type="button" class="btn btn-danger" onClick={() => setEditQuantities({ ...editQuantities, [name]: quantity })}>Edit</button>
                                        )}
                                          <button type="button" class="btn btn-danger" style={{marginLeft:'10px'}}onClick={() => handleRemoveFromCart(name)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Cart;






