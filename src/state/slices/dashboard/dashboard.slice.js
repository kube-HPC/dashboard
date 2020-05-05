import { SOCKET } from '@config';
import { LOCAL_STORAGE } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { activeStates, getLocalStorageItem } from '@utils';
import { toggleJobEye } from './dashboard.reducers';

/*
eyes.jobs = { isControlled, isShowDetails }
*/

const initialState = {
  eyes: { jobs: {} },
  tags: { jobs: getLocalStorageItem(LOCAL_STORAGE.TAGS) || {} },
};

const dashboard = createSlice({
  name: `dashboard`,
  initialState,
  reducers: {
    toggleJobEye,
  },
  extraReducers: {
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
