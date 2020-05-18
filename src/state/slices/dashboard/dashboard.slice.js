import { JOBS, SOCKET } from '@config';
import { LOCAL_STORAGE, PANEL } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { activeStates, getLocalStorageItem } from '@utils';
import { setPanel, toggleJobEye, togglePanel } from './dashboard.reducers';

/*
eyes.jobs = { isControlled, isShowDetails }
*/

const initialState = {
  eyes: { jobs: {} },
  tags: { jobs: getLocalStorageItem(LOCAL_STORAGE.TAGS) || {} },
  filters: {
    jobs: {
      jobId: ``,
      pipelineName: ``,
    },
  },
  panel: { value: null, expanded: false },
};

const dashboard = createSlice({
  name: `dashboard`,
  initialState,
  reducers: {
    toggleJobEye,
    setPanel,
    togglePanel,
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
