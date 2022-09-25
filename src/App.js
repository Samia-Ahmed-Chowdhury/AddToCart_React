import { createContext, useReducer } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Cart from '../src/Component/Cart'
import { products } from "./Product"
import { reducer } from './Component/Reducer';

export const CartContext = createContext()
const initialState = {
  item: products,
  totalItem: 4,
  totalAmount: 1735,
  
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "Remove_Item",
      payload: id
    })
  }
const clearCart=()=>{
  return dispatch({
    type: "Clear_All"
  })
}
const IncrementItem=(id)=>{
  return dispatch({
    type: "Increment_Item",
    payload: id
  })
}

const DecrementItem=(id)=>{
  return dispatch({
    type: "Decrement_Item",
    payload: id
  })
}

  return (
    <>
      <CartContext.Provider value={{ ...state,removeItem,clearCart,IncrementItem,DecrementItem }}>
        <Cart />
      </CartContext.Provider>
    </>
  );
}

export default App;
