import { useEffect } from 'react';

//3rd party packages
import { useDispatch } from 'react-redux';

//services
import { getProducts } from '../../services/products-service';

//styles
import styles from './ProductsPage.module.scss';

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <section>ProductsPage</section>;
};

export default ProductsPage;
