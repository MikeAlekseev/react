import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './features/productSlice';

const EditProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, name, description, price, available }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Available:</label>
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
