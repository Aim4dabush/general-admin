import { useState } from 'react';

//3rd party packages
import { Link } from 'react-router-dom';

//components
import SharedButton from '../shared/shared-button/SharedButton';
import SharedLink from '../shared/shared-link/SharedLink';

//icons
import {
  FaBars,
  FaRegWindowClose,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
} from 'react-icons/fa';

//styles
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.navbar_container}>
      <Link to={'/'}>
        <h6 className={styles.brand}>General Store</h6>
      </Link>
      <ul
        className={`${styles.link_list} ${
          openMenu ? styles.open : styles.close
        }`}
      >
        <SharedLink path={'/shopping-cart'}>
          <FaShoppingCart /> Shopping Cart
        </SharedLink>
        <SharedLink path={'/profile'}>
          <FaUserCircle /> Profile
        </SharedLink>
        <SharedLink path={'/login'}>
          <FaSignInAlt /> Login
        </SharedLink>
      </ul>
      <div className={styles.button_wrapper}>
        <SharedButton navButton={true} clickHandler={menuHandler}>
          {openMenu ? <FaRegWindowClose /> : <FaBars />}
        </SharedButton>
      </div>
    </div>
  );
};

export default Navbar;
