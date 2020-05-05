import { createSlice } from '@reduxjs/toolkit';
import { toggleJobEye } from './dashboard.reducers';

const initialState = { eyes: { jobs: [] }, tags: { jobs: {} } };

const dashboard = createSlice({
  name: `dashboard`,
  initialState,
  reducers: {
    toggleJobEye,
  },
});

export default dashboard;
