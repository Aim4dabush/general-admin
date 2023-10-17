import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notification: {
      message: '',
      status: '',
    },
    showNotification: false,
  },
  reducers: {
    setNotification(state, action) {
      state.notification = {};
      state.notification = action.payload;
    },
    setShowNotification(state) {
      state.showNotification = !state.showNotification;
    },
  },
});

export const { setNotification, setShowNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
