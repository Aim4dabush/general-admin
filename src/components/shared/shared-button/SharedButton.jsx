//styles
import styles from './SharedButton.module.scss';

const SharedButton = ({
  children,
  clickHandler,
  danger,
  fullWidth,
  navButton,
  success,
  warning,
}) => {
  const dangerButtonStyle = danger && styles.danger_button;
  const fullWidthStyle = fullWidth && styles.full_width;
  const navButtonStyle = navButton && styles.nav_button;
  const successButtonStyle = success && styles.success_button;
  const warningButtonStyle = warning && styles.warning_button;

  return (
    <button
      className={`${dangerButtonStyle} ${fullWidthStyle} ${navButtonStyle} ${successButtonStyle} ${warningButtonStyle}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default SharedButton;
