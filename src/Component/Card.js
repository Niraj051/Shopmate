import React from 'react'
import "./Card.css"

export const Card = ({data}) => {
    const {name,price,image}=data;
  return (
    <section>
        <div className='carts'>
            <div className="img">
            <img src={image} alt="plceholder" />
            </div>
            
            <h1>{name}</h1>
            <p>{price}</p>
            <button>Remove</button>
            
        </div>
    </section>
  )
}
