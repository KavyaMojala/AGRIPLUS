// Farmer.js
import './farmer.css';
import React, { useState } from 'react';

const Farmer = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="farmer-container">
      <h1>Farmer Dashboard</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
}

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      name: name,
      price: price,
      quantity: quantity,
      image: image
    };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setQuantity('');
    setImage('');
  };

  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Quantity:</label>
      <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <label>Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-quantity">Quantity: {product.quantity}</div>
              <button onClick={() => onDeleteProduct(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Farmer;