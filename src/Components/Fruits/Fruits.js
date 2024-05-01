import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import all_product from '../Images/all_product'; 

const FruitsData = all_product.filter((product) => product.category === 'fruit');

const addToCart = (product) => {
  // Implement your logic for adding the product to the cart
  console.log(`Added ${product.name} to cart`);
};

const Fruits = () => {
  return (
    <div>
      {FruitsData.map((product) => (
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
export default Fruits;