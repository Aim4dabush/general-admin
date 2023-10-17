//styles
import styles from './SharedButton.module.scss';

const SharedButton = ({ children, clickHandler, fullWidth, navButton }) => {
  const fullWidthStyle = fullWidth && styles.full_width;
  const navButtonStyle = navButton && styles.nav_button;

  return (
    <button
      className={`${fullWidthStyle} ${navButtonStyle}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default SharedButton;
