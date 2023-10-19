//3rd party packages
import { useDispatch, useSelector } from 'react-redux';

//components
import SharedButton from '../../shared/shared-button/SharedButton';

//services
import { getProducts } from '../../../services/products-service';

//styles
import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.products);

  const paginationHandler = (num) => {
    dispatch(getProducts(num));
  };

  return (
    <div className={styles.pagination_container}>
      {pages.map((pageNum) => {
        return (
          <SharedButton
            key={pageNum}
            clickHandler={() => paginationHandler(pageNum)}
            navButton={true}
          >
            {pageNum}
          </SharedButton>
        );
      })}
    </div>
  );
};

export default Pagination;
