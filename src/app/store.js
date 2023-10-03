import { configureStore } from '@reduxjs/toolkit';
import books from '../features/bookSlice';

const store = configureStore({
  reducer: {
    books,
  },
});

export default store;
