import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Catalog</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
