import "./Productcart.css"
import { useCart } from "../context/Cartcontext"
import { useEffect,useState } from "react";



export const Productcart = ({data}) => {
  const [state,setState]=useState(false);
  const {addToCart,cartList,removeFromCart}=useCart();
  useEffect(()=>{
    const inCartList=cartList.find(item=>item.id===data.id);
    if(inCartList)
    {
      setState(true);
    }
    else
    {
      setState(false)

    }

  },[data,cartList])

  return (
    <div className='ProductCard'>
        <img src={data.image} alt="placeholder" />
        <p className="par">{data.name}</p>
        <div className="card">
            <p>{data.price}</p>
            {state?(<button className="removecart" onClick={()=>removeFromCart(data)} >remove</button>):(<button onClick={()=>addToCart(data)} className="buttons">Addto card</button>)}
        </div>

    </div>
  )
}
