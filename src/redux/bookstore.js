import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { rootReducer } from "./reducers";

const reducer = {
    cart: cartReducer,
    root: rootReducer
};

const bookstore = configureStore({
    reducer,
})

export default bookstore;