import React from 'react'
import "./Card.css"
import { useCart } from '../context/Cartcontext';

export const Card = ({data}) => {
  const {removeFromCart}=useCart();
    const {name,price,image}=data;
  return (
    <section>
        <div className='carts'>
            <div className="img">
            <img src={image} alt="plceholder" />
            </div>
            
            <h1>{name}</h1>
            <p>${price}</p>
            <button onClick={()=>removeFromCart(data)}>Remove</button>
            
        </div>
    </section>
  )
}
