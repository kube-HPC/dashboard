import { LOCAL_STORAGE } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageItem } from '@utils';
import { toggleJobEye } from './dashboard.reducers';

const initialState = {
  eyes: { jobs: getLocalStorageItem(LOCAL_STORAGE.EYES) || [] },
  tags: { jobs: getLocalStorageItem(LOCAL_STORAGE.TAGS) || {} },
};

const dashboard = createSlice({
  name: `dashboard`,
  initialState,
  reducers: {
    toggleJobEye,
  },
});

export default dashboard;
