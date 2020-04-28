import { SOCKET } from '@config';
import { PANEL } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import panelSlice from '../panel';
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
    [panelSlice.actions.set]: (state, { payload }) => {
      if (payload !== PANEL.jobs) {
        state.selected = null;
      }
    },
  },
});

export default jobsSlice;
