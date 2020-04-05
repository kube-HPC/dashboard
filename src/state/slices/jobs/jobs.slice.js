import { SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import { select } from './jobs.reducers';

const initialState = { dataSource: null, selected: null };

const jobsSlice = createSlice({
  name: `jobs`,
  initialState,
  reducers: {
    select,
  },
  extraReducers: {
    [SOCKET.STATE.pull]: (state, { payload: { jobs } }) => {
      state.dataSource = jobs;
    },
    [rerunRaw.fulfilled]: (_, { payload }) => {
      console.log(`rerun success`, payload.jobId);
    },
  },
});

export default jobsSlice;
