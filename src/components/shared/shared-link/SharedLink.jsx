//3rd party packages
import { NavLink } from 'react-router-dom';

//styles
import styles from './SharedLink.module.scss';

const SharedLink = ({ children, path }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : null)}
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SharedLink;
