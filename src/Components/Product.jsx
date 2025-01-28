import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const cartdata = useSelector((state)=>state.cart)

    useEffect(() => {
        const productData = async () => {
            try {
                const response = await axios('https://fakestoreapi.com/products');
                console.log(response.data);
                if (response.data) setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        productData();
    }, []);

    const addToCart =(products)=>{
        dispatch(add(products));
    }

    const ProductShowing = data.map((productData, i) => {
        return (
            <div
                key={i}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                }}
            >
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <img
                        src={productData.image}
                        style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '10px' }}
                        alt={productData.title}
                    />
                </div>
                <div style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>
                    <span>{productData.title}</span>
                </div>
                <div>
                    <button
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        onClick={()=>addToCart(productData)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    });

    return (
        <>

        
        
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#f9f9f9',
            }}
        >
            {ProductShowing}
        </div>

        </>
    );
};

export default Product;
