import { createSlice } from '@reduxjs/toolkit';
import { setValue, toggle } from './sidebar.reducers';

const initialState = { visible: true, value: null };

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle,
    setValue,
  },
});

export default sidebarSlice;
