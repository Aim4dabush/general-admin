import { createSlice } from '@reduxjs/toolkit';

const userCredentials = JSON.parse(localStorage.getItem('credentials'));

const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: {},
    orders: [],
    profile: {},
    shoppingCart: [],
    shoppingCartSize: 0,
    wishList: [],
  },
  reducers: {
    setAuth(state, action) {
      state.auth = {};
      state.auth = action.payload;
    },
    setAuthReset(state) {
      state.auth = {};
    },
    setOrders(state, action) {
      state.orders = [];
      state.orders = action.payload;
    },
    setProfile(state, action) {
      state.profile = {};
      state.profile = action.payload;
    },
    setShoppingCart(state, action) {
      state.shoppingCart = [];
      state.shoppingCart = action.payload;
    },
    setShoppingCartSize(state, action) {
      state.shoppingCartSize = 0;
      state.shoppingCartSize = action.payload;
    },
    setWishList(state, action) {
      state.wishList = [];
      state.wishList = action.payload;
    },
  },
});

export const {
  setAuth,
  setAuthReset,
  setOrders,
  setProfile,
  setShoppingCart,
  setShoppingCartSize,
  setWishList,
} = userSlice.actions;

export default userSlice.reducer;
