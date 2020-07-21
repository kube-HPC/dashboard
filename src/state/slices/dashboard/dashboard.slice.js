import { FILTER, JOBS, SOCKET } from '@config';
import { LOCAL_STORAGE, LOG_SOURCE, PANEL } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { activeStates, getLocalStorageItem } from '@utils';
import {
  setJobsFilter,
  setLogSource,
  setPanel,
  toggleJobEye,
  togglePanel,
} from './dashboard.reducers';

/*
eyes.jobs = { isControlled, isShowDetails }
*/

const initialState = {
  eyes: { jobs: {} },
  tags: { jobs: getLocalStorageItem(LOCAL_STORAGE.TAGS) || {} },
  filters: {
    jobs: {
      [FILTER.target.jobId]: ``,
      [FILTER.target.pipelineName]: ``,
      [FILTER.target.types]: [],
    },
  },
  panel: { value: null, expanded: false },
  settings: {
    logSource: getLocalStorageItem(LOCAL_STORAGE.SETTINGS)?.logSource || LOG_SOURCE.k8s,
  },
};

const dashboard = createSlice({
  name: `dashboard`,
  initialState,
  reducers: {
    toggleJobEye,
    setPanel,
    togglePanel,
    setJobsFilter,
    setLogSource,
  },
  extraReducers: {
    [JOBS.STATE.select]: state => {
      state.panel.value = PANEL.jobs;
    },
    [SOCKET.STATE.pull]: (state, { payload: { jobs } }) => {
      state.eyes.jobs = jobs.reduce((acc, { key, status }) => {
        const { isControlled, isShowDetails } = state.eyes.jobs[key] ?? {
          isControlled: false,
          isShowDetails: false,
        };
        return {
          ...acc,
          [key]: {
            isControlled,
            isShowDetails: isControlled ? isShowDetails : activeStates.includes(status?.status),
          },
        };
      }, {});
    },
  },
});

export default dashboard;
