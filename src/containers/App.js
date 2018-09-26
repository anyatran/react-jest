import React from 'react';
import CartContainer from './CartContainer'
import ProductsContainer from './ProductsContainer'

const App = ()  => (
  <div className="App">
    <h2>Shopping Cart Example</h2>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
