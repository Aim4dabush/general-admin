import { useEffect } from 'react';

//3rd party packages
import { useDispatch } from 'react-redux';

//components
import ProductsCard from '../../components/products/products-card/ProductsCard';

//services
import { getProducts } from '../../services/products-service';

//styles
import styles from './ProductsPage.module.scss';

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className={styles.page_container}>
      <ProductsCard />
    </section>
  );
};

export default ProductsPage;
