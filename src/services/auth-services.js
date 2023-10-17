//3rd party packages
import axios from 'axios';
import { DateTime } from 'luxon';

//redux reducers
import {
  setNotification,
  setShowNotification,
} from '../redux/slices/notificationSlice';
import { setAuth, setAuthReset, setProfile } from '../redux/slices/userSlice';

//POST login data for authentication
export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3000/login', data);

      if (res.statusText !== 'Created') {
        return;
      }

      const resUser = res.data.user;
      const resToken = res.data.token;
      const resMessage = res.data.message;
      const expiration = DateTime.now().plus({ hours: 2 }).toMillis();
      const credentials = {
        id: resUser._id,
        token: resToken,
        expiration,
      };
      const user = {
        address: resUser.address,
        birthday: resUser.birthday,
        email: resUser.email,
        fistName: resUser.fistName,
        lastName: resUser.lastName,
      };

      localStorage.setItem('credentials', JSON.stringify(credentials));
      dispatch(setAuth(credentials));
      dispatch(setProfile(user));
      dispatch(setNotification({ message: resMessage, status: 'success' }));
      dispatch(setShowNotification());
    } catch (err) {
      dispatch(setNotification({ message: err.message, status: 'error' }));
      dispatch(setShowNotification());
    }
  };
};

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

//clear local storage and auth state
export const signOutUser = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setAuthReset());
    dispatch(
      setNotification({
        message: 'User Sign Out Successful',
        status: 'success',
      })
    );
    dispatch(setShowNotification());
  };
};
