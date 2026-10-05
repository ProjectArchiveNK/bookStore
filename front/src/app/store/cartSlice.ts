import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload);

      if (book) {
        book.quantity += 1;
      } else {
        state.books.push({
          id: action.payload,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload);

      if (book) {
        book.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload);

      if (book && book.quantity > 1) {
        book.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
