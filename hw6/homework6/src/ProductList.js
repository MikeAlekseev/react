import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, toggleAvailability } from './features/productSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Available: {product.available ? 'Yes' : 'No'}</p>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>
                Toggle Availability
              </button>
              <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
