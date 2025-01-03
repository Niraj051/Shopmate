import { Productcart } from "../Component/Productcart"

import { useTitle } from "../hooks/useTitle";



import "./Home.css";


export const Home = () => {
  

 const datas=[{"id":1,"name":"Sony Wh-Ch510 Bluetooth Wireless","price": 149 , "image": "images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "images/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "images/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 23, "image": "images/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price":29, "image": "images/1006.png"}
 ]
 useTitle("Home");
  return (
    <main>
      <div className="productcart">
        
      {
        datas.map((data)=>(
          <Productcart key={data.id} data={data} />
        ))
      }
    
      </div>
    </main>
  )
}
