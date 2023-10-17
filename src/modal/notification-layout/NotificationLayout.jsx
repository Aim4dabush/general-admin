//3rd party packages
import { useSelector } from 'react-redux';

//styles
import styles from './NotificationLayout.module.scss';

const NotificationLayout = () => {
  const { notification, showNotification } = useSelector(
    (state) => state.notification
  );
  const errorStyle = notification.status === 'error' && styles.error;
  const showModal = showNotification ? styles.open : styles.close;
  const successStyle = notification.status === 'success' && styles.success;
  return (
    <div
      className={`${errorStyle} ${styles.notification_container} ${showModal} ${successStyle}`}
    >
      <h3 className={styles.status}>{notification.status}</h3>
      <p>{notification.message}</p>
    </div>
  );
};

export default NotificationLayout;
