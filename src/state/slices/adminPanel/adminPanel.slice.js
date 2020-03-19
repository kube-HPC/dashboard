import { createSlice } from '@reduxjs/toolkit';
import { setValue } from './adminPanel.reducers';

const initialState = { value: null };

const adminPanel = createSlice({
  name: `adminPanel`,
  initialState,
  reducers: { setValue },
});

export default adminPanel;
