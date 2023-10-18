import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    product: {},
    products: [],
  },
  reducers: {
    setProduct(state, actions) {
      state.product = {};
      state.product = actions.payload;
    },
    setProducts(state, actions) {
      state.products = [];
      state.products = actions.payload;
    },
  },
});

export const { setProduct, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
