import { createSlice } from '@reduxjs/toolkit';
import { setValue, toggle } from './adminPanel.reducers';

const initialState = { value: null, expanded: false };

const adminPanel = createSlice({
  name: `adminPanel`,
  initialState,
  reducers: { setValue, toggle },
});

export default adminPanel;
