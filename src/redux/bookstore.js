import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { filterReducer } from "./filter.slice";
import { bookReducer } from "./books.slice";

const reducer = combineReducers({
    cart: cartReducer,
    filter: filterReducer,
    books: bookReducer
});

const bookstore = configureStore({
    reducer,
})

export default bookstore;