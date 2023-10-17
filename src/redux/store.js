//3rd party packages
import { combineReducers, configureStore } from '@reduxjs/toolkit';

//reducers
import NotificationReducer from './slices/notificationSlice';
import UserReducer from './slices/userSlice';

//holds all the reducers
const rootReducer = combineReducers({
  notification: NotificationReducer,
  user: UserReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
