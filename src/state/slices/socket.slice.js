/* eslint-disable no-console */

import { URLS } from '@config';
import { SOCKET } from '@constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import io from 'socket.io-client';

let socket = null;

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

const name = `socket`;

const toSocketRoom = value => (value ? `experiment:${value}` : null);

const getSocketRoom = ({ value, lastValue }) => ({
  name: toSocketRoom(value),
  lastRoom: toSocketRoom(lastValue),
});

export const listenToEvents = createAsyncThunk(
  `${name}/listenToEvents`,
  (_, { dispatch, getState }) => {
    const { experiments } = getState();

    Object.values(CONNECTION).forEach(event => {
      socket.on(event, args => {
        const isConnected = event === (connect || experimentRegister);

        if (isConnected) {
          const emitOptions = getSocketRoom(experiments);
          connectOperation({ socket, ...emitOptions });
          dispatch({ type: `socket/connected` });
        } else {
          console.info(`${event}, ${args}`);
        }
      });
    });

    NO_CONNECTIONS.forEach(event =>
      socket.on(event, args => {
        console.info(`${event}, ${args}`);
        dispatch({ type: `socket/disconnected` });
      }),
    );
  },
);

export const init = () => {
  socket = io(url, socketConfig);
};

const register = createAsyncThunk(`socket/register`, (_, { dispatch }) => {
  socket.on(PROGRESS, data => dispatch({ type: `SOCKET_GET_DATA`, data }));
});

const initialState = { isConnected: false };

const connected = createAsyncThunk(`socket/connected`, (_, { dispatch }) => {
  dispatch({ type: `socket/register` });
});

const disconnected = createAsyncThunk(`socket/disconnected`, (_, { dispatch, getState }) => {});

export const socketSlice = createSlice({
  name,
  initialState,
  reducers: { init, disconnected },
  extraReducers: {
    [connected.fulfilled]: (state, { payload }) => {
      state.isConnected = payload;
    },
    [register.fulfilled]: (state, { payload }) => {
      console.log(state, payload);
    },
  },
});

const { reducer } = socketSlice;

export default reducer;
