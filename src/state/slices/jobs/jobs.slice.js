import { JOBS, SOCKET } from '@config';
import { LOCAL_STORAGE, PANEL } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageItem } from '@utils';
import { dashboardSlice } from '..';
import { changeTaskId, select } from './jobs.reducers';

const initialState = {
  dataSource: null,
  selected: null,
  taskId: null,
  experiments: {
    dataSource: [],
    value: getLocalStorageItem(LOCAL_STORAGE.EXPERIMENT) || SOCKET.ROOM.default,
    lastValue: null,
    loading: true,
  },
};

const jobsSlice = createSlice({
  name: JOBS.STATE.name,
  initialState,
  reducers: {
    select,
    changeTaskId,
  },
  extraReducers: {
    [SOCKET.STATE.pull]: (state, { payload: { jobs, experiments } }) => {
      state.dataSource = jobs;
      state.experiments.dataSource = experiments;
    },
    [dashboardSlice.actions.setPanel]: (state, { payload }) => {
      if (payload !== PANEL.jobs) {
        state.selected = null;
      }
    },
  },
});

export default jobsSlice;
