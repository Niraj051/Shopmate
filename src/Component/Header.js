import {Link, NavLink} from "react-router-dom";
import logo from "../assest/shopymate.png";
import "./Header.css";
import { useCart } from "../context/Cartcontext";

export const Header = () => {
  const {cartList}=useCart();
  return (
   <header>
     <Link to="/" className="logo">
          <img src={logo} alt="shopymate logo" />
          <span>Shopymate</span>
     </Link>
     <nav className="Navigation">
      <NavLink to="/" className="link" end>Home</NavLink>
      <NavLink to="/cart" className="link">Cart</NavLink>
     </nav>
     <p className="cart">Cart: {cartList.length}</p>
   </header>
  )
}
