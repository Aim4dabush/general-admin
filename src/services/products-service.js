//3rd party packages
import axios from 'axios';

//redux reducers
import {
  setNotification,
  setShowNotification,
} from '../redux/slices/notificationSlice';
import {
  setPages,
  setProduct,
  setProducts,
} from '../redux/slices/productsSlice';

//GET all products with pagination
export const getProducts = (page) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/products?page=${page}`
      );

      if (res.statusText !== 'OK') {
        return;
      }

      const resProducts = res.data.products;
      const resPages = Array.from(
        { length: res.data.pages },
        (_, index) => index + 1
      );

      dispatch(setPages(resPages));
      dispatch(setProducts(resProducts));
    } catch (err) {
      dispatch(setNotification({ message: err.message, status: 'error' }));
      dispatch(setShowNotification());
    }
  };
};

//GET details for a product
export const getProductDetails = (productId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/products/${productId}`
      );

      if (res.statusText !== 'OK') {
        return;
      }

      const resProduct = res.data.product;
      dispatch(setProduct(resProduct));
    } catch (err) {
      dispatch(setNotification({ message: err.message, status: 'error' }));
    }
  };
};
