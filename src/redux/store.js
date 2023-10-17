import { combineReducers, configureStore } from '@reduxjs/toolkit';

//reducers
import NotificationReducer from './slices/notificationSlice';

const rootReducer = combineReducers({
  notification: NotificationReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
