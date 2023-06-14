import { combineReducers } from "redux";
import { booksReducer } from './booksReducers';

export const rootReducer = combineReducers({
    books: booksReducer,
});