import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

const reducer = {
    cart: cartReducer,
};

const bookstore = configureStore({
    reducer,
})

export default bookstore;