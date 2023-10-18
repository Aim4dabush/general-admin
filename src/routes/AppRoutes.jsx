//3rd party packages
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

//components
import App from '../App';

//pages
import CheckoutPage from '../pages/checkout-page/CheckoutPage';
import LoginPage from '../pages/login-page/LoginPage';
import OrderDetailsPage from '../pages/order-details-page/OrderDetailsPage';
import OrdersPage from '../pages/orders-page/OrdersPage';
import PageNotFound from '../pages/page-not-found/PageNotFound';
import ProductDetailsPage from '../pages/product-details-page/ProductDetailsPage';
import ProductsPage from '../pages/products-page/ProductsPage';
import ProfilePage from '../pages/profile-page/ProfilePage';
import RegisterPage from '../pages/register-page/RegisterPage';
import ShoppingCartPage from '../pages/shopping-cart-page/ShoppingCartPage';
import WishListPage from '../pages/wish-list-page/WishListPage';

const AppRoutes = () => {
  const { auth } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<Navigate to={'/products'} />} />
        <Route element={<PageNotFound />} path="*" />

        <Route path="products">
          <Route index element={<ProductsPage />} />
          <Route element={<ProductDetailsPage />} path=":productId" />
        </Route>

        {auth.token && (
          <Route path="profile">
            <Route index element={<ProfilePage />} />
            <Route path="orders">
              <Route index element={<OrdersPage />} />
              <Route element={<OrderDetailsPage />} path=":orderId" />
            </Route>
            <Route element={<WishListPage />} path="wish-list" />
          </Route>
        )}

        {auth.token && <Route element={<CheckoutPage />} path="checkout" />}
        <Route element={<LoginPage />} path="login" />
        <Route element={<RegisterPage />} path="register" />
        {auth.token && (
          <Route element={<ShoppingCartPage />} path="shopping-cart" />
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
