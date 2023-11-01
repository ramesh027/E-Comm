import CartContext from "../../context/CartContext";
import { useContext } from "react";

function AddToCart() {
  const { cart, increase, decrease } = useContext(CartContext);
  function increasef() {
    increase();
  }
  return <button onClick={increasef}>Add</button>;
}

export default AddToCart;
