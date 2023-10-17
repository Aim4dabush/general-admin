import { useEffect } from 'react';
import ReactDOM from 'react-dom';

//3rd party packages
import { useDispatch, useSelector } from 'react-redux';

//component
import NotificationLayout from './notification-layout/NotificationLayout';

//reducers
import { setShowNotification } from '../redux/slices/notificationSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const { showNotification } = useSelector((state) => state.notification);

  useEffect(() => {
    let closeNotification;
    if (showNotification) {
      closeNotification = setTimeout(() => {
        dispatch(setShowNotification());
      }, 3000);
    }

    return () => clearTimeout(closeNotification);
  }, [showNotification]);

  return (
    <>
      {ReactDOM.createPortal(
        <NotificationLayout />,
        document.getElementById('notification')
      )}
    </>
  );
};

export default Modal;
