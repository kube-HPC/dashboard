import { SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import { connected, disconnected, register } from './reducers';

const initialState = { isConnected: false };

const {
  STATE: { name },
} = SOCKET;

const socketSlice = createSlice({
  name,
  initialState,
  reducers: { register, disconnected },
  extraReducers: {
    [connected.fulfilled]: state => {
      state.isConnected = true;
    },
  },
});

export default socketSlice;
