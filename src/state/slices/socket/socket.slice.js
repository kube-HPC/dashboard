import { SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import { connected, disconnected } from './socket.reducers';

const {
  STATE: { name },
} = SOCKET;

const initialState = { isConnected: false };

const socketSlice = createSlice({
  name,
  initialState,
  reducers: { connected, disconnected },
});

export default socketSlice;
