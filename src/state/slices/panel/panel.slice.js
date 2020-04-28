import { createSlice } from '@reduxjs/toolkit';
import { set, toggle } from './panel.reducers';

const initialState = { value: null, expanded: false };

const panel = createSlice({
  name: `panel`,
  initialState,
  reducers: { set, toggle },
});

export default panel;
