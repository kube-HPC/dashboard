import { createSlice } from '@reduxjs/toolkit';
import { setValue, toggle } from './panel.reducers';

const initialState = { value: null, expanded: false };

const panel = createSlice({
  name: `panel`,
  initialState,
  reducers: { setValue, toggle },
});

export default panel;
