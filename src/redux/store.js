//3rd party packages
import { combineReducers, configureStore } from '@reduxjs/toolkit';

//reducers
import NotificationReducer from './slices/notificationSlice';

//holds all the reducers
const rootReducer = combineReducers({
  notification: NotificationReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
