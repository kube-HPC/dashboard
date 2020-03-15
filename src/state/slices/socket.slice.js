import { connectionConfig } from '@config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const socketConnect = createAsyncThunk(`${name}/connect`, (_, { dispatch }) => {});
const { monitorBackend: {schema,host,port} } = connectionConfig;

const url =

const init = ({ client }) => {
  if (client) {
    client.close();
  }
  client = io()
};

const socketSlice = createSlice({
  name: `socket`,
  initialState: { isConnected: false, socket: null },
  reducers: { init },
  extraReducers: {},
});

const { actions, reducer } = socketSlice;

export default reducer;
