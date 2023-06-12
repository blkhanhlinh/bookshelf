import { createStore } from 'redux';

// Define action types
const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';
const SET_PRICE_RANGE = 'SET_PRICE_RANGE';
const RESET_FILTERS = 'RESET_FILTERS';

// Define actions
const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

const setPriceRange = (range) => ({
  type: SET_PRICE_RANGE,
  range,
});

const resetFilters = () => ({
  type: RESET_FILTERS,
});

// Define initial state
const initialState = {
  filters: [],
  priceRange: '',
};

// Define reducer function
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.filter],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter((filter) => filter !== action.filter),
      };
    case SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.range,
      };
    case RESET_FILTERS:
      return {
        ...state,
        filters: [],
        priceRange: '',
      };
    default:
      return state;
  }
};

const store = createStore(filtersReducer);

export default store;