import { useState } from 'react';

//3rd party packages
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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

//services
import { signOutUser } from '../../services/auth-services';

//styles
import styles from './Navbar.module.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    setOpenMenu((prev) => !prev);
  };

  const signOutHandler = () => {
    dispatch(signOutUser());
    navigate('/');
  };

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
        {auth.token && (
          <SharedLink path={'/shopping-cart'}>
            <FaShoppingCart /> Shopping Cart
          </SharedLink>
        )}
        {auth.token && (
          <SharedLink path={'/profile'}>
            <FaUserCircle /> Profile
          </SharedLink>
        )}
        {auth.token ? (
          <li>
            <SharedButton navButton={true} clickHandler={signOutHandler}>
              <FaSignOutAlt /> Logout
            </SharedButton>
          </li>
        ) : (
          <SharedLink path={'/login'}>
            <FaSignInAlt /> Login
          </SharedLink>
        )}
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
