
import { useTitle } from '../hooks/useTitle';



import { Card } from '../Component/Card';
import "./Cart.css"
import { useCart } from '../context/Cartcontext';

export const Cart = () => {
  const {total,cartList}=useCart();
  
    
     useTitle("Home");
      return (
        <main>
          <div className="cartsproduct">
            <p>Cart: {cartList.length}/{total}</p>
          {
            cartList.map((data)=>(
              <Card key={data.id} data={data} />
            ))
          }
        
          </div>
        </main>
  )
}
