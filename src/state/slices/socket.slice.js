import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const name = `socket`;
const socket = null;
const currentTopicRegistered = {};

const socketConnect = createAsyncThunk(`${name}/connect`, (_, thunkAPI) => {});

const init = () => {};

const socketSlice = createSlice({
  name,
  initialState: { isConnected: false, socket: null },
  reducers: {},
  extraReducers: {},
});

const { actions, reducer } = socketSlice;

export default reducer;
