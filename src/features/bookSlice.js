import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyBgkXfednWqGSu4YTbkIDhykSqxLEpP5gU';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const searchBooks = createAsyncThunk(
  'books/getBooks',
  async ({ query, category, sorting }, thunkAPI) => {
    if(category === 'all') {
      category = 'biography&computers&history&medical&poetry&'
    }
    if (query.trim().length === 0 && query.length <= 0) {
      query = `subject:${category}`;
    }
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&maxResults=30&orderBy=${sorting}&key=${API_KEY}`
      );
      const books = await response.json();
      if (books.error) {
        return thunkAPI.rejectWithValue(books.error, "books.error")
      }
      console.log(books);

      return thunkAPI.fulfillWithValue(books)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message, 'Произошла ошибка при выполнении запроса');
    }
  }
);


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.items;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
