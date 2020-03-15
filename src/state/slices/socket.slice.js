/* eslint-disable no-console */

import { URLS } from '@config';
import { SOCKET } from '@constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import io from 'socket.io-client';

const {
  monitor: { url, socketPath },
} = URLS;

const socketConfig = {
  path: socketPath,
  transports: ['websocket'],
};

const {
  EVENTS: { CONNECTION, NO_CONNECTIONS },
  TOPIC: { PROGRESS },
} = SOCKET;

const { connect, experimentRegister } = CONNECTION;

const connectOperation = ({ socket, name, lastRoom }) => {
  socket.emit(experimentRegister, { name, lastRoom });
  console.info(`SOCKET Connected, id=${socket.id}`);
};

const toSocketRoom = value => (value ? `experiment:${value}` : null);

const getSocketRoom = ({ value, lastValue }) => ({
  name: toSocketRoom(value),
  lastRoom: toSocketRoom(lastValue),
});

const listenToSocketEvents = createAsyncThunk(`${name}/connect`, (_, { dispatch, getState }) => {
  const {
    socket: { client },
    experiments,
  } = getState();

  const emitOptions = getSocketRoom(experiments);

  Object.values(CONNECTION).forEach(event => {
    client.on(event, args => {
      event === (connect || experimentRegister)
        ? connectOperation({ client, ...emitOptions })
        : console.info(`${event}, ${args}`);
    });
  });

  NO_CONNECTIONS.forEach(e =>
    client.on(e, args => {
      console.info(`${e}, ${args}`);
    }),
  );
});

const init = state => {
  state.client = io(url, socketConfig);
};

const register = createAsyncThunk(`${name}/register`, (_, { dispatch, getState }) => {
  const {
    socket: { client },
  } = getState();

  client.on(PROGRESS, data => dispatch({ type: `SOCKET_GET_DATA`, data }));
});

const initialState = { isConnected: false, client: null, topics: {} };

const socketSlice = createSlice({
  name: `socket`,
  initialState,
  reducers: { init },
  extraReducers: {
    [listenToSocketEvents.fulfilled]: (state, action) => {
      state.isConnected = action.payload;
    },
    register,
  },
});

const { actions, reducer } = socketSlice;

export default reducer;
