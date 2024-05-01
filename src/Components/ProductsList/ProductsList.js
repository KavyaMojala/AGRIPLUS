// ProductsList.js
import React from 'react';

const ProductsList = ({ category, products }) => {
  return (
    <div>
      <h2>{category}</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>quantity(KG): ${product.quantity.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
