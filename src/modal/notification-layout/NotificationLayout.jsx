//3rd party packages
import { useSelector } from 'react-redux';

//styles
import styles from './NotificationLayout.module.scss';

const NotificationLayout = () => {
  const { notification } = useSelector((state) => state.notification);
  const errorStyle = notification.status === 'error' && styles.error;
  const successStyle = notification.status === 'success' && styles.success;
  return (
    <div
      className={`${errorStyle} ${styles.notification_container} ${successStyle}`}
    >
      <h3 className={styles.status}></h3>
      <p></p>
    </div>
  );
};

export default NotificationLayout;
