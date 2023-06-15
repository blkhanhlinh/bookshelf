import { createSlice } from '@reduxjs/toolkit';
import { removeDuplicatesFrom } from '../utils/removeDuplicatesFrom';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: [],
    priceRange: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filters = removeDuplicatesFrom(state.filters.concat(action.payload));
    },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter(filter => filter !== action.payload);
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    resetFilters: state => {
      state.filters = [];
      state.priceRange = '';
    },
  },
});

export const { addFilter, removeFilter, setPriceRange, resetFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer
