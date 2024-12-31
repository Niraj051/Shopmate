
import { useTitle } from '../hooks/useTitle';



import { Card } from '../Component/Card';
import "./Cart.css"

export const Cart = () => {
  
    const datas=[{"id":1,"name":"Sony Wh-Ch510 Bluetooth Wireless","price": "$149" , "image": "images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": "$49", "image": "images/1002.png"},
        
     ]
     useTitle("Home");
      return (
        <main>
          <div className="cartsproduct">
            <p>Cart: {datas.length}</p>
          {
            datas.map((data)=>(
              <Card key={data.id} data={data} />
            ))
          }
        
          </div>
        </main>
  )
}
