// @flow

import { JOBS, SOCKET } from '@config';
import { LOCAL_STORAGE, PANEL } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageItem } from '@utils';
import { dashboardSlice } from '..';
import { changeExperiment, changeTaskId, select, toggleTagsView } from './jobs.reducers';

export type JobStateProp = {
  types: { visible: boolean },
  selected: string | null,
  taskId: string | null,
  dataSource: any,
  experiments: {
    dataSource: Array<mixed>,
    value: string,
    lastValue: string | null,
    loading: boolean,
  },
};

const initialState: JobStateProp = {
  dataSource: null,
  selected: null,
  taskId: null,
  experiments: {
    dataSource: [],
    value: getLocalStorageItem(LOCAL_STORAGE.EXPERIMENT) || SOCKET.ROOM.default,
    lastValue: null,
    // TODO: Use loading in UI
    loading: false,
  },
  types: { visible: false },
};

const jobsSlice = createSlice({
  name: JOBS.STATE.name,
  initialState,
  reducers: {
    select,
    changeTaskId,
    changeExperiment,
    toggleTagsView,
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
