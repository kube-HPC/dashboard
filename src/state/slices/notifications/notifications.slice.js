import { createSlice } from '@reduxjs/toolkit';
import { add, remove } from './notifications.reducers';

const initialState = [];

const notifications = createSlice({
  name: `notifications`,
  initialState,
  reducers: { add, remove },
});

export default notifications;
