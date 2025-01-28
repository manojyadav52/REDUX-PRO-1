import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  const [count, setCount] = useState(0);
  const cartData = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    navigate('/cart'); 
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Hello, this is my Product</h1>

      <div>
        <button
          onClick={handleAddToCartClick} 
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add to Cart {cartData.length}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
