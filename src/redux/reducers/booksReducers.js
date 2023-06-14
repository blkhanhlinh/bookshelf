import {
    FETCH_BOOKS,
    FILTER_BOOKS_BY_PRICE,
    FILTER_BOOKS_BY_RATING,
    FILTER_BOOKS_BY_AUTHOR,
    ORDER_BOOKS_BY_PRICE,
    ORDER_BOOKS_BY_YEAR,
} from '../actions/types'

const initialState = {
    books: [], 
    filteredBooks: [], 
  };

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return { items: action.payload };
        case FILTER_BOOKS_BY_PRICE:
            return {
                ...state,
                filteredBooks: action.payload.items,
                price: action.payload.price,
            };
        case FILTER_BOOKS_BY_RATING:
            return {
                ...state,
                filteredBooks: action.payload.items,
                rating: action.payload.rating,
            };
        case FILTER_BOOKS_BY_AUTHOR:
            return {
                ...state,
                filteredBooks: action.payload.items,
                author: action.payload.author,
            };
        case ORDER_BOOKS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredBooks: action.payload.items,
            };
        case ORDER_BOOKS_BY_YEAR:
            return {
                ...state,
                sort: action.payload.sort,
                filteredBooks: action.payload.items,
            };
        default:
            return state;
    }
};
