import { SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import { disconnected } from './socket.reducers';
import { connected, register } from './socket.thunks';

const {
  STATE: { name },
} = SOCKET;

const initialState = { isConnected: false };

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
