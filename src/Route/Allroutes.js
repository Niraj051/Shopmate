import {Home,Cart} from "../pages/index";
import {Routes,Route} from "react-router-dom";


export const Allroutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Cart" element={<Cart  />} />
        </Routes>
    </main>
  )
}
