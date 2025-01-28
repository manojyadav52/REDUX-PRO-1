import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {
    const productData = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const removeToCart =(id)=>{
            dispatch(remove(id));
    }


    const cards = productData.map((productData, i) => {
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
                            backgroundColor: 'red',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        onClick={()=>removeToCart(productData.id)}
                    >
                        remove Data
                    </button>
                </div>
            </div>
        );
    });

const totalPrice = productData.reduce((total, data)=> total + data.price,0)
console.log(totalPrice);


  return (
    <div>
     {cards}

    {/* here total price of the project */}
     <div>
        <div style={{background:'blue', textAlign:'center', color:'white',padding:'10px', margin:'10'}}>
            total Price thise Product is: {totalPrice}
        </div>
     </div>
    </div>
  )
}

export default Cart
