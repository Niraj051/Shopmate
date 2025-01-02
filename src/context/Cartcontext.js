import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/Cartreducer";

const initialState = {
    cartList: [],
    total: 0
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (data) => {
        const updatedCartList = state.cartList.concat(data);
        updateTotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        });
    };
    const removeFromCart = (data) => {
        const updatedCartList = state.cartList.filter(cart=>cart.id!==data.id)
        updateTotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        });
    };

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total=total + product.price);
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        });
    };

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart

    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};
