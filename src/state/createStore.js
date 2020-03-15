import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

const createStore = () => configureStore({ reducer: counterSlice.reducer });

export default createStore;
