//3rd party packages
import axios from 'axios';
import { DateTime } from 'luxon';

//redux reducers
import {
  setNotification,
  setShowNotification,
} from '../redux/slices/notificationSlice';
import { setAuth, setAuthReset, setProfile } from '../redux/slices/userSlice';

//POST register data to MongoDB
export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3000/register', data);

      //return if response fails
      if (res.statusText !== 'OK') {
        return;
      }

      const resMessage = res.data.message;

      dispatch(setNotification({ message: resMessage, status: 'success' }));
      dispatch(setShowNotification());
    } catch (err) {
      dispatch(setNotification({ message: err.message, status: 'error' }));
      dispatch(setShowNotification());
    }
  };
};
