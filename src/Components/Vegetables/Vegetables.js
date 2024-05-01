// Vegetables.js

import React from 'react';
import './Vegetables.css';
import ProductsList from '../ProductsList/ProductsList';
import all_product from '../Images/all_product'; 

const vegetablesData = all_product.filter((product) => product.category === 'vegetable');

const addToCart = (product) => {
    // Implement your logic for adding the product to the cart
    console.log(`Added ${product.name} to cart`);
  };

const Vegetables = () => {
    return (
    <div>
      {vegetablesData.map((product) => (
        <div key={product.id} className="product-container">
          <div className="product-info">
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details">
            <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>quantity(KG): {product.quantity}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};
export default Vegetables;