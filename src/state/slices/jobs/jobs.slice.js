import { SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: {
    [SOCKET.STATE.pull]: (_, { payload: { jobs } }) => jobs,
  },
});

export default jobsSlice;
