import { SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { dataSource: null };

const jobsSlice = createSlice({
  name: `jobs`,
  initialState,
  extraReducers: {
    [SOCKET.STATE.pull]: (state, { payload: { jobs } }) => {
      state.dataSource = jobs;
    },
  },
});

export default jobsSlice;
