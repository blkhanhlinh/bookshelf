import { useContext } from "react";
import { CartContext } from "../contexts";

const useCartData = () => useContext(CartContext)

export default useCartData