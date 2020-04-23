import { createSlice } from '@reduxjs/toolkit';
import { COLORS } from '@styles';
import { setProperty } from './theme.reducers';

const initialState = COLORS;

const themeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    setProperty,
  },
});

export default themeSlice;
