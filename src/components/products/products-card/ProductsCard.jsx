//3rd party packages
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//styles
import styles from './ProductsCard.module.scss';

const ProductsCard = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className={styles.card_container}>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Link key={product._id} to={`/products/${product._id}`}>
              <div className={styles.product_card}>
                <div className={styles.product_header}>
                  <h5>{product.title}</h5>
                </div>
                <div className={styles.img_wrapper}>
                  <img
                    className={styles.product_img}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>
                <div className={styles.product_body}>
                  <p className={styles.product_description}>
                    {product.description}
                  </p>
                  <p>Brand: {product.brand}</p>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Stock: {product.stock}</p>
                  <p>Rating: {product.rating}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductsCard;
