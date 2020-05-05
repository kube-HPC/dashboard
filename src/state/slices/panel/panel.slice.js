import { JOBS } from '@config';
import { PANEL } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { set, toggle } from './panel.reducers';

const initialState = { value: null, expanded: false };

const panel = createSlice({
  name: `panel`,
  initialState,
  reducers: { set, toggle },
  extraReducers: {
    [JOBS.STATE.select]: state => {
      state.value = PANEL.jobs;
    },
  },
});

export default panel;
