import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    pages: [],
    product: {},
    products: [],
  },
  reducers: {
    setPages(state, action) {
      state.pages = [];
      state.pages = action.payload;
    },
    setProduct(state, action) {
      state.product = {};
      state.product = action.payload;
    },
    setProducts(state, action) {
      state.products = [];
      state.products = action.payload;
    },
  },
});

export const { setPages, setProduct, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
