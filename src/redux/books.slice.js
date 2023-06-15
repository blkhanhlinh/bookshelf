import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  searchResults: [],
  page: 1,
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBookRequest: (state) => {
      state.loading = true;
    },
    fetchBookSuccess: (state, action) => {
      state.loading = false;
      state.books = action.payload.data;
      state.searchResults = action.payload.data;
    },
    fetchBookFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sortBooksAsc: (state, action) => {
      const sortAsc = action.payload.sort((a, b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0));
      state.books = sortAsc;
    },
    sortBooksDesc: (state, action) => {
      const sortDesc = action.payload.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
      state.books = sortDesc;
    },
    searchBooks: (state, action) => {
      state.books = action.payload;
      state.page = 1;
    },
  },
});

export const {
  fetchBookRequest,
  fetchBookSuccess,
  fetchBookFailed,
  sortBooksAsc,
  sortBooksDesc,
  searchBooks,
} = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
