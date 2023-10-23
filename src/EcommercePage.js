import React, { useState } from 'react';
import './EcommercePage.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

function EcommercePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, you can send a request to your server to invalidate the session
    // Then, redirect the user to the login page
    navigate('/');
  };

  // Sample product data (you would typically fetch this from an API)
  const products = [
    {
      id: 1,
      name: 'Elegant Earrings',
      price: '$39.99',
      image: 'earrings.jpg',
    },
    {
      id: 2,
      name: 'Chic Handbag',
      price: '$69.99',
      image: 'handbag.jpg',
    },
    // Add more product entries here
  ];

  // Assume you have a function to check if the user is logged in
  const isUserLoggedIn = true; // Replace with your authentication check

  if (!isUserLoggedIn) {
    // If the user is not logged in, redirect them to the login page
    navigate('/');
    return null; // Render nothing
  }

  return (
    <div className="ecommerce-container">
      <header>
        <div className="logo">
          <h1>Elegant Accessories</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for accessories" />
          <button>Search</button>
        </div>
        <div className="user-section">
          <div className="account">Account</div>
          <div className="cart">Cart</div>
          <div className="notification-bell">🔔</div>
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </header>
      <main>
        <h2>Welcome to our Elegant Accessories Store!</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default EcommercePage;
